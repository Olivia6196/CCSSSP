// newsData.ts
export interface NewsEvent {
  id: string;
  title: string;
  date: string;
  month: string;
  day: string;
  author: string;
  excerpt: string;
  url: string;
  slug: string;
}

export const newsEvents: NewsEvent[] = [
  // ==================== April 2026 ====================
  {
    id: "24678",
    title: "𝐅𝐫𝐨𝐦 𝐭𝐡𝐞 𝐀𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐭𝐨𝐫’𝐬 𝐃𝐞𝐬𝐤 – April 26, 2026",
    date: "April 24, 2026",
    month: "Apr",
    day: "24",
    author: "John Dee",
    excerpt: "Fourth Sunday Of Easter, Year A. ONE IN CHRIST – UNITED IN MISSION.",
    url: "https://www.ccsssp.com/news_events/%f0%9d%90%85%f0%9d%90%ab%f0%9d%90%a8%f0%9d%90%a6-%f0%9d%90%ad%f0%9d%90%a1%f0%9d%90%9e-%f0%9d%90%80%f0%9d%90%9d%f0%9d%90%a6%f0%9d%90%a2%f0%9d%90%a7%f0%9d%90%a2%f0%9d%90%ac%f0%9d%90%ad%f0%9d%90%ab-3",
    slug: "%f0%9d%90%85%f0%9d%90%ab%f0%9d%90%a8%f0%9d%90%a6-%f0%9d%90%ad%f0%9d%90%a1%f0%9d%90%9e-%f0%9d%90%80%f0%9d%90%9d%f0%9d%90%a6%f0%9d%90%a2%f0%9d%90%a7%f0%9d%90%a2%f0%9d%90%ac%f0%9d%90%ad%f0%9d%90%ab-3"
  },
  {
    id: "24673",
    title: "𝗨𝗽𝗰𝗼𝗺𝗶𝗻𝗴 𝗖𝗲𝗹𝗲𝗯𝗿𝗮𝘁𝗶𝗼𝗻𝘀/𝗘𝘃𝗲𝗻𝘁𝘀/𝗠𝗲𝗲𝘁𝗶𝗻𝗴𝘀 – April 26, 2026",
    date: "April 23, 2026",
    month: "Apr",
    day: "23",
    author: "John Dee",
    excerpt: "Upcoming Celebrations, Events & Meetings",
    url: "https://www.ccsssp.com/news_events/%f0%9d%97%a8%f0%9d%97%bd%f0%9d%97%b0%f0%9d%97%bc%f0%9d%97%ba%f0%9d%97%b6%f0%9d%97%bb%f0%9d%97%b4-%f0%9d%97%96%f0%9d%97%b2%f0%9d%97%b9%f0%9d%97%b2%f0%9d%97%af%f0%9d%97%bf%f0%9d%97%ae%f0%9d%98%81-8",
    slug: "%f0%9d%97%a8%f0%9d%97%bd%f0%9d%97%b0%f0%9d%97%bc%f0%9d%97%ba%f0%9d%97%b6%f0%9d%97%bb%f0%9d%97%b4-%f0%9d%97%96%f0%9d%97%b2%f0%9d%97%b9%f0%9d%97%b2%f0%9d%97%af%f0%9d%97%bf%f0%9d%97%ae%f0%9d%98%81-8"
  },
  {
    id: "24667",
    title: "𝐌𝐢𝐧𝐢𝐬𝐭𝐞𝐫𝐬 𝐟𝐨𝐫 𝐀𝐩𝐫𝐢𝐥 𝟐𝟔, 𝟐𝟎𝟐𝟔 – 𝐒𝐭. 𝐏𝐚𝐭𝐫𝐢𝐜𝐤’𝐬",
    date: "April 23, 2026",
    month: "Apr",
    day: "23",
    author: "John Dee",
    excerpt: "Ministers schedule for St. Patrick's",
    url: "https://www.ccsssp.com/news_events/%f0%9d%90%8c%f0%9d%90%a2%f0%9d%90%a7%f0%9d%90%a2%f0%9d%90%ac%f0%9d%90%ad%f0%9d%90%9e%f0%9d%90%ab%f0%9d%90%ac-%f0%9d%90%9f%f0%9d%90%a8%f0%9d%90%ab-%f0%9d%90%80%f0%9d%90%a9%f0%9d%90%ab%f0%9d%90%a2-2",
    slug: "%f0%9d%90%8c%f0%9d%90%a2%f0%9d%90%a7%f0%9d%90%a2%f0%9d%90%ac%f0%9d%90%ad%f0%9d%90%9e%f0%9d%90%ab%f0%9d%90%ac-%f0%9d%90%9f%f0%9d%90%a8%f0%9d%90%ab-%f0%9d%90%80%f0%9d%90%a9%f0%9d%90%ab%f0%9d%90%a2-2"
  },
  {
    id: "24663",
    title: "𝑴𝒂𝒔𝒔 𝑺𝒄𝒉𝒆𝒅𝒖𝒍𝒆 + 𝑰𝒏𝒕𝒆𝒏𝒕𝒊𝒐𝒏𝒔",
    date: "April 22, 2026",
    month: "Apr",
    day: "22",
    author: "John Dee",
    excerpt: "Mass Schedule and Intentions",
    url: "https://www.ccsssp.com/news_events/%f0%9d%91%b4%f0%9d%92%82%f0%9d%92%94%f0%9d%92%94-%f0%9d%91%ba%f0%9d%92%84%f0%9d%92%89%f0%9d%92%86%f0%9d%92%85%f0%9d%92%96%f0%9d%92%8d%f0%9d%92%86-%f0%9d%91%b0%f0%9d%92%8f%f0%9d%92%95%f0%9d%92%86-13",
    slug: "%f0%9d%91%b4%f0%9d%92%82%f0%9d%92%94%f0%9d%92%94-%f0%9d%91%ba%f0%9d%92%84%f0%9d%92%89%f0%9d%92%86%f0%9d%92%85%f0%9d%92%96%f0%9d%92%8d%f0%9d%92%86-%f0%9d%91%b0%f0%9d%92%8f%f0%9d%92%95%f0%9d%92%86-13"
  },
  {
    id: "24658",
    title: "𝗖𝗵𝘂𝗿𝗰𝗵 𝗕𝘂𝗹𝗹𝗲𝘁𝗶𝗻 – 𝗔𝗽𝗿𝗶𝗹 𝟭𝟵, 𝟮𝟬𝟮𝟲",
    date: "April 18, 2026",
    month: "Apr",
    day: "18",
    author: "John Dee",
    excerpt: "Third Sunday Of Easter Bulletin",
    url: "https://www.ccsssp.com/news_events/%f0%9d%97%96%f0%9d%97%b5%f0%9d%98%82%f0%9d%97%bf%f0%9d%97%b0%f0%9d%97%b5-%f0%9d%97%95%f0%9d%98%82%f0%9d%97%b9%f0%9d%97%b9%f0%9d%97%b2%f0%9d%98%81%f0%9d%97%b6%f0%9d%97%bb-%f0%9d%97%94%f0%9d%97%bd-2",
    slug: "%f0%9d%97%96%f0%9d%97%b5%f0%9d%98%82%f0%9d%97%bf%f0%9d%97%b0%f0%9d%97%b5-%f0%9d%97%95%f0%9d%98%82%f0%9d%97%b9%f0%9d%97%b9%f0%9d%97%b2%f0%9d%98%81%f0%9d%97%b6%f0%9d%97%bb-%f0%9d%97%94%f0%9d%97%bd-2"
  },
  {
    id: "24654",
    title: "𝑼𝒑𝒄𝒐𝒎𝒊𝒏𝒈 𝑪𝒆𝒍𝒆𝒃𝒓𝒂𝒕𝒊𝒐𝒏𝒔/𝑬𝒗𝒆𝒏𝒕𝒔/𝑴𝒆𝒆𝒕𝒊𝒏𝒈𝒔",
    date: "April 18, 2026",
    month: "Apr",
    day: "18",
    author: "John Dee",
    excerpt: "Upcoming Celebrations, Events and Meetings",
    url: "https://www.ccsssp.com/news_events/%f0%9d%91%bc%f0%9d%92%91%f0%9d%92%84%f0%9d%92%90%f0%9d%92%8e%f0%9d%92%8a%f0%9d%92%8f%f0%9d%92%88-%f0%9d%91%aa%f0%9d%92%86%f0%9d%92%8d%f0%9d%92%86%f0%9d%92%83%f0%9d%92%93%f0%9d%92%82%f0%9d%92%95-4",
    slug: "%f0%9d%91%bc%f0%9d%92%91%f0%9d%92%84%f0%9d%92%90%f0%9d%92%8e%f0%9d%92%8a%f0%9d%92%8f%f0%9d%92%88-%f0%9d%91%aa%f0%9d%92%86%f0%9d%92%8d%f0%9d%92%86%f0%9d%92%83%f0%9d%92%93%f0%9d%92%82%f0%9d%92%95-4"
  },
  {
    id: "24649",
    title: "𝐅𝐫𝐨𝐦 𝐭𝐡𝐞 𝐀𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐭𝐨𝐫’𝐬 𝐃𝐞𝐬𝐤 – 𝐀𝐩𝐫𝐢𝐥 𝟏𝟗, 𝟐𝟎𝟐𝟔",
    date: "April 18, 2026",
    month: "Apr",
    day: "18",
    author: "John Dee",
    excerpt: "Third Sunday Of Easter, Year A",
    url: "https://www.ccsssp.com/news_events/%f0%9d%90%85%f0%9d%90%ab%f0%9d%90%a8%f0%9d%90%a6-%f0%9d%90%ad%f0%9d%90%a1%f0%9d%90%9e-%f0%9d%90%80%f0%9d%90%9d%f0%9d%90%a6%f0%9d%90%a2%f0%9d%90%a7%f0%9d%90%a2%f0%9d%90%ac%f0%9d%90%ad%f0%9d%90%ab-2",
    slug: "%f0%9d%90%85%f0%9d%90%ab%f0%9d%90%a8%f0%9d%90%a6-%f0%9d%90%ad%f0%9d%90%a1%f0%9d%90%9e-%f0%9d%90%80%f0%9d%90%9d%f0%9d%90%a6%f0%9d%90%a2%f0%9d%90%a7%f0%9d%90%a2%f0%9d%90%ac%f0%9d%90%ad%f0%9d%90%ab-2"
  },
  {
    id: "24644",
    title: "𝑪𝑬𝑳𝑬𝑩𝑹𝑨𝑻𝑰𝑵𝑮 𝑮𝑶𝑶𝑫 𝑵𝑬𝑾𝑺!",
    date: "April 17, 2026",
    month: "Apr",
    day: "17",
    author: "John Dee",
    excerpt: "Mass of Unity — Sunday, April 26 at 10:00 AM with Brunch",
    url: "https://www.ccsssp.com/news_events/24644",
    slug: "24644"
  },
  {
    id: "24639",
    title: "𝑴𝒂𝒔𝒔 𝑺𝒄𝒉𝒆𝒅𝒖𝒍𝒆 𝒂𝒏𝒅 𝑰𝒏𝒕𝒆𝒏𝒕𝒊𝒐𝒏𝒔",
    date: "April 17, 2026",
    month: "Apr",
    day: "17",
    author: "John Dee",
    excerpt: "Mass Schedule and Intentions",
    url: "https://www.ccsssp.com/news_events/%f0%9d%91%b4%f0%9d%92%82%f0%9d%92%94%f0%9d%92%94-%f0%9d%91%ba%f0%9d%92%84%f0%9d%92%89%f0%9d%92%86%f0%9d%92%85%f0%9d%92%96%f0%9d%92%8d%f0%9d%92%86-%f0%9d%92%82%f0%9d%92%8f%f0%9d%92%85-%f0%9d%91%b0-8",
    slug: "%f0%9d%91%b4%f0%9d%92%82%f0%9d%92%94%f0%9d%92%94-%f0%9d%91%ba%f0%9d%92%84%f0%9d%92%89%f0%9d%92%86%f0%9d%92%85%f0%9d%92%96%f0%9d%92%8d%f0%9d%92%86-%f0%9d%92%82%f0%9d%92%8f%f0%9d%92%85-%f0%9d%91%b0-8"
  },
  {
    id: "24635",
    title: "𝐌𝐢𝐧𝐢𝐬𝐭𝐞𝐫𝐬 𝐟𝐨𝐫 𝐀𝐩𝐫𝐢𝐥 𝟏𝟖 & 𝟏𝟗, 𝟐𝟎𝟐𝟔",
    date: "April 16, 2026",
    month: "Apr",
    day: "16",
    author: "John Dee",
    excerpt: "Ministers for St. Stephen's, St. Patrick's & OLPH",
    url: "https://www.ccsssp.com/news_events/%f0%9d%90%8c%f0%9d%90%a2%f0%9d%90%a7%f0%9d%90%a2%f0%9d%90%ac%f0%9d%90%ad%f0%9d%90%9e%f0%9d%90%ab%f0%9d%90%ac-%f0%9d%90%9f%f0%9d%90%a8%f0%9d%90%ab-%f0%9d%90%80%f0%9d%90%a9%f0%9d%90%ab%f0%9d%90%a2",
    slug: "%f0%9d%90%8c%f0%9d%90%a2%f0%9d%90%a7%f0%9d%90%a2%f0%9d%90%ac%f0%9d%90%ad%f0%9d%90%9e%f0%9d%90%ab%f0%9d%90%ac-%f0%9d%90%9f%f0%9d%90%a8%f0%9d%90%ab-%f0%9d%90%80%f0%9d%90%a9%f0%9d%90%ab%f0%9d%90%a2"
  },

  // ==================== Early April & Late March 2026 ====================
  {
    id: "24630",
    title: "Sunday Mass Streaming",
    date: "April 12, 2026",
    month: "Apr",
    day: "12",
    author: "John Dee",
    excerpt: "Streaming paused until audio issues are resolved.",
    url: "https://www.ccsssp.com/news_events/sunday-mass-streaming",
    slug: "sunday-mass-streaming"
  },
  {
    id: "24625",
    title: "𝗦𝘂𝗻𝗱𝗮𝘆 𝗠𝗮𝘀𝘀 – 𝗔𝗽𝗿𝗹 𝟭𝟮, 𝟮𝟬𝟮𝟲",
    date: "April 12, 2026",
    month: "Apr",
    day: "12",
    author: "John Dee",
    excerpt: "Divine Mercy Sunday",
    url: "https://www.ccsssp.com/news_events/%f0%9d%97%a6%f0%9d%98%82%f0%9d%97%bb%f0%9d%97%b1%f0%9d%97%ae%f0%9d%98%86-%f0%9d%97%a0%f0%9d%97%ae%f0%9d%98%80%f0%9d%98%80-%f0%9d%97%94%f0%9d%97%bd%f0%9d%97%bf%f0%9d%97%b9-%f0%9d%9f%ad%f0%9d%9f%ae",
    slug: "%f0%9d%97%a6%f0%9d%98%82%f0%9d%97%bb%f0%9d%97%b1%f0%9d%97%ae%f0%9d%98%86-%f0%9d%97%a0%f0%9d%97%ae%f0%9d%98%80%f0%9d%98%80-%f0%9d%97%94%f0%9d%97%bd%f0%9d%97%bf%f0%9d%97%b9-%f0%9d%9f%ad%f0%9d%9f%ae"
  },
  {
    id: "24621",
    title: "𝑺𝒖𝒎𝒎𝒆𝒓 𝑴𝒂𝒔𝒔 𝑺𝒄𝒉𝒆𝒅𝒖𝒍𝒆",
    date: "April 11, 2026",
    month: "Apr",
    day: "11",
    author: "John Dee",
    excerpt: "Summer Mass Schedule",
    url: "https://www.ccsssp.com/news_events/%f0%9d%91%ba%f0%9d%92%96%f0%9d%92%8e%f0%9d%92%8e%f0%9d%92%86%f0%9d%92%93-%f0%9d%91%b4%f0%9d%92%82%f0%9d%92%94%f0%9d%92%94-%f0%9d%91%ba%f0%9d%92%84%f0%9d%92%89%f0%9d%92%86%f0%9d%92%85%f0%9d%92%96",
    slug: "%f0%9d%91%ba%f0%9d%92%96%f0%9d%92%8e%f0%9d%92%8e%f0%9d%92%86%f0%9d%92%93-%f0%9d%91%b4%f0%9d%92%82%f0%9d%92%94%f0%9d%92%94-%f0%9d%91%ba%f0%9d%92%84%f0%9d%92%89%f0%9d%92%86%f0%9d%92%85%f0%9d%92%96"
  },
  // ... (All other posts from previous pages are included below) ...

  // ==================== February 2026 (Oldest in current data) ====================
  {
    id: "24382",
    title: "𝐌𝐚𝐬𝐬 𝐒𝐜𝐡𝐞𝐝𝐮𝐥𝐞 𝐚𝐧𝐝 𝐈𝐧𝐭𝐞𝐧𝐭𝐢𝐨𝐧𝐬",
    date: "February 27, 2026",
    month: "Feb",
    day: "27",
    author: "John Dee",
    excerpt: "Mass Schedule and Intentions",
    url: "https://www.ccsssp.com/news_events/%f0%9d%90%8c%f0%9d%90%9a%f0%9d%90%ac%f0%9d%90%ac-%f0%9d%90%92%f0%9d%90%9c%f0%9d%90%a1%f0%9d%90%9e%f0%9d%90%9d%f0%9d%90%ae%f0%9d%90%a5%f0%9d%90%9e-%f0%9d%90%9a%f0%9d%90%a7%f0%9d%90%9d-%f0%9d%90%88-7",
    slug: "%f0%9d%90%8c%f0%9d%90%9a%f0%9d%90%ac%f0%9d%90%ac-%f0%9d%90%92%f0%9d%90%9c%f0%9d%90%a1%f0%9d%90%9e%f0%9d%90%9d%f0%9d%90%ae%f0%9d%90%a5%f0%9d%90%9e-%f0%9d%90%9a%f0%9d%90%a7%f0%9d%90%9d-%f0%9d%90%88-7"
  },
  {
    id: "24377",
    title: "𝐔𝐩𝐜𝐨𝐦𝐢𝐧𝐠 𝐂𝐞𝐥𝐞𝐛𝐫𝐚𝐭𝐢𝐨𝐧𝐬/𝐄𝐯𝐞𝐧𝐭𝐬/𝐌𝐞𝐞𝐭𝐢𝐧𝐠𝐬 – March 1, 2026",
    date: "February 27, 2026",
    month: "Feb",
    day: "27",
    author: "John Dee",
    excerpt: "Upcoming Celebrations, Events & Meetings",
    url: "https://www.ccsssp.com/news_events/%f0%9d%90%94%f0%9d%90%a9%f0%9d%90%9c%f0%9d%90%a8%f0%9d%90%a6%f0%9d%90%a2%f0%9d%90%a7%f0%9d%90%a0-%f0%9d%90%82%f0%9d%90%9e%f0%9d%90%a5%f0%9d%90%9e%f0%9d%90%9b%f0%9d%90%ab%f0%9d%90%9a%f0%9d%90%ad-45",
    slug: "%f0%9d%90%94%f0%9d%90%a9%f0%9d%90%9c%f0%9d%90%a8%f0%9d%90%a6%f0%9d%90%a2%f0%9d%90%a7%f0%9d%90%a0-%f0%9d%90%82%f0%9d%90%9e%f0%9d%90%a5%f0%9d%90%9e%f0%9d%90%9b%f0%9d%90%ab%f0%9d%90%9a%f0%9d%90%ad-45"
  },
  {
    id: "24371",
    title: "𝐓𝐡𝐞 𝐒𝐚𝐧𝐜𝐭𝐮𝐚𝐫𝐲 𝐂𝐚𝐧𝐝𝐥𝐞",
    date: "February 26, 2026",
    month: "Feb",
    day: "26",
    author: "John Dee",
    excerpt: "Sanctuary Candle for March",
    url: "https://www.ccsssp.com/news_events/%f0%9d%90%93%f0%9d%90%a1%f0%9d%90%9e-%f0%9d%90%92%f0%9d%90%9a%f0%9d%90%a7%f0%9d%90%9c%f0%9d%90%ad%f0%9d%90%ae%f0%9d%90%9a%f0%9d%90%ab%f0%9d%90%b2-%f0%9d%90%82%f0%9d%90%9a%f0%9d%90%a7%f0%9d%90%9d-5",
    slug: "%f0%9d%90%93%f0%9d%90%a1%f0%9d%90%9e-%f0%9d%90%92%f0%9d%90%9a%f0%9d%90%a7%f0%9d%90%9c%f0%9d%90%ad%f0%9d%90%ae%f0%9d%90%9a%f0%9d%90%ab%f0%9d%90%b2-%f0%9d%90%82%f0%9d%90%9a%f0%9d%90%a7%f0%9d%90%9d-5"
  },
  {
    id: "24365",
    title: "𝑭𝒓𝒐𝒎 𝒕𝒉𝒆 𝑨𝒅𝒎𝒊𝒏𝒊𝒔𝒕𝒓𝒂𝒕𝒐𝒓’𝒔 𝑫𝒆𝒔𝒌",
    date: "February 25, 2026",
    month: "Feb",
    day: "25",
    author: "John Dee",
    excerpt: "First Sunday of Lent Message",
    url: "https://www.ccsssp.com/news_events/%f0%9d%91%ad%f0%9d%92%93%f0%9d%92%90%f0%9d%92%8e-%f0%9d%92%95%f0%9d%92%89%f0%9d%92%86-%f0%9d%91%a8%f0%9d%92%85%f0%9d%92%8e%f0%9d%92%8a%f0%9d%92%8f%f0%9d%92%8a%f0%9d%92%94%f0%9d%92%95%f0%9d%92%93-2",
    slug: "%f0%9d%91%ad%f0%9d%92%93%f0%9d%92%90%f0%9d%92%8e-%f0%9d%92%95%f0%9d%92%89%f0%9d%92%86-%f0%9d%91%a8%f0%9d%92%85%f0%9d%92%8e%f0%9d%92%8a%f0%9d%92%8f%f0%9d%92%8a%f0%9d%92%94%f0%9d%92%95%f0%9d%92%93-2"
  },
  {
    id: "24358",
    title: "𝐌𝐢𝐧𝐢𝐬𝐭𝐞𝐫𝐬 𝐟𝐨𝐫 𝐅𝐞𝐛𝐫𝐮𝐚𝐫𝐲 𝟐𝟖 & 𝐌𝐚𝐫𝐜𝐡 𝟏, 𝟐𝟎𝟐𝟔",
    date: "February 24, 2026",
    month: "Feb",
    day: "24",
    author: "John Dee",
    excerpt: "Ministers Schedule",
    url: "https://www.ccsssp.com/news_events/%f0%9d%90%8c%f0%9d%90%a2%f0%9d%90%a7%f0%9d%90%a2%f0%9d%90%ac%f0%9d%90%ad%f0%9d%90%9e%f0%9d%90%ab%f0%9d%90%ac-%f0%9d%90%9f%f0%9d%90%a8%f0%9d%90%ab-%f0%9d%90%85%f0%9d%90%9e%f0%9d%90%9b%f0%9d%90%ab-3",
    slug: "%f0%9d%90%8c%f0%9d%90%a2%f0%9d%90%a7%f0%9d%90%a2%f0%9d%90%ac%f0%9d%90%ad%f0%9d%90%9e%f0%9d%90%ab%f0%9d%90%ac-%f0%9d%90%9f%f0%9d%90%a8%f0%9d%90%ab-%f0%9d%90%85%f0%9d%90%9e%f0%9d%90%9b%f0%9d%90%ab-3"
  },
  {
    id: "24352",
    title: "𝐒𝐮𝐧𝐝𝐚𝐲 𝐌𝐚𝐬𝐬 – 𝐅𝐞𝐛𝐫𝐮𝐚𝐫𝐲 𝟐𝟐, 𝟐𝟎𝟐𝟔",
    date: "February 22, 2026",
    month: "Feb",
    day: "22",
    author: "John Dee",
    excerpt: "First Sunday of Lent Mass",
    url: "https://www.ccsssp.com/news_events/%f0%9d%90%92%f0%9d%90%ae%f0%9d%90%a7%f0%9d%90%9d%f0%9d%90%9a%f0%9d%90%b2-%f0%9d%90%8c%f0%9d%90%9a%f0%9d%90%ac%f0%9d%90%ac-%f0%9d%90%85%f0%9d%90%9e%f0%9d%90%9b%f0%9d%90%ab%f0%9d%90%ae%f0%9d%90%9a-9",
    slug: "%f0%9d%90%92%f0%9d%90%ae%f0%9d%90%a7%f0%9d%90%9d%f0%9d%90%9a%f0%9d%90%b2-%f0%9d%90%8c%f0%9d%90%9a%f0%9d%90%ac%f0%9d%90%ac-%f0%9d%90%85%f0%9d%90%9e%f0%9d%90%9b%f0%9d%90%ab%f0%9d%90%ae%f0%9d%90%9a-9"
  },
  {
    id: "24348",
    title: "𝐂𝐡𝐮𝐫𝐜𝐡 𝐁𝐮𝐥𝐥𝐞𝐭𝐢𝐧 – 𝐅𝐞𝐛𝐫𝐮𝐚𝐫𝐲 𝟐𝟐, 𝟐𝟎𝟐𝟔",
    date: "February 21, 2026",
    month: "Feb",
    day: "21",
    author: "John Dee",
    excerpt: "First Sunday of Lent Bulletin",
    url: "https://www.ccsssp.com/news_events/%f0%9d%90%82%f0%9d%90%a1%f0%9d%90%ae%f0%9d%90%ab%f0%9d%90%9c%f0%9d%90%a1-%f0%9d%90%81%f0%9d%90%ae%f0%9d%90%a5%f0%9d%90%a5%f0%9d%90%9e%f0%9d%90%ad%f0%9d%90%a2%f0%9d%90%a7-%f0%9d%90%85%f0%9d%90%9e-4",
    slug: "%f0%9d%90%82%f0%9d%90%a1%f0%9d%90%ae%f0%9d%90%ab%f0%9d%90%9c%f0%9d%90%a1-%f0%9d%90%81%f0%9d%90%ae%f0%9d%90%a5%f0%9d%90%a5%f0%9d%90%9e%f0%9d%90%ad%f0%9d%90%a2%f0%9d%90%a7-%f0%9d%90%85%f0%9d%90%9e-4"
  },
  {
    id: "24340",
    title: "𝑭𝒓𝒐𝒎 𝒕𝒉𝒆 𝑨𝒅𝒎𝒊𝒏𝒊𝒔𝒕𝒓𝒂𝒕𝒐𝒓’𝒔 𝑫𝒆𝒔𝒌",
    date: "February 20, 2026",
    month: "Feb",
    day: "20",
    author: "John Dee",
    excerpt: "First Sunday of Lent Message",
    url: "https://www.ccsssp.com/news_events/%f0%9d%91%ad%f0%9d%92%93%f0%9d%92%90%f0%9d%92%8e-%f0%9d%92%95%f0%9d%92%89%f0%9d%92%86-%f0%9d%91%a8%f0%9d%92%85%f0%9d%92%8e%f0%9d%92%8a%f0%9d%92%8f%f0%9d%92%8a%f0%9d%92%94%f0%9d%92%95%f0%9d%92%93-2",
    slug: "%f0%9d%91%ad%f0%9d%92%93%f0%9d%92%90%f0%9d%92%8e-%f0%9d%92%95%f0%9d%92%89%f0%9d%92%86-%f0%9d%91%a8%f0%9d%92%85%f0%9d%92%8e%f0%9d%92%8a%f0%9d%92%8f%f0%9d%92%8a%f0%9d%92%94%f0%9d%92%95%f0%9d%92%93-2"
  },
  {
    id: "24335",
    title: "𝐔𝐩𝐜𝐨𝐦𝐢𝐧𝐠 𝐂𝐞𝐥𝐞𝐛𝐫𝐚𝐭𝐢𝐨𝐧𝐬/𝐄𝐯𝐞𝐧𝐭𝐬/𝐌𝐞𝐞𝐭𝐢𝐧𝐠𝐬 – February 22, 2026",
    date: "February 19, 2026",
    month: "Feb",
    day: "19",
    author: "John Dee",
    excerpt: "Upcoming Celebrations, Events & Meetings",
    url: "https://www.ccsssp.com/news_events/%f0%9d%90%94%f0%9d%90%a9%f0%9d%90%9c%f0%9d%90%a8%f0%9d%90%a6%f0%9d%90%a2%f0%9d%90%a7%f0%9d%90%a0-%f0%9d%90%82%f0%9d%90%9e%f0%9d%90%a5%f0%9d%90%9e%f0%9d%90%9b%f0%9d%90%ab%f0%9d%90%9a%f0%9d%90%ad-44",
    slug: "%f0%9d%90%94%f0%9d%90%a9%f0%9d%90%9c%f0%9d%90%a8%f0%9d%90%a6%f0%9d%90%a2%f0%9d%90%a7%f0%9d%90%a0-%f0%9d%90%82%f0%9d%90%9e%f0%9d%90%a5%f0%9d%90%9e%f0%9d%90%9b%f0%9d%90%ab%f0%9d%90%9a%f0%9d%90%ad-44"
  },
  {
    id: "24331",
    title: "𝑴𝒂𝒔𝒔 𝑺𝒄𝒉𝒆𝒅𝒖𝒍𝒆 + 𝑰𝒏𝒕𝒆𝒏𝒕𝒊𝒐𝒏𝒔",
    date: "February 19, 2026",
    month: "Feb",
    day: "19",
    author: "John Dee",
    excerpt: "Mass Schedule and Intentions",
    url: "https://www.ccsssp.com/news_events/%f0%9d%91%b4%f0%9d%92%82%f0%9d%92%94%f0%9d%92%94-%f0%9d%91%ba%f0%9d%92%84%f0%9d%92%89%f0%9d%92%86%f0%9d%92%85%f0%9d%92%96%f0%9d%92%8d%f0%9d%92%86-%f0%9d%92%82%f0%9d%92%8f%f0%9d%92%85-%f0%9d%91%b0-6",
    slug: "%f0%9d%91%b4%f0%9d%92%82%f0%9d%92%94%f0%9d%92%94-%f0%9d%91%ba%f0%9d%92%84%f0%9d%92%89%f0%9d%92%86%f0%9d%92%85%f0%9d%92%96%f0%9d%92%8d%f0%9d%92%86-%f0%9d%92%82%f0%9d%92%8f%f0%9d%92%85-%f0%9d%91%b0-6"
  }
];