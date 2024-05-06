export function renderContent(name: string, text: string, status: string) {
  const content = text.replace(
    /\*([^*]+)\*/g,
    "<a href='/' class='font-bold hover:text-secondary'>$1</a>"
  ).replace(
    /#([^#]+)#/g,
    "<a href='/'class='font-bold text-secondary'>$1</a>"
  )

  const read =
    status === 'unread' ?
    '<span class="block size-3 bg-primary rounded-full shadow-lg shadow-primary absolute bottom-1 right-5" />':''

  return `
  <div class="block w-full">
      <h2 class="font-bold text-black">${name}</h2> 
      <blockquote class="text-neutral text-sm text-pretty">${content} ${read}</blockquote>  
  <div> `
}