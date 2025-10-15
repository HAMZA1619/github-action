const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
    page.setViewport({ width: 1280, height: 851 });
    const url = websites[Math.floor(Math.random() * websites.length)];

  await page.goto(url, { waitUntil: 'networkidle2' });

  // Create screenshots folder
  const dir = path.join(__dirname, 'public/screenshots');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const filePath = path.join(dir, `screenshot-${Date.now()}.png`);
  await page.screenshot({ path: filePath });

  console.log('Screenshot saved at:', filePath);

  await browser.close();
})();

const websites = [
  "https://www.google.com",
  "https://www.apple.com",
  "https://www.microsoft.com",
  "https://www.amazon.com",
  "https://www.netflix.com",
  "https://www.spotify.com",
  "https://www.youtube.com",
  "https://www.wikipedia.org",
  "https://www.nasa.gov",
  "https://www.tesla.com",
  "https://www.bbc.com",
  "https://www.cnn.com",
  "https://www.nytimes.com",
  "https://www.theverge.com",
  "https://techcrunch.com",
  "https://www.adobe.com",
  "https://www.paypal.com",
  "https://www.cloudflare.com",
  "https://www.openai.com",
  "https://vercel.com",
  "https://www.airbnb.com",
  "https://www.shopify.com",
  "https://www.x.com",            // Twitter
  "https://www.instagram.com",
  "https://www.linkedin.com",
  "https://www.reddit.com",
  "https://www.github.com",
  "https://developer.mozilla.org",
  "https://www.stackoverflow.com",
  "https://www.producthunt.com",
  "https://dribbble.com"
];
