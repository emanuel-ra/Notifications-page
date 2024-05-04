import type { Notification } from '../data/notifications'
import { renderContent } from '../utils/Formatters'
import { Avatar } from './Avatar'

interface Props {
  data: Notification
}

export const ReactNotification = (props: Props) => {
  const { data } = props
  const { avatar, name, notification, time, status } = data
  return (
    <article
      className={`flex gap-x-2 p-4 rounded ${
        status === 'unread' && 'bg-light-blue'
      }`}
    >
      <Avatar
        source={avatar}
        alt={`profile photo of ${name} `}
      />
      <div className='w-full'>
        <div
          className='text-neutral relative'
          dangerouslySetInnerHTML={{
            __html: renderContent(name, notification, status),
          }}
        ></div>
        <small className='text-neutral font-semibold'>{time}</small>
      </div>
    </article>
  )
}
