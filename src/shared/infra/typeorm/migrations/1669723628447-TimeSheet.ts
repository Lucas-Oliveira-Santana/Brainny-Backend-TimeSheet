import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class TimeSheet1669723628447 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"timeSheet",
                columns: [
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary:true
                    },
                    {
                        name:"user_id",
                        type:"uuid"
                    },
                    {
                        name:"start_hour",
                        type:"varchar",
                        isNullable: false
                    },
                    {
                        name:"end_hour",
                        type:"varchar",
                        isNullable: true
                    }
                ],
                foreignKeys:[
                    {
                        name:"FKUserTimeSheet",
                        referencedTableName:"users",
                        referencedColumnNames:["id"],
                        columnNames:["user_id"],
                        onDelete: 'SET NULL',
                        onUpdate: 'SET NULL',                    
                    }
                ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("timeSheet")
    }

}
