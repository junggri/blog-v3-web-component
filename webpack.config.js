const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
   entry: "./index.ts",
   output: {
      filename: "bundle.js",
      path: path.join(__dirname, "build"),
      publicPath: "/build/"
      //개밠서버인데
   },
   module: {
      rules: [
         {
            test: /\.ts$/,
            use: "ts-loader",
            include: path.join(__dirname + "/src"),
            exclude: /node_modules/
         },
         {
            test: /\.scss$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            exclude: /node_modules/
         }
      ]
   },
   plugins: [
      new MiniCssExtractPlugin({filename: `index.css`})
   ],
   resolve: {
      alias: {
         "~": path.resolve(__dirname, "/src")
      },
      modules: [path.join(__dirname + "/src"), "node_modules"],
      extensions: [".js", ".ts"],
   },
   devServer: {
      static: {
         directory: path.join(__dirname, "public"),
      },
      hot: true,
      host: "localhost",
      port: 8000,
   },
   mode: "development"
};
