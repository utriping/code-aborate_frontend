import { Send, Settings } from "lucide-react";
import React from "react";

const page = () => {
  //click a chat to see the messsages --> e= clicked Raj -->
  const messages = [
    { message: "Hey, how are you doing?", sentBy: "Raj" },
    { message: "I am doing great, how about you?", sentBy: "You" },
    { message: "I am good too, thanks for asking!", sentBy: "Raj" },
    { message: "What are you up to?", sentBy: "You" },
    { message: "Just working on a project, you?", sentBy: "Raj" },
    { message: "Same here, trying to finish it up.", sentBy: "You" },
    { message: "Do you want to have a duel at 11", sentBy: "You" },
    { message: "Yeah, would love to", sentBy: "John" },
    { message: "Great, see you then!", sentBy: "You" },
  ];
  const users = [
    { name: "Anmol", points: 150, message: "That's great" },
    { name: "Rohit", points: 120, message: "Hope you got that part" },
    { name: "Sanya", points: 100, message: "Duel??" },
    {
      name: "Priya",
      points: 80,
      message: "Can you help me with this problem?",
    },
    { name: "Amit", points: 60, message: "Sure, let me take a look at it." },
    { name: "Anmol", points: 150, message: "That's great" },
    { name: "Rohit", points: 120, message: "Hope you got that part" },
    { name: "Sanya", points: 100, message: "Duel??" },
    {
      name: "Priya",
      points: 80,
      message: "Can you help me with this problem?",
    },
    { name: "Amit", points: 60, message: "Sure, let me take a look at it." },
  ];
  return (
    <section className="my-10 border border-[#B10F2E] h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-[30%_1fr] h-screen overflow-y-scroll ">
        <div className="w-full bg-[#B10F2E]">
          <div className="h-22 bg-[#B10F2E] text-2xl font-bold p-3 flex flex-cols gap-4 items-center border-b-2 border-[#f3dfc1] border-r-none sticky top-0">
            <div className="rounded-full w-14 h-14 bg-white inline-flex items-center justify-center text-2xl font-bold">
              YOU
            </div>
            <div className="text-[#F3DFC1]">Your Profile</div>
            <Settings className="ml-auto text-[#F3DFC1]" size={32}></Settings>
          </div>
          {users.map((user, index, arr) => {
            return (
              <div
                className="h-20 border border-[#f3dfc1] border-r-none p-3 flex flex-cols gap-3 items-center"
                key={index}
              >
                <div className="rounded-full w-12 h-12 bg-white inline-flex items-center justify-center text-2xl font-bold">
                  {user.name.slice(0, 1).toUpperCase()}
                </div>
                <div className="text-xl text-[#F3DFC1]">{user.name}</div>
              </div>
            );
          })}
          <div className="">Add more friends to chat with more people</div>
        </div>
        <div className="hidden lg:block lg:w-full bg-[#B10F2E] border-l-2 border-[#f3dfc1]">
          <div className="h-22 text-2xl font-bold p-3 flex flex-cols gap-4 items-center border-b-2 border-[#f3dfc1] border-r-none sticky top-0">
            <div className="rounded-full w-14 h-14 bg-white inline-flex items-center justify-center text-2xl font-bold">
              YOU
            </div>
            <div className="text-[#F3DFC1]">Your Profile</div>
            <Settings className="ml-auto text-[#F3DFC1]" size={32}></Settings>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
