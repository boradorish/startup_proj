import { ChatFeedProps } from "./dolbomi/ChatFeed";
import { FeedProps } from "./dolbomi/Feed";

export const dummyChatData: ChatFeedProps[] = [
  {
    name: "지우엄마",
    content: "저녁에 아이 픽업 해주세요.",
    id: 0,
    isNew: true,
    disabled: false,
  },

  {
    name: "아림맘",
    content: "저녁 7시로 시간 변경 가능할까요?",
    id: 1,
    isNew: false,
  },
  { name: "카페모카", content: "네 감사합니다", id: 2, isNew: true },
];
export const dummyDolbomiChatData: ChatFeedProps[] = [
  {
    name: "김도움",
    content: "아이 하원 시간이 6시 맞나요?",
    id: 0,
    isNew: true,
    disabled: false,
  },
  { name: "이기부", content: "네!", id: 1, isNew: false },
  { name: "장봉사", content: "오늘은 안 될 거 같아요..", id: 2, isNew: false },
];

export const dummyFeedData: FeedProps[] = [
  {
    id: 0,
    title: "오늘 오후 어머님 병원 동행 도와주실 분 구해요",
    content:
      "오늘 오후 3시에 ○○병원 진료가 있어 함께 가주실 분을 찾습니다. 진료 후 약국까지 같이 동행 부탁드려요.",
    location: "서울 강남구 대치동 ○○병원",
    time: "4시간 전",
    check: 317,
    likes: 23,
    scrap: 12,
  },
  {
    id: 1,
    title: "아이 학원 하원 동행자 구합니다",
    content:
      "저녁 6시에 유치원에서 ○○학원까지 아동 하원 동행 도와주실 여성 분 찾습니다.",
    location: "서울 서초구 반포4동 ○○유치원 → ○○학원",
    time: "2시간 전",
    check: 317,
    likes: 23,
    scrap: 12,
  },
  {
    id: 2,
    title: "다음주 수요일 노모 은행 업무 동행 부탁드립니다",
    content:
      "다음주에 80세 어머니께서 은행에 가셔야 하는데, 오늘 오전에 함께 동행해 업무를 도와주실 분을 구합니다.",
    location: "대구 수성구 만촌동 ○○은행 본점",
    time: "1일 전",
    check: 317,
    likes: 23,
    scrap: 12,
  },
];
