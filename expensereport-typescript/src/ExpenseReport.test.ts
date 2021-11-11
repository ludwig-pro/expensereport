import { printHelloWorld, printReport, sumTwoValues, Expense, ExpenseType } from './ExpenseReport'

describe(`ExpenseReport`, () => {
  let interceptedOutput = ''
  beforeEach(() => {
    interceptedOutput = ''
  })

  jest.spyOn(process.stdout, 'write').mockImplementation((output: string): boolean => {
    interceptedOutput += output
    return true
  })

  it(`should print report for dinner expense with overExpense`, () => {
    printReport([new Expense('dinner', 5001)])
    expect(interceptedOutput).toMatchInlineSnapshot(`
      "Expenses: 2021-11-11
      Dinner	5001	X
      Meal Expenses: 5001
      Total Expenses: 5001
      "
    `)
  })
  it(`should print report for dinner expense without overExpense`, () => {
    printReport([new Expense('dinner', 4999)])
    expect(interceptedOutput).toMatchInlineSnapshot(`
      "Expenses: 2021-11-11
      Dinner	4999	 
      Meal Expenses: 4999
      Total Expenses: 4999
      "
    `)
  })

  it(`should print report for Breakfast expense`, () => {
    printReport([new Expense('breakfast', 1001)])
    expect(interceptedOutput).toMatchInlineSnapshot(`
      "Expenses: 2021-11-11
      Breakfast	1001	X
      Meal Expenses: 1001
      Total Expenses: 1001
      "
    `)
  })
  it(`should print report for Car Rental expense`, () => {
    printReport([new Expense('car-rental', 5001)])
    expect(interceptedOutput).toMatchInlineSnapshot(`
      "Expenses: 2021-11-11
      Car Rental	5001	 
      Meal Expenses: 0
      Total Expenses: 5001
      "
    `)
  })
  it(`should print report for Lunch expense`, () => {
    printReport([new Expense('lunch', 2001)])
    expect(interceptedOutput).toMatchInlineSnapshot(`
      "Expenses: 2021-11-11
      Lunch	2001	X
      Meal Expenses: 2001
      Total Expenses: 2001
      "
    `)
  })

  it(`should print report for multiple over meal expense`, () => {
    printReport([
      new Expense('lunch', 2001),
      new Expense('breakfast', 1001),
      new Expense('dinner', 5001),
      new Expense('car-rental', 5001),
    ])
    expect(interceptedOutput).toMatchInlineSnapshot(`
      "Expenses: 2021-11-11
      Lunch	2001	X
      Breakfast	1001	X
      Dinner	5001	X
      Car Rental	5001	 
      Meal Expenses: 8003
      Total Expenses: 13004
      "
    `)
  })
  it(`should print report for multiple expense`, () => {
    printReport([
      new Expense('lunch', 1000),
      new Expense('breakfast', 500),
      new Expense('dinner', 2500),
      new Expense('car-rental', 5000),
    ])
    expect(interceptedOutput).toMatchInlineSnapshot(`
      "Expenses: 2021-11-11
      Lunch	1000	 
      Breakfast	500	 
      Dinner	2500	 
      Car Rental	5000	 
      Meal Expenses: 4000
      Total Expenses: 9000
      "
    `)
  })
})

describe(`given I have this test suite`, () => {
  it(`should always output Hello, World!`, () => {
    //given
    let actualOutputData = ''
    jest.spyOn(process.stdout, 'write').mockImplementation((data: string): boolean => {
      actualOutputData += data
      return true
    })
    const expectedOutputData = 'Hello, World!\n'

    // when
    printHelloWorld()

    // then
    expect(actualOutputData).toEqual(expectedOutputData)
  })

  it(`should always do the correct sum`, () => {
    // given
    const a = 2,
      b = 3
    const expectedValue = 5

    // when
    const actualValue = sumTwoValues(a, b)

    // then
    expect(actualValue).toEqual(expectedValue)
  })
})
