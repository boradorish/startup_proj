"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { IconButton } from "@mui/material";
import { TopBanner } from "@/app/dolbomi/TopBanner";

export default function Home() {
  //   const router = useRouter();

  return (
    <div className="app-container flex flex-col items-center ">
      <TopBanner />
      <div className="h-5" />

      <div className="px-4 flex flex-col items-center gap-4"></div>

      <div className="h-20" />
    </div>
  );
}
