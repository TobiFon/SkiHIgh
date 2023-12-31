"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FieldErrors, useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  Name: z.string().min(2, {
    message: "Name must be at least 2 characters",
  }),
  Email: z.string().email({
    message: "Invalid Email",
  }),
  Reason: z.string({
    required_error: "Please select an email to display.",
  }),
  Message: z
    .string()
    .min(10, {
      message: "Message must be at least 10 characters.",
    })
    .max(160, {
      message: "Message must not be longer than 30 characters.",
    }),
});
type Form = z.infer<typeof formSchema>;

export function ContactForm() {
  const form = useForm<Form>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Name: "",
      Email: "",
      Message: "",
      Reason: "",
    },
    mode: "onTouched",
  });

  const onSubmit = async (data: Form) => {
    try {
      const response = await fetch("https://formspree.io/xnqeqjww", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Handle success
        form.reset();
        handleToast();
      } else {
        // Handle error
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };
  const onerror = (errors: FieldErrors<Form>) => {
    console.log(errors);
  };
  const { toast } = useToast();
  const handleToast = () => {
    toast({
      title: "Uh oh! Something went wrong.",
      description: "There was a problem with your request.",
    });
  };
  return (
    <div className="w-screen flex flex-col justify-center items-center bg-blue-100 p-10 max-w-4xl">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit, onerror)}
          className="space-y-4 w-full lg:w-3/6"
          method="POST"
          action={"https://formspree.io/f/xdorqjoa"}
        >
          <FormField
            control={form.control}
            name="Name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="leading-7 [&:not(:first-child)]:mt-6">
                  Name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Name"
                    className=" placeholder:text-text-200/40"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="Email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="leading-7 [&:not(:first-child)]:mt-6">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Email"
                    className=" placeholder:text-text-200/40"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="Reason"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Reason</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Reason for your message" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="General">General</SelectItem>
                    <SelectItem value="Admission inquiry">
                      Admission inquiry
                    </SelectItem>
                    <SelectItem value="Current Student">
                      Current Student
                    </SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="Message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="leading-7 [&:not(:first-child)]:mt-6">
                  Message
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Message"
                    className="resize-none  placeholder:text-text-200/40"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            onClick={() =>
              toast({
                title: "Uh oh! Something went wrong.",
                description: "There was a problem with your request.",
              })
            }
            size={"lg"}
            className=" w-full bg-blue-500 hover:bg-blue-400"
            disabled={
              !form.formState.isDirty ||
              !form.formState.isValid ||
              form.formState.isSubmitting
            }
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
