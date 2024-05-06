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
            {item.action === 'commented' && (
              <CommentNotification
                className={`animate-fade-right animate-once animate-ease-in-out`}
                data={item}
              />
            )}
            {item.action === 'followed' && (
              <FollowNotification
                className={`animate-fade-right animate-once animate-ease-in-out`}
                data={item}
              />
            )}
            {item.action === 'group' && (
              <GroupNotification
                className={`animate-fade-right animate-once animate-ease-in-out`}
                data={item}
              />
            )}
            {item.action === 'message' && (
              <MessageNotification
                className={`animate-fade-right animate-once animate-ease-in-out`}
                data={item}
              />
            )}
            {item.action === 'reacted' && (
              <ReactNotification
                className={`animate-fade-right animate-once animate-ease-in-out`}
                data={item}
              />
            )}
          </li>
        ))}
      </ul>
    </>
  )
}
