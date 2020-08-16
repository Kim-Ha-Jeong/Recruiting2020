import React, { Component } from "react";
import { Carousel, Card, Col, Row, Button } from "antd";
import "./About.css";
import logo from "./favicon.png";
import marketing from "./marketing.png";
import contents from "./contents.png";
import design from "./design.png";
import web from "./web.png";
import popUp from "./popup.png";
import banner from "./banner.png";

const tabListNoTitle = [
  {
    key: "title1",
    tab: "이화이언 소개"
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
  title1: (
    <Row gutter={16} className="about-wrapper">
      <Card className="about-ewhaian">
        <p className="card-title" id="e-title">이화이언 소개</p>
        <hr id="card-line" />
        <Row id="img-wrapper">
          <Col id="logo-wrapper" lg={6} xl={6}>
            <img src={logo} alt="Ewhaian-logo" style={{width:"68%"}} />
          </Col>
          <Col lg={18} xl={18}>
            <div className="ewhaian-text" align="left">
              <span style={{ fontWeight: "bold" }}>이화여대 최대의 온라인 커뮤니티이자<br /> 이화의 재학생, 졸업생들이<br className="forMobile" /> 서로 교류하고 소통할 수 있는 공간<br className="forMobile" /> 이화이언을 소개합니다!</span>
              <div className="forMobile" id="about-btn-wrapper" style={{ marginTop: "5%" }}>
                <Button shape="round" id="probation-content" className="probation-button">
                  <a href="http://www.ewhaian.com/WebPage/Ewhaian/main.asp">이화이언 소개 자세히 보기</a>
                </Button>
              </div>
              <span className="forComputer">
                <br />
                <br />
                이화이언은 재학생들이 직접 운영하고 있는 '이화를 사랑하는 사람들을 위한' 비영리 집단입니다.
                <br />
                이화이언을 이용하는 벗들을 위한 다양한 프로그램 운영을 위해<br />활동하는 이화이언 운영진은 마케팅팀, 컨텐츠팀, 디자인팀, 웹팀으로 구성되어 있습니다.
                <br />
                <br />
                이화이언 온라인 사이트는 다양한 컨텐츠와 이벤트를 통해 이용자들에게 많은 혜택과 정보를 제공 합니다.
                <br />
                이화이언의 탄생 이래 이화인들의 가장 많은 사랑을 받은 '비밀의 화원'부터, <br />다양한 기사가 업데이트 되는 컨텐츠 게시판,<br />
                이화에서 생활하기 위해 꼭 필요한 정보들이 가득한 캠퍼스 게시판, <br />열린광장, 벼룩시장 등이 있는 라이프 게시판까지!<br />
                처음 이화의 문을 열고 들어온 새내기, 이화의 베테랑이 된 정든 벗, 졸업 벗 까지<br /> 이화이언 안에서 ‘이화 안의 더 큰 만남’을 이루고 있습니다.
                <br />
                <br />
                또한, 이화이언은 온라인 뿐만 아니라 오프라인에서도 많은 활동들을 진행하고 있습니다. 심심하고 무료한 학교 생활 속 이화이언 5월 드림과 11월 배꽃정원은 화연들에게 매번 색다른 즐거움을 선사하고 있습니다.
              </span>
            </div>
          </Col>
        </Row>
      </Card>
    </Row>),
  title2: (
    <div >
      <Row gutter={16}>
        <Col xs={24} sm={24} md={6} lg={6} xl={6} span={6} className="card-wrapper">
          <Card className="marketing" title="MARKETING" bordered={false}>
            <div style={{paddingBottom:"8px"}}>
              <img src={marketing} alt="marketing" className="team-img"/>
            </div>
            <p className="card-text">
              일상에 설렘, 재미, 즐거움을 주는<br /> 무엇인가를 좋아하는 벗<br /><br />
              이벤트, 광고, 홍보 등 온오프라인<br />컨텐츠 기획에 관심 있는 벗
              </p>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={6} lg={6} xl={6} span={6} className="card-wrapper">
          <Card className="contents" title="Contents" bordered={false}>
            <div style={{paddingBottom:"8px"}}>
              <img src={contents} alt="contents" className="team-img"/>
            </div>
            <p className="card-text">
              세상의 다양한 이야기를<br />기사로 담고 싶은 벗<br /><br />
              팀원들의 꼼꼼한 피드백을 거쳐<br />글쓰기 실력을 키우고 싶은 벗
              </p>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={6} lg={6} xl={6} span={6} className="card-wrapper">
          <Card className="design" title="DESIGN" bordered={false}>
            <div style={{paddingBottom:"8px"}}>
              <img src={design} alt="design" className="team-img"/>
            </div>
            <p className="card-text">
              통통튀는 아이디어로 내 생각을<br />자유롭게 표현해보고 싶은 벗<br /><br />
              이화이언의 모든 디자인을<br />직접 만들어보고 싶은 벗
              </p>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={6} lg={6} xl={6} span={6} className="card-wrapper">
          <Card className="web" title="WEB" bordered={false}>
            <div style={{paddingBottom:"8px"}}>
              <img src={web} alt="web" className="team-img"/>
            </div>
            <p className="card-text">
              행사용 사이트 기획부터 개발까지<br />다양한 경험을 해보고 싶은 벗<br /><br />
              웹 프로그래밍 언어를<br /> 함께 공부하고 싶은 벗
              </p>
          </Card>
        </Col>
      </Row>
    </div>
  ),
  title3: (
    <Row gutter={16} className="about-wrapper">
      <Card className="about-ewhaian">
        <p className="card-title" id="e-title">운영진 활동후기</p>
        <hr id="card-line" />
        <div className="ewhaian-text" style={{ marginLeft: "3%",marginBottom: "3%" }} align="left" id="OB">
          <span style={{ color: "#EC1468" }}>From. 34기 마스터 정은지</span><br /><br />
          수습운영진부터 마스터까지 <br className="forMobile" />  2년의 활동을 끝마치고  <br className="forMobile" />운영진 활동 후기를 <br className="forMobile"/>
          작성하려고 하니 <br className="forMobile" />감회가 새롭습니다.<br /> 
          <div className="forMobile" id="about-btn-wrapper" style={{ marginTop: "5%" }}>
            <Button shape="round" id="probation-content" className="probation-button">
              <a href="http://www.ewhaian.com/WebPage/Ewhaian/about_1.asp">OB 소감 자세히 보기</a>
            </Button>
          </div>
          <span className="forComputer">
            <br /><br />
            패기 넘치는 마음으로 지원하여 시작했던 운영진 활동은 어느덧 제 대학 생활의 큰 부분을 차지하게 되었습니다.<br />
            제가 디자인한 작업이 현실화되는 순간의 성취감과 기쁨은 이루 말할 수 없었고, <br />
            마케팅팀, 컨텐츠팀, 기술설계팀 운영진분들과 함께 행사를 기획하고 주최하는 일은 저의 시야를 더 넓힐 수 있도록 도와주었습니다. <br />
            늘 순탄하지만은 않았지만, 운영진 활동을 통해 많은 것을 배울 수 있었습니다. <br /><br />

            2년의 운영진 활동을 함께 했던 동기, 선후배 운영진분들에게 감사의 인사를 전합니다. <br />
            그리고 앞으로 더 많은 날을 벗들과 함께할 수 있는 이화이언이 되기를 바랍니다.<br />
          </span>
        </div>
      </Card>
    </Row>
  )
};

class About extends Component {
  state = {
    noTitleKey: "title2"
  };

  onTabChange = (key, type) => {
    this.setState({ [type]: key });
  };

  render() {
    return (
      <div>
        <Card className="forComputer" style={{paddingRight: "14%",paddingLeft: "14%"}}>
            <img src={banner} style={{width: "100%", borderRadius : "20px"}}/>
        </Card>
        <Card className="forMobile" style={{marginTop: "1.5%"}}>
            <img src={popUp} style={{width: "100%", borderRadius : "15px" }} />
        </Card>
        <Card
          style={{ width: "100%", paddingRight: "14%", paddingLeft: "14%", paddingTop: "0" }}
          tabList={tabListNoTitle}
          activeTabKey={this.state.noTitleKey}
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
