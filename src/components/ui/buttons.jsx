import { cva } from 'class-variance-authority';

const buttonVariants = cva('cursor-pointer rounded-lg', {
  variants: {
    intent: {
      nav: {
        sm: 'px-0 py-0 mono-paragraph-md duration-150 ease-in-out',
        default: 'px-4 py-3 mono-paragraph-md duration-150 ease-in-out'
      },
      btn: {
        primary: 'px-4 py-3 label duration-150 ease-in-out',
        primaryWhite: 'px-4 py-3 label duration-150 ease-in-out',
        secondary: 'px-4 py-3 label duration-150 ease-in-out',
        ghost: 'px-4 py-3 label duration-150 ease-in-out'
      }
    },
    bg: {
      white: 'bg-white-100',
      grey: 'bg-white-500'
    }
  },
})


const Button = ({nav, btn, href, className, ...rest }) => {
  return <a href={href ? href : undefined} className={buttonVariants({ nav, btn, className })} {...rest}/>
}

export default Button