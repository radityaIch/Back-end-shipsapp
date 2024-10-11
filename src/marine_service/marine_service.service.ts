import { Injectable } from '@nestjs/common';
import { CreateMarineServiceDto } from './dto/create-marine_service.dto';
import { UpdateMarineServiceDto } from './dto/update-marine_service.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MarineServiceService {
  constructor(private prisma: PrismaService) {}

  async create(createMarineServiceDto: CreateMarineServiceDto) {
    const data = await this.prisma.marineService.create({
      data: {
        nama: createMarineServiceDto.nama,
      },
    });

    return {
      status: 'success',
      code: '201',
      data,
    };
  }

  findAll() {
    return this.prisma.marineService.findMany({
      include: {
        pelabuhans: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.marineService.findUnique({
      where: { id },
      include: {
        pelabuhans: true,
      },
    });
  }

  async update(id: string, updateMarineServiceDto: UpdateMarineServiceDto) {
    const data = await this.prisma.marineService.update({
      where: { id },
      data: updateMarineServiceDto,
    });

    return {
      status: 'success',
      code: '200',
      data,
    };
  }

  async remove(id: string) {
    return this.prisma.marineService
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
