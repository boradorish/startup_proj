export interface ChatFeedProps {
  name: string;
  content: string;
}
export const ChatFeed = ({ name, content }: ChatFeedProps) => {
  return (
    <div>
      <div className="flex items-center gap-5 w-100">
        <img
          src={
            "https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg"
          }
          alt="preview"
          className="w-14 h-14 object-cover rounded"
          style={{ backgroundColor: "var(--sub)", borderRadius: 100 }}
        />
        <div>
          <div className="font-bold text-[var(--text1)] text-[15px]">
            {name}
          </div>
          <div>{content}</div>
        </div>
      </div>
    </div>
  );
};
