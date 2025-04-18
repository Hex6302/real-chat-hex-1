import { useAuthStore } from "../store/useAuthStore";
import { formatMessageTime } from "../lib/utils";
import { Check, CheckCheck } from "lucide-react";

const Message = ({ message, isSelecting, isSelected, onSelect }) => {
  const { authUser } = useAuthStore();
  const isMyMessage = message.senderId === authUser._id;

  return (
    <div 
      className={`flex ${isMyMessage ? "justify-end" : "justify-start"} ${
        isSelecting ? "cursor-pointer" : ""
      }`}
      onClick={isSelecting ? onSelect : undefined}
    >
      <div className={`flex gap-2 items-start w-full max-w-[85%] ${
        isSelecting ? "hover:bg-base-200 p-2 rounded-lg" : ""
      }`}>
        {isSelecting && (
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={isSelected}
              onChange={onSelect}
              className="checkbox checkbox-sm"
            />
          </div>
        )}
        <div className={`flex flex-col gap-1 w-full ${
          isMyMessage ? "items-end" : "items-start"
        }`}>
          <div className={`flex items-center gap-1 w-full ${
            isMyMessage ? "flex-row-reverse" : ""
          }`}>
            <div className={`flex flex-col gap-1 w-full ${
              isMyMessage ? "items-end" : "items-start"
            }`}>
              {message.image && (
                <div className="rounded-xl overflow-hidden">
                  <img 
                    src={message.image} 
                    alt="message" 
                    className="max-w-[200px] max-h-[200px] object-cover"
                  />
                </div>
              )}
              {message.text && (
                <div className={`px-4 py-2 rounded-2xl max-w-full ${
                  isMyMessage 
                    ? "bg-primary text-primary-content rounded-tr-none" 
                    : "bg-base-200 rounded-tl-none"
                }`}>
                  <p className="text-sm break-words whitespace-pre-wrap">{message.text}</p>
                </div>
              )}
              <div className="flex items-center gap-1 text-[10px] opacity-50">
                <span>{formatMessageTime(message.createdAt)}</span>
                {isMyMessage && (
                  <span className="flex items-center">
                    {message.status === "read" ? (
                      <CheckCheck className="size-3" />
                    ) : message.status === "delivered" ? (
                      <Check className="size-3" />
                    ) : null}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message; 