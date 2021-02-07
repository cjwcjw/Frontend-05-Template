var Generator = require('yeoman-generator');

module.exports = class extends Generator {
    // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);
  }

  async initPackage() {
    let answer = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "Your project name",
        default: this.appname // Default to current folder name
      },
    ])
    const pkgJson = {
      "name": answer.name,
      "version": "1.0.0",
      "description": "",
      "main": "generators/app/index.js",
      "scripts": {
        "start": "webpack-dev-server",
        "build": "webpack",
        "test": "mocha --require @babel/register",
        "coverage": "nyc mocha"
      },
      "author": "",
      "license": "ISC",
      "dependencies": {
      }
    }
    ;

    // Extend or create package.json file in destination path
    this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);
    this.npmInstall(["vue"],{'save-dev': false});
    this.npmInstall([
      "webpack", 
      "webpack-cli",
      "babel-loader",
      "vue-loader", 
      "vue-template-compiler",
      "vue-style-loader",
      "mocha",
      "nyc",
      "@istanbuljs/nyc-config-babel",
      "babel-plugin-istanbul",
      "@babel/core", 
      "@babel/preset-env", 
      "@babel/register",
      "css-loader",
      "copy-webpack-plugin",],
      {'save-dev': true});


    // copyFiles

    this.fs.copyTpl(
      this.templatePath('sample-test.js'),
      this.destinationPath('test/sample-test.js'),
      {}
    );

  
    this.fs.copyTpl(
      this.templatePath('.babelrc'),
      this.destinationPath('.babelrc'),
      {}
    );
  
    this.fs.copyTpl(
      this.templatePath('.nycrc'),
      this.destinationPath('.nycrc'),
      {}
    );

    this.fs.copyTpl(
      this.templatePath('HelloWorld.vue'),
      this.destinationPath('src/HelloWorld.vue'),
      {}
    );
    // webpack
    this.fs.copyTpl(
      this.templatePath('webpack.config.js'),
      this.destinationPath('webpack.config.js'),
      {}
    );
    // main.js
    this.fs.copyTpl(
      this.templatePath('main.js'),
      this.destinationPath('src/main.js'),
      {}
    );
    this.fs.copyTpl(
      this.templatePath("index.html"), 
      this.destinationPath("src/index.html"), 
      { title: answer.name }
    );
  }
};