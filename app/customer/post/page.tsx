"use client";
import { Alert, Button, DialogContent, IconButton } from "@mui/material";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Home() {
  //   const router = useRouter();
  const [suggest, setSuggest] = useState<boolean>(false);
  return (
    <div className="app-container-customer flex flex-col items-center ">
      <PostTopButton type="customer" />
      <div className="px-4 flex flex-col w-full h-full pb-4">
        <input
          type="text"
          placeholder="제목을 입력하세요"
          style={{ backgroundColor: "var(--subLight3)" }}
          className=" w-full px-3 py-2
            bg-transparent rounded
            text-[16px] placeholder:font-bold
            placeholder:text-[16px]
            placeholder:text-[var(--sub)] focus:outline-none
              transition mb-3"
        />
        <div
          style={{
            color: "var(--subDark)",
          }}
          className="text-[16px] font-bold pb-1 pl-1"
        >
          지출 가능 금액
        </div>
        <div
          className="flex items-center px-3 py-1  rounded"
          style={{ backgroundColor: "var(--subLight3)" }}
        >
          <div className="font-semibold text-[14px] text-[var(--sub)] pr-2">
            {"₩"}
          </div>
          <input
            type="text"
            placeholder="가격입력"
            className=" placeholder:font-semibold
            placeholder:text-[14px] flex-1
            placeholder:text-[var(--sub)] focus:outline-none transition "
          />

          <div className="flex items-center">
            <IconButton onClick={() => setSuggest(!suggest)}>
              <FontAwesomeIcon
                icon={faSquareCheck}
                style={{
                  color: suggest ? "var(--subDark)" : "var(--sub)",
                  width: 16,
                  height: 16,
                }}
              />
            </IconButton>
            <div
              style={{
                color: suggest ? "var(--subDark)" : "var(--sub)",
              }}
              className="text-[14px] text-semibold"
            >
              가격제안 받기
            </div>
          </div>
        </div>
        <div
          style={{
            color: "var(--subDark)",
          }}
          className="text-[16px] font-bold pb-1 pl-1 mt-1"
        >
          장소
        </div>
        <div
          className="flex items-center px-3 py-2  rounded"
          style={{ backgroundColor: "var(--subLight3)" }}
        >
          <input
            type="text"
            placeholder="장소"
            className=" placeholder:font-semibold
            placeholder:text-[14px] flex-1
            placeholder:text-[var(--sub)] focus:outline-none transition "
          />
        </div>
        <div
          style={{
            color: "var(--subDark)",
          }}
          className="text-[16px] font-bold pb-1 pl-1 mt-1"
        >
          일시
        </div>
        <div
          className="flex items-center px-3 py-2 mb-3 rounded"
          style={{ backgroundColor: "var(--subLight3)" }}
        >
          <input
            type="date"
            placeholder="일시"
            className="placeholder:font-semibold
            placeholder:text-[14px] flex-1 mr-2
            placeholder:text-[var(--sub)] focus:outline-none transition "
          />
          <input
            type="time"
            placeholder="일시"
            className=" placeholder:font-semibold
            placeholder:text-[14px] flex-1
            placeholder:text-[var(--sub)] focus:outline-none transition "
          />
        </div>

        <textarea
          // value={body}
          // onChange={(e) => setBody(e.target.value)}
          rows={8}
          className="
          w-full flex-1 text-[14px]
          px-3 py-2 resize-none placeholder:text-[14px]
          focus:outline-none placeholder:font-normal
          placeholder:text-[var(--sub)] rounded mb-3
        "
          placeholder="돌봄 의뢰 내용을 자유롭게 적어주세요."
          style={{ backgroundColor: "var(--subLight3)" }}
        />
      </div>
    </div>
  );
}

const PostTopButton = ({
  type = "dolbomi",
}: {
  type?: "dolbomi" | "customer";
}) => {
  const router = useRouter();
  const [modal, setModal] = useState<boolean>(false);

  return (
    <>
      {" "}
      <AlertModal open={modal} content="돌봄 지원이 완료되었어요" />
      <div className="flex justify-between w-full p-2 items-center">
        <IconButton onClick={() => router.back()}>
          <FontAwesomeIcon
            icon={faAngleLeft}
            style={{ width: 22, height: 22 }}
          />
        </IconButton>

        <div>
          <Button
            variant="text"
            onClick={() => {
              setModal(true);
              setTimeout(() => {
                router.push("/customer/main");
              }, 500);
            }}
            style={{ color: "var(--subDark)", fontWeight: 700, fontSize: 15 }}
          >
            완료
          </Button>
        </div>
      </div>
    </>
  );
};

const AlertModal = ({ open, content }: { open: boolean; content: string }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "393px",
        width: "100vw",
      }}
    >
      <div
        className="absolute z-2000 bottom-10 "
        style={{
          maxWidth: "393px",
          width: "100%",
        }}
      >
        {open && (
          <>
            <DialogContent>
              <Alert severity="success">{content}</Alert>
            </DialogContent>
          </>
        )}
      </div>
    </div>
  );
};
