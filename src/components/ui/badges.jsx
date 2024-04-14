import { cva } from 'class-variance-authority';

const badgeVariants = cva('px-4 py-1 rounded-full paragraph-md text-white-100 select-none', {
  variants: {
    variant: {
      funded: 'bg-primary border border-subtle',
      open: 'bg-brand',
      success: 'bg-green',
      error: 'bg-red'
    }
  },
  defaultVariants: {
    variant: 'funded',
  },
})


const Badge = ({variant, ...rest}) => {
  return (
    <div className={badgeVariants({ variant })} {...rest}></div>
  )
}

export default Badge