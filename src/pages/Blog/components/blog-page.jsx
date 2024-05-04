import { useLocation, useParams } from "react-router-dom"
import Layout from "../../../components/layout"
import useFetch from "../../../hooks/useFetch";

const BlogPage = () => {
  const { id } = useParams();
  const url = 'https://raw.githubusercontent.com/ROFLERGG/dYdX/main/src/data/blog-data.json'
  const { data, isLoading } = useFetch(url) 

  const post = data.find(post => post.id == id)

  if (!post) {
    return null
  }
  
  return (
    <Layout>
      <div className="py-[80px] max-lg:py-[40px]">
        <div className="container">
          <div className="flex justify-center">
            <div className="w-[800px] flex flex-col space-y-10 max-lg:space-y-5">
              <div className="flex justify-center">
                {/* heading */}
                <div className="flex flex-col space-y-10 max-lg:space-y-5">
                  <div className="flex flex-col items-center">
                    <span className="mono-paragraph-md text-white-500">{post.category}</span>
                    <h2 className="heading-xl text-white-100 text-center">{post.title}</h2>
                  </div>
                  {/* author */}
                  <div className="flex justify-center">
                    <div className="flex flex-col items-center space-y-4">
                      <h2 className="heading-sm text-white-100">By:</h2>
                      <div className="flex items-center py-3 px-5 rounded-full bg-secondary hover:bg-secondaryHover cursor-pointer select-none paragraph-md text-white-100">dYdX Grants Team</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* content */}
              <div className="flex flex-col space-y-10 max-lg:space-y-5">
                {/* image */}
                {post.image &&
                  <div>
                    <img width={800} height={460} className="object-cover object-center w-full h-full" src={post.image} alt={`image${post.id}`} />
                  </div>
                }
                <div className="flex flex-col space-y-10 max-lg:space-y-5">
                  {post.head1 || post.desc1 &&
                    <div className={`flex flex-col ${post.head1 ? 'space-y-6' : ''}`}>
                      <p className="paragraph-md text-white-500">{post.desc1}</p>
                    </div>
                  }
                  {(post.head2 || post.desc2) ?
                    <div className={`flex flex-col ${post.head2 ? 'space-y-6' : ''}`}>
                      <h2 className="heading-lg text-white-100">{post.head2}</h2>
                      <p className="paragraph-md text-white-500">{post.desc2}</p>
                    </div>: ""
                  }
                  {post.head3 || post.desc3 &&
                    <div className={`flex flex-col ${post.head3 ? 'space-y-6' : ''}`}>
                      <h2 className="heading-lg text-white-100">{post.head3}</h2>
                      <p className="paragraph-md text-white-500">{post.desc3}</p>
                    </div>
                  }
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