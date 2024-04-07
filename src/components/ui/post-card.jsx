import Post8 from "./../../assets/post-images/image-block-8.png"
import Post9 from "./../../assets/post-images/image-block-9.png"

const postData = [
  {
    image: Post9,
    category: "Funding round",
    title: "Round 9 of approvals",
    date: "January 1, 2022",
    url: "/"
  },
  {
    image: Post8,
    category: "Funding round",
    title: "Round 8 of approvals",
    date: "January 1, 2022",
    url: "/"
  }
]

const PostCard = () => {
  return (
    postData.map(({image, category, title, date, url}, index) => {
      return (
        <div className="px-3">
          <a href={url} className={`flex ${image && "flex-col"} flex-1  max-w-[400px] h-[440px] max-lg:h-[380px] rounded-2xl bg-secondary hover:bg-secondaryHover duration-150 ease-in-out`}>
            {image &&
              <img src={image} alt={index + 1}/>
            }
            <div className="p-6 flex flex-1 flex-col justify-between">
              <div className="flex flex-col space-y-2">
                <p className="mono-paragraph-md text-white-500">{category}</p>
                <h2 className="heading-md text-white-100">{title}</h2>
              </div>
              <p className="mono-paragraph-md text-white-500">{date}</p>
            </div>
          </a>
        </div>
      )
    })
  )
}

export default PostCard