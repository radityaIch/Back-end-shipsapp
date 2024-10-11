import { Injectable } from '@nestjs/common';
import { CreateTruckingDto } from './dto/create-trucking.dto';
import { UpdateTruckingDto } from './dto/update-trucking.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TruckingService {
  constructor(private prisma: PrismaService) {}

  async create(createTruckingDto: CreateTruckingDto) {
    const data = await this.prisma.marineService.create({
      data: {
        nama: createTruckingDto.nama,
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

  async update(id: string, updateTruckingDto: UpdateTruckingDto) {
    const data = await this.prisma.marineService.update({
      where: { id },
      data: updateTruckingDto,
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
