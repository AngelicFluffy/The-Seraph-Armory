const GOOGLE_SHEETS_CONFIG = {
  SHEET_ID: '1NBUYJrTZsVXkPW1OtMqTmFw4wT1uH9DkFZNawsYoeys',

  API_KEY: 'AIzaSyAHPBwiyIDWOa5nrewQJDOOq_9wlHe3Bsc',

  RANGE: 'Sheet1!A:M',

  HEADERS: [
    'Timestamp',           // A - Unix timestamp
    'Date',               // B - Human readable date
    'Discord Username',   // C - Customer's Discord username
    'Fulfillment Method', // D - Collection or Delivery
    'Delivery Location',  // E - Address or "Seraphim Station"
    'Subtotal (aUEC)',   // F - Order subtotal
    'Delivery Tax (aUEC)', // G - 10% delivery tax if applicable
    'Total (aUEC)',      // H - Final total
    'Items',             // I - List of ordered items
    'Item Count',        // J - Number of different items
    'Status',            // K - Pending/In Progress/Completed
    'Payment Received',  // L - Yes/No
    'Item Transferred'   // M - Yes/No
  ]
};

function validateGoogleSheetsConfig() {
  if (GOOGLE_SHEETS_CONFIG.SHEET_ID === 'YOUR_GOOGLE_SHEET_ID') {
    throw new Error('Google Sheet ID not configured. Please set SHEET_ID in google-sheets-config.js');
  }

  if (GOOGLE_SHEETS_CONFIG.API_KEY === 'YOUR_GOOGLE_SHEETS_API_KEY') {
    throw new Error('Google Sheets API Key not configured. Please set API_KEY in google-sheets-config.js');
  }

  return true;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { GOOGLE_SHEETS_CONFIG, validateGoogleSheetsConfig };

}
