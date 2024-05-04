interface Props {
  source: string
  alt: string
}
export const Avatar = (props: Props) => {
  const { source, alt } = props
  return (
    <img
      className='size-12'
      src={source}
      alt={alt}
    />
  )
}
