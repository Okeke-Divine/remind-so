"use client"
import { useState, useRef } from "react"
import Link from "next/link"

export default function SignInForm() {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const emailRef = useRef(null);
    const pswdRef = useRef(null);

    async function signin(e) {
        e.preventDefault();
        setLoading(true);
        setError("");

        const email = emailRef.current.value;
        const pswd = pswdRef.current.value;

        if (!email || !pswd || email == "" || pswd == "") {
            setError("All fields are required.");
            setLoading(false);
            return;
        }

    }

    return (

        <>

            <form onSubmit={signin}>
                <p className="my-2 font-semibold text-red-600">{error}</p>
                <div>
                    <div className="mb-2">
                        <label htmlFor="email" className="mb-2 font-bold">Email address</label> <br />
                    </div>
                    <input type="email" name="email" className="input input-bordered w-full" placeholder="johdoe@remind.so" ref={emailRef} />
                </div>
                {/* pswd */}
                <div className="mt-3">
                    <div className="mb-2">
                        <label htmlFor="pswd" className="mb-2 font-bold">Password</label> <br />
                    </div>
                    <input type="password" name="pswd" className="input input-bordered w-full" placeholder="secure-password"
                        ref={pswdRef} />
                    <div className="mt-2">
                        <Link className="app-text-primary font-bold" href="#">Forgot password?</Link>
                    </div>
                </div>
                <div className="mt-5">
                    <button className="bg-black text-white btn btn-md w-full hover:bg-gray-900"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <span className="loading loading-dots loading-xs"></span>
                            </>
                        ) : (
                            "Signin"
                        )}
                    </button>
                </div>
            </form>

        </>

    )
}
