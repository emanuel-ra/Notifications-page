export type Action = 'reacted' | 'followed' | 'group' | 'message' | 'commented'
export type Status = 'read' | 'unread'

export interface Notification {
    name:string
    avatar:string
    action:Action 
    notification:string
    time:string
    status:Status
    message?:string
    picture?:string
}
export const notifications: Notification[] = [
    {
        avatar:'/images/avatar-mark-webber.webp' ,
        name:'Mark Webber',
        action:'reacted',
        notification:'reacted to your recent post *My first tournament today!*',        
        time:'1m ago' ,
        status:'unread'
    },
    {
        avatar:'/images/avatar-angela-gray.webp' ,
        name:'Angela Gray',
        action:'followed',
        notification:'followed you',
        time:'5m ago' ,
        status:'unread'
    },
    {
        avatar:'/images/avatar-jacob-thompson.webp' ,
        name:'Jacob Thompson',
        action:'group',
        notification:'has joined your group #Chess Club#',        
        time:'5m ago' ,
        status:'unread'
    },
    {
        avatar:'/images/avatar-rizky-hasanuddin.webp' ,
        name:'Rizky Hasanuddin',
        action:'message',
        notification:'sent you a private message',   
        message:'Hello, thanks for setting up the Chess Club. I\'ve been a member for a few weeks now and I\'m already having lots of fun and improving my game.' ,
        time:'5 days ago' ,
        status:'read'
    },
    {
        avatar:'/images/avatar-kimberly-smith.webp' ,
        name:'Kimberly Smith',
        action:'commented',
        notification:'commented on your picture',        
        picture:'/images/image-chess.webp',
        time:'1 week ago' ,
        status:'read'
    },
    {
        avatar:'/images/avatar-nathan-peterson.webp' ,
        name:'Nathan Peterson',
        action:'reacted',
        notification:'reacted to your recent post *5 end-game strategies to increase your win rate*',        
        time:'1m ago' ,
        status:'read'
    },
    {
        avatar:'/images/avatar-anna-kim.webp' ,
        name:'Anna Kim',
        action:'group',
        notification:'left the group #Chess Club#',        
        time:'2 weeks ago' ,
        status:'read'
    }
]