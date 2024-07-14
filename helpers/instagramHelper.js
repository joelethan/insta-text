const puppeteer = require('puppeteer');

async function loginAndSendMessage(username, password, recipientUsername, message) {
  const browser = await puppeteer.launch({ headless: true }); // Set to true in production
  const page = await browser.newPage();

  try {
    await page.goto('https://www.instagram.com/accounts/login/');

    // Login
    await page.waitForSelector('input[name="username"]');
    await page.type('input[name="username"]', username);
    await page.type('input[name="password"]', password);
    await page.click('button[type="submit"]');

    // Wait for login to complete and home page to load
    await page.waitForNavigation();

    // Navigate to the direct messages page
    await page.goto('https://www.instagram.com/direct/inbox/');

    // Click on the 'New Message' button
    await page.waitForSelector('button[class*="wpO6b "]');
    await page.click('button[class*="wpO6b "]');

    // Select user(s) to send message
    await page.waitForSelector('input[name="queryBox"]');
    await page.type('input[name="queryBox"]', recipientUsername);
    await page.waitForSelector('div[class*="dCJp8"]');
    await page.click('div[class*="dCJp8"]');

    // Click Next
    await page.waitForSelector('button[class*="rIacr"]');
    await page.click('button[class*="rIacr"]');

    // Type and send the message
    await page.waitForSelector('textarea');
    await page.type('textarea', message);
    await page.click('button[class*="sqdOP"]');
  } catch (error) {
    console.error('Error sending message:', error);
  } finally {
    await browser.close();
  }
}

async function loginAndSendMessage2(username, password, recipientUsername, message) {
  const browser = await puppeteer.launch({ headless: true }); // Set headless to true for no UI
  const page = await browser.newPage();

  try {
    await page.goto('https://www.instagram.com/accounts/login/');

    // Login
    await page.waitForSelector('input[name="username"]');
    await page.type('input[name="username"]', username);
    await page.type('input[name="password"]', password);
    await page.click('button[type="submit"]');

    // Wait for login to complete and home page to load
    await page.waitForNavigation();

    // Navigate to the direct messages page
    await page.goto('https://www.instagram.com/direct/inbox/');

    // Click on the 'New Message' button
    await page.waitForSelector('button[class*="wpO6b "]');
    await page.click('button[class*="wpO6b "]');

    // Select user(s) to send message
    await page.waitForSelector('input[name="queryBox"]');
    await page.type('input[name="queryBox"]', recipientUsername);
    await page.waitForSelector('div[class*="dCJp8"]');
    await page.click('div[class*="dCJp8"]');

    // Click Next
    await page.waitForSelector('button[class*="rIacr"]');
    await page.click('button[class*="rIacr"]');

    // Type and send the message
    await page.waitForSelector('textarea');
    await page.type('textarea', message);
    await page.click('button[class*="sqdOP"]');
  } catch (error) {
    console.error('Error sending message:', error);

  } finally {
    await browser.close();
  }
}

async function loginAndSendMessage3(username, password, recipientUsername, message) {
  console.log("Break 4")
  const browser = await puppeteer.launch({ headless: true }); // Set headless to true for no UI
  const page = await browser.newPage();

  try {
    console.log("Break 5")
    await page.goto('https://www.instagram.com/accounts/login/', { waitUntil: 'networkidle2', timeout: 60000 });

    // Wait for the username input to be available and ensure it is visible and focused
    const usernameSelector = 'input[name="username"]';
    const passwordSelector = 'input[name="password"]';
    await page.waitForSelector(usernameSelector, { timeout: 60000 });
    await page.focus(usernameSelector);
    await page.waitForTimeout(1000); // Small delay to ensure focus
    console.log("Break 6")

    // Directly set the value of the input element
    await page.evaluate((selector, value) => {
      document.querySelector(selector).value = value;
    }, usernameSelector, username);

    await page.waitForSelector(passwordSelector, { timeout: 60000 });
    await page.focus(passwordSelector);
    await page.waitForTimeout(1000); // Small delay to ensure focus
    console.log("Break 7")

    // Directly set the value of the input element
    await page.evaluate((selector, value) => {
      document.querySelector(selector).value = value;
    }, passwordSelector, password);

    // Click the login button
    await page.click('button[type="submit"]');
    console.log("Break 8")

    // Wait for login to complete and home page to load
    await page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 60000 });

    // Navigate to the direct messages page
    await page.goto('https://www.instagram.com/direct/inbox/', { waitUntil: 'networkidle2', timeout: 60000 });

    // Click on the 'New Message' button
    await page.waitForSelector('button[class*="wpO6b "]', { timeout: 60000 });
    await page.click('button[class*="wpO6b "]');
    console.log("Break 9")

    // Select user(s) to send message
    await page.waitForSelector('input[name="queryBox"]', { timeout: 60000 });
    await page.type('input[name="queryBox"]', recipientUsername);
    await page.waitForSelector('div[class*="dCJp8"]', { timeout: 60000 });
    await page.click('div[class*="dCJp8"]');

    // Click Next
    await page.waitForSelector('button[class*="rIacr"]', { timeout: 60000 });
    await page.click('button[class*="rIacr"]');
    console.log("Break 10")

    // Type and send the message
    await page.waitForSelector('textarea', { timeout: 60000 });
    await page.type('textarea', message);
    await page.click('button[class*="sqdOP"]');
    console.log("Break 11")
  } catch (error) {
    console.error('Error sending message:', error);
    console.log("Break 12")
  } finally {
    await browser.close();
  }
}

module.exports = { loginAndSendMessage, loginAndSendMessage2, loginAndSendMessage3 };
