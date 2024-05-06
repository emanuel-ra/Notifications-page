import { useNotificationStore } from '../stores/notifications'

export const Badge = () => {
  const notifications = useNotificationStore((state) => state.notifications)
  const unRead = notifications.filter(
    (element) => element.status === 'unread'
  ).length
  return <span className='bg-secondary px-3 rounded text-white'>{unRead}</span>
}
