"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form as FormComp,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { addCostumer } from "@/services/notion";
import { toast } from "@/components/ui/use-toast";

const formSchema = z.object({
  full_name: z.string().min(2, {
    message: "Full name must have at least 2 characters"
  }),
  email: z.string().email(),
  website: z.boolean().default(false),
  website_url: z.string().url().optional(),
  company_name: z.string(),
  industry: z.string(),
});

export type Costumer = z.infer<typeof formSchema>;
export default function Form() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });
  const [alreadyHaveWebsite, setAlreadyHaveWebsite] = useState(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await addCostumer(values);
    toast({
      title: "Thank you!",
      description: "Our time is going to contact you back as soon as possible!",
    })
    form.reset()
  }
  return (
    <FormComp {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5   p-12 bg-white shadow-lg rounded-xl">
      <div className="flex flex-col items-center gap-2 text-center mb-12">
        <span className="block sub-title">Let{"'s"} Work together</span>
        <span className="block title">
          Work with Us and Elevate Your Business{" "}
        </span>
      </div>
        <FormField
          control={form.control}
          name="full_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Jhon Doe" {...field} />
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
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input placeholder="jhondoe@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <FormItem className="flex  items-center space-x-3 space-y-0 border px-3 py-4 bg-white">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={(...e) => {
                    setAlreadyHaveWebsite(e as any);
                    field.onChange(...e);
                  }}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Do You Already Have a Website?</FormLabel>
              </div>
            </FormItem>
          )}
        />

        {alreadyHaveWebsite ? (
          <FormField
            control={form.control}
            name="website_url"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Website URL</FormLabel>
                <FormControl>
                  <Input placeholder="jhondoe.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ) : null}
        <FormField
          control={form.control}
          name="company_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Business Name</FormLabel>
              <FormControl>
                <Input placeholder="Jhon Comp." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="industry"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Industry</FormLabel>
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Technology">Technology</SelectItem>
                  <SelectItem value="Healthcare">Healthcare</SelectItem>
                  <SelectItem value="Finance">Finance</SelectItem>
                  <SelectItem value="Retail">Retail</SelectItem>
                  <SelectItem value="E-commerce">E-commerce</SelectItem>
                  <SelectItem value="Automotive">Automotive</SelectItem>
                  <SelectItem value="Tourism">
                    Hospitality and Tourism
                  </SelectItem>
                  <SelectItem value="Construction">Construction</SelectItem>
                  <SelectItem value="Real Estate">Real Estate</SelectItem>
                  <SelectItem value="Education">Education</SelectItem>
                  <SelectItem value="Energy">Energy</SelectItem>
                  <SelectItem value="Entertainment">Entertainment</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" size="sm" className="rounded-xl">
          Submit
        </Button>
      </form>
    </FormComp>
  );
}
