import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto, User } from './user.model';

@Injectable()
export class UsersService {
  static allUsers: User[] = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'Alice Smith' },
    { id: 4, name: 'Bob Johnson' },
  ];
  findAll(): User[] {
    return UsersService.allUsers;
  }

  findOne(id: number): User | undefined {
    return UsersService.allUsers.find((user) => user.id === id);
  }

  create(createUserDto: CreateUserDto): User {
    const user: User = {
      id: UsersService.allUsers.length + 1,
      name: createUserDto.name,
    };
    UsersService.allUsers.push(user);
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto): User | undefined {
    const user = this.findOne(id);
    if (user) {
      Object.assign(user, updateUserDto);
    }
    return user;
  }

  remove(id: number): void {
    const index = UsersService.allUsers.findIndex((user) => user.id === id);
    if (index !== -1) {
      UsersService.allUsers.splice(index, 1);
    }
  }
}
