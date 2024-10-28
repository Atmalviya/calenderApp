import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";

const formSchema = z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().min(5, "Description should be at least 5 characters"),
    eventDate: z.date({ required_error: "Event date is required" }),
});

export default function EventForm({ datePicked }) {
    const [selectedDate, setSelectedDate] = useState(datePicked);
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            description: "",
            eventDate: datePicked || null,
        },
    });

    const onSubmit = (values) => {
        console.log("Event data:", values);
        // Submit event data here, or call a handler function
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-lg mx-auto py-6">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Event Title</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter event title" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Event Description</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter event description" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="eventDate"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Event Date</FormLabel>
                            <FormControl>
                                <Input
                                    type="date"
                                    placeholder="Pick a date"
                                    value={selectedDate ? format(selectedDate, "yyyy-MM-dd") : ""}
                                    onChange={(e) => {
                                        const date = new Date(e.target.value);
                                        setSelectedDate(date);
                                        field.onChange(date);
                                    }}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit">Create Event</Button>
            </form>
        </Form>
    );
}
