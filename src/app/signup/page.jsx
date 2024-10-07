import SignUpForm from "@/components/auth/SignUpForm";
import AuthPageAside from "@/components/shared/AuthPageAside";
import Link from "next/link";

export default function SignUp() {
  return (
    <div className="block md:flex min-h-[100vh]">
      <div className="w-full md:w-1/2 p-5 md:p-10">

        <div>
          <img className="w-12 mb-2 rounded-full shadow-lg" src="/images/icon.png" alt="Portfoliia's logo"></img>
        </div>

        <div className="text-4xl font-bold">
          Sign up
        </div>
        <div className="mt-1 text-gray-500">
          ...to start creating reminders
        </div>

        <div className="mt-5">
          Already a member? <Link href="/signin" className="app-text-primary font-bold">Sign In Now</Link>
        </div>

        <div className="mt-5">
          <SignUpForm />
        </div>

      </div>
      <AuthPageAside w="w-full md:w-1/2 p-10" />
    </div>
  )
}
