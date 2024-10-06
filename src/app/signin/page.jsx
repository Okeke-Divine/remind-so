import SignInForm from "@/components/auth/SignInForm";
import AuthPageAside from "@/components/shared/AuthPageAside";
import Link from "next/link";

export default function SignIn() {
    return (
        <div className="block md:flex min-h-[100vh]">
            <div className="w-full md:w-1/2 p-5 md:p-10">

                <div>
                    <img class="w-12 mb-2 rounded-full shadow-lg" src="/images/icon.png" alt="Portfoliia's logo"></img>
                </div>

                <div className="text-4xl font-bold">
                    Sign in
                </div>
                <div className="mt-1 text-gray-500">
                    ... You'll be up & running in seconds
                </div>

                <div className="mt-5">
                    Not a member? <Link href="/signup" className="app-text-primary font-bold">Sign Up Now</Link>
                </div>

                <div className="mt-5">
                    <SignInForm />
                </div>

            </div>
            <AuthPageAside w="w-full md:w-1/2 p-10" />
        </div>
    )
}
