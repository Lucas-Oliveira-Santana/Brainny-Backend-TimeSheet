interface ICreateTimeSheet{
  id?:string
  user_id:string
  start_hour:Date
  end_hour?:Date
}


export {ICreateTimeSheet}