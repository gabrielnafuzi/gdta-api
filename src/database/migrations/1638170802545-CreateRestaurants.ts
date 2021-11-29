import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateRestaurants1638170802545 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'restaurants',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true
          },
          {
            name: 'name',
            type: 'varchar'
          },
          {
            name: 'rate',
            type: 'decimal',
            precision: 10,
            scale: 2
          },
          {
            name: 'rate_amount',
            type: 'int'
          },
          {
            name: 'delivery_time',
            type: 'varchar'
          },
          {
            name: 'address_id',
            type: 'uuid',
            isNullable: true
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
          }
        ],
        foreignKeys: [
          {
            name: 'FKAddressRestaurant',
            columnNames: ['address_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'adresses',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('restaurants')
  }
}
