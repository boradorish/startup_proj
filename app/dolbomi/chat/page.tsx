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
      <div className="w-90 jusitfy-start mb-3">
        <div className="font-bold text-[var(--text1)] text-[23px] ">채팅</div>
      </div>
      <div className="app-container flex flex-col items-center px-10 gap-3">
        {dummyChatData.map((value, key) => (
          <ChatFeed
            key={key}
            name={value.name}
            content={value.content}
            id={value.id}
            isNew={value.isNew}
            type="customer"
          />
        ))}
      </div>

      <BottomTab location={1} />
    </div>
  );
}
