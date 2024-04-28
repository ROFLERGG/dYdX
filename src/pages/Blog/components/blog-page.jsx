import { useLocation, useParams } from "react-router-dom"
import Layout from "../../../components/layout"
import { useEffect, useState } from "react"

const BlogPage = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { id } = useParams();
  
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/ROFLERGG/dYdX/main/src/data/blog-data.json')
    .then(res => res.json())
    .then(data => {
      const postData = data.find(post => post.id == id)
      if (postData) {
        setTimeout(() => {
          setData(postData)
          setIsLoading(false)
        }, 1000);
      }
    })
    .catch(err => {
      console.log("Error: ", err)
    })
  },[])
  
  return (
    <Layout>
      <div className="py-[80px] max-lg:py-[40px]">
        <div className="container">
          <div className="flex justify-center">
            <div className="flex flex-col w-[800px]">
              <div className="flex justify-center">
                <div className="flex flex-col space-y-10 max-lg:space-y-5">
                  <div className="flex flex-col items-center">
                    <span className="mono-paragraph-md text-white-500">{data.title}</span>
                    <h2 className="heading-xl text-white-100"></h2>
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