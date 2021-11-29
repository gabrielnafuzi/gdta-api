import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateDishes1638171397222 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'dishes',
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
            name: 'price',
            type: 'decimal',
            precision: 10,
            scale: 2
          },
          {
            name: 'description',
            type: 'varchar'
          },
          {
            name: 'image',
            type: 'varchar'
          },
          {
            name: 'restaurant_id',
            type: 'uuid'
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
          }
        ],
        foreignKeys: [
          {
            name: 'FKRestaurantDish',
            columnNames: ['restaurant_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'restaurants',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('dishes')
  }
}
