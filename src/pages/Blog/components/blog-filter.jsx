import { useState } from "react"
import Button from "../../../components/ui/buttons"
import BlogData from "../../../data/blog-data.json"
import Sprite from "../../../assets/sprite.svg"
import { Link } from "react-router-dom"
import { PostCard } from "../../../components/ui/post-card"

const BlogFilter = () => {
  const [activeCategory, setActiveCategory] = useState("Latest")
  let filteredPost = BlogData.filter(item => {
    if (activeCategory !== 'Latest' && item.category !== activeCategory) {
      return false
    }
    return true
  })
  const [showMoreItems, setShowMoreItems] = useState(6)
  const [loadMoreActive, setLoadMoreActive] = useState(false)
  const loadMore = () => {
    setLoadMoreActive(true)
    setTimeout(() => {
      setShowMoreItems(prev => prev + 2)
      setLoadMoreActive(false)
    }, 1000);
  }
  return (
    <div className="flex flex-col space-y-10">
      <div className="flex justify-center">
        <div className="flex gap-3 snap-mandatory overflow-x-scroll scrollbar-none">
          <Button onClick={() => setActiveCategory('Latest')} btn={'ghost'} className={`text-white-500 shrink-0 snap-start ${activeCategory === 'Latest' ? '!text-white-100 bg-secondary' : ''}`}>Latest</Button>
          <Button onClick={() => setActiveCategory('Funding round')} btn={'ghost'} className={`text-white-500 shrink-0 snap-start ${activeCategory === 'Funding round' ? '!text-white-100 bg-secondary' : ''}`}>Funding round</Button>
          <Button onClick={() => setActiveCategory('Spotlight')} btn={'ghost'} className={`text-white-500 shrink-0 snap-start ${activeCategory === 'Spotlight' ? '!text-white-100 bg-secondary' : ''}`}>Spotlight</Button>
          <Button onClick={() => setActiveCategory('News & updates')} btn={'ghost'} className={`text-white-500 shrink-0 snap-start ${activeCategory === 'News & updates' ? '!text-white-100 bg-secondary' : ''}`}>News & updates</Button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
        {filteredPost.reverse().slice(0, showMoreItems).map((item) => {
          return (
            <PostCard post={item} key={item.id}/>
          )
        })}
      </div>
      {showMoreItems >= filteredPost.length ? null :
        <div className="flex justify-center">
          <Button onClick={loadMore} btn={'secondary'} bg={'secondary'} text={'white'} className={`flex items-center ${loadMoreActive ? 'space-x-3' : ''}`}>
            {loadMoreActive &&
              <svg className="w-6 h-6 animate-spin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="#C8C7D8" d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z" />
              </svg>
            }
            {loadMoreActive ? null :
              <span className={`label`}>Load more</span>
            }
          </Button>
        </div>
      }
    </div>
  )
}

export default BlogFilter