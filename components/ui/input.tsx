<<<<<<< HEAD
import * as React from 'react'

import { cn } from '@/lib/utils'
=======
import * as React from "react"

import { cn } from "@/lib/utils"
>>>>>>> 36eb5574c02b8c42303879ebba18ff3b21463027

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
<<<<<<< HEAD
          'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className,
=======
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
>>>>>>> 36eb5574c02b8c42303879ebba18ff3b21463027
        )}
        ref={ref}
        {...props}
      />
    )
<<<<<<< HEAD
  },
)
Input.displayName = 'Input'
=======
  }
)
Input.displayName = "Input"
>>>>>>> 36eb5574c02b8c42303879ebba18ff3b21463027

export { Input }
