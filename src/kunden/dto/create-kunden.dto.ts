import { IsDate, IsIn, IsString } from "class-validator";
import { Geschlecht } from "../enums/geschlecht.enum";

export class CreateKundenDto {
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
