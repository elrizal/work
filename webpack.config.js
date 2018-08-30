// const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// const port = process.env.PORT || 3000;

// module.exports = {
//   mode: 'development',  
//   entry: './src/index.js',
//   output: {
//     filename: 'bundle.[hash].js'
//   },
//   devtool: 'inline-source-map',
//   module: {
//     rules: [
//       {
//         test: /\.(js)$/,
//         exclude: /node_modules/,
//         use: ['babel-loader']
//       },
//       {
//         test: /\.css$/,
//         use: [
//           {
//             loader: 'style-loader'
//           },
//           {
//             test: /\.(ttf|eot|svg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
//             include: SRC,
//             use: [{
//                 loader: 'file-loader'
//             },
          
//             loader: 'css-loader',
//             options: {
//               modules: true,
//               camelCase: true,
//               sourceMap: true
//             }
//           }
//         ]
//       }
//     ]
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: 'public/index.html',
//       favicon: 'public/favicon.ico'
//     })
//   ],
//   devServer: {
//     host: 'localhost',
//     port: port,
//     historyApiFallback: true,
//     open: true
//   }
// };
const buildValidations = require('./build-utils/build-validations');
const commonConfig = require('./build-utils/webpack.common');
const webpackMerge = require('webpack-merge');
const addons = (/* string | string[] */ addonsArg) => {
  let addons = [...[addonsArg]] // Normalize array of addons (flatten)
    .filter(Boolean); // If addons is undefined, filter it out

  return addons.map(addonName => require(`./build-utils/addons/webpack.${addonName}.js`));
};

module.exports = env => {
  if (!env) {
    throw new Error(buildValidations.ERR_NO_ENV_FLAG);
  }

  const envConfig = require(`./build-utils/webpack.${env.env}.js`);
  const mergedConfig = webpackMerge(
    commonConfig,
    envConfig,
    ...addons(env.addons)
  );

  return mergedConfig;
};