"use client";
import { TopBanner } from "@/app/dolbomi/TopBanner";
import { CBottomTab } from "../CBottomTab";
import { ChatFeed } from "@/app/dolbomi/ChatFeed";
import { dummyDolbomiChatData } from "@/app/dummys";

export default function ChatPage() {
  //   const router = useRouter();

  return (
    <div className="app-container-customer flex flex-col items-center ">
      <TopBanner />
      <div className="w-90 jusitfy-start mb-3">
        <div className="font-bold text-[var(--subDark2)] text-[23px] ">
          채팅
        </div>
      </div>
      <div className="flex flex-col gap-3 px-4">
        {dummyDolbomiChatData.map((value, key) => (
          <ChatFeed
            key={key}
            name={value.name}
            id={value.id}
            content={value.content}
            type="dolbomi"
            isNew={value.isNew}
          />
        ))}
        <div className="px-4 flex flex-col items-center gap-4"></div>
      </div>
      <CBottomTab location={1} />
    </div>
  );
}
