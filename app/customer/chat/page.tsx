"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { IconButton } from "@mui/material";
import { TopBanner } from "@/app/dolbomi/TopBanner";
import { CBottomTab } from "../CBottomTab";
import { ChatFeed } from "@/app/dolbomi/ChatFeed";
import { dummyChatData } from "@/app/dummys";

export default function Home() {
  //   const router = useRouter();

  return (
    <div className="app-container-customer flex flex-col items-center ">
      <TopBanner />
      <div className="h-5" />
      <div className="flex flex-col gap-3 px-4">
        {dummyChatData.map((value, key) => (
          <ChatFeed key={key} name={value.name} content={value.content} />
        ))}
        <div className="px-4 flex flex-col items-center gap-4"></div>
      </div>
      <div className="h-20" />
      <CBottomTab location={1} />
    </div>
  );
}
