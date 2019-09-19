COPY listing(id, perNight, rating, ratingAmount, guestsAllowed, guestsInfants, cleaningFee, serviceFee, occupancyFee, daysMinimum) FROM '/home/jared/hackreactor/sdc/reservation-module/database/listing.csv' DELIMITER ',' CSV HEADER;

COPY reserveddates(id, startDate, endDate, numGuests, numInfants, listingID) FROM '/home/jared/hackreactor/sdc/reservation-module/database/reservations.csv' DELIMITER ',' CSV HEADER;
