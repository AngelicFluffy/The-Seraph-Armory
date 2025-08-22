// Google Apps Script code for Seraph Armory
// This receives order data and writes it to your Google Sheet

const SHEET_ID = '1NBUYJrTZsVXkPW1OtMqTmFw4wT1uH9DkFZNawsYoeys';
const SHEET_NAME = 'Sheet1';

function doGet(e) {
  // Handle CORS preflight and GET requests
  return ContentService
    .createTextOutput(JSON.stringify({message: 'Seraph Armory Order Handler is running'}))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    // Get data from form parameters
    const data = e.parameter;

    // Open the spreadsheet
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);

    // Prepare the row data
    const rowData = [
      data.timestamp,
      data.date,
      data.discordUsername,
      data.fulfillmentMethod,
      data.deliveryLocation,
      data.subtotal,
      data.deliveryTax,
      data.total,
      data.items,
      data.itemCount,
      data.status,
      data.paymentReceived,
      data.itemTransferred
    ];
    
    // Add the row to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Order added successfully',
        timestamp: new Date().toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function (optional)
function testFunction() {
  const testData = {
    timestamp: Date.now(),
    date: new Date().toLocaleString(),
    discordUsername: 'TestUser123',
    fulfillmentMethod: 'Collection',
    deliveryLocation: 'Seraphim Station',
    subtotal: 5000,
    deliveryTax: 0,
    total: 5000,
    items: '1x P4-AR Rifle (Default) - 5,000 aUEC',
    itemCount: 1,
    status: 'Pending',
    paymentReceived: 'No',
    itemTransferred: 'No'
  };
  
  const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
  const rowData = [
    testData.timestamp,
    testData.date,
    testData.discordUsername,
    testData.fulfillmentMethod,
    testData.deliveryLocation,
    testData.subtotal,
    testData.deliveryTax,
    testData.total,
    testData.items,
    testData.itemCount,
    testData.status,
    testData.paymentReceived,
    testData.itemTransferred
  ];
  
  sheet.appendRow(rowData);
  console.log('Test data added successfully');
}
