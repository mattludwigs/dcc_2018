class Budget {
  /**
   * Get all of the budgets
   * 
   * @return {Request}
   */
  static all() {
    return {method: 'get', url: 'budgets'};
  }

  /**
   * Get a budget by the budget ID
   * 
   * @return {Request}
   */
  static get(budgetId) {
    return {method: 'get', url: `budgets/${budgetId}`};
  }

  /**
   * Parse a response data into a list of Budgets
   *
   * @param Response
   * @return [Budget]
   */
  static fromResponseList(res) {
    const budgets = res.data.budgets;
    return budgets.map(({id, name}) => new Budget(id, name));
  }

  /**
   * Parse a response data into a budget
   *
   * @param {Response}
   * @return Budget
   */
  static fromResponse(res) {
    const budget = res.data.budget;
    return new Budget(budget.id, budget.name);
  }
  
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

module.exports = Budget;
