import axios from 'axios';
import * as cheerio from 'cheerio';
import * as fs from 'fs/promises';
import * as path from 'path';

interface ScrapedLink {
  text: string;
  href: string;
}

const SCRAPED_FILE = path.join(process.cwd(), 'public', 'scraped.json');
const TARGET_URL = 'https://kevintaswin.eu.org';

export async function scrape() {
  const now = new Date();

  try {
    const file = await fs.readFile(SCRAPED_FILE, 'utf-8');
    const data = JSON.parse(file);
    const lastScraped = new Date(data.scrapedAt);

    // Check if the last scraped date is within the last 24 hours
    const diffHours = (now.getTime() - lastScraped.getTime()) / (1000 * 60 * 60);
    if (diffHours < 24) {
      console.log(`[SCRAPER] ✅ Skipped. Last scraped ${diffHours.toFixed(2)} hours ago`);
      return;
    }
  } catch {
    console.log('[SCRAPER] No existing data or corrupted file. Scraping now...');
  }

  try {
    const res = await axios.get(TARGET_URL);
    const $ = cheerio.load(res.data);

    const links: ScrapedLink[] = [];

    $('a').each((_, el) => {
      links.push({
        text: $(el).text().trim(),
        href: `products` + $(el).attr('href') || '',
      });
    });

    const result = {
      scrapedAt: now.toISOString(),
      links,
    };

    await fs.writeFile(SCRAPED_FILE, JSON.stringify(result, null, 2), 'utf-8');
    console.log('[SCRAPER] ✅ New data scraped and saved.');
  } catch (error) {
    console.error('[SCRAPER] ❌ Error scraping:', error);
  }
}
