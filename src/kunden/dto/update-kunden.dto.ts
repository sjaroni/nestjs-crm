import { PartialType } from '@nestjs/mapped-types';
import { CreateKundenDto } from './create-kunden.dto';

export class UpdateKundenDto extends PartialType(CreateKundenDto) {}
