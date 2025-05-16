import { TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { User } from './user.entity';

describe('UsersService', () => {
  let service: UsersService;
  const mockUserRepository = {
    save: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
    delete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useValue: mockUserRepository,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // it('create => Should create a new user and return its data', async () => {
  //   // arrange
  //   const userDto = {
  //     name: 'Chadwick',
  //     email: 'chadwickboseman@email.com',
  //   } as UserDto;

  //   const user = {
  //     id: 1,
  //     name: 'Chadwick',
  //     email: 'chadwickboseman@email.com',
  //   } as User;

  //   jest.spyOn(mockUserRepository, 'save').mockReturnValue(user);

  //   // act
  //   const result = await service.create(user);

  //   // assert
  //   expect(mockUserRepository.save).toBeCalled();
  //   expect(mockUserRepository.save).toBeCalledWith(createUserDto);

  //   expect(result).toEqual(user);
  // });
});
