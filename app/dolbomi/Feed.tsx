"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faHome,
  faStar,
  faThumbsUp,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import { useRouter } from "next/navigation";
interface FeedProps {
  title: string;
  content: string;
  location: string;
  time: string;
  check: number;
  likes: number;
  scrap: number;
}

export const Feed = ({
  title,
  content,
  location,
  time,
  check,
  likes,
  scrap,
}: FeedProps) => {
  const router = useRouter();
  const [value, setValue] = useState(location);

  return (
    <div
      style={{
        backgroundColor: "var(--mainDark)",
        borderRadius: 7,
        width: 420,
      }}
      className="px-3 py-2"
    >
      <div className="text-[15px] font-bold text-[var(--text3)]">{title}</div>
      <div className="text-[12px] text-[var(--text4)]">{content}</div>
      <div className="h-2" />
      <div className="flex justify-between">
        <div className="flex items-center gap-0.5 text-[var(--text4)]">
          <div className="text-[12px]  ">{location}</div>
          {" · "}
          <div className="text-[12px]  ">{time}</div>
          {" · "}
          <div className="text-[12px]  ">조회 {check}</div>
        </div>
        <div className="flex items-center text-[var(--text4)]">
          <FontAwesomeIcon icon={faThumbsUp} style={{ width: 10 }} />
          <div className="text-[12px] px-1">{likes}</div>

          <FontAwesomeIcon icon={faStar} style={{ width: 10 }} />
          <div className="text-[12px] px-1">{scrap}</div>
        </div>
      </div>
    </div>
  );
};
