import Layout from "../../components/layout"
import ExpensesFilter from "./components/expenses-filter"

const ProgramExpenses = () => {
  return (
    <Layout>
      <div className="py-[80px] max-lg:py-[40px]">
        <div className="container">
          <div className="flex justify-center">
            <div className="flex flex-col space-y-10 w-[800px] overflow-x-hidden">
              <div className="flex flex-col items-center space-y-6 text-center">
                <h2 className="heading-xl text-white-100">Program expenses</h2>
              </div>
              <ExpensesFilter/>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProgramExpenses