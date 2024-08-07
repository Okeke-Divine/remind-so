import config from "@/data/config.json";
import WaitListForm from "./WaitListForm";

export default function WaitListPage() {
    return (
        <div className="relative w-full min-h-[100vh] bg-gray-800">
            {/* Background Image */}
            <div
                className="fixed inset-0 bg-cover bg-center"
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

                <h1 className="text-center text-5xl">
                    Your Ultimate Task and Time Management Companion
                </h1>


                <div className="mt-5">
                    <div className="flex justify-center my-1">
                        <p className="text-center max-w-[500px] font-semibold text-lg">Supercharge your productivity and take control of your time.
                         {/* Remind.so is here to revolutionize the way you manage your to-dos, schedules, and tasks. */}
                         </p>
                    </div>
                    <div className="flex justify-center mt-2">
                        <ul className="list-disc list-inside text-center">
                            <li>Smart task prioritization</li>
                            <li>Seamless calendar integration</li>
                            <li>Customizable reminders</li>
                            <li>Team collaboration features</li>
                            <li>Intuitive time tracking</li>
                        </ul>
                    </div>
                </div>

                {/* form */}
                <div className="">
                    <WaitListForm />
                </div>

                {/* 🎯 Perfect for Indie Hackers */}
                {/* <div>
                    <div>
                        <h2 className="text-center">🎯 Perfect for Indie Hackers</h2>
                    </div>
                    <div className="flex justify-center my-1">
                        <p className="text-center max-w-[500px] font-semibold text-lg">Streamline your workflow, manage multiple projects, and never miss a deadline. Remind.so helps you stay focused on what matters most - building and growing your products.</p>
                    </div>
                </div> */}

                {/* 💼 Ideal for SaaS Founders */}
                {/* <div className="mt-5">
                    <div>
                        <div>
                            <h2 className="text-center">💼 Ideal for SaaS Founders</h2>
                        </div>
                        <div className="flex justify-center my-1">
                            <p className="text-center max-w-[500px] font-semibold text-lg">From product roadmaps to customer meetings, Remind.so keeps your entire team aligned and productive. Scale your operations without losing track of crucial tasks and milestones.</p>
                        </div>
                    </div>
                </div> */}

                {/* footer */}
                <div className="mt-10">
                    <div className="w-full text-lg text-center">
                        <span>© 2024 Remind.so. All rights reserved.</span>
                    </div>
                </div>

            </div>
        </div>
    );
}
