const csvWriter = require('csv-write-stream');
const faker = require('faker');
const fs = require('fs')

writer = csvWriter();

writer.pipe(fs.createWriteStream('reservations.csv'));

for (let i = 1; i < 10000001; i++) {

  const startDateObj = {};
  startDateObj.year = 2019;
  startDateObj.month = faker.random.number({ min: 9, max: 12 });
  startDateObj.day = faker.random.number({ min: startDateObj.month === 9 ? 14 : 1, max: [9, 11].includes(startDateObj.month) ? 30 : 31 });

  const endDateObj = {};
  endDateObj.year = 2019;
  endDateObj.month = faker.random.number({ min: startDateObj.month, max: 12 });
  endDateObj.day = faker.random.number({ min: endDateObj.month === startDateObj.month ? startDateObj.day : 1, max: [9, 11].includes(endDateObj.month) ? 30 : 31 })

  const id = i;
  const startDate = `${startDateObj.year}-${startDateObj.month}-${startDateObj.day}`;
  const endDate = `${endDateObj.year}-${endDateObj.month}-${endDateObj.day}`;
  const numGuests = faker.random.number({ min: 1, max: 3 });
  const numInfants = faker.random.number({ min: 0, max: 2 });
  const listingID = i;
  d


  writer.write({
    id,
    startDate,
    endDate,
    numGuests,
    numInfants,
    listingID
  });


}

writer.end();

