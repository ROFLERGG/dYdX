import Content from '../../components/content';
import Layout from '../../components/layout';
import ExpensesFilter from './components/expenses-filter';

const ProgramExpenses = () => {
  return (
    <Layout>
      <Content>
        <div className="flex justify-center py-10">
          <div className="flex flex-col space-y-10 w-[800px] overflow-x-hidden">
            <div className="flex flex-col items-center space-y-6 text-center">
              <h2 className="heading-xl text-white-100">Program expenses</h2>
            </div>
            <ExpensesFilter />
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default ProgramExpenses;
