import { useParams } from "react-router-dom"
import Layout from "../../../components/layout"
import BlogData from "../../../data/blog-data.json"
import Badge from "../../../components/ui/badges"
import Button from "../../../components/ui/buttons"
import Sprite from "../../../assets/sprite.svg"

const BlogPage = () => {
  const { id } = useParams();

  // const post = BlogData.find(post => post.id == id)

  return (
    <Layout>
      <div className="py-[80px] max-lg:py-[40px]">
        <div className="container">
          <div className="flex justify-center">
            <div className="flex flex-col w-[800px]">
              <div className="flex justify-center">
                <div className="flex flex-col space-y-10 max-lg:space-y-5">
                  <div className="flex flex-col items-center">
                    <span className="mono-paragraph-md text-white-500">category</span>
                    <h2 className="heading-xl text-white-100">asdasdasdasd</h2>
                  </div>
                  {/* by */}
                  <div className="flex justify-center">
                    <div className="flex flex-col items-center space-y-4">
                      <h2 className="heading-sm text-white-100">By:</h2>
                      <div className="flex items-center py-3 px-5 rounded-full bg-secondary hover:bg-secondaryHover cursor-pointer select-none paragraph-md text-white-100">dYdX Grants Team</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPage