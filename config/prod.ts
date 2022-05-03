//  prod.js - production keys here!!!
// I can commit this

module.exports = {
  //Firebase configuration data
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
  mailchimpApiKey: process.env.MAILCHIMP_API_KEY,
  us: process.env.US,
  listID: process.env.LIST_ID,
  stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY,
};
