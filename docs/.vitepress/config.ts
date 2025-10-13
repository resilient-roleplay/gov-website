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
      text: "State of San Andreas - State Register of Laws",
      link: "/legislation",
      collapsible: true,
      collapsed: false,
      items: [
        /* { text: "Setup", link: "/legislation/setup" }, */
        {
          text: "Legislation",
          collapsible: false,
          collapsed: true,
          items: [
            { text: "Constitution of the State of San Andreas", link: "/legislation/constitution" },
            { text: "Due Process and Jurisprudence Act", link: "/legislation/due-process" },
            { text: "Search and Seizure Act", link: "/legislation/search-seizure" },
            { text: "Legislative Enactment and Contest Procedure Act", link: "/legislation/legislation-enactment" },
            { text: "Legislative Audit Procedure Act", link: "/legislation/legislative-audit" },
            { text: "Stand Your Ground & Castle Doctrine Act", link: "/legislation/stand-your-ground" },
            { text: "Expungement Legislation Act", link: "/legislation/expungement" },
            { text: "First Time Felony Diversion Program Act", link: "/legislation/fdp" },
            { text: "Impeachment and Authority Conduct Review Act", link: "/legislation/impeachment-acr" },
            { text: "Freedom of Information Act", link: "/legislation/foia" },
            { text: "Medical Information Privacy and Protection Act (MIPPA)", link: "/legislation/mippa" },
            { text: "DNA Legislation Act", link: "/legislation/dna" },
            { text: "Statute of Limitations Legislation", link: "/legislation/statute" },
            { text: "Powers and Definitions of Law Enforcement Officers (LEOs) Act", link: "/legislation/leos" },
            { text: "Law Enforcement Negotiation and Sentencing Adjustment (LENSA) Act", link: "/legislation/lensa" },
            { text: "Bail Legislation Act", link: "/legislation/bail" },
            { text: "Mutual Combat and Trial by Combat Legislation", link: "/legislation/mutual-combat" },
            { text: "Weapons & Drivers License Legislation Act", link: "/legislation/weapons-driving-licenses" },
            { text: "Statewide Traffic Ordinances Act", link: "/legislation/traffic-ordinance" },
            { text: "Legal Profession Classification and BAR Licensing Act", link: "/legislation/lawyers" },
            { text: "Judicial Structure, Powers, and Appointment Act", link: "/legislation/judiciary" },
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
