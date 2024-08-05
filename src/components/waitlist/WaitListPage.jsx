import config from "@/data/config.json";
import WaitListForm from "./WaitListForm";

export default function WaitListPage() {
    return (
        <>
            <div className="relative">
                {/* Background Image with Blur and Opacity */}
                <div
                    className="absolute inset-0 bg-cover bg-center filter blur-sm opacity-50"
                    style={{ backgroundImage: 'url(/images/bg.png)' }}
                ></div>

                {/* Black Overlay with Glass Effect */}
                <div className="relative px-5 md:px-10 py-10 lg:px-16 w-full min-h-[100vh] flex justify-center items-center bg-transparent">
                  
                </div>
            </div>
        </>
    );
}
