"use client";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faPlus,
  faQuestion,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import {
  FormControlLabel,
  IconButton,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
} from "@mui/material";
import { useRouter } from "next/navigation";

export default function Info() {
  const [preview, setPreview] = useState<string | null>(null);
  const [preview2, setPreview2] = useState<string | null>(null);
  const router = useRouter();

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };
  const handleFile2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview2(URL.createObjectURL(file));
    }
  };

  return (
    <div className="app-container flex flex-col items-center justify-center">
      <div className="h-10" />
      <Stack sx={{ paddingX: 5 }} spacing={3}>
        <div className="pt-4 text-[var(--text1)] text-[15px] font-bold flex items-center justify-center">
          당신의 프로필을 등록해주세요.
        </div>
        <div className="flex gap-10 items-center justify-center">
          <div className="relative">
            {!preview && (
              <div
                style={{ backgroundColor: "var(--sub)", borderRadius: 100 }}
                className="w-20 h-20 flex items-center justify-center"
              >
                <FontAwesomeIcon
                  icon={faUser}
                  className="text-[var(--text1)] text-3xl"
                />
              </div>
            )}
            {preview && (
              <img
                src={preview}
                alt="preview"
                className="w-20 h-20 object-cover rounded"
                style={{ backgroundColor: "var(--sub)", borderRadius: 100 }}
              />
            )}
            <IconButton
              component="label"
              sx={{ position: "absolute", bottom: -10, left: 43 }}
            >
              <FontAwesomeIcon icon={faCirclePlus} />
              <input
                hidden
                type="file"
                accept="image/*"
                className=""
                onChange={handleFile}
              />
            </IconButton>
          </div>
          <div className=" text-[var(--text1)] text-[11px] mr-5 ">
            *본인의 얼굴이 정확히 나온 사진을 넣어주셔야 승인됩니다
          </div>
        </div>
        <div>
          <div className="text-[var(--text1)] text-[15px] font-bold px-1">
            이름
          </div>
          <TextField
            required
            id="standard-required"
            variant="standard"
            sx={{ width: "100%" }}
          />
        </div>
        <div className="flex gap-4">
          <div>
            <div className="text-[var(--text1)] text-[15px] font-bold px-1">
              나이
            </div>
            <TextField
              required
              id="standard-required"
              variant="standard"
              sx={{ width: 200 }}
            />
          </div>
          <div className="flex flex-col">
            <div className="text-[var(--text1)] text-[15px] font-bold px-1">
              성별
            </div>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="여성"
              name="radio-buttons-group"
              sx={{ flexDirection: "row" }}
            >
              <FormControlLabel value="여성" control={<Radio />} label="여성" />
              <FormControlLabel value="남성" control={<Radio />} label="남성" />
            </RadioGroup>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-[var(--text1)] text-[15px] font-bold px-1">
            전화번호
          </div>
          <div className="flex gap-5">
            <TextField
              required
              id="standard-required"
              variant="standard"
              sx={{ width: "100%" }}
            />
            <Button
              variant="outlined"
              sx={{
                width: 140,
                px: 0,
                color: "var(--sub)",
                borderColor: "var(--sub)",
              }}
            >
              본인인증하기
            </Button>
          </div>
        </div>
        <div>
          <div className="text-[var(--text1)] text-[15px] font-bold pb-2 px-2">
            자기소개
          </div>
          <TextField
            id="outlined-multiline-static"
            sx={{ width: "100%" }}
            multiline
            rows={4}
            placeholder="본인의 돌봄 경력, 경험 등을 포함한 자기소개를 적어주세요."
          />
        </div>
        <div>
          <div className="text-[var(--text1)] text-[15px] font-bold  px-2">
            파일첨부
          </div>
          <div className="text-[var(--text1)] text-[11px]  pb-2 px-2">
            *사회복지사 혹은 요양보호사 자격증과, <br />
            주민등록번호 뒷6자리를 가린 주민등록증 사진을 첨부해주세요.
          </div>
          <div className="flex items-center gap-2">
            {preview2 && (
              <img
                src={preview2}
                alt="preview"
                className="w-20 h-20 object-cover rounded"
                style={{ borderRadius: 3 }}
              />
            )}

            <IconButton component="label">
              <div
                style={{ borderRadius: 3, border: "1px dashed var(--sub)" }}
                className="w-20 h-20 flex items-center justify-center"
              >
                <FontAwesomeIcon
                  icon={faPlus}
                  style={{ color: "var(--sub)" }}
                />
              </div>
              <input
                hidden
                type="file"
                accept="image/*"
                className=""
                onChange={handleFile2}
              />
            </IconButton>
          </div>
        </div>
      </Stack>
      <Button
        onClick={() => router.push("/dolbomi/home")}
        variant="contained"
        sx={{
          backgroundColor: "var(--sub)",
          borderRadius: 4,
          paddingY: 1,
          marginTop: 5,
        }}
      >
        돌보미 사용하러 가기
      </Button>

      <div className="h-20" />
    </div>
  );
}
