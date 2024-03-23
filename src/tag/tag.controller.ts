import { Controller, Get } from '@nestjs/common';
import { TagService } from './tag.service';
import { TagEntity } from './tag.entity';

// NOTE: if we want to use some service inside our controller, we must define it inside a constructor

@Controller('tags')
export class TagController {
  // this won't be available outside and secondly, it is read only
  constructor(private readonly tagService: TagService) {}
  @Get()
 async findAll(): Promise<{tags: string[]}> {
   const tags= await this.tagService.findAll();
   return  {
    tags: tags.map((tag) => tag.name)
   }
  }
}
