import React, { Component } from "react";

class getLocation extends Component {
  //   key = "AIzaSyBbYp8cxXK-FQxiX_hTeuyEooRQ9GVS0iI";
  componentDidMount() {
    if ("geolocation" in navigator) {
      console.log("Available");
    } else {
      console.log("Not Available");
    }

    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  }
  render() {
    return <div>Hi</div>;
  }
}

export default getLocation;
