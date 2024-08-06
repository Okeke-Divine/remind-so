import config from "@/data/config.json";
import WaitListForm from "./WaitListForm";

export default function WaitListPage() {
    return (
        <div className="relative w-full min-h-[100vh]">
            {/* Background Image */}
            <div
                className="fixed inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/bg.png')" }}
            ></div>

            {/* Black Overlay with Glass Effect */}
            <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md"></div>

            <div className="relative z-10 px-5 md:px-10 py-16 lg:px-16 flex flex-col items-center text-white min-h-[100vh]">
                {/* app name */}
                <div className="mb-5">
                    <h2 className="uppercase text-center tracking-widest text-yellow-300">
                        {config.appName}.so
                    </h2>
                </div>

                <h1 className="text-center">
                    To-dos and Schedules in one place.
                </h1>

                {/* form */}
                <div className="mt-5">
                    <h3 className="text-center">Never miss a task again!</h3>
                    <WaitListForm />
                </div>
            </div>
        </div>
    );
}
