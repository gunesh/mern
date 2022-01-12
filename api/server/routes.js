'use strict';

let JWT = require('../lib/v1/utils/jwt');
let userAPI = require('../api/v1/cms_users');
let auctionCategoryAPI = require('../api/v1/auctioncategories');
let productsAPI = require('../api/v1/products');
let onBoardingAPI = require('../api/v1/onboarding');
let channelsAPI = require('../api/v1/channels');
let showsAPI = require('../api/v1/shows');
let auctionsAPI = require('../api/v1/auctions');
let auctionTypesAPI = require('../api/v1/auctionstypes');
let episodesAPI = require('../api/v1/episode');
let packages = require('../api/v1/packages');
let languages = require('../api/v1/languages');
let locations = require('../api/v1/locations');
let customersAPI = require('../api/v1/users');
let orderAPI = require('../api/v1/orders');
let userWalletAPI = require('../api/v1/user_wallet');
let contentsAPI = require('../api/v1/content');
let bannersAPI = require('../api/v1/banners');
let languageTranslationsAPI = require('../api/v1/languageTranslations');
let failedOrders = require('../api/v1/reports/failedOrders')
let successOrders = require('../api/v1/reports/successOrders')
let successProductOrders = require('../api/v1/reports/successProductOrders')
let auctionReports = require('../api/v1/reports/auctions')
let auctionsSummary = require('../api/v1/reports/auctionsSummary')
let auctionDetails = require('../api/v1/reports/auctionDetails')
let invoices = require('../api/v1/reports/invoices/invoice')
let callcenterAPI = require('../api/v1/callcenterLog');
let appSettings = require('../api/v1/appSettings');
let healthcheck = require('../api/v1/health');
let notificationAPI = require('../api/v1/notification');   // New code by smhkm2

