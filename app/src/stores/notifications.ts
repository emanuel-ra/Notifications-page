import { create } from "zustand";
import type { Notification } from "../data/notifications";
import { notifications } from "../data/notifications";
interface Store {
    notifications:Notification[]
    MarkAllAsRead:()=>void
}

export const useNotificationStore = create<Store>()(
   (set) => {
        return {
            notifications:notifications,
            MarkAllAsRead:()=>{}
        }
    }
)