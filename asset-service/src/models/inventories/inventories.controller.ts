import { Query, Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { InventoriesService } from './inventories.service';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';
@Controller('asset-service/inventories')
export class InventoriesController {
  constructor(private readonly inventoriesService: InventoriesService) { }


  @Post()
  create(@Body() createInventoryDto: CreateInventoryDto) {
    return this.inventoriesService.create(createInventoryDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get a list of auction items' })
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    description: 'Page number for pagination (default: 1)',
    example: 1,
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    description: 'Number of records per page (default: 10)',
    example: 10,
  })
  @Get()
  findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
    @Query('filter') filter: any = {},
    @Query('order') order: any = {},
    @Query('select') select: any = {}
  ) {
    return this.inventoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.inventoriesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateInventoryDto: UpdateInventoryDto) {
    return this.inventoriesService.update(id, updateInventoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.inventoriesService.remove(id);
  }
}
