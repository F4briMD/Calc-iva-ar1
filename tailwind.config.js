/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html','./src/**/*.{html,jsx}'],
  theme: {
    extend: {},
    container:{
      padding:{
        // default:'15px',
      },
      screens:{
        sm:'640px',
        md:'768px',
        lg:'960px',
        xl:'1200px',
      },
    },
  },
  plugins: [],
}

