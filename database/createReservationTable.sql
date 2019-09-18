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