// Google Sheets Configuration for Seraph Armory
// Your credentials are configured below

const GOOGLE_SHEETS_CONFIG = {
  // Your NEW Google Sheet ID (The Seraph Armory v2)
  SHEET_ID: '1nOJrh5M9wsw4cIz3MRBSfOKrfFIdOGcVwPwMKpo9u-s',

  // Your Google Apps Script Web App URL (NEW CLEAN DEPLOYMENT)
  APPS_SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbz8jN8tITpiH1d3Ow-pIgqHo_mpw9Yrtg3VupVYmbowDfloInM6WPHIj5r-plzprh95qw/exec',

  // Your Google Sheets API Key
  API_KEY: 'AIzaSyAHPBwiyIDWOa5nrewQJDOOq_9wlHe3Bsc',

  // The range where orders will be written (sheet name and columns)
  RANGE: 'Orders!A:M',

  // Column headers for reference (these should be in row 1 of your sheet)
  HEADERS: [
    'Order ID',          // A - Unique order identifier (SA-timestamp)
    'Timestamp',         // B - Unix timestamp
    'Date',              // C - Human readable date
    'Discord Username',  // D - Customer's Discord username
    'Fulfillment Method', // E - Collection or Delivery
    'Delivery Location', // F - Address or "Seraphim Station"
    'Subtotal (aUEC)',   // G - Order subtotal
    'Delivery Tax (aUEC)', // H - 10% delivery tax if applicable
    'Total (aUEC)',      // I - Final total
    'Items',             // J - List of ordered items
    'Item Count',        // K - Number of different items
    'Status',            // L - Received/Processing/Shipping/Ready for Collection/Completed/Cancelled
    'Payment Received'   // M - true/false (checkbox)
  ]
};

// Validation function to check if configuration is set up
function validateGoogleSheetsConfig() {
  if (GOOGLE_SHEETS_CONFIG.SHEET_ID === 'YOUR_GOOGLE_SHEET_ID') {
    throw new Error('Google Sheet ID not configured. Please set SHEET_ID in google-sheets-config.js');
  }

  if (GOOGLE_SHEETS_CONFIG.API_KEY === 'YOUR_GOOGLE_SHEETS_API_KEY') {
    throw new Error('Google Sheets API Key not configured. Please set API_KEY in google-sheets-config.js');
  }

  return true;
}

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { GOOGLE_SHEETS_CONFIG, validateGoogleSheetsConfig };
}
