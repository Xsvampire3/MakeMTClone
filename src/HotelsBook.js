import "./styles.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";
import FooterOfHotels from "./FooterOfHotels";
import { TextField } from "@mui/material";
import { Button, Typography } from "@mui/material";

function AddingHotels() {
  const [city, setCity] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [hotels, setHotels] = useState([]);
  const [filteredTickets, setFilteredTickets] = useState([]);

  const handleSearch = () => {
    const filtered = hotels.filter(
      (hotel) => hotel.city.toLowerCase() === city.toLowerCase()
    );
    setFilteredTickets(filtered);
  };

  useEffect(() => {
    const fetchHotels = async () => {
      const response = await axios.get(
        "https://content.newtonschool.co/v1/pr/63b85bcf735f93791e09caf4/hotels"
      );
      setHotels(response.data);
      setFilteredTickets(response.data);
    };
    fetchHotels();
  }, []);

  return (
    <div className="search-bg">
      <div
        style={{
          background: "linear-gradient(to bottom, black, darkblue 30%)",
          paddingTop: "5px"
        }}
      >
        <h2 style={{ color: "white", marginTop: "55px" }}>Hotels</h2>
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
                label="City"
                value={city}
                placeholder="Mumbai"
                onChange={(e) => setCity(e.target.value)}
                variant="outlined"
                margin="dense"
              />
            </div>
            <div className="flight-search2">
              <TextField
                label="Check-in date"
                type="date"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                variant="outlined"
                margin="dense"
                InputLabelProps={{
                  shrink: true
                }}
              />
              <TextField
                label="Check-out date"
                type="date"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
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

        <div style={{ backgroundColor: "#e6e6fa", paddingBottom: "10px" }}>
          <Typography variant="h4" gutterBottom marginTop="24px">
            Available Hotels
          </Typography>
          {filteredTickets.map((hotel) => (
            <div className="flight-card">
              <div className="flight-card-header">
                <div className="flight-name">{hotel.hotel_name}</div>
                <div className="flight-time">
                  {hotel.check_in} | {hotel.check_out}
                </div>
                <div className="flight-duration">Room: {hotel.room_type}</div>
              </div>
              <div className="flight-card-body">
                <div>Ratings: {hotel.rating}</div>
                <div className="flight-from-to">{hotel.city}</div>
                <div>Guests: {hotel.guests}</div>
              </div>
              <div className="flight-card-footer">
                <div className="flight-price">₹{hotel.price_per_night}</div>
                <Link
                  to={{
                    pathname: "/checkout",
                    search: `?price=${hotel.price_per_night}`
                  }}
                >
                  <button className="book-now-button">Book Now</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      {hotels.length < 1 ? "No Hotels Found!" : null}
      <FooterOfHotels />
      <Footer />
    </div>
  );
}

export default AddingHotels;
