const autoprefixer = require("autoprefixer");
const postcssImport = require("postcss-import");

module.exports = {
  plugins: [
    postcssImport, // Resuelve @import y los combina en un solo archivo
    autoprefixer, // Agrega prefijos para compatibilidad entre navegadores
  ],
};
