import Button from "../../../components/ui/buttons"

const categories = [
  {
    key: 'all',
    title: 'All'
  },
  {
    key: 'open',
    title: 'Open'
  },
  {
    key: 'funded',
    title: 'Funded'
  },
  {
    key: 'completed',
    title: 'Completed'
  },
]

const CategoryHandler = () => {
  return (
    categories.map((category) => {
      return (
        <Button btn={'ghost'} className={'text-white-500'}>{category.title}</Button>
      )
    })
  )
}

export default CategoryHandler