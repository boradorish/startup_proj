// app/reviews/new/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

function Star({
  filled,
  onClick,
  label,
}: {
  filled: boolean;
  onClick: () => void;
  label: string;
}) {
  // SVG는 currentColor를 쓰게 하고, 텍스트 색으로 제어
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={`w-8 h-8 transition-transform active:scale-95 ${
        filled ? "text-[var(--subDark)]" : "text-[var(--subLight2)]"
      }`}
    >
      <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
        <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    </button>
  );
}

export default function ReviewCreatePage() {
  const [rating, setRating] = useState<number>(5);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  const canSubmit = title.trim().length > 0 && body.trim().length >= 10;

  const tagOptions = [
    "친절해요",
    "시간엄수",
    "의사소통좋음",
    "재이용의사",
    "전문적",
  ];
  const toggleTag = (t: string) =>
    setTags((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
    );

  const ratingLabel = useMemo(
    () =>
      ["아쉬움", "보통", "좋음", "매우 좋음", "최고"][Math.max(0, rating - 1)],
    [rating]
  );
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    // TODO: 서버 전송 로직
    alert(
      `리뷰 제출!\n별점: ${rating}\n제목: ${title}\n태그: ${tags.join(
        ", "
      )}\n내용: ${body.slice(0, 80)}${body.length > 80 ? "..." : ""}`
    );
    setTitle("");
    setBody("");
    setTags([]);
    setRating(5);
  };

  return (
    <div className="min-h-screen flex justify-center bg-[var(--subLight3)]">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[393px] min-h-screen bg-white text-[var(--text1)]"
        style={{
          // 카드 느낌 배경: 서브 팔레트 사용
          background: "var(--subLight2)",
        }}
      >
        {/* 헤더 */}
        <header className="sticky top-0 z-10 bg-[var(--subLight)]/90 backdrop-blur px-4 py-3 border-b border-[var(--sub)]">
          <h1 className="text-lg font-semibold text-[var(--subDark)]">
            돌보미 리뷰 작성
          </h1>
          <p className="text-xs text-[var(--text4)] mt-0.5">
            간병인 선택을 도운 사용자의 솔직한 후기를 남겨주세요.
          </p>
        </header>

        <div className="px-4 py-4 flex flex-col gap-4">
          {/* 별점 */}
          <section className="bg-white/70 rounded-xl border border-[var(--subLight2)] p-4">
            <label className="block text-sm text-[var(--text3)] mb-2">
              만족도
            </label>
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4, 5].map((n) => (
                <Star
                  key={n}
                  filled={n <= rating}
                  onClick={() => setRating(n)}
                  label={`${n}점`}
                />
              ))}
              <span className="ml-2 text-sm text-[var(--subDark2)]">
                {ratingLabel}
              </span>
            </div>
          </section>

          {/* 제목 */}
          <section className="bg-white/70 rounded-xl border border-[var(--subLight2)] p-4">
            <label className="block text-sm text-[var(--text3)] mb-1">
              제목
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="예) 시간 약속을 잘 지키고 아이에게 친절했어요"
              className="
                w-full px-3 py-2 rounded-lg border
                border-[var(--subLight2)]
                focus:outline-none
                focus:border-[var(--sub)]
                focus:ring-2 focus:ring-[var(--subLight)]
              "
            />
          </section>

          {/* 내용 */}
          <section className="bg-white/70 rounded-xl border border-[var(--subLight)] p-4">
            <div className="flex items-center justify-between">
              <label className="block text-sm text-[var(--text3)]">
                상세 후기
              </label>
              <span className="text-xs text-[var(--text4)]">
                {body.length}/600
              </span>
            </div>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value.slice(0, 600))}
              placeholder="후기에는 진행한 업무, 소통 방식, 재이용 의사 등을 구체적으로 적어주세요."
              rows={6}
              className="
                mt-2 w-full resize-none px-3 py-2 rounded-lg border
                border-[var(--subLight2)]
                focus:outline-none
                focus:border-[var(--sub)]
                focus:ring-2 focus:ring-[var(--subLight)]
              "
            />
            <p className="mt-1 text-xs text-[var(--text4)]">
              * 개인 정보나 연락처는 작성하지 말아주세요.
            </p>
          </section>

          {/* 태그 */}
          <section className="bg-white/70 rounded-xl border border-[var(--subLight2)] p-4">
            <label className="block text-sm text-[var(--text3)] mb-2">
              한 줄 태그(선택)
            </label>
            <div className="flex flex-wrap gap-2">
              {tagOptions.map((t) => {
                const selected = tags.includes(t);
                return (
                  <button
                    key={t}
                    type="button"
                    onClick={() => toggleTag(t)}
                    className={`px-3 py-1 rounded-full text-sm transition
                      border ${
                        selected
                          ? "bg-[var(--subLight)] border-[var(--sub)] text-[var(--subDark2)]"
                          : "bg-white border-[var(--subLight2)] text-[var(--text3)] hover:border-[var(--sub)]"
                      }`}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
          </section>

          {/* 제출 */}
          <div className="h-2" />
          <button
            type="submit"
            disabled={!canSubmit}
            onClick={() => router.push("/customer/main")}
            className="
              w-full py-3 rounded-xl font-semibold
              bg-[var(--sub)] text-white shadow-none
              disabled:bg-[color:var(--subLight)] disabled:text-[color:var(--text4)]
              transition active:scale-[0.99]
            "
          >
            리뷰 제출하기
          </button>

          <div className="pb-8" />
        </div>
      </form>
    </div>
  );
}
