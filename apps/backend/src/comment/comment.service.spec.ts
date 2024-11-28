import { Test, TestingModule } from '@nestjs/testing';
import { CommentService } from './comment.service';
import { CommentRepository } from './comment.repository';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Comment } from './comment.entity';

describe('CommentService', () => {
  let service: CommentService;
  let repository: CommentRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommentService,
        {
          provide: getRepositoryToken(Comment),
          useClass: CommentRepository,
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
