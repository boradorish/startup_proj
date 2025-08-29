"use client";
import { TopBanner } from "@/app/dolbomi/TopBanner";
import {
  faAngleLeft,
  faBell,
  faEllipsisVertical,
  faStar,
  faStarHalfStroke,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Drawer,
  IconButton,
  Slider,
  Stack,
} from "@mui/material";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function DetailPage() {
  const router = useRouter();
  const params = useParams(); // { id: "123" } 이런 식으로 옴
  const { id } = params;
  const [open, setOpen] = useState(false);
  const toggleDrawer = (state: boolean) => () => {
    setOpen(state);
  };

  const [value, setValue] = useState<number>(30);
  const [modal, setModal] = useState<boolean>(false);
  const handleChange = (event: Event, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="app-container flex flex-col">
      <AlertModal open={modal} content="돌봄 지원이 완료되었어요" />
      <TopButton />
      <div
        className="px-5 py-2 mx-3"
        style={{ backgroundColor: "var(--mainLight)", borderRadius: 10 }}
      >
        <div className="flex gap-2 pt-2 pb-4">
          <img
            src={
              "https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg"
            }
            alt="preview"
            className="w-10 h-10 object-cover rounded"
            style={{ backgroundColor: "var(--sub)", borderRadius: 100 }}
          />
          <div className="flex flex-col">
            <div className="font-bold text-[14px]">지우엄마</div>
            <div className="text-[12px]">14분전</div>
          </div>
        </div>

        <div className="font-bold text-[22px]">제목제목제목</div>
        <div className="text-[15px]">
          엄청 긴 내용내용내용 엄청 긴 내용내용내용 엄청 긴 내용내용내용 엄청 긴
          내용내용내용 엄청 긴 내용내용내용 엄청 긴 내용내용내용 엄청 긴
          내용내용내용 엄청 긴 내용내용내용 엄청 긴 내용내용내용 엄청 긴
          내용내용내용 엄청 긴 내용내용내용 엄청 긴 내용내용내용 엄청 긴
          내용내용내용 엄청 긴 내용내용내용 엄청 긴 내용내용내용 엄청 긴
          내용내용내용 엄청 긴 내용내용내용 엄청 긴 내용내용내용 엄청 긴
          내용내용내용 엄청 긴 내용내용내용
        </div>
        <div className="pt-4 gap-3">
          <div className="font-bold text-[18px]">장소</div>
          <div className="text-[15px]">서울 봉천동 청룡유치원</div>
          <div className="font-bold text-[18px]">일시</div>
          <div className="text-[15px]">2025.09.25 오후 8시~오후 9시</div>
          <div className="font-bold text-[18px]">
            이만큼까지 지출할 수 있어요
          </div>
          <div className="text-[15px]">50000</div>
        </div>
        <div className="flex py-3 items-center justify-end gap-1 w-102">
          <FontAwesomeIcon icon={faThumbsUp} />
          <div>23</div>
          <FontAwesomeIcon icon={faStar} />
          <div>12</div>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <Button
          variant="contained"
          sx={{
            width: 140,
            px: 0,
            borderColor: "var(--sub)",
            backgroundColor: "var(--sub)",
          }}
          onClick={toggleDrawer(true)}
        >
          지원하기
        </Button>
      </div>
      <Drawer
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          width: "100%",
          maxWidth: 393,
          left: "50%",
          transform: "translateX(-50%)",
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          p: 8,
        }}
      >
        <div className="flex flex-col p-4 text-[var(--text2)]">
          <h2 className="text-lg font-bold mb-3 text-[var(--text2)]">
            돌봄 지원하기
          </h2>
          <div className="flex items-center gap-2">
            <span>나의 돌봄 리뷰 수:</span>
            <span>23</span>
          </div>
          <div className="flex items-center gap-2">
            <span>나의 돌봄 별점:</span>
            <div className="flex gap-1">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStarHalfStroke} />
            </div>
            <span>4.5</span>
          </div>
          <p className="font-semibold mt-5">지원 가격: {value * 500}</p>
          <div className="text-[13px] mb-1">
            *돌봄 리뷰가 부족하거나, 별점이 낮을 때는 <br />더 낮은 가격으로
            지원하면 의뢰 성사율이 올라갑니다!
          </div>
          <Stack
            spacing={2}
            direction="row"
            sx={{ alignItems: "center", mb: 1 }}
          >
            <div className="text-lg font-semibold text-[var(--main)]">0</div>
            <Slider
              aria-label="Volume"
              value={value}
              defaultValue={30}
              onChange={handleChange}
              min={0}
              max={100}
            />
            <div className="text-lg font-semibold text-[var(--main)]">
              50000
            </div>
          </Stack>
          <Button
            variant="contained"
            sx={{ backgroundColor: "var(--main)" }}
            onClick={() => {
              // alert("돌봄 지원이 완료되었어요!");
              setModal(true);
              setTimeout(() => {
                router.push("/dolbomi/home");
              }, 700);
            }}
          >
            지원하기
          </Button>
        </div>
      </Drawer>
    </div>
  );
}

export const TopButton = ({
  type = "dolbomi",
}: {
  type?: "dolbomi" | "customer";
}) => {
  const router = useRouter();
  return (
    <div className="flex justify-between w-full p-2 items-center">
      <IconButton onClick={() => router.back()}>
        <FontAwesomeIcon icon={faAngleLeft} style={{ width: 22, height: 22 }} />
      </IconButton>

      <div>
        {type == "dolbomi" && (
          <IconButton>
            <FontAwesomeIcon icon={faBell} style={{ width: 20, height: 20 }} />
          </IconButton>
        )}
        <IconButton>
          <FontAwesomeIcon
            icon={faEllipsisVertical}
            style={{ width: 20, height: 20 }}
          />
        </IconButton>
      </div>
    </div>
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
        className="absolute z-2000 bottom-70 "
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
