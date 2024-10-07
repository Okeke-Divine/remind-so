"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import axios from "axios";  // Import axios
import { SweetAlertSuccess } from "@/utils/customSweetAlertFunction";
import { useRouter } from 'next/navigation';
import { signIn } from "next-auth/react";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import { defaultAuthRedirUrl } from "@/constants/urls";

export default function SignUpForm() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const emailRef = useRef(null);
    const pswdRef = useRef(null);
    const nameRef = useRef(null);

    const router = useRouter();

    async function signup(e) {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess("");

        const email = emailRef.current.value;
        const pswd = pswdRef.current.value;
        const name = nameRef.current.value;

        async function login() {
            const login = await signIn("credentials", {
                redirect: false,
                email,
                password: pswd,
            });
            if (login.error) {
                document.location = "/signin";
            } else {
                document.location = defaultAuthRedirUrl;
            }
        }

        if (!email || !pswd || !name) {
            setError("All fields are required.");
            setLoading(false);
            return;
        }

        try {
            const res = await axios.post("/api/v1/signup", {
                fullname: name,
                email: email,
                password: pswd,
            }).then((res) => {
                if (res.status == 201) {

                    setSuccess("User registered successfully!");
                    SweetAlertSuccess("Registration successful. Logging you in...");

                    login();

                }
            })

        } catch (error) {
            if (error.response) {
                setError(error.response.data.reason || "Something went wrong.");
            } else if (error.request) {
                setError("No response from the server. Please try again later.");
            } else {
                setError("An error occurred. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <form onSubmit={signup}>
                {/* Display errors or success */}
                {error && <p className="my-2 font-semibold text-red-600">{error}</p>}
                {success && <p className="my-2 font-semibold text-green-600">{success}</p>}

                {/* Full Name */}
                <div>
                    <div className="mb-2">
                        <label htmlFor="name" className="mb-2 font-bold">
                            Full Name
                        </label>
                        <br />
                    </div>
                    <input
                        type="text"
                        name="name"
                        className="input input-bordered w-full"
                        placeholder="John Doe"
                        ref={nameRef}
                    />
                </div>

                {/* Email */}
                <div className="mt-3">
                    <div className="mb-2">
                        <label htmlFor="email" className="mb-2 font-bold">
                            Email address
                        </label>
                        <br />
                    </div>
                    <input
                        type="email"
                        name="email"
                        className="input input-bordered w-full"
                        placeholder="johndoe@remind.so"
                        ref={emailRef}
                    />
                </div>

                {/* Password */}
                <div className="mt-3">
                    <div className="mb-2">
                        <label htmlFor="pswd" className="mb-2 font-bold">
                            Password
                        </label>
                        <br />
                    </div>
                    <input
                        type="password"
                        name="pswd"
                        className="input input-bordered w-full"
                        placeholder="secure-password"
                        ref={pswdRef}
                    />
                    <div className="mt-2">
                        <Link className="app-text-primary font-bold" href="#">
                            Forgot password?
                        </Link>
                    </div>
                </div>

                {/* Submit button */}
                <div className="mt-5">
                    <button
                        className="bg-black text-white btn btn-md w-full hover:bg-gray-900"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <span className="loading loading-dots loading-xs"></span>
                            </>
                        ) : (
                            "Sign up"
                        )}
                    </button>
                </div>
            </form>
        </>
    );
}
