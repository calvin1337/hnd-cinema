/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    
 
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }
    
      'md': '768px',
      // => @media (min-width: 768px) { ... }

    
      
      'lg': '992px',
      // => @media (min-width: 992px) { ... }
    
      'xl': '1200px',
      // => @media (min-width: 1200px) { ... }
    },
  },
  plugins: [],
 
    theme: {
      container: {
        center: true,
      },
    },
  
}