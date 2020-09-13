// import React from "react";
// import "./Header.css";
// import { Container, Row, Col } from "reactstrap";
// import { Link } from "react-router-dom";

import React, { useState } from "react";
import { Progress } from "reactstrap";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";
import "./Header.css";
import vector from "./Vector.png";
import up from "./up.png";
import down from "./down.png";
import floor from "./floor.png";
import userIcon from "./userIcon.png";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <>
        <div>
          <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">Heaty</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="container-fluid" navbar>
                <NavItem>
                  <NavLink href="/">About Us</NavLink>
                </NavItem>
                {/* <NavItem>
              <NavLink href="/">Financial Report</NavLink>
            </NavItem> */}
                <NavItem>
                  <NavLink href="/getstarted/">Weekly Report</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/partners">Our Partners</NavLink>
                </NavItem>

                <UncontrolledDropdown nav inNavbar className="ml-auto icon">
                  <DropdownToggle nav caret>
                    <img src={userIcon} />
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <p className="qw"> Set your temperature goal</p>
                    </DropdownItem>
                    {/* <DropdownItem>
                      <img src={up} className="q" />
                      <img src={floor} />
                      <img src={down} />
                    </DropdownItem> */}
                    <hr />
                    <DropdownItem>
                      {/* <div className="text-center">17°</div>
                      <Progress value="60" />
                      <div className="text-center">00:00-08:00</div> */}
                      <div className="text-center">
                        {this.props.value1 || 17}°
                      </div>
                      <Slider
                        value={this.props.value1 || 17}
                        onChange={this.props.changeValue1}
                        aria-labelledby="continuous-slider"
                        valueLabelDisplay="auto"
                      />
                      <div className="text-center">00:00-08:00</div>
                      {/* <PrettoSlider
                        valueLabelDisplay="auto"
                        aria-label="pretto slider"
                        defaultValue={this.props.value1}
                        onChange={this.props.changeValue1}
                      /> */}
                    </DropdownItem>
                    <hr />
                    <DropdownItem>
                      <div className="text-center">
                        {this.props.value2 || 15}°
                      </div>
                      <Slider
                        value={this.props.value2 || 15}
                        onChange={this.props.change2}
                        aria-labelledby="continuous-slider"
                        valueLabelDisplay="auto"
                      />
                      <div className="text-center">00:08-16:00</div>
                    </DropdownItem>
                    <hr />
                    <DropdownItem>
                      <div className="text-center">
                        {this.props.value3 || 18}°
                      </div>
                      <Slider
                        value={this.props.value3 || 18}
                        onChange={this.props.changeValue3}
                        aria-labelledby="continuous-slider"
                        valueLabelDisplay="auto"
                      />
                      <div className="text-center">16:00-24:00</div>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>

                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    <img src={vector} className="nav1" />
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem href="/">Home</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem href="/AboutUs">About Us</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem href="/">Career</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem href="/getstarted">
                      Weekly Report
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem href="/partners">Our Partners</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
        </div>{" "}
      </>
    );
  }
}
// class Header extends React{

//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);

//   return (
//     <div>
//       <Navbar color="dark" dark expand="md">
//         <NavbarBrand href="/">Heaty</NavbarBrand>
//         <NavbarToggler onClick={toggle} />
//         <Collapse isOpen={isOpen} navbar>
//           <Nav className="container-fluid" navbar>
//             <NavItem>
//               <NavLink href="/">About Us</NavLink>
//             </NavItem>
//             {/* <NavItem>
//               <NavLink href="/">Financial Report</NavLink>
//             </NavItem> */}
//             <NavItem>
//               <NavLink href="/getstarted/">Weekly Report</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="/partners">Our Partners</NavLink>
//             </NavItem>

//             <UncontrolledDropdown nav inNavbar className="ml-auto icon">
//               <DropdownToggle nav caret>
//                 <img src={userIcon} />
//               </DropdownToggle>
//               <DropdownMenu right>
//                 <DropdownItem>
//                   <p className="qw"> Set your temperature goal</p>
//                 </DropdownItem>
//                 <DropdownItem>
//                   <img src={up} className="q" />
//                   <img src={floor} />
//                   <img src={down} />
//                 </DropdownItem>
//                 <DropdownItem>
//                   <div className="text-center">17°</div>
//                   <Progress value="60" />
//                   <div className="text-center">00:00-08:00</div>
//                 </DropdownItem>
//                 <DropdownItem>
//                   <div className="text-center">15°</div>
//                   <Progress value="50" />
//                   <div className="text-center">08:00-16:00</div>
//                 </DropdownItem>
//                 <DropdownItem>
//                   <div className="text-center">18°</div>
//                   <Progress value="65" />
//                   <div className="text-center">16:00-24:00</div>
//                 </DropdownItem>
//               </DropdownMenu>
//             </UncontrolledDropdown>

//             <UncontrolledDropdown nav inNavbar>
//               <DropdownToggle nav caret>
//                 <img src={vector} className="nav1" />
//               </DropdownToggle>
//               <DropdownMenu right>
//                 <DropdownItem href="/">Home</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem href="/AboutUs">About Us</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem href="/">Career</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem href="/getstarted">Weekly Report</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem href="/partners">Our Partners</DropdownItem>
//               </DropdownMenu>
//             </UncontrolledDropdown>
//           </Nav>
//         </Collapse>
//       </Navbar>
//     </div>
//   );
// };

// class Header extends React.Component {
//   render() {
//     return (
//       <>
//         <Container fluid={true} className="nav-container">
//           <Link to="/" className="nav-title">
//           Heaty
//           </Link>
//           <div>
//             <a
//               style={{
//                 color: "white",
//                 left: "14.93%",
//                 right: "79.9%",
//                 top: "37.18%",
//                 bottom: "37.18%"
//               }}
//               href="#"
//             >
//               About Us
//             </a>
//           </div>

//           <div>
//             <a
//               style={{
//                 color: "white",
//                 left: "21.53%",
//                 right: "71.11%",
//                 top: "37.18%",
//                 bottom: "37.18%"
//               }}
//               href="#"
//             >
//               Financial Report
//             </a>
//           </div>
//           <div>
//             <a
//               style={{
//                 color: "white",
//                 left: "31.32%",
//                 right: "61.22%",
//                 top: "37.18%",
//                 bottom: "37.18%"
//               }}
//               href="#"
//             >
//               Weekly Report
//             </a>
//           </div>
//           <div>
//             <a
//               style={{
//                 color: "white",
//                 left: "40%",
//                 right: "40.22%",
//                 top: "37.18%",
//                 bottom: "37.18%"
//               }}
//               href="/partners"
//             >
//               Our Partners
//             </a>
//           </div>
//         </Container>
//       </>
//     );
//   }
// }
export default Header;
