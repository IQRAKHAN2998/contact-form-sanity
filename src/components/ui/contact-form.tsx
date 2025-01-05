"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from 'zod'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input" 
import { client } from "@/sanity/lib/client"

const formSchema = z.object({
firstName: z.string().min(2).max(50),
email : z.string().email()
})

type FormType = z.infer<typeof formSchema>

const ContactForm = () => {

    const form = useForm<FormType>({
        resolver : zodResolver(formSchema),
        // defaultValues : {
        //     firstName : ""
        // }
    })
    async function onSubmit(values : FormType){
      await  client.create({
            _type : "contactForm",
            name : values.firstName,
            email: values.email
        })
        //  console.log(values) 
    }
  return (
    <div>
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>first Name</FormLabel>
              <FormControl>
                <Input placeholder="First Name" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>email</FormLabel>
              <FormControl>
                <Input placeholder="email" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    </div>
  )
}

export default ContactForm