module.exports = function (app) {

      // ------------- healthcheck
  app.get('/api/v1/cms/ping', healthcheck.ping);
  app.get('/api/v1/cms/status', healthcheck.status);
  

  // Reports 

  app.post('/api/v1/reports/cms/failedOrders', failedOrders.report)
  app.post('/api/v1/reports/cms/successOrders', successOrders.report)
  app.post('/api/v1/reports/cms/invoice', invoices.generateInvoice)
  app.post('/api/v1/reports/cms/auctionAmount', auctionReports.auctionAmountReport)
  app.get('/api/v1/reports/cms/auctionsSummary', auctionsSummary.report)
  app.get('/api/v1/reports/cms/auctionDetails', auctionDetails.report)
  app.post('/api/v1/reports/cms/episodeLevel', auctionReports.episodeLevel)
  app.post('/api/v1/reports/cms/liveAuction', auctionReports.liveAuction)
  app.post('/api/v1/reports/cms/successProductOrders', successProductOrders.report)



  // CRUD operations for CMS Users
  app.post('/api/v1/user/cms/new', JWT.checkForAuthorizationToken, userAPI.register);
  app.post('/api/v1/user/cms/login', userAPI.login);
  app.delete('/api/v1/user/cms', JWT.checkForAuthorizationToken, userAPI.disableUser);
  app.get('/api/v1/user/cms', JWT.checkForAuthorizationToken, userAPI.getAllUsers);
  app.put('/api/v1/user/cms', JWT.checkForAuthorizationToken, userAPI.updateUser);
  app.get('/api/v1/userroles/cms', JWT.checkForAuthorizationToken, userAPI.getUserRoles);

  //CRUD operations for Products
  app.post('/api/v1/product/cms', JWT.checkForAuthorizationToken, productsAPI.getProduct);
  app.post('/api/v1/addproduct/cms', JWT.checkForAuthorizationToken, productsAPI.addProduct);
  app.put('/api/v1/product/cms', JWT.checkForAuthorizationToken, productsAPI.updateProduct);
  app.delete('/api/v1/product/cms', JWT.checkForAuthorizationToken, productsAPI.disableEnableProduct);
  app.get('/api/v1/productsearch/cms/:query', productsAPI.search);
  app.post('/api/v1/product/cms/import', productsAPI.importProducts);

  // CRUD operations for Auction Categories
  app.post('/api/v1/auction/category/cms', auctionCategoryAPI.addNewCategory);
  app.put('/api/v1/auction/category/cms', JWT.checkForAuthorizationToken, auctionCategoryAPI.updateCategory);
  app.delete('/api/v1/auction/category/cms', auctionCategoryAPI.disableEnableCategory);
  app.get('/api/v1/auction/category/cms', auctionCategoryAPI.getAllCategories);

  //CRUD operations for Onboarding Screens
  app.post('/api/v1/getOnboarding/cms', onBoardingAPI.getOnboardingScreens);
  app.post('/api/v1/onboarding/cms', onBoardingAPI.addOnboardingScreens);
  app.put('/api/v1/onboarding/cms', JWT.checkForAuthorizationToken, onBoardingAPI.updateOnboardingScreens);
  app.delete('/api/v1/onboarding/cms', JWT.checkForAuthorizationToken, onBoardingAPI.disableEnable); 

  //CRUD operations for Channels
  app.get('/api/v1/channel/cms', channelsAPI.getChannels);
  app.post('/api/v1/channel/cms', JWT.checkForAuthorizationToken, channelsAPI.addChannels);
  app.put('/api/v1/channel/cms', JWT.checkForAuthorizationToken, channelsAPI.updateChannels);
  app.delete('/api/v1/channel/cms', JWT.checkForAuthorizationToken, channelsAPI.enableDisable);

  //CRUD operations for Shows
  app.get('/api/v1/show/cms', showsAPI.getShows);
  app.post('/api/v1/show/cms', JWT.checkForAuthorizationToken, showsAPI.addShows);
  app.put('/api/v1/show/cms', JWT.checkForAuthorizationToken, showsAPI.updateShow);
  app.delete('/api/v1/show/cms', JWT.checkForAuthorizationToken, showsAPI.deleteShow);
  app.put('/api/v1/show/cms/startshow', showsAPI.startShow);

  // Various operations for Auctions
  app.post('/api/v1/auction/cms', auctionsAPI.getAuctions);
  app.post('/api/v1/postauction/cms', auctionsAPI.createAuctions);
  app.put('/api/v1/auction/cms', JWT.checkForAuthorizationToken, auctionsAPI.updateAuctions);
  app.delete('/api/v1/auction/cms', JWT.checkForAuthorizationToken, auctionsAPI.enableDisableAuction);
  app.post('/api/v1/startauction/cms', auctionsAPI.startAuction);
  app.post('/api/v1/productreveal/cms', auctionsAPI.revealProduct);
  app.post('/api/v1/winreveal/cms', auctionsAPI.revealWinner);

  // CRUD Operations for Auction Types
  app.get('/api/v1/auctiontype/cms', auctionTypesAPI.getAuctionTypes);

  // CRUD Operations for Episodes
  app.get('/api/v1/episode/cms', episodesAPI.getEpisodes);
  app.post('/api/v1/episode/cms', episodesAPI.addEpisodes);
  app.put('/api/v1/episode/cms', episodesAPI.updateEpisodes);
  app.post('/api/v1/filterepisode/cms', episodesAPI.filterEpisodes);
  app.delete('/api/v1/episode/cms', episodesAPI.disableEnable);

  // Various Operations for Packages
  app.get('/api/v1/packages/cms', packages.getPackages);
  app.post('/api/v1/packages/cms', packages.addPackages);
  app.put('/api/v1/packages/cms', packages.updatePackage);


  app.post('/api/v1/imageupload/cms', productsAPI.imageUpload);


  // Crud Operations for Languages
  app.get('/api/v1/languages/cms', languages.getLanguages);
  app.post('/api/v1/languages/cms', languages.addLanguages);
  app.put('/api/v1/languages/cms', languages.updateLanguages);

  // Crud Operations for locations
  app.get('/api/v1/locations/cms', locations.getlocations);
  app.post('/api/v1/locations/cms', locations.addlocations);
  app.put('/api/v1/locations/cms', locations.updatelocations);
  

  app.get('/api/v1/settings/cms', appSettings.getSettings);
  app.put('/api/v1/settings/cms', appSettings.updateSettings);


  //various Operations for Customers
   app.get('/api/v1/customers/cms/:id?', customersAPI.getCustomer);
  // app.put('/api/v1/customers/cms', customersAPI.updateCustomers);
   app.get('/api/api/v1/customersearch/cms/1/5/:query?', customersAPI.search);
   app.put('/api/v1/updatewallet/cms', customersAPI.updateWallet);
  // app.put('/api/v1/statusupdate/cms', customersAPI.enableDisableShow);
  // // app.get('/api/v1/customerspurchases/cms?id=', customersAPI.getCustomerPurchages); 
  // app.get('/api/v1/customerspurchases/cms/:id?', customersAPI.getCustomerPurchages); 

  // Various Operations For Content
  app.post('/api/v1/content/cms', contentsAPI.createContent);
  app.get('/api/v1/content/cms', contentsAPI.getContent);
  app.put('/api/v1/content/cms', contentsAPI.updateContent);


  // Various Operations for Banners
  app.get('/api/v1/banner/cms', bannersAPI.getBanners);
  app.post('/api/v1/banner/cms', bannersAPI.createBanners);
  app.put('/api/v1/banner/cms', bannersAPI.updateBanners);
  app.delete('/api/v1/banner/cms', bannersAPI.disableEnable);

  // Various Operations on Language Translations
  app.get('/api/v1/languagetranslations/cms', languageTranslationsAPI.getLanguageTranslations);
  app.put('/api/v1/languagetranslations/cms', languageTranslationsAPI.updateLanguageTranslations);
  app.post('/api/v1/languagetranslations/cms', languageTranslationsAPI.addLanguageTranslations);
  app.delete('/api/v1/languagetranslations/cms', languageTranslationsAPI.deleteLangTrans);

  // Various Operations for Callcenter
  app.get('/api/v1/callcenter/cms', JWT.checkForAuthorizationToken, callcenterAPI.getLog);
  app.post('/api/v1/callcenter/cms', JWT.checkForAuthorizationToken, callcenterAPI.createLog);

  //Notification Sending and configuration  // New code by smhkm2
  app.post('/api/v1/notification/send', notificationAPI.sendNotification);  // New code by smhkm2
  app.get('/api/v1/notification/scheduler', notificationAPI.schedulerNotification);  // New code by smhkm2
  app.post('/api/v1/notification/config', notificationAPI.config);  // New code by smhkm2
  app.post('/api/v1/notification/setting', notificationAPI.setting);  // New code by smhkm2


  //Notification Sending and configuration  // New code by smhkm2
  app.get('/api/v1/coin-list/:id?', userWalletAPI.getUserWallet);  // New code by smhkm2
  app.get('/api/v1/settings/notification_template', appSettings.getNotificationTemplate);
  app.put('/api/v1/settings/notification_template', appSettings.updateNotificationTemplate);
  app.get('/api/v1/customers/user_coin_summary', customersAPI.getCustomer);
  app.get('/api/v1/customerspurchases/cms/:id?', customersAPI.getCustomerPurchages); // New code by smhkm230102020
  app.put('/api/v1/statusupdate/cms', customersAPI.enableDisableShow);// New code by smhkm230102020
  app.get('/api/v1/order_history/cms/:id?', customersAPI.getCustomerOrderHistory);// New code by smhkm230102020
};