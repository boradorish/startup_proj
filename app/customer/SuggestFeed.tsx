import {
  faAlignLeft,
  faAngleLeft,
  faAngleRight,
  faStar,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button, Modal, Typography } from "@mui/material";
import { useState } from "react";
import PaymentModal from "./now/applier/PaymentModal";

interface SuggestFeedProps {
  name: string;
  gender: string;
  age: string;
  id: number;
  price?: number;
}
export const SuggestFeed = ({
  name,
  gender,
  age,
  id,
  price = 20000,
}: SuggestFeedProps) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div
      className="p-3 rounded"
      style={{ backgroundColor: "var(--subLight3)" }}
    >
      <div className="gap-3 flex items-center">
        <img
          src={`/dummy_dolbomi${id}.png`}
          alt="preview"
          className="w-14 h-14 object-cover rounded"
          style={{ backgroundColor: "var(--sub)", borderRadius: 100 }}
        />
        <div>
          <div className="flex gap-1 items-center">
            <div className="font-bold text-[16px]">{name}</div>
            <div className="text-[14px] text-[var(--text2)]">{gender}</div>
            <div className="text-[14px] text-[var(--text2)]">({age}세)</div>
          </div>
          <div className="flex gap-1 items-end text-[var(--text2)]">
            <div className="font-bold text-[15px]">제안 가격:</div>
            <div className="font-normal text-[14px]">{price}</div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-1">
        <div className="flex items-center gap-2 ">
          <div className="text-[var(--text2)] font-semibold text-[14px]">
            돌봄 별점
          </div>
          <FontAwesomeIcon
            icon={faStar}
            style={{ width: 14, color: "var(--text2)" }}
          />
          <FontAwesomeIcon
            icon={faStar}
            style={{ width: 14, color: "var(--text2)" }}
          />
          <FontAwesomeIcon
            icon={faStar}
            style={{ width: 14, color: "var(--text2)" }}
          />
          <FontAwesomeIcon
            icon={faStar}
            style={{ width: 14, color: "var(--text2)" }}
          />
          <FontAwesomeIcon
            icon={faStarHalfStroke}
            style={{ width: 14, color: "var(--text2)" }}
          />
        </div>
        <div className="gap-1 flex items-center">
          <div className="text-[var(--text2)] font-semibold text-[14px]">
            돌봄 리뷰 보기
          </div>
          <FontAwesomeIcon
            icon={faAngleRight}
            style={{ width: 14, color: "var(--text2)" }}
          />
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
        onClick={() => setOpen(true)}
      >
        이 돌보미 선택할래요
      </Button>
      <PaymentModal
        open={open}
        onClose={() => setOpen(false)}
        itemName={""}
        amount={price}
      />
    </div>
  );
};
