import { Header } from "@/components/ui/header";
import React from "react";
import NewTask from "./(newtask)/page";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default async function Home() {
    return (
        <section className="w-4xl m-auto">
            <Header />
            <main>
                <div className="flex items-center justify-between my-4">
                    <h1>My Tasks</h1>
                    <NewTask />
                </div>
                <React.Suspense fallback={<div>Loading tasks...</div>}>
                    <Tabs defaultValue="all" className="w-[400px]">
                        <TabsList>
                            <TabsTrigger value="all">All</TabsTrigger>
                            <TabsTrigger value="completed">Completed</TabsTrigger>
                            <TabsTrigger value="pending">Pending</TabsTrigger>
                        </TabsList>
                        <TabsContent value="all">All tab.</TabsContent>
                        <TabsContent value="completed">completed tab.</TabsContent>
                        <TabsContent value="pending">pending tab.</TabsContent>
                    </Tabs>
                </React.Suspense>
            </main>
        </section>
    )
}