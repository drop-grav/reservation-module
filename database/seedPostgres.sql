COPY listing(id, perNight, rating, ratingAmount, guestsAllowed, guestsInfants, cleaningFee, serviceFee, occupancyFee, daysMinimum) FROM '/home/jared/hackreactor/sdc/reservation-module/database/listing.csv' delimiter ',' csv header;

copy reserveddates(id, startDate, endDate, numGuests, numInfants, listingID) FROM '/home/jared/hackreactor/sdc/reservation-module/database/reservations.csv' delimiter ',' csv header;
