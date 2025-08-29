"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { IconButton, Typography } from "@mui/material";
import { TopBanner } from "@/app/dolbomi/TopBanner";
import { CBottomTab } from "../CBottomTab";
import { ChatFeed } from "@/app/dolbomi/ChatFeed";
import { dummyChatData } from "@/app/dummys";
import { TopButton } from "@/app/dolbomi/detail/[id]/page";
import { SuggestFeed } from "../SuggestFeed";
import { Feed } from "@/app/dolbomi/Feed";

export default function NowPage() {
  return (
    <div className="app-container-customer flex flex-col ">
      <TopButton type="customer" />
      <div className="px-4">
        <Typography variant="h6" fontWeight={700} sx={{ pb: 1 }}>
          돌봄 의뢰
        </Typography>
        <div className="flex flex-col gap-4 mt-3">
          <Feed
            type="now"
            id={0}
            title="오늘 저녁 아이 유치원 하교 도와줄 여성 분 구해요"
            content="저녁 6시에 유치원에서 ○○학원까지 아동 하원 동행 도와주실 분 찾습니다. 제가 오늘 급하게 저녁일정이 생겨서 아이 유치원에 하원 시간에 맞추지 못 할 거 같아서 요청 드려요.."
            location={"봉천동"}
            time={"2일 전"}
            check={7}
            likes={23}
            scrap={8}
          />
          <Feed
            type="now"
            id={0}
            title="다음 주 화요일  아이 유치원 하교 도와줄 분 구해요"
            content="오후 2시에 유치원에서 ○○학원까지 아동 하원 동행 도와주실 분 찾습니다. 당일에 아이가 체육대회로 일찍끝나서 혼자 있는 시간이 길어질 것 같아 걱정되네요. 이렇게 급하게 요청드립니다."
            location={"봉천동"}
            time={"14분 전"}
            check={7}
            likes={23}
            scrap={8}
          />
        </div>
      </div>
      <div className="h-5" />
    </div>
  );
}
