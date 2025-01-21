// latte / frappe / macchiato / mocha
const palette = macchiato;

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Mongolia",
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
      background_url: "src/img/banners/cbg-9.gif",
      categories: [
        {
          name: "social media",
          links: [
            {
              name: "facebook",
              url: "https://www.facebook.com/",
              icon: "brand-facebook",
              icon_color: palette.green,
            },
            {
              name: "instagram",
              url: "https://www.instagram.com/",
              icon: "brand-instagram",
              icon_color: palette.peach,
            },
            {
              name: "tiktok",
              url: "https://tiktok.com/",
              icon: "brand-tiktok",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "music",
          links: [
            {
              name: "soundcloud",
              url: "https://soundcloud.com",
              icon: "brand-soundcloud",
              icon_color: palette.green,
            },
            {
              name: "spotify",
              url: "https://open.spotify.com",
              icon: "brand-spotify",
              icon_color: palette.peach,
            },
            {
              name: "youtube",
              url: "https://www.youtube.com/",
              icon: "table",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "anime",
          links: [
            {
              name: "playmax",
              url: "https://playmax.mn/",
              icon: "player-play",
              icon_color: palette.green,
            },
            {
              name: "9anime",
              url: "https://9animetv.to/",
              icon: "circle-number-9",
              icon_color: palette.peach,
            },
            {
              name: "myanimelist",
              url: "https://myanimelist.net/",
              icon: "clipboard-data",
              icon_color: palette.red,
            },
          ],
        },
      ],
    },
    {
      name: "flow",
      background_url: "src/img/banners/cbg-8.gif",
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
              name: "chatgpt",
              url: "https://chatgpt.com",
              icon: "ai",
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
          name: "coding",
          links: [
            {
              name: "codeforces",
              url: "https://codeforces.com",
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
              name: "spoj",
              url: "https://www.spoj.com/RGB7/",
              icon: "code-minus",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "typing",
          links: [
            {
              name: "monkeytype",
              url: "https://monkeytype.com",
              icon: "keyboard",
              icon_color: palette.green,
            },
            {
              name: "typeracer",
              url: "https://play.typeracer.com",
              icon: "dashboard",
              icon_color: palette.peach,
            },
            {
              name: "typing",
              url: "https://www.typing.com",
              icon: "space",
              icon_color: palette.red,
            },
          ],
        },
      ],
    },
    {
      name: "social",
      background_url: "src/img/banners/cbg-10.gif",
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
              name: "patreon",
              url: "https://www.patreon.com",
              icon: "brand-patreon",
              icon_color: palette.red,
            },
            {
              name: "kyivstar",
              url: "https://tv.kyivstar.ua",
              icon: "star-filled",
              icon_color: palette.blue,
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
