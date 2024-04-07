const PostData = [
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
    PostData.map((post) => {
      return (
        <a href={post.url} className="flex flex-col"></a>
      )
    })
  )
}