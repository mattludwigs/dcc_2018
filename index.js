#!/usr/bin/env node

const program = require('commander');

const User = require('./src/user');
const Budget = require('./src/budget');
const Client = require('./src/client');
const Response = require('./src/response');

const authToken = process.env.YNAB_TOKEN;

const client = new Client({
  baseURL: 'https://api.youneedabudget.com/v1',
  authToken: authToken
});

const mkBudgetRequest = budgetId => {
  if (budgetId) {
    return Budget.get(budgetId);
  } else {
    return Budget.all();
  }
}

program
  .version('0.1.0');

program
  .command('user')
  .action(cmd => {
    client
      .runRequest(User.get())
      .then(User.fromResponse)
      .then(user => console.log(user));
  })

program
  .command('budgets')
  .option('--id <id>', 'The id of the budget', null)
  .action((cmd) => {
    client
      .runRequest(mkBudgetRequest(cmd.id))
      .then(res => Response.parseOneOf(res, [Budget.fromResponseList, Budget.fromResponse]))
      .then(console.log);
  });
 
program.parse(process.argv);

