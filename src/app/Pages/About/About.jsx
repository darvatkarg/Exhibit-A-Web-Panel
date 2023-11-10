import React from "react";
import { Col, Row } from "react-bootstrap";
import about from "../../media/about.png";
const About = () => {
  return (
    <>
      <div className="bg-light-grey pt-25 mb-50">
        <div className="container bg-white box_shadow rounded">
          <div className="font_size_26 font_bold color_black border-bottom p-4 ">
            About Us
          </div>
          <div className="d-flex pt-50">
            <Col md="6">
              <Row>
                <div className="font_size_18 font_medium color_light_gray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Arcu dictum varius duis at consectetur lorem donec massa
                  sapien. Pellentesque eu tincidunt tortor aliquam nulla
                  facilisi cras. Elit scelerisque mauris pellentesque pulvinar
                  pellentesque habitant morbi tristique. Ut enim blandit
                  volutpat maecenas volutpat blandit. Venenatis tellus in metus
                  vulputate eu scelerisque felis imperdiet.{" "}
                </div>
              </Row>
              <Row className="pt-25">
                <div className="font_size_18 font_medium color_light_gray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Arcu dictum varius duis at consectetur lorem donec massa
                  sapien. Pellentesque eu tincidunt tortor aliquam nulla
                  facilisi cras. Elit scelerisque mauris pellentesque pulvinar
                  pellentesque habitant morbi tristique. Ut enim blandit
                  volutpat maecenas volutpat blandit. Venenatis tellus in metus
                  vulputate eu scelerisque felis imperdiet.{" "}
                </div>
              </Row>
            </Col>
            <Col md="6">
              <div>
                <div className="profile-img3 pb-30">
                  <img src={about} alt="" className="img-fluid" />
                </div>
              </div>
            </Col>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
