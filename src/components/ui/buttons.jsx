import { cva } from 'class-variance-authority';

const buttonVariants = cva('', {
  variants: {
    nav: {
      default: [
        'px-4 py-3 rounded-lg text-white-500 mono-paragraph-md hover:bg-secondaryHover duration-150 ease-in-out active:text-white-100 active:bg-primary'
      ]
    },
    btn: {
      primary: ['px-4 py-3 rounded-lg bg-brand text-white-100 label hover:bg-brandHover duration-150 ease-in-out'],
      secondary: ['px-4 py-3 rounded-lg bg-secondary text-white-100 label hover:bg-secondaryHover duration-150 ease-in-out'],
      ghost: ['px-4 py-3 rounded-lg text-white-500 hover:bg-secondaryHover hover:text-white-100 duration-150 ease-in-out']
    }
  }
})

export default buttonVariants