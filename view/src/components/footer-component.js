import React from "react";

import { Row,
         Col } from "react-bootstrap";

import ReactPlayer from "react-player";

import { Link } from "react-router-dom";

import { Facebook, Twitter, Youtube, Instagram } from "react-bootstrap-icons";

import "../styles/footer.scss";

export default function Footer(props) {
  return (
    <Col id="footer">

      <Row id="footer-container1">
        <Col xs={12} className="footercotainer1-container1">
          1
        </Col>
        <Col xs={6} className="footercotainer1-container2">
          <h3 className="footerheaders">
            <b>Latest post's</b>
          </h3>
          <div className="footercontainer1-container2postcontainer">
            {props.latestPosts.map((data) => {
              return (
                <Col className="footer-post">
                  {data.ytlinkstatus ? (
                    <ReactPlayer
                      url={data.ytlink}
                      height={"100%"}
                      width={"40%"}
                    />
                  ) : (
                    <Col className="footercontainer1-container2positioncontainer">
                      <Col lg={4}>
                        <img src={data.image} className="footer-postimage" />
                      </Col>
                      <Col>
                        <p className="footer-indication">{data.topic}</p>
                        <p className="footer-indication">{data.goal}</p>
                      </Col>
                    </Col>
                  )}
                </Col>
              );
            })}
          </div>
        </Col>
        <Col xs={6} className="footercotainer1-container3">
          <h3 className="footerheaders">
            <b>Popular post's</b>
          </h3>
          <div className="footercontainer1-container2postcontainer">
            {props.popularPosts.map((data) => {
              return (
                <Col className="footer-post">
                  {data.ytlinkstatus ? (
                    <ReactPlayer
                      url={data.ytlink}
                      height={"100%"}
                      width={"40%"}
                    />
                  ) : (
                    <Col className="footercontainer1-container2positioncontainer">
                      <Col lg={4}>
                        <img src={data.image} className="footer-postimage" />
                      </Col>
                      <Col>
                        <p className="footer-indication">{data.topic}</p>
                        <p className="footer-indication">{data.goal}</p>
                      </Col>
                    </Col>
                  )}
                </Col>
              );
            })}
          </div>
        </Col>
      </Row>

      <div id="footer-hr"></div>

      <Row id="footer-container2">

        <Col xs={12} lg={2} id="footermaccreditcard-indication">
          <Col>
            <img
              src="./images/mac-creditcard-image-cropped.png"
              alt="Mac-Cropped-Mac-Creditcard-Image"
              id="footermaccreditcard-image"
            />
          </Col>
          <Col>
            <p id="footermaccreditcard-mpcheader">
              <b>MPC</b>
            </p>
            <p id='footermaccreditcard-masterprotectionconsituitionheader'>
              <b>Master Protection Consitution</b>
            </p>
          </Col>
        </Col>

        <Col xs={12} lg={7} id="footer-aboutcontainer">
          <p className="footer-aboutindications">
            <b>ABOUT US</b>
          </p>
          
          <p className="footer-aboutindicationpointer">
            Mac is a an E-commerce platform, Payment gateway, Cryptononatize
            wallet, SaaS provider and Investment firm. Mac also share it's
            revenue on advertisement's e.g website monitization, video's and
            sponsorship. Mac is longing to provide quality service trough our
            service's i.e E-wallets and CRUD on databases specially a solution
            finder to keep processes, tasks more effecient and convenient.
          </p>
        </Col>

        <Col id="footer-socialiconscontainer">
          {[
            <Facebook className="footer-icons" />,
            <Twitter className="footer-icons" />,
            <Youtube className="footer-icons" />,
            <Instagram className="footer-icons" />,
          ].map((data, idx) => {
            return <div className="footer-socialicons">{data}</div>;
          })}
        </Col>

      </Row>

      <div id="footer-container3">
        <Col id="footer-container3positioningcontainer">
          <p className="footer-containerdesignedbyheaders">
            <b>Design by- MM solutions</b> |
          </p>
          <p className="footer-containerdesignedbyheaders">
            <b>
              Supervised by- Mac
            </b>
          </p>
        </Col>
        <Col>
          2
        </Col>
      </div>

    </Col>
  );
}
