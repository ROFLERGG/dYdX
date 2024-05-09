import Content from '../../components/content';
import Layout from '../../components/layout';
import BlogFilter from './components/blog-filter';

const Blog = () => {
  return (
    <Layout>
      <Content>
        <div className="flex justify-center">
          <div className="flex flex-col space-y-10 w-[800px] overflow-x-hidden">
            <div className="flex flex-col items-center space-y-6 text-center">
              <h2 className="heading-xl text-white-100">Blog</h2>
            </div>
            <BlogFilter />
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default Blog;
