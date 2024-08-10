"use client"
import { useState } from "react"
import Link from "next/link"

export default function SignInForm() {

    const [loading, setLoading] = useState(false);

    async function signin(e){
        e.preventDefault();
        setLoading(true);
    }

    return (

        <>

            <form onClick={signin}>
                <div>
                    <div className="mb-2">
                        <label htmlFor="email" className="mb-2 font-bold">Email address</label> <br />
                    </div>
                    <input type="email" className="input input-bordered w-full" placeholder="johdoe@remind.so" />
                </div>
                {/* pswd */}
                <div className="mt-3">
                    <div className="mb-2">
                        <label htmlFor="pswd" className="mb-2 font-bold">Password</label> <br />
                    </div>
                    <input type="pswd" className="input input-bordered w-full" placeholder="secure-password" />
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
