import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'Animals',
  timestamps: false,
})
export class Animal extends Model {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id!: number;

  @Column({ type: DataType.STRING })
  common_name!: string;

  @Column({ type: DataType.STRING })
  scientific_name!: string;

  @Column({ type: DataType.NUMBER })
  life_expectancy!: number;

  @Column({ type: DataType.STRING })
  habitat!: string;
}
