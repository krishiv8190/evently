<<<<<<< HEAD
import * as React from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'
import { Slot } from '@radix-ui/react-slot'
=======
import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { Slot } from "@radix-ui/react-slot"
>>>>>>> 36eb5574c02b8c42303879ebba18ff3b21463027
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
<<<<<<< HEAD
} from 'react-hook-form'

import { cn } from '@/lib/utils'
import { Label } from '@/components/ui/label'
=======
} from "react-hook-form"

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
>>>>>>> 36eb5574c02b8c42303879ebba18ff3b21463027

const Form = FormProvider

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
<<<<<<< HEAD
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
=======
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>>>>>>> 36eb5574c02b8c42303879ebba18ff3b21463027
> = {
  name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue>(
<<<<<<< HEAD
  {} as FormFieldContextValue,
=======
  {} as FormFieldContextValue
>>>>>>> 36eb5574c02b8c42303879ebba18ff3b21463027
)

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
<<<<<<< HEAD
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
=======
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>>>>>>> 36eb5574c02b8c42303879ebba18ff3b21463027
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  const { getFieldState, formState } = useFormContext()

  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
<<<<<<< HEAD
    throw new Error('useFormField should be used within <FormField>')
=======
    throw new Error("useFormField should be used within <FormField>")
>>>>>>> 36eb5574c02b8c42303879ebba18ff3b21463027
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}

type FormItemContextValue = {
  id: string
}

const FormItemContext = React.createContext<FormItemContextValue>(
<<<<<<< HEAD
  {} as FormItemContextValue,
=======
  {} as FormItemContextValue
>>>>>>> 36eb5574c02b8c42303879ebba18ff3b21463027
)

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = React.useId()

  return (
    <FormItemContext.Provider value={{ id }}>
<<<<<<< HEAD
      <div ref={ref} className={cn('space-y-2', className)} {...props} />
    </FormItemContext.Provider>
  )
})
FormItem.displayName = 'FormItem'
=======
      <div ref={ref} className={cn("space-y-2", className)} {...props} />
    </FormItemContext.Provider>
  )
})
FormItem.displayName = "FormItem"
>>>>>>> 36eb5574c02b8c42303879ebba18ff3b21463027

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField()

  return (
    <Label
      ref={ref}
<<<<<<< HEAD
      className={cn(error && 'text-destructive', className)}
=======
      className={cn(error && "text-destructive", className)}
>>>>>>> 36eb5574c02b8c42303879ebba18ff3b21463027
      htmlFor={formItemId}
      {...props}
    />
  )
})
<<<<<<< HEAD
FormLabel.displayName = 'FormLabel'
=======
FormLabel.displayName = "FormLabel"
>>>>>>> 36eb5574c02b8c42303879ebba18ff3b21463027

const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  )
})
<<<<<<< HEAD
FormControl.displayName = 'FormControl'
=======
FormControl.displayName = "FormControl"
>>>>>>> 36eb5574c02b8c42303879ebba18ff3b21463027

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField()

  return (
    <p
      ref={ref}
      id={formDescriptionId}
<<<<<<< HEAD
      className={cn('text-sm text-muted-foreground', className)}
=======
      className={cn("text-sm text-muted-foreground", className)}
>>>>>>> 36eb5574c02b8c42303879ebba18ff3b21463027
      {...props}
    />
  )
})
<<<<<<< HEAD
FormDescription.displayName = 'FormDescription'
=======
FormDescription.displayName = "FormDescription"
>>>>>>> 36eb5574c02b8c42303879ebba18ff3b21463027

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message) : children

  if (!body) {
    return null
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
<<<<<<< HEAD
      className={cn('text-sm font-medium text-destructive', className)}
=======
      className={cn("text-sm font-medium text-destructive", className)}
>>>>>>> 36eb5574c02b8c42303879ebba18ff3b21463027
      {...props}
    >
      {body}
    </p>
  )
})
<<<<<<< HEAD
FormMessage.displayName = 'FormMessage'
=======
FormMessage.displayName = "FormMessage"
>>>>>>> 36eb5574c02b8c42303879ebba18ff3b21463027

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
}
