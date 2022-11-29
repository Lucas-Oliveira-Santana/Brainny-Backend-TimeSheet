import { Column, Entity, PrimaryColumn } from "typeorm";
import{v4 as uuidV4} from "uuid"



@Entity("timeSheet")
class TimeSheet{
  @PrimaryColumn()
  id?:string

  @Column()
  user_id:string

  @Column()
  start_hour:Date

  @Column()
  end_hour:Date

  constructor(){
    if(!this.id){
      this.id = uuidV4();
    }
  }
}



export {TimeSheet}