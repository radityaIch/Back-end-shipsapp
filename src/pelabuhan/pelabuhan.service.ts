import { Injectable } from '@nestjs/common';
import { CreatePelabuhanDto } from './dto/create-pelabuhan.dto';
import { UpdatePelabuhanDto } from './dto/update-pelabuhan.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PelabuhanService {
  constructor(private prisma: PrismaService) {}

  async create(createPelabuhanDto: CreatePelabuhanDto) {
    const { lokasi_pelabuhanId, ...pelabuhanData } = createPelabuhanDto;

    const data = await this.prisma.pelabuhan.create({
      data: {
        ...pelabuhanData,
        url_gambar: pelabuhanData.url_gambar || '',
        nama_pelabuhan: pelabuhanData.nama_pelabuhan || '',
        lokasi_pelabuhan: {
          connect: {
            id: lokasi_pelabuhanId,
          },
        },
      },
    });

    return {
      status: 'success',
      code: '201',
      data,
    };
  }

  findAll() {
    return this.prisma.pelabuhan.findMany({
      include: {
        lokasi_pelabuhan: true,
        shipagents: true,
        bunker_services: true,
        marine_services: true,
        logistiks: true,
        truckings: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.pelabuhan.findUnique({
      where: { id },
      include: {
        lokasi_pelabuhan: true,
        shipagents: true,
        bunker_services: true,
        marine_services: true,
        logistiks: true,
        truckings: true,
      },
    });
  }

  async update(id: string, updatePelabuhanDto: UpdatePelabuhanDto) {
    const data = await this.prisma.pelabuhan.update({
      where: { id },
      data: updatePelabuhanDto,
    });

    return {
      status: 'success',
      code: '200',
      data,
    };
  }

  async remove(id: string) {
    return this.prisma.pelabuhan
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
