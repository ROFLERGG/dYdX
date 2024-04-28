import { Link } from 'react-router-dom'
import Image from '/image-block-8.png'



const PostCard = ({ post }) => {
  return (
    <Link to={`/blog/${post.id}`} className={`flex ${post.image && "flex-col"} flex-1 h-[440px] rounded-2xl bg-secondary hover:bg-secondaryHover duration-150 ease-in-out`}>
      <img width={380} height={200} src={Image} alt={post.id}/>
      <div className="p-6 flex flex-1 flex-col justify-between">
        <div className="flex flex-col space-y-2">
          <p className="mono-paragraph-md text-white-500">{post.category}</p>
          <h2 className="heading-md text-white-100">{post.title}</h2>
        </div>
        <p className="mono-paragraph-md text-white-500">{post.date}</p>
      </div>
    </Link>
  )
}

const PostCards = () => {
  return (
    BlogData.map(( post ) => {
      return (
        <PostCard post={post} key={post.id}/>
      )
    })
  )
}

export {PostCard}

export default PostCards