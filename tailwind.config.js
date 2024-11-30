/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'bsh-bg': '#020E13',
        'content-bg': '#3C545E',
        'content-border-color': '#688A8A',
        'subtitle-color': '#BAC9C9',
        'title-color': '#FFFFFF',
        'avatar-border': '#CF0000',
        'current-life': '#545e3c',
        'btns': '#14841F',
        'modal-desc': '#587C8A',
        'adv-color': 'rgba(190, 155, 13, 0.8)',
        'disadv-color': 'rgba(255, 0, 0, 0.8)'
      },
      boxShadow: {
        "inset-red": "inset 0 0 20px 5px rgba(255, 0, 0, 0.5)",
      },
      animation: {
        pulse: "pulse 2s infinite",
      },
      keyframes: {
        pulse: {
          "0%, 100%": { boxShadow: "inset 0 0 20px 5px rgba(255, 0, 0, 0.5)" },
          "50%": { boxShadow: "inset 0 0 30px 10px rgba(255, 0, 0, 0.8)" },
        }
      },
    },
  },
  plugins: [],
}

