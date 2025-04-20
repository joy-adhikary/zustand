"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

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
import useRootState from "@/store/rootStore2";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  token: z.coerce.number(),
});

export default function Contact() {
  const removeCourse = useRootState((state) => state.removeCourse);
  const updateCourse = useRootState((state) => state.updateCourseStatus);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      token: 0,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const initialCourseCount = useRootState.getState().courses.length;
    removeCourse(values.token);
    const finalCourseCount = useRootState.getState().courses.length;


    if (initialCourseCount > finalCourseCount) {
      alert(`Course with ID ${values.token} removed successfully!`);
    } else {
      alert(`Course with ID ${values.token} not found.`);
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
                name="token"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Course ID</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Course ID"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className="flex justify-between">
                <Button type="submit">Remove Course</Button>

                <Button type="button" onClick={ () => {
                  const courseId = form.getValues("token");
                  console.log(courseId);
                  updateCourse(courseId);
                }}>Toggle Status </Button>
              </div>
             
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}