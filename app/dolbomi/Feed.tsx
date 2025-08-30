"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faHome,
  faPaperclip,
  faStar,
  faThumbsUp,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Box, Button, Tab, Tabs } from "@mui/material";
import { useRouter } from "next/navigation";
export interface FeedProps {
  type?: "dolbomi" | "now" | "past";
  id: number;
  title: string;
  content: string;
  location: string;
  time: string;
  check: number;
  likes: number;
  scrap: number;
}

export const Feed = ({
  type = "dolbomi",
  id,
  title,
  content,
  location,
  time,
  check,
  likes,
  scrap,
}: FeedProps) => {
  const router = useRouter();
  const [more, setMore] = useState<boolean>(false);

  return (
    <div
      style={{
        backgroundColor: type == "dolbomi" ? "var(--main)" : "var(--subLight)",
        borderRadius: 7,
        width: "100%",
      }}
      className="px-3 py-2 relative"
      onClick={
        type == "dolbomi"
          ? () => router.push(`/dolbomi/detail/${id}`)
          : type == "now"
          ? () => router.push(`/customer/now/applier`)
          : () => {}
      }
    >
      {type !== "dolbomi" && (
        <FontAwesomeIcon
          icon={faPaperclip}
          style={{ position: "absolute", top: -10, width: 20, height: 20 }}
        />
      )}

      <div className="text-[15px] font-bold text-[var(--text1)] mt-2 mb-1">
        {title}
      </div>
      <div className="text-[12px] text-[var(--text2)]">{content}</div>
      <div className="h-2" />

      {type == "dolbomi" && (
        <div className="flex justify-between">
          <div className="flex gap-2 mb-1">
            {id == 0 && (
              <>
                <span className="px-2 py-0.5 bg-[var(--subLight)] text-[12px] rounded-md">
                  노인 동행
                </span>
                <span className="px-2 py-0.5 bg-gray-200 text-[12px] rounded-md">
                  봉천동
                </span>
              </>
            )}
            {id == 1 && (
              <>
                <span className="px-2 py-0.5 bg-[var(--subLight)] text-[12px] rounded-md">
                  아이 등하교
                </span>
                <span className="px-2 py-0.5 bg-gray-200 text-[12px] rounded-md">
                  서초구
                </span>
              </>
            )}
            {id == 2 && (
              <>
                <span className="px-2 py-0.5 bg-[var(--subLight)] text-[12px] rounded-md">
                  노인 동행
                </span>
                <span className="px-2 py-0.5 bg-gray-200 text-[12px] rounded-md">
                  수성구
                </span>
              </>
            )}
          </div>
          <div className="flex items-center text-[var(--text2)]">
            <FontAwesomeIcon icon={faStar} style={{ width: 10 }} />
            <div className="text-[12px] px-1">{scrap}</div>
          </div>
        </div>
      )}
      {type == "now" && (
        <Button
          variant="outlined"
          onClick={() => setMore(!more)}
          sx={{
            paddingY: 1,
            boxShadow: "none",
            width: "100%",
            padding: "1px 0px",
            color: "var(--subDark2)",
            borderColor: "var(--subDark2)",
            fontWeight: 600,
          }}
        >
          지원자 보러가기
        </Button>
      )}

      {type == "past" && (
        <>
          <Button
            variant="text"
            onClick={() => setMore(!more)}
            sx={{
              paddingY: 1,
              boxShadow: "none",
              width: "100%",
              padding: "1px 0px",
              color: "var(--text3)",
              fontWeight: 600,
            }}
          >
            더보기
          </Button>
          {more && (
            <>
              <div className="text-[15px] text-[var(--text2)] font-bold mb-2">
                이 돌보미와 함께 했어요
              </div>
              <div className="gap-3 flex items-center">
                <img
                  src={"/dummy_dolbomi0.png"}
                  alt="preview"
                  className="w-14 h-14 object-cover rounded"
                  style={{ backgroundColor: "var(--sub)", borderRadius: 100 }}
                />
                <div>
                  <div className="flex gap-1 items-center">
                    <div className="font-bold text-[16px]">김도움</div>
                    <div className="text-[14px] text-[var(--text2)]">여성</div>
                    <div className="text-[14px] text-[var(--text2)]">
                      (40세)
                    </div>
                  </div>
                  <div className="flex gap-1 items-end text-[var(--text2)]">
                    <div className="font-bold text-[15px]">금액:</div>
                    <div className="font-normal text-[14px]">18000</div>
                  </div>
                </div>
              </div>
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
                onClick={() => router.push("/review")}
              >
                돌보미 리뷰쓰기
              </Button>
            </>
          )}
        </>
      )}
    </div>
  );
};
