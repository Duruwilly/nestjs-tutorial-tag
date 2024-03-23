import { Module } from '@nestjs/common';
import { TagController } from './tag.controller';
import { TagService } from './tag.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagEntity } from './tag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TagEntity])], // we are using forFeature because we want to specifically configure this module and each module is like a feature which is mandatory if we want to use typeOrm in our module
  controllers: [TagController],
  providers: [TagService],
})
export class TagModule {}
