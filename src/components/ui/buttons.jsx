import { cva } from 'class-variance-authority';

const buttonVariants = cva('px-4 py-3 rounded-lg', {
  variants: {
    nav: {
      sm: 'px-0 py-0 rounded-none text-white-500 mono-paragraph-md hover:text-white-100 duration-150 ease-in-out',
      default: 'text-white-500 mono-paragraph-md hover:bg-secondaryHover duration-150 ease-in-out active:text-white-100 active:bg-primary'
    },
    btn: {
      primary: 'bg-brand text-white-100 label hover:bg-brandHover duration-150 ease-in-out',
      secondary: 'bg-secondary text-white-100 label hover:bg-secondaryHover duration-150 ease-in-out',
      ghost: 'text-white-500 hover:bg-secondaryHover hover:text-white-100 duration-150 ease-in-out'
    }
  },
})


const Button = ({nav, btn, href, ...rest }) => {
  if (href) {
    return <a href={href} className={buttonVariants({ nav, btn })} {...rest}/>
  } else {
    return <button className={buttonVariants({ nav, btn })} {...rest}/>
  }
}

export default Button