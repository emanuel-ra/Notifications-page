import type { Notification } from '../data/notifications'
import { renderContent } from '../utils/Formatters'
import { Avatar } from './Avatar'

interface Props {
  data: Notification
}

export const CommentNotification = (props: Props) => {
  const { data } = props
  const { avatar, name, notification, time, status, picture } = data
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
        <div className='flex w-full gap-x-2'>
          <div
            className='text-neutral relative grow'
            dangerouslySetInnerHTML={{
              __html: renderContent(name, notification, status),
            }}
          ></div>
          <a
            href='/'
            aria-label='link to commented picture'
          >
            <img
              className='rounded shadow w-16 h-auto '
              src={picture}
              alt='commented picture'
            />
          </a>
        </div>
        <small className='text-neutral font-semibold'>{time}</small>
      </div>
    </article>
  )
}
