
// sm: 640
// md: 768
// lg: 1024
// xl: 1280
// 2xl: 1536

// use height if height > width
// use 

// flex flex-col items-center justify-center

// solution: height max(90vh, 600 px) could be W rizz
// note: if my content height is changing the 600 could not be big or small enough

// px-4 py-32 sm:px-16 lg:px-64

function Landing() {
  return (
    <div className="text-center flex flex-col justify-center items-center min-h-[90vh]">
      <div className="my-16">
        <h1 className="text-3xl sm:text-6xl font-extrabold">Blur Your Image Background!</h1>   
      </div>
      <div className="mb-16">
        <img src="src\assets\sample_image.jpg" alt="image" className="w-[500px] h-auto rounded-3xl"/>
        <button type="button" className="mt-6 py-3 px-4 w-36 rounded-xl border border-transparent font-semibold bg-blue-500 text-sm text-white hover:bg-blue-600 transition-all">Get Started</button>
      </div>
    </div>
  );
}

// grid grid-cols-1 lg:grid-cols-2 justify-items-center

// py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800
// <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm">Continue as Guest</button>

export default Landing;
