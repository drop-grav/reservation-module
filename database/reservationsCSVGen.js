const faker = require('faker');
const fs = require('fs')
const path = require('path')

const writeData = fs.createWriteStream(path.join(__dirname, 'reservations.csv'));
writeData.write('id, startDate, endDate, numGuests, numInfants, listingID\n', 'utf8');

function writeFiles(writer, encoding, callback) {
  let i = process.env.NUM_LISTINGS;
  let listingId = 1
  let listing = 1
  let j = faker.random.number({ min: 2, max: 15 })
  let data;
  write();
  function write() {
    let ok = true;
    do {
      while (j > 0) {
        const startDateObj = {};
        startDateObj.year = '2019';
        startDateObj.month = faker.random.number({ min: 9, max: 12 });
        startDateObj.day = faker.random.number({ min: startDateObj.month === 9 ? 14 : 1, max: [9, 11].includes(startDateObj.month) ? 30 : 31 });

        const endDateObj = {};
        endDateObj.year = '2019';
        endDateObj.month = faker.random.number({ min: startDateObj.month, max: 12 });
        endDateObj.day = faker.random.number({ min: endDateObj.month === startDateObj.month ? startDateObj.day : 1, max: [9, 11].includes(endDateObj.month) ? 30 : 31 })

        const id = listing;

        const startDate = String(startDateObj.year) + '-' + String(startDateObj.month).padStart(2, '0') + '-' + String(startDateObj.day).padStart(2, '0');

        const endDate = String(endDateObj.year) + '-' + String(endDateObj.month).padStart(2, '0') + '-' + String(endDateObj.day).padStart(2, '0');

        const numGuests = faker.random.number({ min: 1, max: 3 });
        const numInfants = faker.random.number({ min: 0, max: 2 });

        const data = `${id},${startDate},${endDate},${numGuests},${numInfants},${listingId}\n`
        listing += 1;


        if (i === 1) {
          // Last time!
          writer.write(data, encoding, callback);
        } else {
          // See if we should continue, or wait.
          // Don't pass the callback, because we're not done yet.
          ok = writer.write(data, encoding);
        }
        j--;
      }
      i--;
      j = faker.random.number({ min: 2, max: 15 })
      listingId += 1;



    } while (i > 0 && ok);
    if (i > 0) {
      // Had to stop early!
      // Write some more once it drains.
      writer.once('drain', write);
    }
  }
}

writeFiles(writeData, 'utf-8', () => {
  writeData.end();
})

