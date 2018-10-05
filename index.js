#!/usr/bin/env node

const program = require('commander');

const User = require('./src/user');
const Budget = require('./src/budget');

program
  .version('0.1.0');

program
  .command('user')
  .action(cmd => {
    User.get()
      .then(user => {
        console.log(user);
      });
  })

program
  .command('budgets')
  .option('--id <id>', 'The id of the budget', null)
  .action((cmd) => {
    if (cmd.id) {
      Budget.get(cmd.id)
        .then(budget => console.log(budget));
    } else {
      Budget.all()
        .then(budgets => console.log(budgets));
    }
  });
 
program.parse(process.argv);

