"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { BottomTab } from "../BottomTab";
import { Feed } from "../Feed";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { IconButton } from "@mui/material";
import { TopBanner } from "../TopBanner";

export default function Home() {
  //   const router = useRouter();

  return (
    <div className="app-container flex flex-col items-center ">
      <TopBanner />
      <div className="h-5" />
      <SearchBar />
      <div className="h-5" />

      <div className="px-4 flex flex-col items-center gap-4">
        <Feed
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
      <BottomTab location={0} />
      <div className="h-20" />
    </div>
  );
}

const SearchBar = () => {
  return (
    <div>
      <div className="border border-gray-300 rounded-[100px] px-4 py-1 w-103 flex items-center">
        <input
          placeholder="검색어를 입력해주세요."
          className="focus:outline-none w-90"
        />
        <IconButton style={{ width: 20, padding: 1 }}>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ width: 20, padding: 0 }}
          />
        </IconButton>
      </div>
    </div>
  );
};
