const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
let compression = require('compression');
const helmet = require('helmet');
let EventEmitter = require('events');

global.config = require('../config/config').getConfiguration();
global.logger = require('../lib/v1/utils/logger').getLogger('CMSAPIModule', config.server.LOGLEVEL);
global.errorCodes = require('../utils/error_codes.json');
global.events = new EventEmitter();


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());
app.use(compression({ filter: shouldCompress }));

// app.use((req,res,next) => {
//   res.header('Access-Control-Allow-origin','*'),
//   res.header('Access-Control-Allow-Methods','GET,POST,DELETE,PETCH,UPDATE,PUT'),
//   res.header('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept,Authorization'),
//   next();
// })


let routes = require('./routes');
routes(app);

let hostname = process.argv.length > 0 && process.argv[2] === 'localhost' ? config.server.LOCAL : config.server.INTERNAL_IP;

let server = app.listen(process.env.PORT || config.server.PORT, hostname, () => {
  let message = `CMSAPI Server is successfully running at : http://${server.address().address}:${server.address().port}`;
  console.log(message);
  events.emit('log', 'ERROR', message);
}
);
