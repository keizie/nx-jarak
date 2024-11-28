import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentService } from './comment.service';
import { CommentRepository } from './comment.repository';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Comment } from './comment.entity';

describe('CommentService', () => {
  let service: CommentService;
  let repository: CommentRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forFeature([Comment])],
      providers: [
        CommentService,
        {
          provide: getRepositoryToken(Comment),
          useValue: {
            save: jest.fn(),
            find: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<CommentService>(CommentService);
    repository = module.get<CommentRepository>(getRepositoryToken(Comment));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a comment', async () => {
      const comment = new Comment();
      comment.text = 'Test comment';
      comment.author = 'Test author';

      jest.spyOn(repository, 'save').mockResolvedValue(comment);

      expect(await service.create(comment)).toEqual(comment);
    });
  });

  describe('findAll', () => {
    it('should return an array of comments', async () => {
      const comment = new Comment();
      comment.text = 'Test comment';
      comment.author = 'Test author';

      jest.spyOn(repository, 'find').mockResolvedValue([comment]);

      expect(await service.findAll()).toEqual([comment]);
    });
  });

  describe('findOne', () => {
    it('should return a single comment', async () => {
      const comment = new Comment();
      comment.text = 'Test comment';
      comment.author = 'Test author';

      jest.spyOn(repository, 'findOne').mockResolvedValue(comment);

      expect(await service.findOne(1)).toEqual(comment);
    });
  });

  describe('update', () => {
    it('should update a comment', async () => {
      const comment = new Comment();
      comment.text = 'Updated comment';
      comment.author = 'Updated author';

      jest.spyOn(repository, 'update').mockResolvedValue(undefined);
      jest.spyOn(repository, 'findOne').mockResolvedValue(comment);

      expect(await service.update(1, comment)).toEqual(comment);
    });
  });

  describe('remove', () => {
    it('should remove a comment', async () => {
      jest.spyOn(repository, 'delete').mockResolvedValue(undefined);

      expect(await service.remove(1)).toBeUndefined();
    });
  });
});
