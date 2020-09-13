import React from "react";
import Bitmap from "./common/Bitmap.png";
import "./Page.css";
import { Container, Row, Col } from "reactstrap";
import ProgressBar from "customizable-progress-bar";

import Temp from "./common/Temp.png";
var divStyle = {
  position: "absolute",
  left: "-0.42%",
  right: "39.31%",
  top: "10.62%",
  bottom: "-0.39%",
  backgroundImage: "url(" + Bitmap + ")"
};
class Page extends React.Component {
  constructor() {
    super();
    this.state = { energyValue: 16 };
  }
  render() {
    return (
      <>
        <div style={divStyle}>
          <div className="level"> Indoor level</div>
          <div className="temp">22</div>
          <img src={Temp} className="degree" />
          <div className="time">17:00 PM</div>
          <div className="bar">
            <div className="energy">Energy Consumption</div>
            <span className="percent">%{this.state.energyValue}</span>
            <div
              style={{
                padding: 50,
                width: 600,
                position: "absolute",
                left: "3.08%",
                right: "53.19%",
                top: "17.81%",
                bottom: "43.36%"
              }}
            >
              <ProgressBar
                slideIn={true} //Possible values true, false
                barHeight={25} //Possible value any number
                labelSize={"medium"} //Possible any number or small, medium, large, x-large, xx-large ...
                activeBackColor={"#5A5A5A"} //Possible value any string (color code)
                disabledBackColor={"#E6E6E6;"} //Possible value any string (color code)
                striped={false} //Possible values true, false
                animated={false} //Possible values true, false
                labelColor={"#ffffff"} //Possible value any string (color code)
                borderRadius={15} //Possible value any number
                minValue={0} //Possible value any number
                currentValue={this.state.energyValue} //Possible value any number
                maxValue={100} //Possible value any number
                showLabel={false} //Possible values true, false
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Page;
