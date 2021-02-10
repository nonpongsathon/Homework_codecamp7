import React from "react";
import { Col, Row } from "antd";
import Carousel from "react-elastic-carousel";
import "../css/carousel.css";
import Item from "./item";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 250, itemsToShow: 3 },
  { width: 550, itemsToShow: 3 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];

function Carousal() {
  return (
    <div style={{ width: "100%" }}>
      <Row justify="center">
        <Col span={15}>
          <div className="container">
            <Carousel breakPoints={breakPoints}>
              <Item>
                <div className="carousel-item">
                  <img src="https://picsum.photos/100" alt="randomImg"></img>
                  <p>
                    <b>Title</b>
                  </p>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </Item>
              <Item>
                <div className="carousel-item">
                  <img src="https://picsum.photos/101" alt="randomImg"></img>
                  <p>
                    <b>Title</b>
                  </p>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </Item>
              <Item>
                <div className="carousel-item">
                  <img src="https://picsum.photos/102" alt="randomImg"></img>
                  <p>
                    <b>Title</b>
                  </p>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </Item>
              <Item>
                <div className="carousel-item">
                  <img src="https://picsum.photos/103" alt="randomImg"></img>
                  <p>
                    <b>Title</b>
                  </p>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </Item>
              <Item>
                <div className="carousel-item">
                  <img src="https://picsum.photos/104" alt="randomImg"></img>
                  <p>
                    <b>Title</b>
                  </p>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </Item>
              <Item>
                <div className="carousel-item">
                  <img src="https://picsum.photos/105" alt="randomImg"></img>
                  <p>
                    <b>Title</b>
                  </p>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </Item>
              <Item>
                <div className="carousel-item">
                  <img src="https://picsum.photos/106" alt="randomImg"></img>
                  <p>
                    <b>Title</b>
                  </p>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </Item>
              <Item>
                <div className="carousel-item">
                  <img src="https://picsum.photos/107" alt="randomImg"></img>
                  <p>
                    <b>Title</b>
                  </p>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </Item>
            </Carousel>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Carousal;
