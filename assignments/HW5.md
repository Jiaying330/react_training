# Homework 5
## 1. What are package.json and package-lock.json?
package.json and package-lock.json are files for managing dependencies and configurations 
of the project. package.json allows developers to configure important metadata about the 
project, scripts for different tasks, and lists of dependencies. package-lock.json is an
auto-generated file based on package.json that provides a detailed, deterministic record
of the dependency tree. This ensures the installation of dependencies provides the same
dependency tree every time so when other developers run the project, there won't be any 
error caused by version differences.
## 2. What’s the difference between npm and npx?
npm is primarily used for managing and installing packages that the project depends upon
in order to run or build. npx is used for executing packages directly, without the need for
local installation.
## 3. What is babel?
Babel is a JavaScript compiler that converts JSX syntax and modern JavaScript code into
a backward-compatible version of JavaScript for browsers to understand and compile.
## 4. What is webpack?
Webpack is a module bundler for bundling all JavaScript files and other assets into a few 
files that are easy for browsers to load.
