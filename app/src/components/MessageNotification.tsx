import type { Notification } from '../data/notifications'
import { renderContent } from '../utils/Formatters'
import { Avatar } from './Avatar'

interface Props {
  data: Notification
  className?: string
}

export const MessageNotification = (props: Props) => {
  const { data, className } = props
  const { avatar, name, notification, time, status, message } = data
  return (
    <article
      className={`flex gap-x-2 p-4 rounded ${className} ${
        status === 'unread' && 'bg-light-blue'
      }`}
    >
      <Avatar
        source={avatar}
        alt={`profile photo of ${name} `}
      />
      <div className=''>
        <div
          className='text-neutral relative'
          dangerouslySetInnerHTML={{
            __html: renderContent(name, notification, status),
          }}
        ></div>
        <small className='text-neutral font-semibold'>{time}</small>
        <blockquote className='text-neutral border border-neutral/70 rounded p-4 mt-2 hover:border-transparent hover:bg-light-blue transition ease-out hover:cursor-pointer'>
          {message}
        </blockquote>
      </div>
    </article>
  )
}
