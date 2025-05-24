import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-gray-900 -mt-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-blue-700 opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-green-600 opacity-20 blur-3xl"></div>
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-cyan-500 opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-blue-400 opacity-20 blur-3xl"></div>
      </div>
      <div className="absolute inset-0 pointer-events-none hidden lg:block z-20">
  <div
    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full opacity-40 blur-[100px] z-30"
    style={{
      background: "radial-gradient( ellipse at center, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.2), transparent )"
    }}
  ></div>
</div>

      <div className="relative mx-auto max-w-7xl lg:h-screen px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
          <span>Your Tech Issues, </span>
          <br />
          <span className="text-blue-400">Fixed Fast.</span>
        </h1>

        <p className="mt-6 text-lg text-gray-300 max-w-xl">
          From cracked screens to slow computers — Dern-Support delivers expert
          tech repair and support when you need it most.
        </p>

        <div className="mt-10 flex justify-center gap-4">
        <Link href="/support#quote-request"

            className="rounded-full bg-gradient-to-r from-blue-500 to-green-600 px-6 py-3 text-base font-medium text-white hover:opacity-90 transition"
          >
            Get Instant Quote
          </Link>
          <Link
            href="/knowladge"
            className="rounded-full border border-gray-300 px-6 py-3 text-base font-medium text-white hover:bg-gray-800 transition"
          >
            Visit Help Center
          </Link>
        </div>

        <div className="mt-16 relative">
          <div className="relative mx-auto w-[400px] flex items-center justify-center">
            <div
              className="rounded-lg shadow-2xl overflow-hidden bg-cover w-[200px] h-[250px] z-10 transition duration-700 hover:scale-105 outline-0 outline-offset-0 hover:outline-8 outline-blue-500 hover:outline-offset-[10px]"
              style={{ backgroundImage: "url('/hardware1.webp')" }}
            ></div>

            <div
              className="absolute -left-16 top-1/8 transform -rotate-6 opacity-90 shadow-xl rounded-lg overflow-hidden hidden lg:block w-[200px] h-[250px] bg-cover bg-right transition duration-700 hover:scale-105 outline-0 outline-offset-0 hover:outline-8 outline-green-500 hover:outline-offset-[10px] hover:z-20"
              style={{ backgroundImage: "url('/hardware2.webp')" }}
            ></div>

            <div
              className="absolute -right-16 top-1/8 transform rotate-6 opacity-90 shadow-xl rounded-lg overflow-hidden hidden lg:block w-[200px] h-[250px] bg-cover bg-center transition duration-700 hover:scale-105 outline-0 outline-offset-0 hover:outline-8 outline-cyan-500 hover:outline-offset-[10px] hover:z-20"
              style={{ backgroundImage: "url('/hardware3.webp')" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
