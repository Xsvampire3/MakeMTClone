import "./styles.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";
import { TextField } from "@mui/material";
import { Typography, Button } from "@mui/material";
import FooterOfTrains from "./FooterOfTrains";

function AddingTrains() {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [trains, setTrains] = useState([]);
  const [filteredTickets, setFilteredTickets] = useState([]);

  const handleSearch = () => {
    const filtered = trains.filter(
      (train) =>
        train.from.toLowerCase() === source.toLowerCase() &&
        train.to.toLowerCase() === destination.toLowerCase()
    );
    setFilteredTickets(filtered);
  };

  useEffect(() => {
    const fetchTrains = async () => {
      const response = await axios.get(
        "https://content.newtonschool.co/v1/pr/63b85e152cabb8fdea2673ee/trains"
      );
      setTrains(response.data);
      setFilteredTickets(response.data);
    };
    fetchTrains();
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
        <h2 style={{ color: "white", marginTop: "55px" }}>Trains</h2>
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
                value={source}
                placeholder="Delhi"
                onChange={(e) => setSource(e.target.value)}
                variant="outlined"
                margin="dense"
              />
              <TextField
                label="To"
                value={destination}
                placeholder="Mumbai"
                onChange={(e) => setDestination(e.target.value)}
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
          Available Trains
        </Typography>
        {filteredTickets.map((train) => (
          <div className="flight-card">
            <div className="flight-card-header">
              <div className="flight-name">#{train.train_number}</div>
              <div className="flight-time">{train.departure.departureDate}</div>
              <div className="flight-duration">{train.duration}</div>
            </div>
            <div className="flight-card-body">
              <div>{train.departure.departureTime}</div>
              <div className="flight-from-to">
                {train.from} → {train.to}
              </div>
              <div>{train.kilometers} Km</div>
            </div>
            <div className="flight-card-footer">
              <div className="flight-price">₹{train.price}</div>
              <Link
                to={{
                  pathname: "/checkout",
                  search: `?price=${train.price}`
                }}
              >
                <button className="book-now-button">Book Now</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {trains.length < 1 ? "No Trains Found!" : null}
      <FooterOfTrains />
      <Footer />
    </div>
  );
}

export default AddingTrains;
