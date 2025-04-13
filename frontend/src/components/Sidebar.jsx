import { useEffect, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import SidebarSkeleton from "./skeletons/SidebarSkeleton";
import { Users } from "lucide-react";

const Sidebar = () => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } = useChatStore();
  const { onlineUsers } = useAuthStore();
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const filteredUsers = showOnlineOnly
    ? users.filter((user) => onlineUsers.includes(user._id))
    : users;

  if (isUsersLoading) {
    return (
      <div className="h-full flex flex-col bg-base-100">
        <div className="sticky top-0 z-10 bg-base-100 border-b border-base-300 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="size-6" />
              <span className="text-lg font-semibold">Chats</span>
            </div>
          </div>
        </div>
        <SidebarSkeleton />
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col bg-base-100">
      <div className="sticky top-0 z-10 bg-base-100 border-b border-base-300 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="size-6" />
            <span className="text-lg font-semibold">Chats</span>
          </div>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={showOnlineOnly}
              onChange={(e) => setShowOnlineOnly(e.target.checked)}
              className="checkbox checkbox-sm"
            />
            <span className="text-sm">Online only</span>
          </label>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <button
              key={user._id}
              onClick={() => setSelectedUser(user)}
              className={`
                w-full p-4 flex items-center gap-4 border-b border-base-200
                active:bg-base-200 transition-colors
                ${selectedUser?._id === user._id ? "bg-base-200" : ""}
              `}
            >
              <div className="flex-shrink-0">
                <img
                  src={user.profilePic || "/avatar.png"}
                  alt={user.name}
                  className="size-14 object-cover rounded-full"
                />
              </div>

              <div className="flex-1 min-w-0 text-left">
                <div className="flex items-center gap-2">
                  <div className="font-medium text-base truncate">{user.fullName}</div>
                  {onlineUsers.includes(user._id) && (
                    <span className="size-2 bg-green-500 rounded-full flex-shrink-0" />
                  )}
                </div>
                <div className="text-sm text-base-content/60">
                  {onlineUsers.includes(user._id) ? "Online" : "Offline"}
                </div>
              </div>
            </button>
          ))
        ) : (
          <div className="p-4 text-center text-base-content/60">
            {showOnlineOnly ? "No online users" : "No users found"}
          </div>
        )}
      </div>
    </div>
  );
};
export default Sidebar;
