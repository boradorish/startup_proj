"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { BottomTab } from "../BottomTab";
import { Feed } from "../Feed";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { IconButton } from "@mui/material";
import { TopBanner } from "../TopBanner";
import { dummyFeedData } from "@/app/dummys";

export default function Home() {
  //   const router = useRouter();

  return (
    <div className="app-container flex flex-col items-center ">
      <TopBanner />
      <div className="h-5" />
      <SearchBar />
      <div className="h-5" />

      <div className="px-4 flex flex-col items-center gap-4">
        {dummyFeedData.map((value, index) => (
          <Feed
            key={index}
            id={value.id}
            title={value.title}
            content={value.content}
            location={value.location}
            time={value.time}
            check={value.check}
            likes={value.likes}
            scrap={value.scrap}
          />
        ))}
      </div>
      <BottomTab location={0} />
      <div className="h-20" />
    </div>
  );
}

const SearchBar = () => {
  return (
    <div>
      <div className="border border-gray-300 rounded-[100px] px-4 py-1 w-90 flex items-center">
        <input
          placeholder="검색어를 입력해주세요."
          className="focus:outline-none w-80"
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
