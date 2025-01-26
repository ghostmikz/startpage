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
  fastlink: "https://app.raindrop.io",
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
              icon: "brand-youtube",
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
              name: "mirurotv",
              url: "https://www.miruro.tv",
              icon: "cat",
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
      name: "pc",
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
              icon: "brand-openai",
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
            {
              name: "geeksforgeeks",
              url: "https://www.geeksforgeeks.org/",
              icon: "code-circle",
              icon_color: palette.blue,
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
      name: "dock",
      background_url: "src/img/banners/cbg-6.gif",
      categories: [
        {
          name: "school",
          links: [
            {
              name: "school web",
              url: "https://sw-beta.xcloud.mn",
              icon: "world-www",
              icon_color: palette.green,
            },
            {
              name: "school library",
              url: "https://elibrary.xcloud.mn",
              icon: "book",
              icon_color: palette.peach,
            },
            {
              name: "classroom",
              url: "https://classroom.google.com/u/2/?pli=1",
              icon: "chalkboard",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "tools",
          links: [
            {
              name: "canva",
              url: "https://www.canva.com/",
              icon: "photo",
              icon_color: palette.green,
            },
            {
              name: "pixlr",
              url: "https://pixlr.com/editor",
              icon: "edit",
              icon_color: palette.peach,
            },
            {
              name: "figma",
              url: "https://www.figma.com",
              icon: "components",
              icon_color: palette.red,
            }
          ],
        },
        {
          name: "suite",
          links: [
            {
              name: "google drive",
              url: "https://drive.google.com/drive/my-drive",
              icon: "brand-google-drive",
              icon_color: palette.green,
            },
            {
              name: "mail",
              url: "https://mail.google.com/mail/u/0/",
              icon: "brand-gmail",
              icon_color: palette.peach,
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
