const sizes = {};
for (let i = 0; i < 200; i++) {
  sizes[i] = i / 4 + "rem";
  sizes[`${i}.25`] = `${(i + 0.25) / 4}rem`;
  sizes[`${i}.5`] = `${(i + 0.5) / 4}rem`;
  sizes[`${i}.75`] = `${(i + 0.75) / 4}rem`;
}

/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
