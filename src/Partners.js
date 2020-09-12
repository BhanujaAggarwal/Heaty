import React from "react";
import "./Partners.css";
import BitmapPartners from "./common/BitmapPartners.png";
import partners from "./common/partner.png";

class HomePage extends React.Component {


    render(){
        return (
            <div>
                <img src={partners} className="bg3"/>
            </div>
              
          );
    }
}

export default HomePage;
