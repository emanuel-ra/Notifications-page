interface Props {
  label: string
}
export const MarkAllAsRead = (props: Props) => {
  const { label } = props
  return <button className='text-neutral font-semibold'>{label}</button>
}
