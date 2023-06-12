'use strict'

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {VueLoaderPlugin} = require('vue-loader')

module.exports = {
  mode: 'development',
  entry: './src/js/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
   
    assetModuleFilename: 'images/[hash][ext][query]'    
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({ 
      template: './src/index.html',
      meta: {
            'description': { name: 'description', contnet: 'Welcome to my portfoli' },
            'keyword': { name: 'keywords', content: 'portfolio, dev, developer portfolio, dev website, development' },
            'og:title': { property: 'og:title', content: 'Astokum Portfolio' },
            'og:description': { property: 'og:description', content: 'Welcome to my portfolio' },
            'og:type': { property: 'og:type', content: 'website' },
            'og:url': { property: 'og:url', content: '...' },
            'og:image': { property: 'og:image', content: './src/assets/devname.jpg' },
            'twitter:card': { name: 'twitter:card', content: 'summary_large_image' },
            'twitter:title': { name: 'twitter:title', content: '...' },
            'twitter:description': { name: 'twitter:description', content: '...' },
            'twitter:image': { name: 'twitter:image', content: '...' }
      },
      inject: 'body'
    }),
	 // make sure to include the plugin!
    new VueLoaderPlugin()
  ],
 module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: 'style-loader'
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: 'css-loader'
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [
                  autoprefixer
                ]
              }
            }
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: 'sass-loader'
          }
        ]
      },
	  {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
       { test: /\.css$/, use: ['vue-style-loader', 'css-loader']},

       {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      
    ]

    
  }
}