import React, { Component } from "react";
import { Route } from "react-router-dom";
import Ewhaian from "./Ewhaian";
import Team from "./Team.js";
import OB from "./OB.js";
import { Carousel, Card, Col, Row } from "antd";
import "./About.css";

const tabListNoTitle = [
  {
    key: "title1",
    tab: "이화이언"
  },
  {
    key: "title2",
    tab: "팀 소개"
  },
  {
    key: "title3",
    tab: "OB 소감"
  }
];

const contentListNoTitle = {
  title1: <p>이화이언 소개</p>,
  title2: (
    <p>
      <div class="introduce-team">
        <Row gutter={16}>
          <Col span={6}>
            <Card title="CONTENTS" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={6}>
            <Card title="MARKETING" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={6}>
            <Card title="DESIGN" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={6}>
            <Card title="WEB" bordered={false}>
              Card content
            </Card>
          </Col>
        </Row>
      </div>
    </p>
  ),
  title3: <p>OB 소감</p>
};

class About extends Component {
  state = {
    noTitleKey: "title2"
  };

  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  };

  render() {
    return (
      <div>
        <Route path="/about/Ewhaian" component={Ewhaian} exact={true} />
        <Route path="/about/Team" component={Team} />
        <Route path="/about/OB" component={OB} />
        <Carousel autoplay>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
        </Carousel>
        <Card
          style={{ width: "100%" }}
          tabList={tabListNoTitle}
          activeTabKey={this.state.noTitleKey}
          tabBarExtraContent={<a href="#">More</a>}
          onTabChange={key => {
            this.onTabChange(key, "noTitleKey");
          }}
        >
          {contentListNoTitle[this.state.noTitleKey]}
        </Card>
      </div>
    );
  }
}

export default About;
