import { RentabilityASAPScreen } from './components/graphs/example-graph/RentabilityGraph'
import { OnlyRentabilityASAPScreen } from './components/graphs/only-rentability.tsx/OnlyRentability'
import { ExpensesDetailsScreen } from './components/graphs/expenses-details/ExpensesDetails'
import { MultiplyExpensesScreen } from './components/graphs/multiple-expenses/MultipliExpenses'
import { ExpensesIncomeScreen } from './components/graphs/expenses-income/ExpensesIncome'

export const App = () => {
  return (
    <main>
      <h1>Chart.js</h1>
      <RentabilityASAPScreen />
      <OnlyRentabilityASAPScreen />
      <ExpensesDetailsScreen />
      <MultiplyExpensesScreen />
      <ExpensesIncomeScreen />
    </main>
  )
}
