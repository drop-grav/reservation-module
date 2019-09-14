const csvWriter = require('csv-write-stream');
const faker = require('faker');
const fs = require('fs')

writer = csvWriter();

writer.pipe(fs.createWriteStream('listing.csv'));

for (let i = 1; i < 10000001; i++) {
  const id = i;
  const perNight = faker.random.number({ min: 40, max: 250 });
  const rating = faker.finance.amount(1, 5, 2)
  const ratingAmount = faker.random.number(2000);
  const guestsAllowed = faker.random.number({ min: 2, max: 6 });
  const guestsInfants = faker.random.number({ min: 1, max: guestsAllowed - 2 });
  const cleaningFee = faker.random.number({ min: 5, max: 20 });
  const serviceFee = faker.random.number({ min: 5, max: 20 });
  const occupancyFee = faker.random.number({ min: 5, max: 20 });
  const daysMinimum = faker.random.number({ min: 1, max: 5 });

  writer.write({
    id,
    perNight,
    rating,
    ratingAmount,
    guestsAllowed,
    guestsInfants,
    cleaningFee,
    serviceFee,
    occupancyFee,
    daysMinimum
  });

}

writer.end();


// writer.write({ hello: 'world', foo: 'bar', baz: 'taco' });
// writer.end();