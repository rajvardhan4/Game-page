/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-background":
          "url('https://ideogram.ai/assets/progressive-image/balanced/response/-JHIr_7FQYOpPuC6x2yFJg')",
          backgroundsize: "cover" ,
           backgroundposition: "center" ,
          backgroundrepeat: "no-repeat" 
      },
    },
  },
  plugins: [],
};
