import "./styles.css";

function FooterOfFlights() {
  return (
    <>
      <div className="footer-container">
        <div className="ft2">
          <div>
            <div>
              <h4>Q - How do I make a flight booking on MakeMyTrip?</h4>
            </div>
            <div style={{ fontSize: "13px" }}>
              A: You can book a flight on MakeMyTrip in five easy steps: Head
              over to the MakeMyTrip flight booking page, Enter your departure
              and arrival destinations, Select your air travel dates, Choose
              from our wide range of cheap flights based on your airfare
              preferences, Click on ‘Book Now’ and your air flight booking is
              done. Alternatively, you can also use the MakeMyTrip app for your
              flight ticket booking. Download the MakeMyTrip app, Put in the
              details i.e. date of journey, departure and arrival destinations,
              travel class of your choice, Select on your best comfortable
              option and click on 'Book Now'.
            </div>
          </div>

          <div>
            <div>
              <h4>Q - Can I avail domestic flight offers on MakeMyTrip?</h4>
            </div>
            <div style={{ fontSize: "13px" }}>
              A: Of course, you can. While making domestic flight bookings, you
              can avail any special offer that is active at that time. In
              accordance with the offer selected, a listing of eligible cheapest
              flights would show up on your screen. You can then apply the price
              filter and click on the downwards arrow, following which
              budget-friendly flights would start showing up in ascending order
              from the top (lowest price on top).
            </div>
          </div>
        </div>
        <hr style={{ width: "100%" }} />
        <div className="ft2">
          <div>
            <div>
              <h4>Q - How can I avail budget air tickets on MakeMyTrip?</h4>
            </div>
            <div style={{ fontSize: "13px" }}>
              A: It’s super-easy to avail budget airfare while booking your
              cheap flight tickets on MakeMyTrip. Just select the ‘Price’ filter
              once the available flight options are displayed and adjust
              according to your convenience. On the MakeMyTrip app, you can
              select the downward arrow, which will show the lowest airfare at
              the top and continue downward in ascending order.
            </div>
          </div>

          <div>
            <div>
              <h4>
                Q - Why could I not avail the flight booking offers at the time
                of checkout?
              </h4>
            </div>
            <div style={{ fontSize: "13px" }}>
              A: MakeMyTrip makes use of a world-class real-time reservation
              database to list airfare and availability. As dynamic changes in
              airfare take place, or the available flight tickets sell out, the
              database reflects the changes in real-time. Hence, we suggest, you
              double-check online flight booking prices when purchasing flight
              tickets, as the airfare might have been dynamically updated since
              you first selected the air travel dates or planned your itinerary.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterOfFlights;
