
 import { ApiProperty } from '@nestjs/swagger';
 
 export class UserDto {
   @ApiProperty({
     description: 'User name',
     minLength: 3,
     maxLength: 30,
     default: 'Default name',
   })
   name: string;

   @ApiProperty({
     description: 'eamil',
     minLength: 11,
     maxLength: 44,
     default: 'Default email',
   })
   email: string;
 }
