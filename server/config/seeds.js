const db = require('./connection');
const { User, Jobs, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Automotive' },
    { name: 'Computer' },
    { name: 'Financial' },
    { name: 'Health' },
    { name: 'Household' },
    { name: 'Lawn Care'},
    { name: 'Nanny'},
    { name: 'Pets'}
  ]);

  console.log('categories seeded');

  await Jobs.deleteMany();

  const jobs = await Jobs.insertMany([
    {
      title: 'Web Develop',
      category: categories[1]._id,
      description:
        'I am looking for someone to create me a website for my business.',
      price: 100.00
    },
    {
      title: 'Trainer',
      category: categories[3]._id,
      description:
        'Looking for a personal trainer to help me get in shape.',
      price: 50.00,
    },
    {
      title: 'House cleaning',
      category: categories[4]._id,
      description:
        'We are in need of someone to clean our house at least twice a week.',
      price: 30.00,
    },
    {
      title: 'Dog Walker',
      category: categories[7]._id,
      description:
        'Wanting someone to walk my dog daily.',
      price: 10.00,
    }
  ]);

  console.log('jobs seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Debbie',
    lastName: 'Johnson',
    email: 'debj@testmail.com',
    password: 'password12345',
    jobs: [
      {
        jobs: [jobs[3]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Ryan',
    lastName: 'Tomphson',
    email: 'ryant@testmail.com',
    password: 'password12345',
    jobs: [
      {
        jobs: [jobs[7]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Robert',
    lastName: 'Funnington',
    email: 'rob@testmail.com',
    password: 'idontknow12345'
  });

  console.log('users seeded');

  process.exit();
});