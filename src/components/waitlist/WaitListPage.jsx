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
                    Your Ultimate Task and Time Management Companion
                    {/* To-dos and Schedules in one place. */}
                </h1>


                <div className="mt-8">
                    <h3 className="text-center">🚀 Calling All Indie Hackers and SaaS Founders!</h3>
                </div>

                <div className="mt-2">
                    <div className="flex justify-center my-1">
                        <p className="text-center max-w-[500px] font-semibold text-lg">Are you ready to supercharge your productivity and take control of your time? Remind.so is here to revolutionize the way you manage your to-dos, schedules, and tasks.</p>
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
            </div>
        </div>
    );
}
