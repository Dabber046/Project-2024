/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        'colts-logo'  :"url('/Guessing-Game/JPG/nfl-indianapolis-colts.png')",
        'packers-logo':"url('/Guessing-Game/JPG/nfl-green-bay-packers.png')",
        'detroit-logo':"url('/Guessing-Game/JPG/nfl-detroit-lions.png')",
        "titans-logo" :"url('/Guessing-Game/JPG/nfl-tennessee-titans.png')",
        "miami-logo"  :"url('/Guessing-Game/JPG/Miami-Dolphins.png')",
        "la-logo"     :"url('/Guessing-Game/JPG/los-angeles-rams.png')",

      },
      fontFamily: {
        custom: ['Archivo Black', 'sans-serif'],
      },
    },
  },

  content: [
    './Guessing-Game/**/*.{html,js}', // Adjust paths if needed
  ],
}

