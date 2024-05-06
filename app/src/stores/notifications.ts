import { create } from "zustand";
import type { Notification } from "../data/notifications";
import { notifications } from "../data/notifications";
interface Store {
    notifications:Notification[]
    setMarkAllAsRead:()=>void
}

export const useNotificationStore = create<Store>()(
   (set,get) => {
        return {
            notifications:notifications,
            setMarkAllAsRead:()=>{
                const { notifications } = get()
                const clone = structuredClone(notifications)
                clone.map(element => {
                    element.status = 'read'
                })

                set({notifications:clone})
            }
        }
    }
)