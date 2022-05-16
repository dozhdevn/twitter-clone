import moment from 'moment'

export const formateDate = (date?: string) => {
   moment.locale('ru')
   return moment(date).fromNow()
}