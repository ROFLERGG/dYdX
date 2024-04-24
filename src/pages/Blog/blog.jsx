import Layout from "../../components/layout"
import BlogFilter from "./components/blog-filter"

const Blog = () => {
  return (
    <Layout>
      <div className="py-[80px] max-lg:py-[40px]">
        <div className="container">
          <div className="flex justify-center">
            <div className="flex flex-col space-y-10 max-w-[800px] overflow-x-hidden">
              <div className="flex flex-col items-center space-y-6 text-center">
                <h2 className="heading-xl text-white-100">Blog</h2>
              </div>
              <BlogFilter/>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Blog