"use client";
import { TopButton } from "@/app/dolbomi/detail/[id]/page";
import { SuggestFeed } from "../../SuggestFeed";

export default function ApplierPage() {
  return (
    <div className="app-container-customer flex flex-col">
      <TopButton type="customer" />
      <div className="px-4 flex flex-col gap-4">
        <div className="font-bold text-[var(--text1)] text-[23px] ">
          지원 돌보미
        </div>
        <SuggestFeed name="김도움" gender={"여성"} age={"40"} />
        <SuggestFeed name="이기부" gender={"남성"} age={"35"} />
      </div>
    </div>
  );
}
