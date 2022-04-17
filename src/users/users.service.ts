import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const user = this.usersRepository.create({
        name: createUserDto.name,
        email: createUserDto.email,
        password: createUserDto.password
      });
      const result = await this.usersRepository.save(user);
      return result;
    } catch (error) {
      console.error(error); 
    }
  }

  async findAll() {
    try {
      const users = await this.usersRepository.find();
      return users;
    } catch (error) {
      console.error(error);
    }
  }

  async findOne(id: number) {
    try {
      const user = await this.usersRepository.findOne({ where: { id } });
      return user; 
    } catch (error) {
      console.error(error); 
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      const user = await this.findOne(id);
      user.name = updateUserDto.name;
      user.email = updateUserDto.email;
      user.password = updateUserDto.password;
      return await this.usersRepository.save(user); 
    } catch (error) {
      console.error(error);
    }
  }

  async remove(id: number) {
    try {
      return await this.usersRepository.delete({ id }); 
    } catch (error) {
      console.error(error);
    }
  }
}
