"use client";
import { TopBanner } from "@/app/dolbomi/TopBanner";
import { CBottomTab } from "../CBottomTab";
import { TopButton } from "@/app/dolbomi/detail/[id]/page";
import { TextField } from "@mui/material";

export default function Home() {
  //   const router = useRouter();

  return (
    <div className="app-container-customer flex flex-col items-center ">
      <TopButton type="customer" />
      <div className="px-8">
        <input
          type="text"
          placeholder="제목을 입력하세요"
          className=" w-full px-3 py-2
            bg-transparent
            border-b border-[var(--subDark)]
            text-sm placeholder:font-bold
            placeholder:text-[16px]
            placeholder:text-[var(--subDark)] focus:outline-none
              transition"
        />
        <textarea
          // value={body}
          // onChange={(e) => setBody(e.target.value)}
          rows={8}
          className="
          w-full resize-y
          px-3 py-2  placeholder:text-[14px]
          focus:outline-none placeholder:font-normal
            placeholder:text-[var(--subDark)]
        "
          placeholder="돌봄 의뢰 내용을 적어주세요."
        />
      </div>
    </div>
  );
}
