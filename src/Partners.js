import React from "react";
import "./Partners.css";
import BitmapPartners from "./common/BitmapPartners.png";
import partners from "./common/partner.png";
import Header from "./common/Header";
class HomePage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div>
          <img src={partners} className="bg3" />
        </div>
      </>
    );
  }
}

export default HomePage;
