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

