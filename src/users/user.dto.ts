
 import { ApiProperty } from '@nestjs/swagger';
 
 export class UserDto {
   @ApiProperty({ type: String, description: 'Name' })
   name: string;

   @ApiProperty({ type: String, description: 'email' })
   email: string;
 }
