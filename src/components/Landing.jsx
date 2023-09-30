
function Landing() {
    return (
        <div className="flex flex-col items-center h-screen justify-center">

            <h1 className="text-6xl font-bold">
                Blur Your Image Background!
            </h1>   

            <img src="src\assets\sample_image.jpg" alt="image" className="w-[750px] h-auto mt-8 mb-8 rounded-3xl"/>

            <div className="flex gap-2">
                <button type="button" className="py-3 px-4 w-36 rounded-3xl border border-transparent font-semibold bg-blue-500 text-sm text-white hover:bg-blue-600 transition-all">
                    Sign In
                </button>
                <button type="button" className="py-3 px-4 w-36 rounded-3xl border border-transparent font-semibold bg-blue-500 text-sm text-white hover:bg-blue-600 transition-all">
                    Sign Up
                </button>
            </div>

            <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm">
                Continue as Guest
            </button>

        </div>
    );
}

// py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800
//

export default Landing;
