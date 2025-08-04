/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto)"],
      },
      colors: {
        black: "#1d1d1b",
        yellow: "#ffc000",
        "dark-green": "#282827",
        "steel-gray": "#7f858a",
        "light-gray": "#f0eeee",
        "dark-gray": "#606060",
        "dem-gray": "#f1f1f1",
        "olive-gray": "#d2d2d2",
        "misty-gray": "#989fa6",
        "silver-gray": "#adada8",
      },
      maxWidth: {
        container: "1170px",
      },
      spacing: {
        container: "0.938rem",
        section: "120px",
      },
      fontSize: {},
      screens: {
        sm: "640px",

        md: "768px",

        lg: "1100px",

        xl: "1280px",

        "2xl": "1536px",
      },
      backgroundImage: {
        logo: "url('/home1/elements.png')",
        service: "url('/home1/service/service-bg.png')",
        "service-2": "url('/home1/service/service-bg-2.png')",
        booking: "url('/home1/booking/booking.png')",
        download: "url('/home1/download/download.png')",
        safety: "url('/home1/safety/safety.png')",
        cta: "url('/home1/cta/cta.png')",
        "vid-section": "url('/home2/video/video-bg.png')",
        "footer-2": "url('/home2/footer/footer-bg.png')",
        "booking-2": "url('/home2/booking/booking.jpg')",
        "page-heading": "url('/page-heading.webp')",
        "page-heading-effect": "url('/heading.png')",
      },
      boxShadow: {
        card: "0px 8px 44px 0px rgba(12, 12, 12, 0.06)",
        "card-2": "0px 8px 29px 0px rgba(0, 0, 0, 0.05)",
        "card-3": "0px 10px 26px 0px rgba(0, 0, 0, 0.09)",
      },
    },
  },
  plugins: [],
};
