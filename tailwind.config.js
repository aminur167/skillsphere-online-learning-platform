import daisyui from "daisyui";

const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#172033",
        coral: "#f9735b",
        mint: "#28c7a1",
        ocean: "#2563eb",
        amberSoft: "#fff2d8"
      },
      boxShadow: {
        soft: "0 18px 60px rgba(23, 32, 51, 0.12)"
      }
    }
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        skillsphere: {
          primary: "#f9735b",
          secondary: "#2563eb",
          accent: "#28c7a1",
          neutral: "#172033",
          "base-100": "#fffaf5",
          info: "#38bdf8",
          success: "#22c55e",
          warning: "#f59e0b",
          error: "#ef4444"
        }
      }
    ]
  }
};

export default config;
