import { cva } from 'class-variance-authority';

const buttonVariants = cva('rounded-lg', {
  variants: {
    nav: {
      sm: 'px-0 py-0 mono-paragraph-md duration-150 ease-in-out',
      default: 'px-4 py-3 mono-paragraph-md duration-150 ease-in-out'
    },
    btn: {
      primary: 'px-4 py-3 label duration-150 ease-in-out',
      primaryWhite: 'px-4 py-3 label duration-150 ease-in-out',
      secondary: 'px-4 py-3 label duration-150 ease-in-out',
      ghost: 'px-4 py-3 label duration-150 ease-in-out'
    },
  },
})


const Button = ({nav, btn, href, target, className, ...rest }) => {
  if (href || target) {
    return <a href={href} target={target} className={buttonVariants({ nav, btn, className })} {...rest}/>
  } else {
    return <button className={buttonVariants({ nav, btn, className })} {...rest}/>
  }
}

export default Button