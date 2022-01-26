import { IsEmail, IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from './role.enum';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  username: string;

  @Column()
  @IsNotEmpty()
  password: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Column({ type: 'enum', enum: Role, default: Role.USER })
  role: Role;
}
