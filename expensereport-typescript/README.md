# expensereport-typescript
The ExpenseReport refactoring example in TypeScript.

## Technologies used
1. Typescript as the main programming language
2. Jest as the testing framework
3. Eslint as the linting tool
4. Prettier as the formatting tool

##
The ExpenseReport legacy code refactoring kata in various languages.

This is an example of a piece of legacy code with lots of code smells. The goal is to support the following new feature as best as you can:

Add Lunch with an expense limit of 2000.
Process

📚 Read the code to understand what it does and how it works.
🦨 Read the code and check for design smells.
🧑‍🔬 Analyze what you would have to change to implement the new requirement without refactoring the code.
🧪 Write a characterization test. Take note of all design smells that you missed that made your life writing a test miserable.
🔧 Refactor the code.
🔧 Refactor the test.
👼 Test-drive the new feature.

## Prerequisites
1. NVM installed on your machine from [here](https://github.com/nvm-sh/nvm)

## Setup instructions
```shell
./configure.sh  # will use nvm to install and activate the appropriate version of node
npm test # will run all the tests
npm bulid # will create a build of the project
node build/output.js # will run the compiled output
npm run format:check # runs the linter and formatter rules
npm run format:fix # applies a fix to the fixable issues 
```
