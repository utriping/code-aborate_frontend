import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    // <section className="mt-10 bg-[#8E0C25] p-10">
    //   <div className="pb-6 border-b-2 border-[#f3dc1]">
    //     <div className="text-[#f3dfc1] text-4xl font-bold mb-2">{`<Code-aborate>`}</div>
    //     <div className="text-[#f3dfc1]">
    //       &nbsp;&nbsp;Collaborate, Code, Conquer
    //     </div>
    //   </div>
    //   <div className="flex text-[#f3dc1]">
    //     <div className="w-[20%] flex flex-col justify-between items-center">
    //       Services &nbsp; &nbsp;
    //       <div className='flex flex-col justify-between items-start'>
    //           <div>WhiteBoard</div>
    //           <div>Duels</div>
    //           <div>Chat</div>
    //           <div>LeaderBoard</div>
    //       </div>
    //     </div>
    //     <div className="w-[20%]whitespace-nowrap">Connect</div>

    //     <div className="flex-1 flex flex-col justify-center items-center">Sign In</div>
    //   </div>
    // </section>
    <section className="mt-10 bg-[#8E0C25] text-[#F3DFC1]">
      {/* Top branding */}
      <div className="px-10 pt-10 pb-6 border-b border-[#B10F2E]">
        <div className="text-4xl font-bold mb-2">
          <Link href="/">{`<Code-aborate>`}</Link>
        </div>
        <div className="text-sm opacity-90">Collaborate, Code, Conquer</div>
      </div>

      {/* Links section */}
      <div className="px-10 py-8 flex flex-col md:flex-row gap-10">
        {/* Services */}
        <div className="w-full md:w-[20%]">
          <div className="font-semibold mb-3">Services</div>
          <div className="flex flex-col gap-2 text-sm opacity-90">
            <div>Whiteboard</div>
            <div>Duels</div>
            <div>Chat</div>
            <div>Leaderboard</div>
          </div>
        </div>

        {/* Connect */}
        <div className="w-full md:w-[20%]">
          <div className="font-semibold mb-3">Connect</div>
          <div className="flex flex-col gap-2 text-sm opacity-90">
            <div>Discord</div>
            <div>GitHub</div>
            <div>LinkedIn</div>
            <div>Twitter</div>
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* CTA */}
        <div className="flex flex-col justify-center items-start">
          <div className="font-semibold mb-2">Get Started</div>
          <button className="bg-[#B10F2E] hover:bg-[#9c0d28] px-5 py-2 rounded-md text-sm font-medium">
            <Link href="/signin">Sign In</Link>
          </button>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#B10F2E] px-10 py-4 text-sm opacity-80 flex justify-between items-center">
        <div>© 2026 Code-aborate</div>
        <div>Utkarsh Tripathi</div>
      </div>
    </section>
  );
};

export default Footer;
