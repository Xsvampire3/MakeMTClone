import "./styles.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Typography, Button } from "@mui/material";
import { TextField } from "@mui/material";
import FooterOfFlights from "./FooterOfFlights";
import Footer from "./Footer";

function AddingFlights() {
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [tickets, setTickets] = useState([]);
  const [filteredTickets, setFilteredTickets] = useState([]);

  const handleSearch = () => {
    const filtered = tickets.filter(
      (ticket) =>
        ticket.from.toLowerCase() === fromCity.toLowerCase() &&
        ticket.to.toLowerCase() === toCity.toLowerCase()
    );
    setFilteredTickets(filtered);
  };

  useEffect(() => {
    const fetchTickets = async () => {
      const response = await axios.get(
        "https://content.newtonschool.co/v1/pr/63b85b1209f0a79e89e17e3a/flights"
      );
      setTickets(response.data);
      setFilteredTickets(response.data);
    };
    fetchTickets();
  }, []);

  return (
    <div className="search-bg">
      <div
        style={{
          background: "linear-gradient(to bottom, black, darkblue)",
          paddingTop: "5px",
          paddingBottom: "24px"
        }}
      >
        <h2 style={{ color: "white", marginTop: "55px" }}>Flights</h2>

        <div
          className="flight-search-container"
          style={{
            position: "relative",
            border: "1px solid black",
            borderRadius: "16px",
            padding: "12px",
            backgroundColor: "#f0f8ff"
          }}
        >
          <form>
            <div className="flight-search">
              <TextField
                label="From"
                value={fromCity}
                placeholder="Delhi"
                onChange={(e) => setFromCity(e.target.value)}
                variant="outlined"
                margin="dense"
              />
              <TextField
                label="To"
                value={toCity}
                placeholder="Mumbai"
                onChange={(e) => setToCity(e.target.value)}
                variant="outlined"
                margin="dense"
              />
            </div>
            <div className="flight-search2">
              <TextField
                label="Departure date"
                type="date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                variant="outlined"
                margin="dense"
                InputLabelProps={{
                  shrink: true
                }}
              />
              <TextField
                label="Return date"
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                variant="outlined"
                margin="dense"
                InputLabelProps={{
                  shrink: true
                }}
              />
            </div>
            <Button
              onClick={handleSearch}
              variant="contained"
              style={{
                marginLeft: "-50px",
                position: "absolute",
                bottom: "-15px",
                borderRadius: "16px"
              }}
            >
              Search
            </Button>
          </form>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#e6e6fa",
          paddingBottom: "10px",
          paddingTop: "5px"
        }}
      >
        <Typography variant="h4" gutterBottom marginTop="24px">
          Available Tickets
        </Typography>
        {filteredTickets.map((ticket) => (
          <div className="flight-card">
            <div className="flight-card-header">
              <div className="flight-name">{ticket.airlineName}</div>
              <div className="flight-time">
                {ticket.departure.departureDate} - {ticket.return.returnDate}
              </div>
              <div className="flight-duration">{ticket.duration}</div>
            </div>
            <div className="flight-card-body">
              <div>{ticket.departure.departureTime}</div>
              <div className="flight-from-to">
                {ticket.from} → {ticket.to}
              </div>
              <div>{ticket.return.returnTime}</div>
            </div>
            <div className="flight-card-footer">
              <div className="flight-price">₹{ticket.price}</div>
              <Link
                to={{
                  pathname: "/checkout",
                  search: `?price=${ticket.price}`
                }}
              >
                <button className="book-now-button">Book Now</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {tickets.length < 1 ? "No Flights Found!" : null}
      <FooterOfFlights />
      <Footer />
    </div>
  );
}

export default AddingFlights;
