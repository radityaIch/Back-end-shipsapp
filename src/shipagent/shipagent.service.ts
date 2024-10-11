import { Injectable } from '@nestjs/common';
import { CreateShipagentDto } from './dto/create-shipagent.dto';
import { UpdateShipagentDto } from './dto/update-shipagent.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ShipagentService {
  constructor(private prisma: PrismaService) {}

  async create(createShipagentDto: CreateShipagentDto) {
    const data = await this.prisma.shipagent.create({
      data: {
        nama: createShipagentDto.nama,
      },
    });

    return {
      status: 'success',
      code: '201',
      data,
    };
  }

  findAll() {
    return this.prisma.shipagent.findMany({
      include: {
        pelabuhans: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.shipagent.findUnique({
      where: { id },
      include: {
        pelabuhans: true,
      },
    });
  }

  async update(id: string, updateShipagentDto: UpdateShipagentDto) {
    const data = await this.prisma.shipagent.update({
      where: { id },
      data: updateShipagentDto,
    });

    return {
      status: 'success',
      code: '200',
      data,
    };
  }

  async remove(id: string) {
    return this.prisma.shipagent
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
