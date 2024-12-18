import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const productCategories = await prisma.productCategory.createMany({
    data: [
      {
        name: 'Electronics',
        img: 'https://example.com/images/electronics.jpg',
      },
      {
        name: 'Fashion',
        img: 'https://example.com/images/fashion.jpg',
      },
      {
        name: 'Home Appliances',
        img: 'https://example.com/images/home_appliances.jpg',
      },
      {
        name: 'Books',
        img: 'https://example.com/images/books.jpg',
      },
      {
        name: 'Toys',
        img: 'https://example.com/images/toys.jpg',
      },
    ],
  });

  // console.log('Product categories created:', productCategories);

  const sellerCategories = await prisma.sellerCategory.createMany({
    data: [
      {
        name: 'Electronics',
        img: 'https://example.com/images/electronics.jpg',
      },
      {
        name: 'Fashion',
        img: 'https://example.com/images/fashion.jpg',
      },
      {
        name: 'Home Appliances',
        img: 'https://example.com/images/home_appliances.jpg',
      },
      {
        name: 'Books',
        img: 'https://example.com/images/books.jpg',
      },
      {
        name: 'Toys',
        img: 'https://example.com/images/toys.jpg',
      },
    ],
  });

  // console.log('Product categories created:', sellerCategories);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
