import { ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
     ){}

     async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
        const { username, password } = authCredentialsDto;

        const user = new User();
        user.username = username;
        user.password = password;
        
        try{
         await this.usersRepository.save(user);
        } catch(error){
            if(error.code ==='23505' ){
               throw new ConflictException('Username already exist!');
            }else {
               throw new InternalServerErrorException();
            }
        }
     }
}
 