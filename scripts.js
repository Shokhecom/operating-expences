// JavaScript code for calculator functionality
const expenseForm = document.getElementById('expense-form');
const expenseList = document.getElementById('expenses');
const totalExpenses = document.getElementById('total-expenses');
let expenses = [];

expenseForm.addEventListener('submit', addExpense);

function addExpense(event) {
  event.preventDefault();

  const category = document.getElementById('category').value;
  const amount = parseFloat(document.getElementById('amount').value);

  if (category && amount) {
    const newExpense = { category, amount };
    expenses.push(newExpense);

    displayExpense(newExpense);
    updateTotalExpenses();
    clearForm();
  }
}

function displayExpense(expense) {
  const listItem = document.createElement('li');
  listItem.textContent = `${expense.category}: $${expense.amount.toFixed(2)}`;
  expenseList.appendChild(listItem);
}

function updateTotalExpenses() {
  const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  totalExpenses.textContent = '$' + total.toFixed(2);
}

function clearForm() {
  document.getElementById('category').value = '';
  document.getElementById('amount').value = '';
}
