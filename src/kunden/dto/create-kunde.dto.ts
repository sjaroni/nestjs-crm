import { IsDate, IsIn, IsString } from "class-validator";
import { Geschlecht } from "../enums/geschlecht.enum";

export class CreateKundeDto {
  id: number;
  @IsString()  
  vorname: string;

  @IsString()  
  nachname: string;

  @IsDate()
  geburtsdatum: Date;

  @IsIn(['m', 'w'])
  geschlecht: Geschlecht;
}
