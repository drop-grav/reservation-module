DROP KEYSPACE IF EXISTS dgdb;
CREATE KEYSPACE dgdb WITH replication = {'class': 'SimpleStrategy', 'replication_factor': '1'}  AND durable_writes = true;

CREATE TABLE dgdb.listing (
  ID INT PRIMARY KEY,
  perNight INT ,
  Rating DECIMAL,
  RatingAmount INT,
  guestsAllowed INT,
  guestsInfants INT,
  cleaningFee DECIMAL,
  serviceFee DECIMAL,
  occupancyFee DECIMAL,
  daysMinimum INT,

);


CREATE TABLE dgdb.reservedDates (
  ID INT ,
  startDate DATE,
  endDate DATE,
  numGuests INT ,
  numInfants INT,
  listingID INT,
  PRIMARY KEY (listingID, startDate, id)
);
