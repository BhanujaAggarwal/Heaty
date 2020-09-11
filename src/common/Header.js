import React from "react";
import "./Header.css";
import { Container, Row, Col } from "reactstrap";
class Header extends React.Component {
  render() {
    return (
      <>
        <Container fluid={true} className="nav-container">
          <span className="nav-title">Heaty</span>
          <div>
            <a
              style={{
                color: "white",
                left: "14.93%",
                right: "79.9%",
                top: "37.18%",
                bottom: "37.18%"
              }}
              href="#"
            >
              About Us
            </a>
          </div>
          <div>
            <a
              style={{
                color: "white",
                left: "21.53%",
                right: "71.11%",
                top: "37.18%",
                bottom: "37.18%"
              }}
              href="#"
            >
              Financial Report
            </a>
          </div>
          <div>
            <a
              style={{
                color: "white",
                left: "31.32%",
                right: "61.22%",
                top: "37.18%",
                bottom: "37.18%"
              }}
              href="#"
            >
              Weekly Report
            </a>
          </div>
        </Container>
      </>
    );
  }
}
export default Header;
