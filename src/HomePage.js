import React from "react";
import "./HomePage.css";
import BitmapBhanuja from "./common/BitmapBhanuja.png";
import Button from "react-bootstrap/Button";
import Header from "./common/Header";
class HomePage extends React.Component {
  onSubmit = () => {
    this.props.history.push("/getstarted");
  };

  render() {
    return (
      <div>
        <Header />
        <img src={BitmapBhanuja} className="bg" />
        <h1 className="txtHeat"> Let’s heat it up</h1>
        <div className="InfoGrey"></div>
        <p className="info">
          Did you know that you can save more than 2.3 tons of carbon dioxide
          with efficent heating? Every year more and more money is spent on
          energy costs. Not only our money is limited, but also our resources.
        </p>
        <p className="info2">
          HEATY should support you with an intelligent heating system in order
          to regulate the temperature automatically, save money, protect the
          climate and still let your colleagues and customers feel comfortable
          in your premises.
        </p>
        <Button
          variant="outline-primary"
          className="getStarted"
          onClick={this.onSubmit}
        >
          <p className="startBtntxt">Get Started</p>
        </Button>{" "}
      </div>
    );
  }
}

export default HomePage;
