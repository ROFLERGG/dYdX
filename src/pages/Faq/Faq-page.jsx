import Content from '../../components/content';
import Layout from '../../components/layout';
import CallToAction from '../../components/sections/call-to-action';
import { AllFaqQuestions } from '../../components/ui/faq-button';

const FaqPage = () => {
  return (
    <Layout>
      <Content>
        <div className="flex justify-center pt-10">
          <div className="flex flex-col space-y-20 w-[800px]">
            <div className="flex justify-center">
              <h2 className="heading-xl text-white-100 text-center">Frequently asked questions</h2>
            </div>
            <AllFaqQuestions />
          </div>
        </div>
      </Content>
      <CallToAction />
    </Layout>
  );
};

export default FaqPage;
