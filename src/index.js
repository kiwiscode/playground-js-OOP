// Entry
class Entry {
  constructor(date, amount, description) {
    this.date = date;
    this.amount = amount;
    this.description = description;
  }

  getFormattedAmount() {
    return `${this.amount} €`;
  }
}

// Income
class Income extends Entry {
  constructor(date, amount, description) {
    super(date, amount, description);
    this.type = "income";
  }
}

// Expense
class Expense extends Entry {
  constructor(date, amount, description, paid) {
    super(date, amount, description);
    this.paid = paid;
    this.type = "expense";
  }
  getFormattedAmount() {
    return `-${this.amount} €`;
  }
}

// Budget
class Budget {
  constructor() {
    this.entries = [];
    this.incomeInstance = new Income();
    this.expenseInstance = new Expense();
  }

  addEntry(entry) {
    return this.entries.push(entry);
  }
  // should be defined
  // should take 1 argument (entry)
  // should add the entry argument to the 'entries' array
  getCurrentBalance() {
    if (this.entries.length === 0) {
      return 0;
    }

    const totalIncome = this.entries
      .filter((entry) => entry instanceof Income)
      .reduce((sum, income) => sum + income.amount, 0);

    const totalExpense = this.entries
      .filter((entry) => entry instanceof Expense)
      .reduce((sum, expense) => sum + expense.amount, 0);

    return totalIncome - totalExpense;
  }
  // should be defined
  // should take no arguments
  // should return 0 if there are no entries
  // should return the difference between the total income and the total expense of all entries

  getFormattedEntries() {
    const formattedEntries = this.entries.map((eachEntry) => {
      return `${eachEntry.date} | ${
        eachEntry.description
      } | ${eachEntry.getFormattedAmount()}`;
    });
    return formattedEntries;
  }
  // BONUS: getFormattedEntries()
  // should be defined
  // should take no arguments
  // should return an array of strings with the formatted entries
}

const income1 = new Income("2024-06-17", 10, "other");
const income2 = new Income("2024-06-17", 3456, "salary");
const expense1 = new Expense("2024-06-17", 100, "food", true);
const expense2 = new Expense("2024-06-17", 99, "food", true);

const budget = new Budget();

budget.addEntry(income1);
budget.addEntry(income2);
budget.addEntry(expense1);
budget.addEntry(expense2);

const formattedEntries = budget.getFormattedEntries();

console.log(formattedEntries);
