import { Header } from "@/components/ui/header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NewTask from "./(newtask)/page";

export default function Home() {
    return (
        <section className="w-4xl m-auto">
            <Header />
            <main>
                <div className="flex items-center justify-between my-4">
                    <h1>My Tasks</h1>
                    <NewTask />
                </div>
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
            </main>
        </section>
    )
}