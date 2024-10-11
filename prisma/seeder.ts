import { PrismaClient } from '@prisma/client';
import * as dotenv from 'dotenv';

import * as jsonData from './converted_shipsapp.json';

dotenv.config();

// async function main() {
//   const prisma = new PrismaClient();

//   const v1 = await prisma.vendor.create({
//     data: {
//       nama: 'PT.Lintas Nusantara',
//       alamat: 'Jl. Raya Kuta No.100',
//       pic: 'Andi',
//       no_telp: '081234567890',
//       email: 'lintas@gmail.com',
//       website: 'www.lintas.com',
//       pricelist_pdf: '',
//     },
//   });

//   const v2 = await prisma.vendor.create({
//     data: {
//       nama: 'PT.Sinar Jaya',
//       alamat: 'Jl. Raya Kuta No.101',
//       pic: 'Budi',
//       no_telp: '081234567891',
//       email: 'sinar@gmail.com',
//       website: 'www.sinar.com',
//       pricelist_pdf: '',
//     },
//   });

//   const lokasiAwal = 'Cimahi, Bandung, Jawa Barat';
//   const lokasiTujuan = 'Surabaya, Jawa Timur';

//   const distance = await fetch(
//     `https://api.distancematrix.ai/maps/api/distancematrix/json?origins=${lokasiAwal}&destinations=${lokasiTujuan}&key=${process.env.DMX_API_KEY}`,
//   );

//   const res = await distance.json();
//   const distanceValue = res.rows[0].elements[0].distance.text;

//   const data = await prisma.pengiriman.createMany({
//     data: [
//       {
//         vendorId: v1.id,
//         provinsi_awal: 'Jawa Barat',
//         kabupaten_awal: 'Bandung',
//         kecamatan_awal: 'Cimahi',
//         provinsi_tujuan: 'Jawa Timur',
//         kabupaten_tujuan: 'Surabaya',
//         kecamatan_tujuan: 'Gubeng',
//         min_charge: 100,
//         price: 3500,
//         satuan_estimasi_waktu: 'Hari',
//         estimasi_tercepat: 2,
//         estimasi_terlama: 5,
//         jarak_tempuh: distanceValue.toString(),
//       },
//       {
//         vendorId: v2.id,
//         provinsi_awal: 'Jawa Timur',
//         kabupaten_awal: 'Surabaya',
//         kecamatan_awal: 'Gubeng',
//         provinsi_tujuan: 'Jawa Barat',
//         kabupaten_tujuan: 'Bandung',
//         kecamatan_tujuan: 'Cimahi',
//         min_charge: 100,
//         price: 2500,
//         satuan_estimasi_waktu: 'Hari',
//         estimasi_tercepat: 3,
//         estimasi_terlama: 6,
//         jarak_tempuh: distanceValue.toString(),
//       },
//     ],
//   });

//   console.log(data);
//   console.log('Data has been seeded successfully.');

//   await prisma.$disconnect();
// }

// main();

async function mainPelabuhan() {
  const prisma = new PrismaClient();

  for (const data of jsonData) {
    console.log(data.shipagent);
    const pelabuhan = prisma.pelabuhan.create({
      data: {
        nama_pelabuhan: data.nama_pelabuhan,
        kode_pelabuhan: data.kode_pelabuhan,
        url_gambar: data.url_gambar,
        lokasi_pelabuhan: {
          connectOrCreate: {
            where: {
              nama: data.lokasi_pelabuhan,
            },
            create: {
              nama: data.lokasi_pelabuhan,
            },
          },
        },
        // Many-to-many relations for shipagent
        shipagents: data.shipagent
          ? {
              connectOrCreate: data.shipagent.map((agentName) => ({
                where: {
                  nama: agentName,
                },
                create: {
                  nama: agentName,
                },
              })),
            }
          : undefined,
        // Many-to-many relations for bunker_service
        bunker_services: data.bunker_service
          ? {
              connectOrCreate: data.bunker_service.map((serviceName) => ({
                where: { nama: serviceName },
                create: { nama: serviceName },
              })),
            }
          : undefined,
        // Many-to-many relations for marine_service
        marine_services: data.marine_service
          ? {
              connectOrCreate: data.marine_service.map((serviceName) => ({
                where: { nama: serviceName },
                create: { nama: serviceName },
              })),
            }
          : undefined,
        logistiks: data.logistik
          ? {
              connectOrCreate: data.logistik.map((logistik) => ({
                where: { nama: logistik },
                create: { nama: logistik },
              })),
            }
          : undefined,
        truckings: data.trucking
          ? {
              connectOrCreate: data.trucking.map((trucking) => ({
                where: { nama: trucking },
                create: { nama: trucking },
              })),
            }
          : undefined,
      },
    });

    console.log((await pelabuhan).id);
  }
  console.log('Pelabuhan Seed');
}
mainPelabuhan();
