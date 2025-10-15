const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();

    await page.goto('https://www.lightfunnels.com/', { waitUntil: 'networkidle2' });

    // Create screenshots folder
    const dir = path.join(__dirname, 'screenshots');
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);

    const filePath = path.join(dir, `screenshot-${Date.now()}.png`);
    await page.screenshot({ path: filePath });

    console.log('Screenshot saved at:', filePath);

    await browser.close();
  } catch (error) {
    console.error('Error running Puppeteer:', error);
    process.exit(1);
  }
})();
