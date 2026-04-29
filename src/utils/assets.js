const assetPaths = {
  logo: "/assets/logo.png",
  footerLogo: "/assets/logo-xl.png",
  interactions: {
    call: "/assets/call.png",
    text: "/assets/text.png",
    video: "/assets/video.png",
  },
  social: [
    { href: "https://instagram.com", label: "Instagram", icon: "/assets/instagram.png" },
    { href: "https://facebook.com", label: "Facebook", icon: "/assets/facebook.png" },
    { href: "https://twitter.com", label: "Twitter", icon: "/assets/twitter.png" },
  ],
};

const getInteractionIcon = (type) => assetPaths.interactions[type] || assetPaths.interactions.call;

export { assetPaths, getInteractionIcon };
