"use client";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { IconButton } from "@mui/material";
import {
  faAngleRight,
  faCircleInfo,
  faEnvelope,
  faGear,
  faHeadset,
  faInfo,
  faPencil,
  faPhone,
  faSquarePen,
} from "@fortawesome/free-solid-svg-icons";
import { TopBanner } from "@/app/dolbomi/TopBanner";
import { CBottomTab } from "../CBottomTab";

export default function Home() {
  const router = useRouter();

  const [preview, setPreview] = useState<string>("/dummy_customer0.png");
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
        <div className="font-bold text-[var(--subDark2)] text-[23px] ">
          프로필
        </div>
      </div>
      <div className=" w-90">
        <div className="flex gap-5 items-center">
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
            <div className="flex flex-col ">
              <div className="flex text-[var(--text2)] text-[15px] gap-1 font-bold items-center">
                <div>닉네임</div>
                <div className="text-[var(--text2)] font-normal">지우엄마</div>
                <IconButton style={{ padding: 2 }}>
                  <FontAwesomeIcon
                    icon={faPencil}
                    style={{ color: "var(--subDark)", width: 14, height: 14 }}
                  />
                </IconButton>
              </div>
              <div className="flex text-[var(--text2)] text-[15px] gap-1 font-bold items-center">
                <div>생년월일</div>
                <div className="text-[var(--text2)] font-normal pr-3">
                  1970.07.22
                </div>
                <div>성별</div>
                <div className="text-[var(--text2)] font-normal">여성</div>
              </div>
              <div className="flex text-[var(--text2)] text-[15px] gap-1 font-bold items-center">
                <div>거주지</div>
                <div className="text-[var(--text2)] font-normal">
                  서울시 서초구
                </div>
              </div>
            </div>
            <div className="flex gap-2 mb-2 text-[var(--text2)] text-[14px]"></div>
          </div>
        </div>
        <div className="w-90 jusitfy-start mt-3">
          <div className="font-bold text-[var(--subDark2)] text-[23px] ">
            돌봄 의뢰
          </div>
        </div>
        <Button
          onClick={() => router.push("/customer/now")}
          variant="contained"
          sx={{
            backgroundColor: "var(--sub)",
            borderRadius: 2,
            paddingY: 1,
            marginTop: 2,
            boxShadow: "none",
            width: "100%",
            height: "80px",
            padding: "6px 0px",
          }}
        >
          현재 진행 중인 돌봄 의뢰
        </Button>
        <div className="flex gap-3">
          <Button
            onClick={() => router.push("/customer/past")}
            variant="contained"
            sx={{
              backgroundColor: "var(--sub)",
              borderRadius: 2,
              paddingY: 1,
              marginTop: 1,
              boxShadow: "none",
              height: "60px",
              width: "100%",
              padding: "6px 0px",
            }}
          >
            과거 진행했던 돌봄 의뢰
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "var(--sub)",
              borderRadius: 2,
              paddingY: 1,
              marginTop: 1,
              height: "60px",
              boxShadow: "none",
              width: "100%",
              padding: "6px 0px",
            }}
          >
            작성한 리뷰
          </Button>
        </div>
        <Button
          variant="contained"
          onClick={() => router.push("/customer/post")}
          sx={{
            backgroundColor: "var(--subDark)",
            borderRadius: 2,
            paddingY: 1,
            marginTop: 1,
            height: "100px",
            boxShadow: "none",
            width: "100%",
            padding: "6px 0px",
            fontSize: 18,
            fontWeight: 600,
          }}
        >
          돌봄 의뢰하러 가기
          <FontAwesomeIcon icon={faAngleRight} />
        </Button>
        <div className="w-90 jusitfy-start mt-3 ">
          <div className="font-bold text-[var(--subDark2)] text-[23px] ">
            설정
          </div>
        </div>
        <div className="w-full bg-[var(--subLight)] gap-3 flex  flex-col rounded p-2">
          <div className="flex w-full justify-between items-center">
            <div className="flex w-full gap-2  items-center">
              <FontAwesomeIcon icon={faGear} />
              <div>앱 설정</div>
            </div>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
          <div className="flex w-full justify-between items-center">
            <div className="flex w-full gap-2 items-center">
              <FontAwesomeIcon icon={faHeadset} />
              <div>고객센터</div>
            </div>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
          <div className="flex w-full justify-between items-center">
            <div className="flex w-full gap-2 items-center">
              <FontAwesomeIcon icon={faEnvelope} />
              <div>의견 남기기</div>
            </div>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
          <div className="flex w-full justify-between items-center">
            <div className="flex w-full gap-2 items-center">
              <FontAwesomeIcon icon={faCircleInfo} />
              <div>약관 및 정책</div>
            </div>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        </div>
      </div>
      <div className="h-15" />

      <CBottomTab location={0} />
    </div>
  );
}
