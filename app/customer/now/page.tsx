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
import { SuggestFeed } from "../SuggestFeed";
import { Feed } from "@/app/dolbomi/Feed";

export default function NowPage() {
  return (
    <div className="app-container-customer flex flex-col items-center ">
      <TopButton type="customer" />
      <div className="px-4">
        <Feed
          type="customer"
          id={0}
          title="오늘 저녁 아이 유치원 하교 도와줄 여성 분 구해요"
          content="오늘 저녁에 세명초등학교 다니는 아동 하교를 도와줄 분 구합니다. 오늘 저녁에 세명초등학교 다니는 아동 하교를 도와줄 분 구합니다.오늘 저녁에 세명초등학교 다니는 아동 하교를 도와줄 분 구합니다."
          location={"봉천동"}
          time={"13시간 전"}
          check={317}
          likes={23}
          scrap={12}
        />
      </div>
      <div className="h-5" />
    </div>
  );
}
