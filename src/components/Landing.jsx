
// sm: 640
// md: 768
// lg: 1024
// xl: 1280
// 2xl: 1536

function Landing() {
  return (
    <div className="p-4 h-[100%] text-center flex flex-col justify-center items-center min-h-[90vh]">
      <div className="my-16">
        <h1 className=" text-3xl sm:text-6xl font-extrabold">Blur Your Image Background!</h1>   
      </div>
      <div className="mb-16 justify-self-center">
        <img src="src\assets\sample_image.jpg" alt="image" className="w-[500px] h-auto rounded-3xl"/>
        <button type="button" className="mt-6 py-3 px-4 w-36 rounded-xl border border-transparent font-semibold bg-blue-600 text-sm text-white hover:bg-blue-500 transition-all">Get Started</button>
      </div>
    </div>
  );
}

export default Landing;
