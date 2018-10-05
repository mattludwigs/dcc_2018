const client = require('./client');

class Budget {
  /**
   * Get all of the budgets
   * 
   * @return {Array}
   */
  static all() {
    return client.http.get('/budgets')
      .then(res => {
        const budgets = res.data.data.budgets;
        return budgets.map(({id, name}) => new Budget(id, name));
      })
  }

  /**
   * Get a budget by the budget ID
   * 
   * @return {Budget}
   */
  static get(budgetId) {
    return client.http.get(`/budgets/${budgetId}`)
      .then(res => {
        const budget = res.data.data.budget;
        return new Budget(budget.id, budget.name);
      })
  }
  
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

module.exports = Budget;
