"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, ZodNull } from "zod";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useCourseStore from "@/store/courseStore";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  id: z.number(),
});

export default function Contact() {
  const removeCourse = useCourseStore((state) => state.removeCourse);
  const courses = useCourseStore((state) => state.courses);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: 0,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Submit clicked");
    console.log("Form values:", values);
    const initialCourseCount = courses.length;
    removeCourse(values.id);
    const finalCourseCount = courses.length;
  
    if (initialCourseCount > finalCourseCount) {
      alert(`Course with ID ${values.id} removed successfully!`);
    } else {
      alert(`Course with ID ${values.id} not found.`);
    }
    form.reset();
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Navbar activeKey="contact" />

      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Remove Course</CardTitle>
          <CardDescription>Enter the ID of the course to remove.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Course ID</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Course ID"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button type="submit">Remove Course</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}