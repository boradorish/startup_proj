"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { IconButton } from "@mui/material";
import { TopBanner } from "@/app/dolbomi/TopBanner";
import { CBottomTab } from "../CBottomTab";
import { ChatFeed } from "@/app/dolbomi/ChatFeed";
import { dummyChatData } from "@/app/dummys";
import { TopButton } from "@/app/dolbomi/detail/[id]/page";

export default function NowPage() {
  return (
    <div className="app-container-customer flex flex-col items-center ">
      <TopButton />
      <div className="h-5" />
    </div>
  );
}
