copy dgdb.listing (id, pernight , rating, ratingamount , guestsallowed , guestsinfants , cleaningfee , servicefee , occupancyfee , daysminimum ) from '/home/jared/hackreactor/sdc/reservation-module/database/listing.csv' with delimiter = ',' and header = true;

copy dgdb.reserveddates  (id, startdate, enddate , numguests , numinfants , listingid ) from '/home/jared/hackreactor/sdc/reservation-module/database/reservations.csv' with delimiter = ',' and header = true;
