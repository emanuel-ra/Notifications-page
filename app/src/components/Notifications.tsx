import { useNotificationStore } from '../stores/notifications'
import { CommentNotification } from './CommentNotification'
import { FollowNotification } from './FollowNotification'
import { GroupNotification } from './GroupNotification'
import { MessageNotification } from './MessageNotification'
import { ReactNotification } from './ReactNotification'

export const Notifications = () => {
  const { notifications } = useNotificationStore()

  return (
    <>
      <ul className='flex flex-col gap-y-3.5 p-4'>
        {notifications.map((item, index) => (
          <li key={index}>
            {item.action === 'commented' && <CommentNotification data={item} />}
            {item.action === 'followed' && <FollowNotification data={item} />}
            {item.action === 'group' && <GroupNotification data={item} />}
            {item.action === 'message' && <MessageNotification data={item} />}
            {item.action === 'reacted' && <ReactNotification data={item} />}
          </li>
        ))}
      </ul>
    </>
  )
}
