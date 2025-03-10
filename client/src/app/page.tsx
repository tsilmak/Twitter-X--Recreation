import { XLogo } from "@/utils/icons";

export default function Home() {
  // Check if user logged in
  //if user log redirect to home
  // redirect("/home");

  // Else show signup page
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-8 md:gap-10">
        {/* LEFT SIDE */}
        <div className="flex-1 flex justify-center md:justify-start">
          <XLogo width={"300"} height={"270"} fill={"white"} />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
            Happening now
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold">Join today.</h2>
        </div>
      </div>
    </div>
  );
}
