"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { TopButton } from "../../detail/[id]/page";
import { IconButton } from "@mui/material";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";

export default function KakaoStyleChat() {
  type Author = "me" | "them";
  type Msg = {
    id: string;
    author: Author;
    text: string;
    time: string; // e.g. "오후 3:21"
    date: string; // YYYY-MM-DD
  };
  const params = useParams();
  const { id } = params;

  const initial: Msg[] = [
    {
      id: "d1-1",
      author: "me",
      text: "안녕하세요!",
      time: "오전 9:12",
      date: "2025-08-29",
    },
    {
      id: "d1-2",
      author: "me",
      text: "7시 반포유치원 맞나요?",
      time: "오전 9:12",
      date: "2025-08-29",
    },
    {
      id: "d1-3",
      author: "them",
      text: "맞습니다.",
      time: "오전 9:14",
      date: "2025-08-29",
    },
    {
      id: "d1-4",
      author: "them",
      text: "저녁에 아이 픽업 해주세요.",
      time: "오전 9:14",
      date: "2025-08-29",
    },
  ];

  const [messages, setMessages] = useState<Msg[]>(initial);
  const [input, setInput] = useState("");

  const endRef = useRef<HTMLDivElement | null>(null);

  // Auto scroll
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length]);

  // Date label formatting (YYYY-MM-DD -> MM.DD)
  const formatDate = (iso: string) => {
    const d = new Date(iso + "T00:00:00");
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${mm}.${dd}`;
  };

  // Group boundaries
  const getGroupInfo = (idx: number) => {
    const cur = messages[idx];
    const prev = messages[idx - 1];
    const next = messages[idx + 1];
    const isFirstOfAuthor =
      !prev || prev.author !== cur.author || prev.date !== cur.date;
    const isLastOfAuthor =
      !next || next.author !== cur.author || next.date !== cur.date;
    const showDateDivider = !prev || prev.date !== cur.date;
    return { isFirstOfAuthor, isLastOfAuthor, showDateDivider };
  };

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;

    const now = new Date();
    const h = now.getHours();
    const m = String(now.getMinutes()).padStart(2, "0");
    const ampm = h < 12 ? "오전" : "오후";
    const h12 = h % 12 === 0 ? 12 : h % 12;
    const time = `${ampm} ${h12}:${m}`;
    const date = now.toISOString().slice(0, 10);

    setMessages((prev) => [
      ...prev,
      {
        id: Math.random().toString(36).slice(2),
        author: "me",
        text,
        time,
        date,
      },
    ]);
    setInput("");
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Colors — tweak here (or swap to your CSS variables)
  const bubbleMe = "bg-[#FEE500] text-[#191919]"; // Kakao yellow
  const bubbleThem = "bg-white text-gray-800";
  const chatBg = "bg-[var(--mainLight2)]";

  const router = useRouter();

  return (
    <div
      className={`w-full max-w-[393px] mx-auto h-screen ${chatBg} flex flex-col`}
    >
      {/* Header */}
      <header className="h-12 px-3 flex items-center justify-between bg-[var(--mainLight)] backdrop-blur border-b border-black/5">
        <IconButton onClick={() => router.back()}>
          <FontAwesomeIcon
            icon={faAngleLeft}
            style={{ width: 22, height: 22 }}
          />
        </IconButton>
        <div className="text-base font-semibold">지우엄마</div>
        <IconButton>
          <FontAwesomeIcon
            icon={faEllipsisVertical}
            style={{ width: 20, height: 20 }}
          />
        </IconButton>
      </header>

      {/* Messages */}
      <main className="flex-1 overflow-y-auto px-3 py-3">
        {messages.map((msg, i) => {
          const { isFirstOfAuthor, isLastOfAuthor, showDateDivider } =
            getGroupInfo(i);
          const me = msg.author === "me";

          return (
            <React.Fragment key={msg.id}>
              {showDateDivider && (
                <div className="flex justify-center my-4">
                  <span className="text-xs text-gray-600 bg-black/5 rounded-full px-3 py-1">
                    {formatDate(msg.date)}
                  </span>
                </div>
              )}

              <div
                className={`flex ${
                  me ? "justify-end" : "justify-start"
                } gap-2 items-end mb-1`}
              >
                {/* Avatar (only show for first in group of 'them') */}
                {!me && isFirstOfAuthor ? (
                  <img
                    src="/dummy_customer0.png"
                    className="w-7 h-7 rounded-full bg-gray-300 flex items-center justify-center text-xs text-gray-700 select-none"
                  />
                ) : (
                  <div className="w-7" />
                )}

                {/* Bubble + time */}
                <div
                  className={`flex ${
                    me ? "flex-row-reverse" : "flex-row"
                  } items-end gap-2 max-w-[80%]`}
                >
                  <div
                    className={`px-3 py-2 rounded-2xl shadow-sm ${
                      me ? bubbleMe : bubbleThem
                    } ${
                      me
                        ? isFirstOfAuthor
                          ? "rounded-tr-md"
                          : isLastOfAuthor
                          ? "rounded-br-md"
                          : ""
                        : isFirstOfAuthor
                        ? "rounded-tl-md"
                        : isLastOfAuthor
                        ? "rounded-bl-md"
                        : ""
                    }`}
                  >
                    <div className="whitespace-pre-wrap break-words text-[15px] leading-5">
                      {msg.text}
                    </div>
                  </div>

                  {/* Time (show beside the last bubble in a group) */}
                  {isLastOfAuthor && (
                    <div className="text-[11px] text-gray-500 mb-0.5 min-w-[48px] text-right">
                      {msg.time}
                    </div>
                  )}
                </div>
              </div>
            </React.Fragment>
          );
        })}
        <div ref={endRef} />
      </main>

      {/* Input Bar */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="sticky bottom-0 bg-[var(--mainLight)] backdrop-blur border-t border-black/5"
      >
        <div className="max-w-[480px] mx-auto px-3 py-2 flex items-end gap-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="메시지 보내기"
            rows={1}
            className="flex-1 resize-none bg-white border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black/10 text-[15px] leading-5"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className="disabled:opacity-40 disabled:cursor-not-allowed px-3 py-2 rounded-xl bg-[#FEE500] text-[#191919] font-medium shadow-sm"
          >
            전송
          </button>
        </div>
      </form>
    </div>
  );
}
