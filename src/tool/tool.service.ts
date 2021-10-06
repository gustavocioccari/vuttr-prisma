import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateToolDto } from './dto/create-tool.dto'

@Injectable()
export class ToolService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createToolDto: CreateToolDto) {
    const tagsData = createToolDto.tags?.map((tag) => {
      return { name: tag }
    })

    await this.prismaService.tag.createMany({
      data: tagsData,
      skipDuplicates: true,
    })

    return this.prismaService.tool.create({
      data: {
        ...createToolDto,
        tags: {
          connect: tagsData,
        },
      },
    })
  }
}
