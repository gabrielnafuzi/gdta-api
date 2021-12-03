import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddImageUrlColumnToRestaurants1638507264293
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "restaurants" ADD "image_url" varchar(255)`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "restaurants" DROP COLUMN "image_url"`)
  }
}
