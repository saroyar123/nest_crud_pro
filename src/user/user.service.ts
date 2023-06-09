import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Response } from 'express';
import { DeleteResult, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {

  constructor(@InjectRepository(User) private readonly userRepository:Repository<User>){}

  create(res:Response,createUserDto: CreateUserDto): Promise<User> {
    let user:User=new User();
    user.email=createUserDto.email;
    user.firstName=createUserDto.firstName;
    user.lastName=createUserDto.lastName;
    user.age=createUserDto.age;
    res.cookie("token","initial token");
    return this.userRepository.save(user);
  }

  findAll():Promise<User[]> {
    return this.userRepository.find();
  }

  update(id: number, updateUserDto: UpdateUserDto):Promise<User> {

    let user:User=new User();
    user.email=updateUserDto.email;
    user.firstName=updateUserDto.firstName;
    user.lastName=updateUserDto.lastName;
    user.age=updateUserDto.age;
    user.id=id;
    return this.userRepository.save(user);

  }

  remove(id: number):Promise<DeleteResult> {
    return this.userRepository.delete(id);
  }
}
