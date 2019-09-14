DROP DATABASE IF EXISTS dgdb;

CREATE DATABASE dgdb;

USE dgdb;

CREATE TABLE listing (
  id SERIAL PRIMARY KEY,
  perNight INT NOT NULL,
  rating DECIMAL,
  ratingAmount INT,
  guestsAllowed INT NOT NULL,
  guestsInfants INT,
  cleaningFee DECIMAL,
  serviceFee DECIMAL,
  occupancyFee DECIMAL,
  daysMinimum INT
);

CREATE TABLE reservedDates (
  id SERIAL PRIMARY KEY,
  startDate DATE NOT NULL,
  endDate DATE NOT NULL,
  numGuests INT NOT NULL,
  numInfants INT,
  listingID INT NOT NULL,
  FOREIGN KEY (listingID)
    REFERENCES listing(id)
);