const faker = require('faker');
const fs = require('fs')
const path = require('path')


const writeData = fs.createWriteStream(path.join(__dirname, 'listing.csv'));
writeData.write('id, perNight, rating, ratingAmount, guestsAllowed, guestsInfants, cleaningFee, serviceFee, occupancyFee, daysMinumum\n', 'utf8');

function writeFiles(writer, encoding, callback) {
  let data;
  write();
  function write() {
    let ok = true;
    let i = process.env.NUM_LISTINGS;
    do {
      while (i > 0) {
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

        const data = `${id},${perNight},${rating},${ratingAmount},${guestsAllowed},${guestsInfants},${cleaningFee},${serviceFee},${occupancyFee},${daysMinimum}\n`


        if (i === 1) {
          // Last time!
          writer.write(data, encoding, callback);
        } else {
          // See if we should continue, or wait.
          // Don't pass the callback, because we're not done yet.
          ok = writer.write(data, encoding);
        }
        i--;

      }



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


