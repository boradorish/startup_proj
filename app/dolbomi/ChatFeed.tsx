import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface ChatFeedProps {
  type?: "dolbomi" | "customer";
  name: string;
  content: string;
  id?: number;
  isNew?: boolean;
}
export const ChatFeed = ({
  type = "dolbomi",
  id = 0,
  name,
  content,
  isNew = false,
}: ChatFeedProps) => {
  return (
    <div
      className="flex justify-between items-center gap-5 w-90 pb-2"
      style={{ borderBottom: "1px solid var(--mainLight2)" }}
    >
      <div className="flex items-center gap-5 w-90">
        <img
          src={`/dummy_${type}${id}.png`}
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
      {isNew && (
        <FontAwesomeIcon
          icon={faCircle}
          style={{ width: 10, color: "#c23535" }}
        />
      )}
    </div>
  );
};
