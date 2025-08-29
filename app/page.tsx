"use client";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const dummyId = "admin";
  const dummyPw = "admin";

  const router = useRouter();

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleLogin = () => {
    if (id == "") {
      alert("아이디를 입력해주세요.");
      return;
    }
    if (pw == "") {
      alert("비밀번호를 입력해주세요.");
      return;
    }
    if (id === dummyId && pw === dummyPw) {
      router.push("/select");
      return;
    } else {
      alert("아이디나 비밀번호를 확인하세요.");
      return;
    }
  };

  return (
    <div className="app-container flex flex-col px-10">
      <div className="h-30" />
      <div className="flex flex-col items-center">
        <img src="logo.png" width={220} height={220} />
      </div>
      <div className="flex flex-col px-10">
        <TextField
          id="standard-basic"
          label="id"
          variant="standard"
          value={id}
          onChange={(e) => setId(e.target.value)}
          sx={{ borderColor: "var(--sub)", width: "100%" }}
        />
        <TextField
          id="standard-basic"
          label="password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          variant="standard"
          sx={{ borderColor: "var(--sub)", width: "100%" }}
          slotProps={{ htmlInput: { type: "password" } }}
        />
        <div className="h-4" />
        <Button
          variant="contained"
          sx={{ backgroundColor: "var(--sub)", boxShadow: "none" }}
          onClick={handleLogin}
        >
          로그인
        </Button>
      </div>
      <div className="h-60" />
    </div>
  );
}
