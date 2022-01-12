exports.getConfiguration = (envName) => {

    if (envName === null || envName === undefined || envName === '') {
        envName = process.env.NODE_ENV;
    }

    if (envName === null || envName === undefined || envName === '') {
        throw Error('Environment parameter is mandatory or set the NODE_ENV environment variable');
    }

    if (envName.toLowerCase() === 'development' || envName.toLowerCase() === 'testing' || envName.toLowerCase() === 'production') {
        let confFile = './' + envName + '/';
        return {
            "aws": require(confFile + 'aws.json'),
            "database": require(confFile + 'database.json'),
            "server": require(confFile + 'server.json'),
            "rabbitmq": require(confFile + 'rabbitmq.json'),
            "application": require(confFile + 'application.json')
        }
    }
    else {
        throw Error('Environment parameter can accept only one of the constants - development or testing or preprod or production. It is case-insensitive');
    }
}