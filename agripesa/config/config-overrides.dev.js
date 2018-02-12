/**
 * Created by ebundala on 2/8/2018.
 */
const path = require('path');
const WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = function(config) {
    // Use your own ESLint file
    /*let eslintLoader = config.module.rules[0];
    eslintLoader.use[0].options.useEslintrc = true;*/

    // Add the SASS loader second-to-last
    // (last one must remain as the "file-loader")
    /*let loaderList = config.module.rules[1].oneOf;
    loaderList.splice(loaderList.length - 1, 0, {
        test: /\.sol/,
        //loader: 'truffle-solidity?migrations_directory='+path.resolve(__dirname, '../migrations' )
        loader: 'do-nothing'
    })*/
    /*loaderList.push({
        test: /\.json/,
        loader: 'do-nothing'
    })*/
   //config.plugins.push(new WebpackShellPlugin({dev:false,onBuildStart:['echo "Webpack Start"',"npm run Compile"], onBuildEnd:['echo "Webpack End"']}));

}