const postData = [
  {
    image: "",
    category: "",
    title: "",
    date: "",
    url: "/"
  },
]

const PostCard = () => {
  return (
    postData.map(({image, category, title, date, url}) => {
      return (
        <div className="px-3">
          <a href={url} className={`flex ${image && "flex-col"} flex-1 max-w-[400px]`}>
            {image &&
              <div className="w-full">
                <img src="" alt="" />
              </div>
            }
          </a>
        </div>
      )
    })
  )
}