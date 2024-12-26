import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const categories = [
    {
      name: 'Новогодние товары',
      img: 'https://drive.google.com/file/d/1tS_OA4dLx4tjbvNqzOVauZaYbUjfI7DI/view?usp=drive_link',
    },
    {
      name: 'Товары для дома',
      img: 'https://drive.google.com/file/d/1A1l6D9KsE018iGW1mVrtCj8hPdEKsxAd/view?usp=drive_link',
    },
    {
      name: 'Детские товары',
      img: 'https://drive.google.com/file/d/17f7obTfqbTX98II5JkbsqgscaegSWRgt/view?usp=drive_link',
    },
    {
      name: 'Красота и уход',
      img: 'https://drive.google.com/file/d/1oqR1HhR6czUmXnxfxR5Q2UU0oinFpTLf/view?usp=drive_link',
    },
    {
      name: 'Электроника',
      img: 'https://drive.google.com/file/d/1GFLh5hLfMU5DL_obJWMLz2PEwvTuKFVt/view?usp=drive_link',
    },
    {
      name: 'Бытовая техника',
      img: 'https://drive.google.com/file/d/1-tY07sd1iF1XOLxFaWyHxdl7NC6eXKBh/view?usp=drive_link',
    },
    {
      name: 'Книги, хобби, канцелярия',
      img: 'https://drive.google.com/file/d/17DK5M3p4zW7OjR2apU6XFtT1dtczdF0b/view?usp=drive_link',
    },
    {
      name: 'Одежда, обувь и аксессуары',
      img: 'https://drive.google.com/file/d/1497u-D0mDsL2w4b7KrJp0JWiZdHZ2Pm0/view?usp=drive_link',
    },
    {
      name: 'Продукты питания',
      img: 'https://drive.google.com/file/d/1MaDngy5fnz467mxzt9ivpw5IlAhKReNn/view?usp=drive_link',
    },
    {
      name: 'Здоровье',
      img: 'https://drive.google.com/uc?id=1I6uQ-Zw9SVzwKfK5hNYZMaO7OhsXawFZ',
    },
    {
      name: 'Автотовары',
      img: 'https://drive.google.com/file/d/1ewv5JpP_KhDEzYO0AqXdh-jtx9_eBRLj/view?usp=drive_link',
    },
    {
      name: 'Зоотовары',
      img: 'https://drive.google.com/file/d/1ONiv9rHosWVNp-8LNCit1af3zqUEJZ3R/view?usp=drive_link',
    },
    {
      name: 'Мебель',
      img: 'https://drive.google.com/file/d/1iXaBYGOuIuFsrOh2LwklKh6arc3ov7M9/view?usp=drive_link',
    },
    {
      name: 'Строительство и ремонт',
      img: 'https://drive.google.com/file/d/1iJS0H42lYkxZ2omNN72Ofq8u0rYNxl5B/view?usp=drive_link',
    },
  ];

  console.log('Seeding Product Categories...');

  for (const category of categories) {
    await prisma.productCategory.upsert({
      where: { name: category.name },
      update: {},
      create: {
        name: category.name,
        img: category.img,
      },
    });
  }

  console.log('Product Categories seeded successfully!');

  const sellerCategories = [
    {
      name: 'Медицина и фармацевтика',
      img: 'https://drive.google.com/file/d/1I6uQ-Zw9SVzwKfK5hNYZMaO7OhsXawFZ/view?usp=drive_link',
    },
    {
      name: 'Продукты питания',
      img: 'https://drive.google.com/file/d/1MaDngy5fnz467mxzt9ivpw5IlAhKReNn/view?usp=drive_link',
    },
    {
      name: 'Парфюмерия и косметика',
      img: 'https://drive.google.com/file/d/1oqR1HhR6czUmXnxfxR5Q2UU0oinFpTLf/view?usp=drive_link',
    },
    {
      name: 'Бытовая химия',
      img: 'https://drive.google.com/file/d/1tzYZX1mvk8ci4wcqYdX3dfP7H0pnQGm4/view?usp=drive_link',
    },
    {
      name: 'Средства и предметы гигиены',
      img: 'https://drive.google.com/file/d/13G6CFAtugwjTAdy8SQMP6bpfi_izwpOk/view?usp=drive_link',
    },
    {
      name: 'Развлечения',
      img: 'https://drive.google.com/file/d/1ewv5JpP_KhDEzYO0AqXdh-jtx9_eBRLj/view?usp=drive_link',
    },
    {
      name: 'Бытовая техника',
      img: 'https://drive.google.com/file/d/1-tY07sd1iF1XOLxFaWyHxdl7NC6eXKBh/view?usp=drive_link',
    },
    {
      name: 'Мобильные устройства связи',
      img: 'https://drive.google.com/file/d/1GFLh5hLfMU5DL_obJWMLz2PEwvTuKFVt/view?usp=drive_link',
    },
    {
      name: 'Одежда, обувь и аксессуары',
      img: 'https://drive.google.com/file/d/1497u-D0mDsL2w4b7KrJp0JWiZdHZ2Pm0/view?usp=drive_link',
    },
    {
      name: 'Офис и бизнес',
      img: 'https://drive.google.com/file/d/16_DgLaj7QYL2T1qMhxRydk8Rjfc-zJ-i/view?usp=drive_link',
    },
    {
      name: 'Автотовары',
      img: 'https://drive.google.com/file/d/1ewv5JpP_KhDEzYO0AqXdh-jtx9_eBRLj/view?usp=drive_link',
    },
  ];

  console.log('Seeding Seller Categories...');

  for (const category of sellerCategories) {
    await prisma.sellerCategory.upsert({
      where: { name: category.name },
      update: {},
      create: {
        name: category.name,
        img: category.img,
      },
    });
  }

  console.log('Seller Categories seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
