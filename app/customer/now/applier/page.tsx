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
        <SuggestFeed
          id={0}
          name="김도움"
          gender={"여성"}
          age={"40"}
          price={40000}
        />
        <SuggestFeed
          id={1}
          name="이기부"
          gender={"여성"}
          age={"45"}
          price={45000}
        />
      </div>
    </div>
  );
}
