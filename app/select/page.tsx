"use client";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";

export default function Select() {
  const router = useRouter();
  return (
    <div className="app-container">
      <div className="h-60" />
      <div className="flex flex-col gap-10  items-center justify-center">
        <FontAwesomeIcon
          icon={faQuestion}
          className="text-[var(--text1)] text-3xl"
        />
        <div className="pt-4 text-[var(--text1)] text-[15px] font-bold flex items-center justify-center">
          어떤 서비스를 원하시나요?
        </div>
        <div className="flex flex-col px-30 gap-4">
          <Button
            variant="contained"
            onClick={() => router.push("/customer/main")}
            sx={{
              backgroundColor: "var(--sub)",
              borderRadius: 4,
              paddingY: 1,
            }}
          >
            저는 돌봄이 필요해요
          </Button>
          <Button
            onClick={() => router.push("/dolbomi/info")}
            variant="contained"
            sx={{
              backgroundColor: "var(--main)",
              borderRadius: 4,
              paddingY: 1,
            }}
          >
            저는 돌보미로 일하고 싶어요
          </Button>
        </div>
      </div>
      <div className="h-80" />
    </div>
  );
}
