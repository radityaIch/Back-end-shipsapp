import { Injectable } from '@nestjs/common';
import { CreateLokasiPelabuhanDto } from './dto/create-lokasi_pelabuhan.dto';
import { UpdateLokasiPelabuhanDto } from './dto/update-lokasi_pelabuhan.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class LokasiPelabuhanService {
  constructor(private prisma: PrismaService) {}

  async create(createLokasiPelabuhanDto: CreateLokasiPelabuhanDto) {
    const data = await this.prisma.lokasiPelabuhan.create({
      data: {
        ...createLokasiPelabuhanDto,
        nama: createLokasiPelabuhanDto.nama ?? '',
      },
    });

    return {
      status: 'success',
      code: '201',
      data,
    };
  }

  findAll() {
    return this.prisma.lokasiPelabuhan.findMany({
      include: {
        pelabuhan: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.lokasiPelabuhan.findUnique({
      where: { id },
      include: {
        pelabuhan: true,
      },
    });
  }

  async update(id: string, updateLokasiPelabuhanDto: UpdateLokasiPelabuhanDto) {
    const data = await this.prisma.lokasiPelabuhan.update({
      where: { id },
      data: updateLokasiPelabuhanDto,
    });

    return {
      status: 'success',
      code: '200',
      data,
    };
  }

  async remove(id: string) {
    return this.prisma.lokasiPelabuhan
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
