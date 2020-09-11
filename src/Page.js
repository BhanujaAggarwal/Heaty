import React from "react";
import Bitmap from "./common/Bitmap.png";
class Page extends React.Component {
  render() {
    return (
      <>
        <img
          src={Bitmap}
          //   style={{
          //     position: "absolute",
          //     left: "-1.81%",
          //     right: "39.31%",
          //     top: "7.23%",
          //     bottom: "0%"
          //}}
        />
      </>
    );
  }
}
export default Page;
