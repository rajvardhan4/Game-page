/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-background":
          "url('https://img.freepik.com/free-photo/beautiful-mountains-landscape_23-2151151081.jpg')",
          backgroundsize: "cover" ,
           backgroundposition: "center" ,
          backgroundrepeat: "no-repeat" 
      },
    },
  },
  plugins: [],
};
