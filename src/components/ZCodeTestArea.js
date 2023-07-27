// import React from "react";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

// const ZCodeTestArea = () => {
//   inlineObject={}
//   return (

//     <div className="footer" style={inlineObject}>

//     <Row className="main-footer-row " md={4}>
//       <Col className="footer-cols" xs={6}>
//         <ul>
//           <h4>Build & Find</h4>
//         </ul>
//       </Col>
//       <Col className="footer-cols">
//         <ul>
//           <h4> Online Services</h4>
//         </ul>
//       </Col>
//       <Col className="footer-cols">
//         <ul>
//           <h4>Behind the scenes</h4>
//         </ul>
//       </Col>
//       <Col className="footer-cols">
//         <ul>
//           <h4>Porsche Company</h4>
//         </ul>

//         <div className="share-page">
//           <div className="share-page-icon-and-title">
//             <i className="fa-solid fa-share-nodes fa-lg"></i> Share Page
//           </div>
//           <div className="drop">
//             <div className="connect-div">
//               <p className="connect-with-porsche">Connect with Porsche</p>
//             </div>
//           </div>
//         </div>
//       </Col>
//     </Row>
//     </div>
//   );
// };

// export default ZCodeTestArea;

import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../components/ZCodeTestArea.css";
const ZCodeTestArea = () => {
  // Define inline styles
  // const inlineObject = {
  //   display: "flex",
  //   flexDirection: "row",
  //   flexWrap: "wrap",
  //   justifyContent: "center",
  //   alignItems: "center",
  // };

  return (
    <div className="testArea">
      <div>
        <div className="col1 testCols">
          <h4>Column1</h4>
        </div>

        <div className="col2 testCols">
          <h4>Column2</h4>
        </div>

        <div className="col3 testCols">
          <h4>Column3</h4>
        </div>

        <div className="col4 testCols">
          <h4>Column4</h4>
        </div>
      </div>
    </div>
  );
};

export default ZCodeTestArea;
