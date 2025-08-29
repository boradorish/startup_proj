"use client";

import { useRouter } from "next/navigation";
import { BottomTab } from "../BottomTab";
import { ChatFeed } from "../ChatFeed";
import { TopBanner } from "../TopBanner";
import { dummyChatData } from "@/app/dummys";

export default function Chat() {
  const router = useRouter();

  return (
    <div className="app-container flex flex-col items-center">
      <TopBanner />
      <div className="w-100 jusitfy-start mb-3">
        <div className="font-bold text-[var(--text1)] text-[23px] ">채팅</div>
      </div>
      <div className="app-container flex flex-col items-center px-10 gap-5">
        {dummyChatData.map((value, key) => (
          <ChatFeed key={key} name={value.name} content={value.content} />
        ))}
      </div>

      <BottomTab location={1} />
    </div>
  );
}
