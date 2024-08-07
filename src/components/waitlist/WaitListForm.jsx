"use client"
import { error_msg, joined_waitlist } from "@/constants/text";
import { SweetAlertError, SweetAlertSuccess } from "@/utils/customSweetAlertFunction";
import axios from "axios";
import { useRef, useState } from "react"

export default function WaitListForm() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const fNameRef = useRef(null)
    const emailRef = useRef(null);

    function addToWaitlist(e) {
        e.preventDefault();
        setError("")
        setLoading(true)

        // const fName = fNameRef.current.value
        const email = emailRef.current.value

        if (!email) {
            setError("All fields are required")
            setLoading(false)
            return
        }

        axios.post("/api/v1/waitlist", { email }).then((response) => {
            if (response.status == 201) {
                SweetAlertSuccess(joined_waitlist)
                setSuccess(true)
            } else {
                SweetAlertError(response.data.reason || error_msg)
            }
        }).catch(e => {
            SweetAlertError(error_msg)
        }).finally(() => {
            setLoading(false);
        })
    }

    return (
        <>
            <div className="flex justify-center">
                {success ? (<>
                    <div>
                        <div className="w-[90%] md:w-[40vw] my-10 bg-black p-5 md:p-10 rounded-[20px] app-text-white bg-opacity-40">
                            <h3 className="text-center">Thank You for Joining the Waitlist!</h3>
                        </div>
                    </div>
                </>) : (<>
                    <form className="w-[90%] md:w-[40vw] my-10 bg-black p-5 md:p-10 rounded-[20px] app-text-white bg-opacity-40" onSubmit={addToWaitlist}>
                        <div>

                            <h3 className="text-gray-200 text-center">Special Offer for Early Adopters</h3>
                            <h3 className="mt-2 mb-5 text-sm text-gray-300 text-center">Get a <b className="text-yellow-300">50% lifetime discount</b> for being one of <b className="text-yellow-300">the first 100 adopters!</b></h3>
                            <p className="mb-2 text-red-500 font-semibold">{error}</p>

                            {/* first name */}
                            {/* <div className="mb-3">
                                <div>
                                    <label htmlFor="name" className="font-bold text-md">
                                        Your First Name
                                    </label>
                                </div>
                                <div className="input border-[1px] border-gray-100 flex items-center gap-2 mt-1 app-bg-black text-white">
                                    <i className="fi fi-ts-circle-user flaticon-offset"></i>
                                    <input
                                        type="text"
                                        ref={fNameRef}
                                        required
                                        className="grow"
                                        placeholder="Enter Your First Name"
                                    />
                                </div>
                            </div> */}

                            {/* email */}
                            <div className="mb-3 mt-2">
                                {/* <div>
                                    <label htmlFor="email" className="font-bold text-md">
                                        Your Email
                                    </label>
                                </div> */}
                                {/* <div className="input border-[1px] border-gray-100 flex items-center gap-2 mt-1 app-bg-black text-white">
                                    <i className="fi fi-tr-envelopes flaticon-offset"></i>
                                    <input
                                        type="email"
                                        required
                                        ref={emailRef}
                                        className="grow bg-transparent"
                                        placeholder="Email"
                                    />
                                </div> */}
                            </div>
                        </div>

                        <div className="join w-full join-horizontal">

                            <input
                                type="email"
                                required
                                ref={emailRef}
                                className="w-full bg-transparent join-item input-bordered border-gray-100 border-[1px] input"
                                placeholder="name@email.com"
                            />

                            <button className="w-fit join-item btn app-bg-white app-box-shadow-1 disabled:bg-[#e6e6e6] disabled:box-shadow-[inset_0_1px_.4px_#fff,inset_0_-1px_.4px_#0003,0_0_14px_#ffffff30,0_0_0_2px_#00000080] disabled:cursor-not-allowed disabled:opacity-70"
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                        <span className="loading loading-dots loading-xs"></span>
                                    </>
                                ) : (
                                    <>
                                    Join<span className="hidden md:block md:-ml-1">the waitlist</span>
                                    </>
                                )}
                            </button>

                        </div>

                    </form></>)}
            </div>
        </>
    )
}
