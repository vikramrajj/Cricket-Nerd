import fetch from 'node-fetch';
import { JSDOM } from 'jsdom';

const PROXY_URL = 'https://api.allorigins.win/get?url=';
const CRICINFO_RSS = 'http://static.cricinfo.com/rss/livescores.xml';

async function testScraper() {
  try {
    console.log("Fetching RSS...");
    const rssResp = await fetch(`${PROXY_URL}${encodeURIComponent(CRICINFO_RSS)}`);
    const rssData = await rssResp.json();
    
    if (!rssData.contents) {
      console.error("No RSS contents");
      return;
    }

    const { window } = new JSDOM(rssData.contents, { contentType: "text/xml" });
    const items = window.document.querySelectorAll("item");
    
    console.log(`Found ${items.length} live matches in RSS.`);

    for (let i = 0; i < Math.min(items.length, 3); i++) {
       const item = items[i];
       const title = item.querySelector("title")?.textContent;
       const link = item.querySelector("link")?.textContent;
       console.log(`\n--- Testing Match ${i+1}: ${title} ---`);
       console.log(`URL: ${link}`);

       if (!link) continue;

       const detailResp = await fetch(`${PROXY_URL}${encodeURIComponent(link)}`);
       const detailData = await detailResp.json();
       
       if (!detailData.contents) {
         console.log("-> Failed to fetch HTML contents via proxy");
         continue;
       }

       const dom = new JSDOM(detailData.contents);
       const scriptTag = dom.window.document.getElementById('__NEXT_DATA__');

       if (!scriptTag) {
          console.log("-> ❌ __NEXT_DATA__ NOT FOUND");
          continue;
       }

       try {
          const json = JSON.parse(scriptTag.textContent);
          const rawData = json.props?.appPageProps?.data || json.props?.pageProps?.data;
          
          if (!rawData) {
             console.log("-> ❌ Could not find props.appPageProps.data or props.pageProps.data");
             console.log("Available keys in props:", Object.keys(json.props || {}));
             continue;
          }

          const content = rawData.data?.content;
          
          if (!content) {
             console.log("-> ❌ content node missing in data structure");
             console.log("Keys in data:", Object.keys(rawData.data || {}));
             continue;
          }

          console.log("-> ✅ Success! Found content node.");
          console.log(`-> Innings Count: ${content.innings?.length || 0}`);
          console.log(`-> Commentary Count: ${content.recentBallCommentary?.length || 0}`);
          console.log(`-> Match Status: ${content.match?.statusText || 'N/A'}`);

       } catch (jsonErr) {
          console.log("-> ❌ JSON Parse Error:", jsonErr.message);
       }
    }

  } catch (err) {
    console.error("Global Error:", err);
  }
}

testScraper();
