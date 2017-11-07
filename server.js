const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const open = require('open');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    stats:{
        colors: true
    }   
}));

const target = 'http://localhost:3000';

app.listen(3000, ()=>{
    console.log('Example app listening on Port 3000!\n');
    open(target);
});