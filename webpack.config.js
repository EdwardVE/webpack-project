const path = require('path');

module.exports = {
  entry: './src/index.js', // Archivo de entrada
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // Archivo de salida
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'], // Manejo de archivos CSS
      },
    ],
  },
  mode: 'development', // Modo de desarrollo
};
