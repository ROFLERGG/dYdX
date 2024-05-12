import Layout from '../../components/layout';
import CallToAction from '../../components/sections/call-to-action';
import CardFilter from './components/card-filter';
import Content from '../../components/content';

const FundedGrants = () => {
  return (
    <Layout>
      <Content>
        <div className="flex flex-col space-y-10 pt-10">
          <div className="flex justify-center">
            <h2 className="heading-xl text-white-100">Funded grants</h2>
          </div>
          <CardFilter />
        </div>
      </Content>
      <CallToAction />
    </Layout>
  );
};

export default FundedGrants;
