# message-board

A demo React app with a custom Webpack configuration.

## How I created this project? (the hard way, read the next section for the easy route)

I started by initializing the package, installing Webpack and some plugins:

    npm init
    npm install -D webpack webpack-cli webpack-dev-server html-webpack-plugin

Then I created the basic folder structure:

    src/
    webpack.config.js

Installed Babel for transpiling code:

    npm install -D @babel/core @babel/preset-env babel-loader

And of course, React:

    npm install -D react react-dom @babel/preset-react

Then configured the build process on `webpack.config.js` and `package.json`.

Finally I installed some extra libraries:

    npm install -D styled-components

References on how to configure Webpack:

* https://webpack.js.org/guides/getting-started/
* https://webpack.js.org/configuration/
* https://webpack.js.org/plugins/
* https://github.com/webpack/webpack
* https://github.com/webpack/webpack-cli
* https://github.com/webpack/webpack-dev-server
* https://github.com/babel/babel
* https://github.com/babel/babel-loader

### But you don't need to do this...

You can start by using some toolchains to bootstrap your project:

* https://reactjs.org/docs/create-a-new-react-app.html
* https://github.com/facebook/create-react-app

These provide very good initial configurations that you can then adapt to your needs.

Using `create-react-app` is a as easy as:

    npx create-react-app my-app-name
