const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module:{
    rules:[{
        /** This is file file having extension .css */
        test:/\.css$/,
        /** This enable you to import './syle.css */
        use:[
            'style-loader',
            'css-loader'
        ]
    },
        {
            /** this is used to find out all images with the following extension */
            test:/\.(png|svg|jpg|gif)$/,
            /** to load the image use file-loader */
            use:[
                'file-loader'
            ]
        },
        {
            /** finding font for the use of the application */
            test:/\.(woff|woff2|eot|otf)$/,
            use:[
                'file-loader'
            ]
        },
        {
            test:/\.(csv|tsv)$/,
            use:
            [
                'csv-loader'
            ]
        },
        {
            test:/\.xml$/,
            user:[
                'xml-loader'
            ]
        }
    ]
  }
};