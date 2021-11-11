/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const message = 'Hello, World!\n'

const sumTwoValues = (a: number, b: number): number => a + b

const printHelloWorld = (): void => {
  process.stdout.write(message)
}

function getMealExpensesAmount(expenses: Expense[]) {
  const mealExpenses = expenses.filter(expense => expense.isMeal)
  return getTotalExpensesAmount(mealExpenses)
}

function getTotalExpensesAmount(expenses: Expense[]) {
  return expenses.reduce((acc, currentExpense) => {
    acc += currentExpense.amount
    return acc
  }, 0)
}

function getTodayDate() {
  return new Date().toISOString().substr(0, 10)
}

type MealExpenseType = 'dinner' | 'breakfast' | 'lunch'
type ExpenseType = MealExpenseType | 'car-rental'
type ExpenseConfig = Record<
  ExpenseType,
  { name: string; overExpenseThreshold?: number; isMeal?: boolean }
>
const expenseConfig: ExpenseConfig = {
  breakfast: { name: 'Breakfast', overExpenseThreshold: 1000, isMeal: true },
  lunch: { name: 'Lunch', overExpenseThreshold: 2000, isMeal: true },
  dinner: { name: 'Dinner', overExpenseThreshold: 5000, isMeal: true },
  'car-rental': {
    name: 'Car Rental',
  },
}

class Expense {
  type: ExpenseType
  amount: number
  name: string
  isMeal: boolean
  isOverExpense: boolean

  constructor(type: ExpenseType, amount: number) {
    this.type = type
    this.amount = amount
    this.name = this.getExpenseName(type)
    this.isMeal = this.getIsMeal(type)
    this.isOverExpense = this.getIsOverExpense(type, amount)
  }

  getExpenseName(type: Expense['type']) {
    return expenseConfig[type].name
  }

  getIsMeal(type: Expense['type']) {
    return Boolean(expenseConfig[type].isMeal)
  }

  getIsOverExpense(type: Expense['type'], amount: Expense['amount']) {
    const threshold = expenseConfig[type].overExpenseThreshold
    return Boolean(threshold && amount > threshold)
  }
}

function printReport(expenses: Expense[]) {
  process.stdout.write('Expenses: ' + getTodayDate() + '\n')
  expenses.forEach(expense => {
    const overExpense = expense.isOverExpense ? 'X' : ' '
    process.stdout.write(expense.name + '\t' + expense.amount + '\t' + overExpense + '\n')
  })
  process.stdout.write('Meal Expenses: ' + getMealExpensesAmount(expenses) + '\n')
  process.stdout.write('Total Expenses: ' + getTotalExpensesAmount(expenses) + '\n')
}

export { sumTwoValues, printHelloWorld, printReport, Expense, ExpenseType }
