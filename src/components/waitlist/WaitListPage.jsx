import config from "@/data/config.json"
import WaitListForm from "./WaitListForm"

export default function WaitListPage() {
    return (

        <>
            <div className="px-5 md:px-10 py-10 lg:px-16 app-bg-black w-full min-h-[100vh] flex justify-center items-center app-text-white">
                <div>
                    {/* app name */}
                    <div className="mb-5">
                        <h2 className="uppercase app-text-white text-center tracking-widest">{config.appName}.so</h2>
                    </div>

                    <h1 className="app-text-white text-center">
                        To-dos and Schedules in one place.
                    </h1>
                    {/* form */}
                    <div className="mt-5">
                        <h3 className="app-text-gray text-center">Never miss a task again!</h3>
                        <WaitListForm />
                    </div>
                </div>
            </div>
        </>

    )
}
