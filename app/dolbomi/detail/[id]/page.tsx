"use client";
import { TopBanner } from "@/app/dolbomi/TopBanner";
import { dummyFeedData } from "@/app/dummys";
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
  const item = dummyFeedData.find(
    (feed) => feed.id == (id as unknown as number)
  );
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
        style={{ backgroundColor: "var(--mainLight2)", borderRadius: 5 }}
      >
        <div className="flex gap-2 pt-2 pb-4">
          <img
            src={"/dummy_customer0.png"}
            alt="preview"
            className="w-10 h-10 object-cover rounded"
            style={{ backgroundColor: "var(--sub)", borderRadius: 100 }}
          />
          <div className="flex flex-col">
            <div className="font-bold text-[14px]">지우엄마</div>
            <div className="text-[12px]">14분전</div>
          </div>
        </div>

        <div className="font-bold text-[22px]">{item?.title}</div>
        <div className="text-[15px]">{item?.content}</div>
        <div className="pt-4 gap-3">
          <div className="font-bold text-[18px]">장소</div>
          <div className="text-[15px]">{item?.location}</div>
          <div className="font-bold text-[18px]">일시</div>
          <div className="text-[15px]">2025.09.25 오후 8시~오후 9시</div>
          <div className="font-bold text-[18px]">
            이만큼까지 지출할 수 있어요
          </div>
          <div className="text-[15px]">20000</div>
        </div>
        <div className="flex py-3 items-center justify-end gap-1 w-82">
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
            marginBottom: 2,
            borderColor: "var(--main)",
            backgroundColor: "var(--main)",
            boxShadow: "none",
          }}
          onClick={toggleDrawer(true)}
        >
          지원하기
        </Button>
      </div>
      <div
        className="mx-3 px-4 py-2 flex flex-col gap-3"
        style={{ backgroundColor: "var(--mainLight2)", borderRadius: 5 }}
      >
        <div className="font-bold text-[18px]">이 돌봄에 지원한 지원자들</div>
        <DolbomiProfile
          name="이봉사"
          id={1}
          price={20000}
          star={4.3}
          age={43}
        />
        <DolbomiProfile name="김도움" id={0} price={17000} star={4.5} />
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
          <div className="text-lg font-bold mb-3 text-[var(--text2)]">
            돌봄 지원하기
          </div>
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
          <p className="font-semibold mt-5">지원 가격: {value * 200}</p>
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
              20000
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

const DolbomiProfile = ({
  id = 0,
  name = "김도움",
  price = 20000,
  star = 4.7,
  age = 40,
  gender = "여성",
}: {
  id?: number;
  name?: string;
  gender?: string;
  price?: number;
  star?: number;
  age?: number;
}) => {
  return (
    <>
      <div className="gap-3 flex items-center">
        <img
          src={`/dummy_dolbomi${id}.png`}
          alt="preview"
          className="w-14 h-14 object-cover rounded"
          style={{ backgroundColor: "var(--sub)", borderRadius: 100 }}
        />
        <div>
          <div className="flex gap-1 items-center">
            <div className="font-bold text-[16px] text-[var(--text2)]">
              {name}
            </div>
            <div
              className="text-[14px] text-[var(--mainLight)]"
              style={{
                backgroundColor: "var(--mainDark)",
                borderRadius: 10,
                padding: "0px 3px",
              }}
            >
              {gender}
            </div>
            <div className="text-[14px] text-[var(--text2)]">{age}세</div>
          </div>
          <div className="flex gap-1 items-end text-[var(--text2)]">
            <div className="font-bold text-[15px]">제시 금액:</div>
            <div className="font-normal text-[14px]">{price}</div>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-[var(--text2)]">돌봄 별점:</span>
            <div className="flex gap-1">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStarHalfStroke} />
            </div>
            <span>{star}</span>
          </div>
        </div>
      </div>
    </>
  );
};
