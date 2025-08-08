import { Button } from "@/components/ui/button";
import { Header } from "@/components/ui/header";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Login() {
    return (
        <section className="login-page">
            <Header />
            <div>
                <h3 className="font-bold">Welcome Back</h3>
                <form>
                    <div className="grid w-full max-w-sm items-center gap-3">
                        <Label htmlFor="username">Username</Label>
                        <Input type="text" id="username" placeholder="Username" />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-3">
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" id="password" placeholder="Password" />
                    </div>
                    <Button>
                        Login
                    </Button>
                </form>
            </div>
        </section>
    )
}