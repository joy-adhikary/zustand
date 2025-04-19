"use client";
import React from "react";
import useCourseStore from "@/store/courseStore";
import useInstructorStore from "@/store/instructorStore";
import { Button } from "@/components/ui/button";
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

const formSchema = z.object({
  token: z.coerce.number(),
});

const CalculationPage = () => {
  const getPrice = useCourseStore((state) => state.getAllPrice());
  const removeInstructor = useInstructorStore(
    (state) => state.removeInstructor
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      token: 0,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const initialInstructorCount =
      useInstructorStore.getState().instructors.length;
    removeInstructor(values.token);
    const finalInstructorCount =
      useInstructorStore.getState().instructors.length;

    if (initialInstructorCount > finalInstructorCount) {
      alert(`Instructor with ID ${values.token} removed successfully!`);
    } else {
      alert(`Instructor with ID ${values.token} not found.`);
    }
    form.reset();
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Navbar activeKey="services" />
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Remove Instructor</CardTitle>
          <CardDescription>
            Enter the ID of the instructor to remove.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="token"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Instractor ID</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Instractor ID" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className="flex justify-between">
                <Button type="submit">Remove Course</Button>

                <Button
                  onClick={() => {
                    alert(`Total Price is ${getPrice}`);
                  }}
                >
                  Show Total Price
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CalculationPage;
