import { Controller, Post, Body } from '@nestjs/common'
import { ToolService } from './tool.service'
import { CreateToolDto } from './dto/create-tool.dto'

@Controller('tool')
export class ToolController {
  constructor(private readonly toolService: ToolService) {}

  @Post()
  create(@Body() createToolDto: CreateToolDto) {
    return this.toolService.create(createToolDto)
  }
}
