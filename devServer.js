'use strict';

const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server/lib/Server');
const webpackConfig = require('./webpack.config');

const compiler = Webpack(webpackConfig);
const server = new WebpackDevServer(compiler,{
    stats:{
        colors: true
    }
});

server.listen(8080,'127.0.0.1',()=>{
    console.log('Starting Server on http://localhost:8080');
});