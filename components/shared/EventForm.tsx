'use client'

import React from 'react'
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d089ef949a2458d4f08ac783e5f344cd19ebf2b5
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
})

type EventFormProps = {
  userId: string
  type: 'Create' | 'Update'
}

const EventForm = ({ userId, type }: EventFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
<<<<<<< HEAD
=======
=======
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
 
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})


type EventFormProps = {
    userId: string
    type: "Create" | "Update"
}

const EventForm = ({userId,type}: EventFormProps) => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "",
        },
      })
     
      // 2. Define a submit handler.
      function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }

  return (
<Form {...form}>
>>>>>>> 36eb5574c02b8c42303879ebba18ff3b21463027
>>>>>>> d089ef949a2458d4f08ac783e5f344cd19ebf2b5
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d089ef949a2458d4f08ac783e5f344cd19ebf2b5
    </Form>
  )
}

export default EventForm
<<<<<<< HEAD
=======
=======
    </Form>  )
}

export default EventForm
>>>>>>> 36eb5574c02b8c42303879ebba18ff3b21463027
>>>>>>> d089ef949a2458d4f08ac783e5f344cd19ebf2b5
