export default {
  title: "Resilient Roleplay",
  description: "Central Government Hub",
  lang: 'en-US',
  cleanUrls: true,
  // If this is disabled, when building it it will give deadlink errors if your markdown has the wrong links
  ignoreDeadLinks: true,
  
  themeConfig: {
    logo: "/logo-big.png",
    siteTitle: "Resilient Roleplay",
    search: {
      provider: "local",
    },
    // Navbar Link
    nav: [
      { text: "resilientrp.net", link: "https://resilientrp.net" },
      { text: "Discord", link: "https://discord.gg/resilientrp" },
      /* {
        text: "Products",
        items: [
          { text: "Some Subheading", link: "/sub" },
        ],
      }, */
    ],
    // Social Icons
    socialLinks: [
      { icon: "discord", link: "https://discord.gg/resilientrp" },
      { icon: "youtube", link: "https://www.youtube.com/@resilientrp" },
      { icon: "github", link: "https://github.com/resilient-roleplay" },
    ],
    // Sidebar
    sidebar: [
      {
        text: "Applications",
        link: "/applications",
        items: [
          { text: "Los Santos Police Department", link: "https://forms.gle/yNHm7wY1fsTd7Xxw9" },
          { text: "San Andreas Medical Service", link: "https://forms.gle/kWgRzEh1b1WDZqNJ9" },
          { text: "Department of Justice", link: "https://forms.gle/4PCFAA6P4aAqa2ev6" },
        ],
      },
      {
      text: "Legislation",
      link: "/legislation",
      collapsible: true,
      collapsed: false,
      items: [
        /* { text: "Setup", link: "/legislation/setup" }, */
        {
          text: "Criminal Code",
          collapsible: false,
          collapsed: true,
          items: [
            { text: "Offences Against a Person", link: "/legislation/criminal-code/offences-against-a-person" },
          ],
        },
        {
          text: "Criminal Code 2",
          collapsible: false,
          collapsed: true,
          items: [
            { text: "Person a Against Offences", link: "/legislation/criminal-code/offences-against-a-person" },
          ],
        },
      ],
    },
    ],
    docFooter: {
      prev: false,
      next: true,
    },
    /* editLink: {
      pattern: 'https://github.com/resilient-roleplay/gov-website/edit/production/docs/:path',
      text: 'Edit this page on GitHub'
    }, */
    footer: {
      message: "",
      copyright: "Copyright © 2025 Resilient Roleplay",
    },
    markdown: {
      theme: "material-palenight",
      lineNumbers: true,
    },
    // Mobile Config only
    returnToTopLabel: 'Go to Top',
    sidebarMenuLabel: 'Menu',
  },
};
