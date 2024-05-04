interface Props {
  label: string
}
export const MarkAllAsRead = (props: Props) => {
  const { label } = props
  return (
    <button className='text-neutral font-semibold hover:text-secondary transition'>
      {label}
    </button>
  )
}
