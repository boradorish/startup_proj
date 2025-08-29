"use client";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { IconButton, Tooltip } from "@mui/material";
import {
  faAngleRight,
  faCheckCircle,
  faPencil,
  faSquareCheck,
  faSquarePen,
  faStar,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import { TopBanner } from "@/app/dolbomi/TopBanner";
import { CBottomTab } from "../CBottomTab";

export default function Home() {
  const router = useRouter();

  const [preview, setPreview] = useState<string>(
    "https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg"
  );
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="app-container-customer flex flex-col items-center">
      <TopBanner />
      <div className="w-90 jusitfy-start mb-3">
        <div className="font-bold text-[var(--text1)] text-[23px] ">프로필</div>
      </div>
      <div className=" w-90">
        <div className="flex gap-5">
          <div className="relative">
            <img
              src={preview}
              className="w-20 h-20 object-cover rounded"
              style={{ backgroundColor: "var(--sub)", borderRadius: 100 }}
            />
            <IconButton component="label">
              <input
                hidden
                type="file"
                accept="image/*"
                className=""
                onChange={handleFile}
              />
              <FontAwesomeIcon
                icon={faSquarePen}
                style={{ position: "absolute", left: 58, bottom: 18 }}
              />
            </IconButton>
          </div>
          <div>
            <div className="flex text-[var(--text2)] text-[15px] gap-1 font-bold items-center">
              <div>닉네임</div>
              <div className="text-[var(--text2)] font-normal">지우엄마</div>
              <IconButton>
                <FontAwesomeIcon
                  icon={faPencil}
                  style={{ color: "var(--subDark)", width: 14, height: 14 }}
                />
              </IconButton>
            </div>
            <div className="flex gap-2 mb-2 text-[var(--text2)] text-[14px]"></div>
          </div>
        </div>
        <div className="w-90 jusitfy-start mt-3">
          <div className="font-bold text-[var(--text1)] text-[23px] ">
            돌봄 의뢰
          </div>
        </div>
        <Button
          onClick={() => router.push("/customer/now")}
          variant="contained"
          sx={{
            backgroundColor: "var(--sub)",
            borderRadius: 4,
            paddingY: 1,
            marginTop: 5,
            boxShadow: "none",
            width: "100%",
            padding: "6px 0px",
          }}
        >
          현재 진행 중인 돌봄 의뢰
          <FontAwesomeIcon icon={faAngleRight} />
        </Button>
        <Button
          onClick={() => router.push("/customer/past")}
          variant="contained"
          sx={{
            backgroundColor: "var(--sub)",
            borderRadius: 4,
            paddingY: 1,
            marginTop: 2,
            boxShadow: "none",
            width: "100%",
            padding: "6px 0px",
          }}
        >
          과거 진행했던 돌봄 의뢰
          <FontAwesomeIcon icon={faAngleRight} />
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "var(--sub)",
            borderRadius: 4,
            paddingY: 1,
            marginTop: 2,
            boxShadow: "none",
            width: "100%",
            padding: "6px 0px",
          }}
        >
          작성한 리뷰
          <FontAwesomeIcon icon={faAngleRight} />
        </Button>
        <Button
          variant="contained"
          onClick={() => router.push("/customer/post")}
          sx={{
            backgroundColor: "var(--sub)",
            borderRadius: 4,
            paddingY: 1,
            marginTop: 10,
            boxShadow: "none",
            width: "100%",
            padding: "6px 0px",
          }}
        >
          돌봄 의뢰하러 가기
          <FontAwesomeIcon icon={faAngleRight} />
        </Button>
      </div>
      <CBottomTab location={0} />
    </div>
  );
}
