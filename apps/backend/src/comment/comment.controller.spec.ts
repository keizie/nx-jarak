import { Test, TestingModule } from '@nestjs/testing';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';
import { Comment } from './comment.entity';

describe('CommentController', () => {
  let controller: CommentController;
  let service: CommentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommentController],
      providers: [
        {
          provide: CommentService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<CommentController>(CommentController);
    service = module.get<CommentService>(CommentService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a comment', async () => {
      const comment = new Comment();
      comment.text = 'Test comment';
      comment.author = 'Test author';

      jest.spyOn(service, 'create').mockResolvedValue(comment);

      expect(await controller.create(comment)).toEqual(comment);
    });
  });

  describe('findAll', () => {
    it('should return an array of comments', async () => {
      const comment = new Comment();
      comment.text = 'Test comment';
      comment.author = 'Test author';

      jest.spyOn(service, 'findAll').mockResolvedValue([comment]);

      expect(await controller.findAll()).toEqual([comment]);
    });
  });

  describe('findOne', () => {
    it('should return a single comment', async () => {
      const comment = new Comment();
      comment.text = 'Test comment';
      comment.author = 'Test author';

      jest.spyOn(service, 'findOne').mockResolvedValue(comment);

      expect(await controller.findOne(1)).toEqual(comment);
    });
  });

  describe('update', () => {
    it('should update a comment', async () => {
      const comment = new Comment();
      comment.text = 'Updated comment';
      comment.author = 'Updated author';

      jest.spyOn(service, 'update').mockResolvedValue(comment);

      expect(await controller.update(1, comment)).toEqual(comment);
    });
  });

  describe('remove', () => {
    it('should remove a comment', async () => {
      jest.spyOn(service, 'remove').mockResolvedValue(undefined);

      expect(await controller.remove(1)).toBeUndefined();
    });
  });
});
