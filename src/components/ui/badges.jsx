import { cva } from 'class-variance-authority';

const badgeVariants = cva('px-4 py-1 rounded-full paragraph-md text-white-100 select-none', {
  variants: {
    color: {
      default: [
        'bg-primary border border-subtle'
      ],
      purple: [
        'bg-brand'
      ],
      green: [
        'bg-green'
      ],
      red: [
        'bg-red'
      ]
    }
  },
  defaultVariants: {
    color: 'default',
  },
})

export default badgeVariants