import React from "react";
import Bitmap from "./common/Bitmap.png";
import "./Page.css";
import { Container, Row, Col } from "reactstrap";
import ProgressBar from "customizable-progress-bar";
// import Floor from "./Floor";
import Temp from "./common/Temp.png";
import { Button, Icon } from "semantic-ui-react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Header from "./common/Header";
var divStyle = {
  position: "absolute",
  left: "-0.42%",
  right: "38.31%",
  top: "8.62%",
  bottom: "-0.39%",
  backgroundImage: "url(" + Bitmap + ")"
};
class Page extends React.Component {
  constructor() {
    super();
    this.state = {
      energyValue: [20, 35, 30],
      temp: [22, 30, 25],
      current: 1,
      floor: ["1st Floor", "2nd Floor", "3rd Floor"],
      checked: "false",
      radioValue: "1",
      radios: [
        { name: "Automatic", value: "1" },
        { name: "Manual", value: "2" }
      ],
      value1: 17,
      value2: 15,
      value3: 18
    };
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);

    this.handleChange3 = this.handleChange3.bind(this);
    this.setRadioValue = this.setRadioValue.bind(this);
    this.changeValue1 = this.changeValue1.bind(this);
    this.changeValue2 = this.changeValue2.bind(this);
    this.changeValue3 = this.changeValue3.bind(this);
  }
  changeValue1(event, newValue1) {
    console.log("value1");
    this.setState({ value1: newValue1 });
  }
  changeValue2(event, newValue2) {
    console.log("value2");
    this.setState({ value2: newValue2 });
  }
  changeValue3(event, newValue3) {
    this.setState({ value3: newValue3 });
  }
  handleChange1(event) {
    this.setState({ current: 1 });
  }
  handleChange2(event) {
    this.setState({ current: 2 });
  }
  handleChange3(event) {
    this.setState({ current: 3 });
  }
  setRadioValue(event) {
    this.setState({ radioValue: event.currentTarget.value });
  }

  render() {
    return (
      <>
        <Header
          value1={this.state.value1}
          value2={this.state.value2}
          value3={this.state.value3}
          changeValue1={this.changeValue1}
          change2={this.changeValue2}
          changeValue3={this.changeValue3}
        />
        <div style={divStyle}>
          <div className="level"> Indoor level</div>
          <div className="temp">{this.state.temp[this.state.current - 1]}</div>
          <img src={Temp} className="degree" />
          <div className="time">17:00 PM</div>

          <ButtonGroup
            toggle
            style={{
              position: "absolute",
              left: "67.80%",
              right: "60%",
              top: "22.95%",
              bottom: "70.77%"
              /* Gray/01 */
            }}
          >
            {this.state.radios.map((radio, idx) => (
              <ToggleButton
                key={idx}
                type="radio"
                variant="light"
                name="radio"
                value={radio.value}
                checked={this.state.radioValue === radio.value}
                onChange={this.setRadioValue}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>

          <div className="bar">
            <div className="energy">Energy Consumption</div>
            <span className="percent">
              %{this.state.energyValue[this.state.current - 1]}
            </span>
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
                currentValue={this.state.energyValue[this.state.current - 1]} //Possible value any number
                maxValue={100} //Possible value any number
                showLabel={false} //Possible values true, false
              />
            </div>
            <div className="heat">Heat Level</div>

            <div
              style={{
                padding: 50,
                width: 600,
                position: "absolute",
                left: "3.08%",
                right: "53.19%",
                top: "55.81%",
                bottom: "43.36%"
              }}
            >
              <ProgressBar
                slideIn={true} //Possible values true, false
                barHeight={25} //Possible value any number
                labelSize={"medium"} //Possible any number or small, medium, large, x-large, xx-large ...
                activeBackColor={"red"} //Possible value any string (color code)
                disabledBackColor={"#E6E6E6;"}
                //Possible value any string (color code)
                striped={false} //Possible values true, false
                animated={false} //Possible values true, false
                labelColor={"#ffffff"} //Possible value any string (color code)
                borderRadius={15} //Possible value any number
                minValue={0} //Possible value any number
                currentValue={this.state.temp[this.state.current - 1]} //Possible value any number
                maxValue={100} //Possible value any number
                showLabel={false} //Possible values true, false
              />
            </div>
          </div>
          {this.state.current == 1 ? (
            <Icon
              style={{
                position: "absolute",
                left: "43.22%",
                right: "71.81%",
                top: "86.62%",
                bottom: "12.01%"
              }}
              name=" circle"
              onClick={this.handleChange1}
            ></Icon>
          ) : (
            <Icon
              style={{
                position: "absolute",
                left: "43.22%",
                right: "71.81%",
                top: "86.62%",
                bottom: "12.01%"
              }}
              name=" circle outline"
              onClick={this.handleChange1}
            ></Icon>
          )}
          {this.state.current == 2 ? (
            <Icon
              style={{
                position: "absolute",
                left: "49.21%",
                right: "47.82%",
                top: "86.62%",
                bottom: "12.01%"
              }}
              name=" circle "
              onClick={this.handleChange2}
            ></Icon>
          ) : (
            <Icon
              style={{
                position: "absolute",
                left: "49.21%",
                right: "47.82%",
                top: "86.62%",
                bottom: "12.01%"
              }}
              name=" circle outline"
              onClick={this.handleChange2}
            ></Icon>
          )}
          {this.state.current == 3 ? (
            <Icon
              style={{
                position: "absolute",
                left: "54.92%",
                right: "46.11%",
                top: "86.62%",
                bottom: "12.01%"
              }}
              name=" circle "
              onClick={this.handleChange3}
            ></Icon>
          ) : (
            <Icon
              style={{
                position: "absolute",
                left: "54.92%",
                right: "46.11%",
                top: "86.62%",
                bottom: "12.01%"
              }}
              name=" circle outline"
              onClick={this.handleChange3}
            ></Icon>
          )}
          <div className="floor">
            {this.state.floor[this.state.current - 1]}
          </div>
        </div>
        <div className="usage">
          <div className="usagetext">Usage Standards</div>
          <div className="box1">
            <div className="tempdisplay">{this.state.value1}°</div>
            <div className="timedisplay">00-08</div>
          </div>
          <div className="box2">
            <div className="tempdisplay">{this.state.value2}°</div>
            <div className="timedisplay">08-16</div>
          </div>
          <div className="box3">
            <div className="tempdisplay">{this.state.value3}°</div>
            <div className="timedisplay">16-24</div>
          </div>
          <div className="crowd">
            <div
              className="crowdtext
          "
            >
              {" "}
              Crowd Level
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Page;
