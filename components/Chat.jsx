import { Send } from "lucide-react";
import React from "react";

const Chat = () => {
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
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0 },
  };
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
  ];
  return (
    <section className="mt-10 p-7 md:p-20">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="mt-10 p-5 flex justify-center items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-[#B10F2E] mb-5 text-center">
              Chat
            </h2>
            <p className="text-[#B10F2E] text-3xl md:text-4xl text-center mb-5 mt-10">
              Chat with friends, clear doubts instantly, and collaborate while
              solving problems.
            </p>
          </div>
        </div>

        <div className="chat mx-auto p-2 bg-[#b10f2e]">
          <div
            className="square rounded-lg bg-[#f3dfc1]
          w-80 h-80
          md:w-120 md:h-120 mx-auto flex p-1 gap-1 "
          >
            <div className="w-[35%] h-full bg-[#b10f2e] rounded-lg p-1 overflow-y-auto ">
              <div className="w-full bg-[#f3dfc1] h-[15%] rounded-sm text-[#b10f2e] text-md md:text-xl font-bold flex items-center justify-center sticky top-0">
                Your Profile
              </div>
              {users.map((element, index) => {
                return (
                  <div
                    key={index}
                    className="w-full bg-[#f3dfc1] h-[15%] rounded-sm mt-2 flex items-center justify-between overflow-hidden text-sm md:text-lg p-2 text-[#b10f2e] whitespace-nowrap"
                  >
                    {element.name}:{element.message}
                  </div>
                );
              })}
            </div>
            <div className="flex-1 md:w-[30] bg-[#b10f2e] rounded-lg p-1 scroll-none overflow-hidden">
              <div className="w-full h-full bg-[#f3dfc1] rounded-lg overflow-y-auto flex flex-col ">
                <div className="text-[#b10f2e] bg-[#f3dc1] text-2xl flex items-center w-full h-[15%] border-b-4 border-[#b10f2e] p-4 text-bold sticky top-0 text-bold z-10 bg-[#f3dfc1] flex items-center gap-2 whitespace-nowrap">
                  Raj
                </div>
                {messages.map((element, index) => (
                  <div className="bg-[#b10f2e] p-2 text-[#f3dfc1]" key={index}>
                    {element.sentBy}:{element.message}
                  </div>
                ))}
                <div className="text-[#b10f2e] text-lg flex items-center w-full h-[15%] border-t-4 border-[#b10f2e] p-4 text-bold sticky top-0 text-bold sticky bottom-0 z-10 bg-[#f3dfc1] flex items-center gap-2 whitespace-nowrap">
                  Send a message... &nbsp;
                  <Send className='cursor-pointer'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chat;
