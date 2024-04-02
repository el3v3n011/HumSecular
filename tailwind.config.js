/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors :{
        partyRed: '#EB0D12'
      },
      backgroundImage :{
        "gr1":"url('/images/homepage/gr1.jpeg')",
        "ss1":"url('/images/homepage/ss1.jpeg')",
        "gr2":"url('/images/homepage/gr2.jpeg')",
        "ss2":"url('/images/homepage/ss2.jpg')",
        
        


      }
    },
  },
  plugins: [],
}

