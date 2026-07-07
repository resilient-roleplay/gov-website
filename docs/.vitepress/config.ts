export default {
  title: "Resilient Roleplay",
  description: "Central Government Hub",
  lang: 'en-US',
  cleanUrls: true,
  // If this is disabled, when building it it will give deadlink errors if your markdown has the wrong links
  ignoreDeadLinks: true,
  appearance: false, // Disable theme toggle completely
  
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
      { text: "Home", link: "/home" },
      {
        text: "Applications",
        link: "/applications",
        items: [
          { text: "Los Santos Police Department", link: "https://discord.gg/Fpzq3RqX" },
          { text: "San Andreas Medical Service", link: "https://discord.gg/bevFqxYN" },
          { text: "Department of Justice", link: "https://discord.gg/Fpzq3RqX" },
        ],
      },
      {
      text: "State of San Andreas - State Register of Laws",
      link: "/legislation",
      collapsible: false,
      collapsed: false,
      items: [
        { text: "Updates & Amendments", link: "/legislation/updates" },
        /* { text: "Setup", link: "/legislation/setup" }, */
        {
          text: "Legislation",
          collapsible: false,
          collapsed: true,
          items: [
            { text: "Constitution of the State of San Andreas", link: "/legislation/constitution" },
            { text: "Business Licensing & Operations Act", link: "/legislation/business-licensing" },
            { text: "Due Process and Jurisprudence Act", link: "/legislation/due-process" },
            { text: "Search and Seizure Act", link: "/legislation/search-seizure" },
            { text: "Legislative Enactment and Contest Procedure Act", link: "/legislation/legislation-enactment" },
            { text: "Legislative Audit Procedure Act", link: "/legislation/legislative-audit" },
            { text: "Stand Your Ground & Castle Doctrine Act", link: "/legislation/stand-your-ground" },
            { text: "Expungement Legislation Act", link: "/legislation/expungement" },
            { text: "First Time Felony Diversion Program Act", link: "/legislation/fdp" },
            { text: "Impeachment and Authority Conduct Review Act", link: "/legislation/impeachment-acr" },
            { text: "Freedom of Information Act", link: "/legislation/foia" },
            { text: "Unified Police Department Establishment Act", link: "/legislation/upd-act" },
            { text: "Police Commissioners Authority Act", link: "/legislation/police-commissioners-authority" },
            { text: "San Andreas Medical Services (SAMS) Authority & Operations Act", link: "/legislation/sams" },
            { text: "Controlled Substances and Narcotics Act (CSNA)", link: "/legislation/CSNA" },
            { text: "Medical Information Privacy and Protection Act (MIPPA)", link: "/legislation/mippa" },
            { text: "DNA Legislation Act", link: "/legislation/dna" },
            { text: "Statute of Limitations Legislation", link: "/legislation/statute" },
            { text: "Marriage Act", link: "/legislation/marriage-act" },
            { text: "Powers and Definitions of Law Enforcement Officers (LEOs) Act", link: "/legislation/leos" },
            { text: "Garrity Act", link: "/legislation/garrity" },
            { text: "Law Enforcement Negotiation and Sentencing Adjustment (LENSA) Act", link: "/legislation/lensa" },
            { text: "Bail Legislation Act", link: "/legislation/bail" },
            { text: "Mutual Combat and Trial by Combat Legislation", link: "/legislation/mutual-combat" },
            { text: "Police K-9 Legal Protections Act", link: "/legislation/k9" },
            { text: "Weapons & Drivers License Legislation Act", link: "/legislation/weapons-driving-licenses" },
            { text: "Firearms Control and Licensing Act (FCLA)", link: "/legislation/FCLA" },
            { text: "Statewide Traffic Ordinances Act", link: "/legislation/traffic-ordinance" },
            { text: "Legal Profession Classification and BAR Licensing Act", link: "/legislation/lawyers" },
            { text: "Judicial Structure, Powers, and Appointment Act", link: "/legislation/judiciary" },
            { text: "Repeat Offender Sentencing Enhancement Act (ROSEA)", link: "/legislation/ROSEA" },
            { text: "Alcohol Control & Licensing Act (ACLA)", link: "/legislation/ACLA" },
          ],
        },
        {
          text: "Case Law ",
          collapsible: false,
          collapsed: true,
          items: [
            { text: "Tennessee v. Garner (1985)", link: "/legislation/case-law/Tennessee v. Garner (1985)" },
            { text: "Terry v. Ohio (1968)", link: "/legislation/case-law/Terry v. Ohio (1968)" },
            { text: "Pennsylvania v. Mimms (1977)", link: "/legislation/case-law/Pennsylvania v. Mimms (1977)" },
            { text: "Maryland v. Wilson (1997)", link: "/legislation/case-law/Maryland v. Wilson (1997)" },
            { text: "Wyoming v. Houghton (1999)", link: "/legislation/case-law/Wyoming v. Houghton (1999)" },
            { text: "Maryland v. King (2013)", link: "/legislation/case-law/Maryland v. King (2013)" },
            { text: "Miranda v. Arizona (1966)", link: "/legislation/case-law/Miranda v. Arizona (1966)" },
            { text: "Rhode Island v. Innis (1980)", link: "/legislation/case-law/Rhode Island v. Innis (1980)" },
            { text: "Carroll v. United States (1925)", link: "/legislation/case-law/Carroll v. United States (1925)" },
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
