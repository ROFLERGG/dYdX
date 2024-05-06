import { useParams } from "react-router-dom"
import Layout from "../../../components/layout"
import useFetch from "../../../hooks/useFetch";
import { useEffect, useState } from "react";
import Markdown from "markdown-to-jsx";

const BlogPage = () => {
  const { id } = useParams();
  const url = 'https://raw.githubusercontent.com/ROFLERGG/dYdX/main/src/data/blog-data.json'
  const { data, isLoading } = useFetch(url)
  const [postContent, setPostContent] = useState();

  const fetchPost = async () => {
    const response = await fetch(`/posts/${id}.md`);
    const text = await response.text();

    const metadataArray = text.split("---")[1].trim().replaceAll("\n", "").split("\r");
    let metadataObject = {}
    metadataArray.forEach(r => {
      const [key, value] = r.split(": ");
      metadataObject[key] = value
    })

    setPostContent( {
      metadata: metadataObject,
      content: text.split("---")[2]
    } )

  }

  useEffect(() => {
    fetchPost()
  },[])
  console.log(postContent);

  const post = data.find(post => post.id == id)

  // if (!post) {
  //   return null
  // }
  
  // if (!postContent) {
  //   return <h1>sorry doesnt exist</h1>
  // }
  return (
    <Layout>
      <div className={`py-[80px] max-lg:py-[40px] ${!postContent ? 'flex flex-col justify-center flex-1' : ''}`}>
        <div className="container">
          <div className={`flex justify-center flex-1`}>
            {postContent && post &&
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
                  <div className="flex justify-center"><Markdown className='prose max-w-full prose-p:text-white-500 prose-headings:text-white-100 prose-headings:heading-lg'>{postContent.content}</Markdown></div>
                </div>
              </div>
            }
            
            {!postContent &&
              <div>
                <h1 className="heading-lg text-white-500">Post doesnt exist :(</h1>
              </div>
            }
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPage