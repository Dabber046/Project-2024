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
        "chicago"     :"url('/Guessing-Game/JPG/Chicago.jpg')",
        "meerkat"     :"url('/Guessing-Game/JPG/Meerkat.jpg')",
        "football"    :"url('/Guessing-Game/JPG/football.jpg')",

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

