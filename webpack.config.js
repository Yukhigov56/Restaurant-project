const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./script.js", // Точка входа для index.html
    main: "./main.js", // Точка входа для main.html
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html", // Имя выходного HTML-файла
      template: "./index.html", // Шаблон для index.html
      chunks: ["index"], // Подключение бандла 'index.bundle.js'
    }),
    new HtmlWebpackPlugin({
      filename: "main.html", // Имя выходного HTML-файла
      template: "./main.html", // Шаблон для main.html
      chunks: ["main"], // Подключение бандла 'main.bundle.js'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /.(png|svg|jpe?g|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  mode: "development",
};
