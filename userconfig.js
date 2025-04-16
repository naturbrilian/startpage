// latte / frappe / macchiato / mocha
const palette = frappe;

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Kediri",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: palette.maroon,
  },
  disabled: [],
  fastlink: "https://catppuccin.com/",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "myself",
      background_url: "src/img/banners/cbg-01.jpg",
      categories: [
        {
          name: "translation",
          links: [
            {
              name: "crowdin",
              url: "https://crowdin.com/",
              icon: "text-wrap",
              icon_color: palette.green,
            },
            {
              name: "Codeberg Translate",
              url: "https://translate.codeberg.org/",
              icon: "droplet-code",
              icon_color: palette.peach,
            },
			{
			  name: "poedit",
			  url: "https://poedit.com/",
			  icon: "clipboard",
			  icon_color: palette.teal,
			},
          ],
        },
        {
          name: "working",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com",
              icon: "brand-gmail",
              icon_color: palette.rosewater,
            },
            {
              name: "whatsapp",
              url: "https://web.whatsapp.com/",
              icon: "brand-whatsapp",
              icon_color: palette.peach,
            },
            {
              name: "linkedin",
              url: "https://linkedin.com/",
              icon: "brand-linkedin",
              icon_color: palette.blue,
            },
			{
			  name: "jobstreet",
			  url: "https://jobstreet.com/",
			  icon: "briefcase-2",
			  icon_color: palette.yellow,
			},
          ],
        },
        {
          name: "music and scrobble",
          links: [
            {
              name: "spotify",
              url: "https://open.spotify.com/",
              icon: "brand-spotify",
              icon_color: palette.green,
            },
            {
              name: "amazon music",
              url: "https://music.amazon.com/",
              icon: "music-exclamation",
              icon_color: palette.peach,
            },
            {
              name: "youtube music",
              url: "https://music.youtube.com/",
              icon: "vinyl",
              icon_color: palette.red,
            },
            {
              name: "lastfm",
              url: "https://last.fm",
              icon: "brand-lastfm",
              icon_color: palette.red,
            },
            {
              name: "maloja",
              url: "https://github.com/krateng/maloja/",
              icon: "headphones",
              icon_color: palette.mauve,
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/cbg-02.jpg",
      categories: [
        {
          name: "development",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "neptune",
              url: "https://ui.neptune.ai",
              icon: "circle-triangle",
              icon_color: palette.peach,
            },
            {
              name: "stackoverflow",
              url: "https://stackoverflow.com",
              icon: "brand-stackoverflow",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "challenges",
          links: [
            {
              name: "kaggle",
              url: "https://www.kaggle.com",
              icon: "brain",
              icon_color: palette.green,
            },
            {
              name: "leetcode",
              url: "https://leetcode.com",
              icon: "code-plus",
              icon_color: palette.peach,
            },
            {
              name: "exercism",
              url: "https://exercism.org",
              icon: "code-minus",
              icon_color: palette.red,
            },
            {
              name: "aoc",
              url: "https://adventofcode.com",
              icon: "brand-linktree",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "dou",
              url: "https://dou.ua",
              icon: "brand-prisma",
              icon_color: palette.green,
            },
            {
              name: "hackernews",
              url: "https://news.ycombinator.com",
              icon: "brand-redhat",
              icon_color: palette.peach,
            },
            {
              name: "uber engineering",
              url: "https://www.uber.com/en-GB/blog/london/engineering",
              icon: "brand-uber",
              icon_color: palette.red,
            },
            {
              name: "netflix tech blog",
              url: "https://netflixtechblog.com",
              icon: "brand-netflix",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
    {
      name: "chi ll",
      background_url: "src/img/banners/cbg-03.jpg",
      categories: [
        {
          name: "social media",
          links: [
            {
              name: "telegram",
              url: "https://web.telegram.org",
              icon: "brand-telegram",
              icon_color: palette.green,
            },
            {
              name: "facebook",
              url: "https://www.facebook.com",
              icon: "brand-facebook",
              icon_color: palette.peach,
            },
            {
              name: "reddit",
              url: "https://www.reddit.com/r/unixporn",
              icon: "brand-reddit",
              icon_color: palette.red,
            },
			{
			  name: "twitter",
			  url: "https://twitter.com/",
			  icon: "brand-twitter",
			  icon_color: palette.blue,
			},
			{
			  name: "instagram",
			  url: "https://instagram.com/",
			  icon: "brand-instagram",
			  icon_color: palette.maroon,
			},
			{
			  name: "sakurajima",
			  url: "https://sakurajima.social",
			  icon: "heart-star",
			  icon_color: palette.lavender,
			},
				
          ],
        },
        {
          name: "gaming",
          links: [
            {
              name: "IGN",
              url: "https://www.ign.com/account/playlist/library",
              icon: "device-gamepad",
              icon_color: palette.green,
            },
            {
              name: "steam",
              url: "https://store.steampowered.com",
              icon: "brand-steam",
              icon_color: palette.peach,
            },
            {
              name: "epicgames",
              url: "https://store.epicgames.com",
              icon: "brand-fortnite",
              icon_color: palette.red,
            },
            {
              name: "nintendo",
              url: "https://store.nintendo.co.uk",
              icon: "device-nintendo",
              icon_color: palette.blue,
            },
			{
			  name: "gog",
			  url: "https://www.gog.com/en/",
			  icon: "device-gamepad-2",
			  icon_color: "palette.white",
			},
          ],
        },
        {
          name: "video",
          links: [
            {
              name: "anilist",
              url: "https://anilist.co/home",
              icon: "brand-funimation",
              icon_color: palette.green,
            },
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.peach,
            },
            {
              name: "bstation",
              url: "https://bilibili.tv/",
              icon: "player-play",
              icon_color: palette.red,
            },
            {
              name: "catchplay+",
              url: "https://www.catchplay.com/",
              icon: "plus",
              icon_color: palette.sapphire,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
