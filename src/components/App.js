
import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.cityList = [{ name: 'Goa', location: 101, country: 'India' },
    { name: 'Amsterdam', location: 102, country: 'Netherlands' },
    { name: 'New York', location: 103, country: 'USA' },
    { name: 'Darjeeling', location: 104, country: 'India' },
    { name: 'Tokyo', location: 105, country: 'Japan' },
    { name: 'Lonavala', location: 106, country: 'India' },
//     { name: 'Brandenburg Gate', location: 107, country: 'Germany' },
//     { name: 'Reichstag Building', location: 108, country: 'Germany' },
//     { name: 'Museum Island', location: 109, country: 'Germany' },
//     { name: 'Munnar', location: 110, country: 'India' },
//     { name: 'Leh Ladakh', location: 111, country: 'India' },
//     { name: 'Goa', location: 112, country: 'India' },
//     { name: 'Agra', location: 113, country: 'India' },
//     { name: 'Dalhousie', location: 114, country: 'India' },
//     { name: 'Coorg', location: 115, country: 'India' },
//     { name: 'Rome', location: 116, country: 'Italy' },
//     { name: 'Milan', location: 117, country: 'Italy' },
//     { name: 'Venice', location: 118, country: 'Italy' },
//     { name: 'Varanasai', location: 119, country: 'India' },
//     { name: 'Jaipur', location: 120, country: 'India' },
//     { name: 'The Hofburg', location: 121, country: 'Austria' },
//     { name: 'Belvedere Palace', location: 122, country: 'Austria' },
//     { name: 'St. Stephen Cathedral', location: 123, country: 'Austria' },
//     { name: 'Kahna National Park', location: 124, country: 'India' },
//     { name: 'Amritsar', location: 125, country: 'India' },
//     { name: 'Mussoorie', location: 126, country: 'India' },
//     { name: 'Mount Abu', location: 127, country: 'India' },
//     { name: 'Tirupati', location: 128, country: 'India' },
    ];
  }

  render() {
    const newArr = this.cityList.map(city=>{
      console.log(city);
      return <li key={city.location}>{city.name}</li>
    })
    return(
      <div id="main">
        {/* Do not remove the main div */}
        <ol>
            {newArr}
        </ol>

      </div>
    );
  }
}


export default App;
