const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    output: { //este es el output de la compilacion de webpack
        filename: 'app.bundle.js'
    },
    plugins: [ //plugins que queremos que utilice en este caso basio el array
        new HtmlWebpackPlugin({ //asi utilizamos la instancia del plugin
            template: 'src/index.html' //asi le pasamos el templeta la plantilla
        }) 
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    }
}
