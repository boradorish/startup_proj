"use client";
import { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Divider,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Chip,
} from "@mui/material";

// 브랜드 컬러 참고(UI 용)
const BRAND = {
  toss: { bg: "#0064FF", fg: "#FFFFFF", label: "토스페이" },
  kakao: { bg: "#FEE500", fg: "#191919", label: "카카오페이" },
  naver: { bg: "#03C75A", fg: "#FFFFFF", label: "네이버페이" },
  apple: { bg: "#000000", fg: "#FFFFFF", label: "Apple Pay" },
};

type Method = "card" | "account" | "toss" | "kakao" | "naver" | "apple";

type PaymentModalProps = {
  open: boolean;
  onClose: () => void;
  itemName: string;
  amount: number; // KRW
};

export default function PaymentModal({
  open,
  onClose,
  itemName,
  amount,
}: PaymentModalProps) {
  const [method, setMethod] = useState<Method>("card");
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState(""); // MM/YY
  const [cvc, setCvc] = useState("");

  const isCardOk =
    cardNumber.replaceAll(" ", "").length >= 14 &&
    /^\d|(\d{4}\s){2,3}\d{0,4}$/.test(cardNumber) &&
    /^\d{2}\/\d{2}$/.test(expiry) &&
    /^\d{3,4}$/.test(cvc);

  const canPay = method === "card" ? isCardOk : true;

  const PayBadge = ({ m }: { m: Method }) => {
    const b =
      m === "toss"
        ? BRAND.toss
        : m === "kakao"
        ? BRAND.kakao
        : m === "naver"
        ? BRAND.naver
        : BRAND.apple;

    const selected = method === m;
    return (
      <Button
        variant={selected ? "contained" : "outlined"}
        onClick={() => setMethod(m)}
        sx={{
          flex: 1,
          minWidth: 0,
          textTransform: "none",
          bgcolor: selected ? b.bg : "transparent",
          color: selected ? b.fg : "text.primary",
          borderColor: selected ? b.bg : "divider",
          "&:hover": {
            bgcolor: selected ? b.bg : "action.hover",
            borderColor: selected ? b.bg : "divider",
          },
          py: 1.25,
          borderRadius: 2,
        }}
      >
        {b.label}
      </Button>
    );
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute" as const,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 360,
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 24,
          p: 2.5,
        }}
      >
        <Typography variant="h6" fontWeight={700}>
          돌보미 확정하기
        </Typography>
        <Typography variant="body2" fontWeight={400}>
          돌봄 의뢰 금액을 결제하면, 돌보미가 배정됩니다
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 1.5,
          }}
        >
          <Typography variant="subtitle2" color="text.secondary">
            결제 금액
          </Typography>
          <Typography variant="h6" sx={{ color: "var(--sub, #c75f3b)" }}>
            {(amount * 1.1).toLocaleString()}원
          </Typography>
        </Box>
        <Divider sx={{ my: 0 }} />
        <Typography
          sx={{ mb: 2 }}
          variant="body2"
          fontWeight={400}
          color="text.secondary"
        >
          *금액에는 플랫폼 중계 수수료 10%가 포함되어 있습니다.
        </Typography>

        {/* 간편결제 섹션 (UI 전용) */}
        <Typography variant="body1" fontWeight={700} sx={{ mb: 1 }}>
          결제 방식 선택
        </Typography>
        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1 }}>
          <PayBadge m="toss" />
          <PayBadge m="kakao" />
          <PayBadge m="naver" />
          <PayBadge m="apple" />
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* 전통 결제 수단 선택 */}
        <FormControl fullWidth size="small">
          <InputLabel id="method-label">결제 수단</InputLabel>
          <Select
            labelId="method-label"
            label="결제 수단"
            value={
              ["toss", "kakao", "naver", "apple"].includes(method)
                ? "account"
                : method
            }
            onChange={(e) => {
              setMethod(e.target.value as Method);
            }}
          >
            <MenuItem value="card">신용/체크카드</MenuItem>
            <MenuItem value="account">간편결제</MenuItem>
          </Select>
        </FormControl>
        {/* 카드 입력 영역 (간편결제 선택 시에도 UI 데모로 표시 유지하거나 숨길 수 있음) */}
        {method === "card" && (
          <>
            <TextField
              label="카드 번호"
              size="small"
              fullWidth
              sx={{ mt: 1.5 }}
              placeholder="1234 5678 1234 5678"
              value={cardNumber}
              onChange={(e) =>
                setCardNumber(
                  e.target.value
                    .replace(/[^0-9]/g, "")
                    .slice(0, 16)
                    .replace(/(\\d{4})(?=\\d)/g, "$1 ")
                )
              }
              inputProps={{ inputMode: "numeric" }}
            />
            <Box sx={{ display: "flex", gap: 1.5, mt: 1.5 }}>
              <TextField
                label="유효기간 (MM/YY)"
                size="small"
                fullWidth
                placeholder="08/27"
                value={expiry}
                onChange={(e) =>
                  setExpiry(
                    e.target.value
                      .replace(/[^0-9]/g, "")
                      .slice(0, 4)
                      .replace(/(\\d{2})(\\d{0,2})/, (m, a, b) =>
                        b ? `${a}/${b}` : a
                      )
                  )
                }
                inputProps={{ inputMode: "numeric" }}
              />
              <TextField
                label="CVC"
                size="small"
                fullWidth
                placeholder="3-4자리"
                value={cvc}
                onChange={(e) =>
                  setCvc(e.target.value.replace(/[^0-9]/g, "").slice(0, 4))
                }
                inputProps={{ inputMode: "numeric" }}
              />
            </Box>
          </>
        )}

        <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
          <Button fullWidth variant="outlined" onClick={onClose}>
            취소
          </Button>
          <Button
            fullWidth
            variant="contained"
            sx={{ bgcolor: "var(--sub, #c75f3b)", boxShadow: "none" }}
            disabled={!canPay}
            onClick={() => {
              // UI 데모: 간편결제 선택 시에도 동일하게 성공 처리
              alert(`결제 진행 (수단: ${method})`);
              onClose();
            }}
          >
            결제하기
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
