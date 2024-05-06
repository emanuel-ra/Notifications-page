import { useNotificationStore } from '../stores/notifications'

interface Props {
  label: string
}
export const MarkAllAsRead = (props: Props) => {
  const { label } = props
  const setMarkAllAsRead = useNotificationStore(
    (state) => state.setMarkAllAsRead
  )
  return (
    <button
      onClick={() => {
        setMarkAllAsRead()
      }}
      className='text-neutral font-semibold hover:text-secondary transition'
    >
      {label}
    </button>
  )
}
