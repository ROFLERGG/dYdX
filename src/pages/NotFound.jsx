import Content from '../components/content';
import Layout from '../components/layout';

const NotFound = () => {
  return (
    <Layout>
      <Content />
      <div className="flex flex-col justify-center flex-1 z-10">
        <div className="flex justify-center">
          <div className="max-w-[600px] flex flex-1 flex-col items-center space-y-6">
            <h1 className="hero text-white-500">404</h1>
            <h2 className="heading-lg text-white-500">Page not found :(</h2>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
