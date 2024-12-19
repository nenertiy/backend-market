import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const electronicsCategory = await prisma.productCategory.upsert({
    where: { name: 'Electronics' },
    update: {},
    create: {
      name: 'Electronics',
      img: 'https://example.com/images/electronics.jpg',
    },
  });

  const fashionCategory = await prisma.productCategory.upsert({
    where: { name: 'Fashion' },
    update: {},
    create: {
      name: 'Fashion',
      img: 'https://example.com/images/fashion.jpg',
    },
  });

  const homeAppliancesCategory = await prisma.productCategory.upsert({
    where: { name: 'Home Appliances' },
    update: {},
    create: {
      name: 'Home Appliances',
      img: 'https://example.com/images/home_appliances.jpg',
    },
  });

  const booksCategory = await prisma.productCategory.upsert({
    where: { name: 'Books' },
    update: {},
    create: {
      name: 'Books',
      img: 'https://example.com/images/books.jpg',
    },
  });

  const toysCategory = await prisma.productCategory.upsert({
    where: { name: 'Toys' },
    update: {},
    create: {
      name: 'Toys',
      img: 'https://example.com/images/toys.jpg',
    },
  });

  console.log('Product categories created or updated.');

  const seller = await prisma.seller.create({
    data: {
      shopName: 'Tech Store',
      surname: 'Smith',
      name: 'John',
      phone: '+1234567890',
      email: 'john.smith@example.com',
      password: 'password123',
    },
  });

  console.log('Seller created.');

  const laptop = await prisma.product.create({
    data: {
      name: 'Laptop',
      description: 'A powerful laptop for work and play.',
      price: 1200.99,
      img: 'https://example.com/images/laptop.jpg',
      sellerId: seller.id,
      isAvailable: true,
      isPopular: true,
    },
  });

  const smartphone = await prisma.product.create({
    data: {
      name: 'Smartphone',
      description: 'The latest smartphone with cutting-edge features.',
      price: 799.99,
      img: 'https://example.com/images/smartphone.jpg',
      sellerId: seller.id,
      isAvailable: true,
      isPopular: false,
    },
  });

  const sneakers = await prisma.product.create({
    data: {
      name: 'Sneakers',
      description: 'Stylish and comfortable sneakers.',
      price: 49.99,
      img: 'https://example.com/images/sneakers.jpg',
      sellerId: seller.id,
      isAvailable: true,
      isPopular: false,
    },
  });

  const blender = await prisma.product.create({
    data: {
      name: 'Cooking Blender',
      description: 'A powerful blender for your kitchen.',
      price: 99.99,
      img: 'https://example.com/images/blender.jpg',
      sellerId: seller.id,
      isAvailable: true,
      isPopular: true,
    },
  });

  const toyCar = await prisma.product.create({
    data: {
      name: 'Toy Car',
      description: 'A fun toy car for kids.',
      price: 15.99,
      img: 'https://example.com/images/toy_car.jpg',
      sellerId: seller.id,
      isAvailable: true,
      isPopular: false,
    },
  });

  console.log('Products created.');

  await prisma.product.update({
    where: { id: laptop.id },
    data: {
      productCategory: {
        connect: [{ id: electronicsCategory.id }],
      },
    },
  });

  await prisma.product.update({
    where: { id: smartphone.id },
    data: {
      productCategory: {
        connect: [{ id: electronicsCategory.id }],
      },
    },
  });

  await prisma.product.update({
    where: { id: sneakers.id },
    data: {
      productCategory: {
        connect: [{ id: fashionCategory.id }],
      },
    },
  });

  await prisma.product.update({
    where: { id: blender.id },
    data: {
      productCategory: {
        connect: [{ id: homeAppliancesCategory.id }],
      },
    },
  });

  await prisma.product.update({
    where: { id: toyCar.id },
    data: {
      productCategory: {
        connect: [{ id: toysCategory.id }],
      },
    },
  });

  console.log('Products connected to categories.');
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
