"use client";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { BottomTab } from "../BottomTab";
import { TopBanner } from "../TopBanner";
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

export default function My() {
  const router = useRouter();

  const [preview, setPreview] = useState<string>("/dummy_dolbomi0.png");
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="app-container flex flex-col items-center ">
      <TopBanner />
      <div className="w-90 jusitfy-start mb-3">
        <div className="font-bold text-[var(--text1)] text-[23px] ">
          마이페이지
        </div>
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
              <div>개인정보</div>
              <Tooltip title="돌보미 활동이 승인된 사용자입니다" arrow>
                <FontAwesomeIcon
                  icon={faSquareCheck}
                  style={{ color: "#427aebff" }}
                />
              </Tooltip>
            </div>
            <div className="flex gap-2 mb-2 text-[var(--text2)] text-[14px]">
              <div className="text-[var(--text2)]">김도움</div>
              <div>1985.08.13</div>
              <div>여성</div>
            </div>

            <div className="font-bold text-[var(--text2)] text-[15px]">
              나의 돌봄 별점
            </div>
            <div className="flex items-center gap-2 text-[14px] text-[var(--text1)]">
              <div className="flex">
                <FontAwesomeIcon icon={faStar} style={{ width: 10 }} />
                <FontAwesomeIcon icon={faStar} style={{ width: 10 }} />
                <FontAwesomeIcon icon={faStar} style={{ width: 10 }} />
                <FontAwesomeIcon icon={faStar} style={{ width: 10 }} />
                <FontAwesomeIcon
                  icon={faStarHalfStroke}
                  style={{ width: 10 }}
                />
              </div>
              <div>4.7점</div>
            </div>
          </div>
        </div>
        <div className="flex gap-1 items-center">
          <div className="font-bold text-[var(--text2)]">자기 소개</div>
          <IconButton>
            <FontAwesomeIcon
              icon={faPencil}
              style={{ color: "var(--text2)", width: 15, height: 15 }}
            />
          </IconButton>
        </div>
        <div className="text-[13px] text-[var(--text2)]">
          안녕하세요, 돌봄 경험이 있는 김도움입니다. <br />
          예전에 요양보호사로 5년간 활동하다 잠시 경력이 단절되었지만, 이번
          플랫폼을 통해 다시 일을 시작하게 되었습니다. <br />
          파트타임으로 아이 하원 동행이나 어르신 병원 동행 등 틈틈이 도움 드리고
          있습니다. 신원 확인 및 범죄·아동학대 전력 조회를 마쳤고, 관련 자격증도
          플랫폼에 등록해 두었습니다. <br />
          필요할 때 믿고 맡길 수 있는 따뜻한 동행자가 되겠습니다.
        </div>
        <div className="flex flex-col gap-2">
          <Button
            // onClick={() => router.push("/dolbomi/home")}
            variant="contained"
            sx={{
              backgroundColor: "var(--mainDark)",
              borderRadius: 2,
              paddingY: 1,
              marginTop: 5,
              boxShadow: "none",
              width: "100%",
              padding: "6px 0px",
            }}
          >
            과거 돌봄 진행내역 보기
            <FontAwesomeIcon icon={faAngleRight} />
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "var(--main)",
              borderRadius: 2,
              paddingY: 1,
              height: 100,
              boxShadow: "none",
              width: "100%",
              padding: "6px 0px",
            }}
          >
            현재 지원한 돌봄 진행내역 보기
            <FontAwesomeIcon icon={faAngleRight} />
          </Button>
          <div className="flex gap-2">
            <Button
              // onClick={() => router.push("/dolbomi/home")}
              variant="contained"
              sx={{
                backgroundColor: "var(--mainDark)",
                borderRadius: 2,
                paddingY: 1,
                boxShadow: "none",
                width: "100%",
                padding: "6px 0px",
              }}
            >
              스크랩한 돌봄 의뢰
              <FontAwesomeIcon icon={faAngleRight} />
            </Button>
          </div>
        </div>
      </div>

      <BottomTab location={2} />
    </div>
  );
}
