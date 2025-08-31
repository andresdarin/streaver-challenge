import Link from "next/link";

export default function Home() {
  return (
    <div className=" min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-pink-300 to-blue-400 p-8 sm:p-20">

      <div className="backdrop-blur-lg bg-gray-200/30 rounded-3xl shadow-2xl  p-12 max-w-4xl w-full flex flex-col items-center text-center gap-10
                      transition-all duration-500 hover:bg-gray-200/40  hover:translate-y-1">

        {/* Título con microinteracción */}
        <h1 className="text-9xl sm:text-6xl font-extrabold tracking-tight text-gray-800 drop-shadow-lg text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500
                           transition-all duration-500 hover:from-pink-400 hover:via-purple-500 hover:to-blue-400
                           hover:scale-105 hover:animate-bounce ">
            Posts
          </span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500
                           transition-all duration-500 hover:from-pink-400 hover:via-purple-500 hover:to-blue-400
                           hover:scale-105 cursor-default hover:animate-bounce">X</span>
          plorer
        </h1>

        {/* Párrafo con microinteracción en keywords */}
        <p className="text-lg sm:text-2xl text-gray-900 max-w-2xl leading-relaxed">
          Explore posts in a&nbsp;
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 font-bold transition-transform duration-300 hover:scale-110">
            bold
          </span> and&nbsp;
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 font-bold transition-transform duration-300 hover:scale-110">
            modern
          </span> interface. Fast,&nbsp;
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 font-bold transition-transform duration-300 hover:scale-110">
            responsive
          </span>, and with search capabilities for a&nbsp;
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 font-bold transition-transform duration-300 hover:scale-110">
            seamless
          </span> experience.
        </p>

        {/* Botón con microinteracción */}
        <Link
          href="/posts"
          className="group mt-4 inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 text-white font-bold text-lg rounded-full shadow-xl
                     hover:scale-105 hover:shadow-2xl hover:brightness-110 transition-all duration-300"
        >
          Come & See!
          <span className="text-2xl group-hover:translate-x-2 transition-transform duration-300">→</span>
        </Link>
      </div>

    </div>
  );
}
