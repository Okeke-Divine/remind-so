import { auth_page_aside_text } from "@/constants/text";

export default function AuthPageAside({ w }) {
    return (
        <div className={`${w} w-1/2 font-bold bg-black text-white grid items-center text-4xl text-center uppercase min-h-[100vh]`}>
            {auth_page_aside_text}
        </div>
    )
}
