import { Injectable } from '@nestjs/common';
import { CreateLogistikDto } from './dto/create-logistik.dto';
import { UpdateLogistikDto } from './dto/update-logistik.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class LogistikService {
  constructor(private prisma: PrismaService) {}

  async create(createLogistikDto: CreateLogistikDto) {
    const data = await this.prisma.marineService.create({
      data: {
        nama: createLogistikDto.nama,
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

  async update(id: string, updateLogistikDto: UpdateLogistikDto) {
    const data = await this.prisma.marineService.update({
      where: { id },
      data: updateLogistikDto,
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
