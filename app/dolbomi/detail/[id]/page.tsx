"use client";
import { TopBanner } from "@/app/dolbomi/TopBanner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams, useRouter } from "next/navigation";

export default function DetailPage() {
  //   const router = useRouter();
  const params = useParams(); // { id: "123" } 이런 식으로 옴
  const { id } = params;

  return (
    <div className="app-container flex flex-col items-center ">
      <TopBanner />

      <div className="h-20" />
    </div>
  );
}
