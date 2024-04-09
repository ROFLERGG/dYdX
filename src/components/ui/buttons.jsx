import { cva } from 'class-variance-authority';

const buttonVariants = cva(' rounded-lg', {
  variants: {
    nav: {
      sm: 'px-0 py-0 rounded-none text-white-500 mono-paragraph-md hover:text-white-100 duration-150 ease-in-out',
      default: 'px-4 py-3 text-white-500 mono-paragraph-md hover:bg-secondaryHover duration-150 ease-in-out active:text-white-100 active:bg-primary'
    },
    btn: {
      primary: 'px-4 py-3 bg-brand text-white-100 label hover:bg-brandHover duration-150 ease-in-out',
      primaryWhite: 'px-4 py-3 bg-white-100 text-brand label hover:bg-white-500 duration-150 ease-in-out',
      secondary: 'px-4 py-3 bg-secondary text-white-100 label hover:bg-secondaryHover duration-150 ease-in-out',
      ghost: 'px-4 py-3 text-white-500 hover:bg-secondaryHover hover:text-white-100 duration-150 ease-in-out'
    },
  },
})


const Button = ({nav, btn, color, href, ...rest }) => {
  if (href) {
    return <a href={href} className={buttonVariants({ nav, btn, color })} {...rest}/>
  } else {
    return <button className={buttonVariants({ nav, btn, color })} {...rest}/>
  }
}

export default Button