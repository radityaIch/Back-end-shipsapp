import { Injectable } from '@nestjs/common';
import { CreateBunkerServiceDto } from './dto/create-bunker_service.dto';
import { UpdateBunkerServiceDto } from './dto/update-bunker_service.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class BunkerServiceService {
  constructor(private prisma: PrismaService) {}

  async create(createBunkerServiceDto: CreateBunkerServiceDto) {
    const data = await this.prisma.bunkerService.create({
      data: {
        nama: createBunkerServiceDto.nama,
      },
    });

    return {
      status: 'success',
      code: '201',
      data,
    };
  }

  findAll() {
    return this.prisma.bunkerService.findMany({
      include: {
        pelabuhans: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.bunkerService.findUnique({
      where: { id },
      include: {
        pelabuhans: true,
      },
    });
  }

  async update(id: string, updateBunkerServiceDto: UpdateBunkerServiceDto) {
    const data = await this.prisma.bunkerService.update({
      where: { id },
      data: updateBunkerServiceDto,
    });

    return {
      status: 'success',
      code: '200',
      data,
    };
  }

  async remove(id: string) {
    return this.prisma.bunkerService
      .delete({
        where: { id },
      })
      .then((data) => ({
        status: 'success',
        code: '200',
        id: data.id,
      }));
  }
}
