import { IsEnum, IsString, MaxLength, MinLength } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Geschlecht } from '../enums/geschlecht.enum';

@Entity()
export class Kunden {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsString()
  @MinLength(2)
  @MaxLength(20)
  vorname: string;

  @Column()
  @IsString()
  @MinLength(2)
  @MaxLength(20)
  nachname: string;

  @Column({ type: 'date' })
  geburtsdatum: Date;

  @Column()
  @IsEnum(Geschlecht)  
  geschlecht: Geschlecht;
}
