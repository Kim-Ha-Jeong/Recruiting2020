import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Research1 extends Component {

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeTeam = this.onChangeTeam.bind(this);
        this.onChangeQ1 = this.onChangeQ1.bind(this);
        this.onChangeQ2 = this.onChangeQ2.bind(this);
        this.onChangeQ3 = this.onChangeQ3.bind(this);
        this.onChangeQ4_1 = this.onChangeQ4_1.bind(this);
        this.onChangeQ4_2 = this.onChangeQ4_2.bind(this);
        this.onChangeQ4_3 = this.onChangeQ4_3.bind(this);
        this.onChangeQ4_4 = this.onChangeQ4_4.bind(this);
        this.onChangeQ5 = this.onChangeQ5.bind(this);
        this.onChangeQ6_1 = this.onChangeQ6_1.bind(this);
        this.onChangeQ6_2 = this.onChangeQ6_2.bind(this);
        this.onChangeQ6_3 = this.onChangeQ6_3.bind(this);
        this.onChangeQ6_4 = this.onChangeQ6_4.bind(this);
        this.onChangeQ7 = this.onChangeQ7.bind(this);
        this.onChangeQ8_1 = this.onChangeQ8_1.bind(this);
        this.onChangeQ8_2 = this.onChangeQ8_2.bind(this);
        this.onChangeQ8_3 = this.onChangeQ8_3.bind(this);
        this.onChangeQ8_4 = this.onChangeQ8_4.bind(this);
        this.onChangeQ9 = this.onChangeQ9.bind(this);
        this.onChangeQ10 = this.onChangeQ10.bind(this);
        this.onChangeQ11 = this.onChangeQ11.bind(this);
        this.onChangeQ12 = this.onChangeQ12.bind(this);
        this.onChangeQ13 = this.onChangeQ13.bind(this);
        this.onChangeQ14 = this.onChangeQ14.bind(this);
        this.onChangeQ15 = this.onChangeQ15.bind(this);
        this.onChangeQ16_1 = this.onChangeQ16_1.bind(this);
        this.onChangeQ16_2 = this.onChangeQ16_2.bind(this);
        this.onChangeQ16_3 = this.onChangeQ16_3.bind(this);
        this.onChangeQ16_4 = this.onChangeQ16_4.bind(this);
        this.onChangeQ17 = this.onChangeQ17.bind(this);
        this.onChangeQ18 = this.onChangeQ18.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            team: '',
            q1: '',
            q2: '',
            q3: '',
            q4_1: '',
            q4_2: '',
            q4_3: '',
            q4_4: '',
            q5: '',
            q6_1: '',
            q6_2: '',
            q6_3: '',
            q6_4: '',
            q7: '',
            q8_1: '',
            q8_2: '',
            q8_3: '',
            q8_4: '',
            q9: '',
            q10: '',
            q11: '',
            q12: '',
            q13: '',
            q14: '',
            q15: '',
            q16_1: '',
            q16_2: '',
            q16_3: '',
            q16_4: '',
            q17: '',
            q18: ''
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeTeam(e) {
        this.setState({
            team: e.target.value
        });
    }

    onChangeQ1(e) {
        this.setState({
            q1: e.target.value
        });
    }
    onChangeQ2(e) {
        this.setState({
            q2: e.target.value
        });
    }
    onChangeQ3(e) {
        this.setState({
            q3: e.target.value
        });
    }
    onChangeQ4_1(e) {
        this.setState({
            q4_1: !this.state.q4_1
        });
    }
    onChangeQ4_2(e) {
        this.setState({
            q4_2: !this.state.q4_2
        });
    }
    onChangeQ4_3(e) {
        this.setState({
            q4_3: !this.state.q4_3
        });
    }
    onChangeQ4_4(e) {
        this.setState({
            q4_4: !this.state.q4_3
        });
    }
    onChangeQ5(e) {
        this.setState({
            q5: e.target.value
        });
    }
    onChangeQ6_1(e) {
        this.setState({
            q6_1: !this.state.q6_1
        });
    }
    onChangeQ6_2(e) {
        this.setState({
            q6_2: !this.state.q6_2
        });
    }
    onChangeQ6_3(e) {
        this.setState({
            q6_3: !this.state.q6_3
        });
    }
    onChangeQ6_4(e) {
        this.setState({
            q6_4: !this.state.q6_4
        });
    }
    onChangeQ7(e) {
        this.setState({
            q7: e.target.value
        });
    }
    onChangeQ8_1(e) {
        this.setState({
            q8_1: !this.state.q8_1
        });
    }
    onChangeQ8_2(e) {
        this.setState({
            q8_2: !this.state.q8_2
        });
    }
    onChangeQ8_3(e) {
        this.setState({
            q8_3: !this.state.q8_3
        });
    }
    onChangeQ8_4(e) {
        this.setState({
            q8_4: !this.state.q8_4
        });
    }
    onChangeQ9(e) {
        this.setState({
            q9: e.target.value
        });
    }
    onChangeQ10(e) {
        this.setState({
            q10: e.target.value
        });
    }
    onChangeQ11(e) {
        this.setState({
            q11: e.target.value
        });
    }
    onChangeQ12(e) {
        this.setState({
            q12: e.target.value
        });
    }
    onChangeQ13(e) {
        this.setState({
            q13: e.target.value
        });
    }
    onChangeQ14(e) {
        this.setState({
            q14: e.target.value
        });
    }
    onChangeQ15(e) {
        this.setState({
            q15: e.target.value
        });
    }
    onChangeQ16_1(e) {
        this.setState({
            q16_1: !this.state.q16_1
        });
    }
    onChangeQ16_2(e) {
        this.setState({
            q16_2: !this.state.q16_2
        });
    }
    onChangeQ16_3(e) {
        this.setState({
            q16_3: !this.state.q16_3
        });
    }
    onChangeQ16_4(e) {
        this.setState({
            q16_4: !this.state.q16_4
        });
    }
    onChangeQ17(e) {
        this.setState({
            q17: e.target.value
        });
    }
    onChangeQ18(e) {
        this.setState({
            q18: e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        const research1 = {
            name: this.state.name,
            team: this.state.team,
            q1: this.state.q1,
            q2: this.state.q2,
            q3: this.state.q3,
            q4_1: false,
            q4_2: false,
            q4_3: false,
            q4_4: false,
            q5: this.state.q5,
            q6_1: false,
            q6_2: false,
            q6_3: false,
            q6_4: false,
            q7: this.state.q7,
            q8_1: false,
            q8_2: false,
            q8_3: false,
            q8_4: false,
            q9: this.state.q9,
            q10: this.state.q10,
            q11: this.state.q11,
            q12: this.state.q12,
            q13: this.state.q13,
            q14: this.state.q14,
            q15: this.state.q15,
            q16_1: false,
            q16_2: false,
            q16_3: false,
            q16_4: false,
            q17: this.state.q17,
            q18: this.state.q18
        }

        axios.post('http://localhost:4000/research/add', research1)
            .then(res => console.log(res.data));

        this.setState({
            name: '',
            team: '',
            q1: '',
            q2: '',
            q3: '',
            q4_1: false,
            q4_2: false,
            q4_3: false,
            q4_4: false,
            q5: '',
            q6_1: false,
            q6_2: false,
            q6_3: false,
            q6_4: false,
            q7: '',
            q8_1: false,
            q8_2: false,
            q8_3: false,
            q8_4: false,
            q9: '',
            q10: '',
            q11: '',
            q12: '',
            q13: '',
            q14: '',
            q15: '',
            q16_1: false,
            q16_2: false,
            q16_3: false,
            q16_4: false,
            q17: '',
            q18: ''
        })
    }

    render() {
        return (
            <div>
                <h5 align="center">이화이언 수습 운영진 설문지</h5>
                <h7 align="center">안녕하세요, 이화이언입니다. 이 설문지는 이화이언의 전반적인 운영과 수습 운영진 선발에 도움을 얻기 위해 제작한 것입니다.<br></br>
                지원자 여러분께서는 지원하는 팀에 상관없이 모든 문항에 성실하고 솔직하게 답해주시기 바랍니다.</h7>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>지원자 이름</label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeName}
                                />
                    </div>
                
                    <div className="form-group">
                    <label>지원하는 팀</label><br/>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="teamlist" 
                                    id="teamMarketing" 
                                    value="Marketing"
                                    checked={this.state.team==='Marketing'} 
                                    onChange={this.onChangeTeam}
                                    />
                            <label className="form-check-label">마케팅</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="teamlist" 
                                    id="teamDesign" 
                                    value="Design" 
                                    checked={this.state.team==='Design'} 
                                    onChange={this.onChangeTeam}
                                    />
                            <label className="form-check-label">디자인</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="teamlist" 
                                    id="teamContents" 
                                    value="Contents" 
                                    checked={this.state.team==='Contents'} 
                                    onChange={this.onChangeTeam}
                                    />
                            <label className="form-check-label">컨텐츠</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="teamlist" 
                                    id="teamWeb" 
                                    value="Web" 
                                    checked={this.state.team==='Web'} 
                                    onChange={this.onChangeTeam}
                                    />
                            <label className="form-check-label">웹</label>
                        </div>
                    </div>
                    <div className="form-group">
                    <label>1. 이화이언에 처음 가입한 시기는 언제인가요?</label><br/>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="q1" 
                                    id="1" 
                                    value="1"
                                    checked={this.state.q1==='1'} 
                                    onChange={this.onChangeQ1}
                                    />
                            <label className="form-check-label">이화여대 입학 전(1학년 1학기 개강 전) </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="q1" 
                                    id="2" 
                                    value="2" 
                                    checked={this.state.q1==='2'} 
                                    onChange={this.onChangeQ1}
                                    />
                            <label className="form-check-label">1학년 </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="q1" 
                                    id="3" 
                                    value="3" 
                                    checked={this.state.q1==='3'} 
                                    onChange={this.onChangeQ1}
                                    />
                            <label className="form-check-label">2학년 </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="q1" 
                                    id="4" 
                                    value="4" 
                                    checked={this.state.q1==='4'} 
                                    onChange={this.onChangeQ1}
                                    />
                            <label className="form-check-label">3학년 </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="q1" 
                                    id="5" 
                                    value="5" 
                                    checked={this.state.q1==='5'} 
                                    onChange={this.onChangeQ1}
                                    />
                            <label className="form-check-label">4학년 </label>
                        </div>
                    </div>

                    <div className="form-group">
                    <label>2. 이화이언을 처음 알게 된 경로는 무엇인가요?</label><br/>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="q2" 
                                    id="1" 
                                    value="1"
                                    checked={this.state.q2==='1'} 
                                    onChange={this.onChangeQ2}
                                    />
                            <label className="form-check-label">교내 홍보물(포스터, 브로슈어, 현수막 등) </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="q2" 
                                    id="2" 
                                    value="2" 
                                    checked={this.state.q2==='2'} 
                                    onChange={this.onChangeQ2}
                                    />
                            <label className="form-check-label">이화이언 주최 행사</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="q2" 
                                    id="3" 
                                    value="3" 
                                    checked={this.state.q2==='3'} 
                                    onChange={this.onChangeQ2}
                                    />
                            <label className="form-check-label">주변인의 소개</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="q2" 
                                    id="4" 
                                    value="4" 
                                    checked={this.state.q2==='4'} 
                                    onChange={this.onChangeQ2}
                                    />
                            <label className="form-check-label">인터넷 검색</label>
                        </div>
                    </div>

                    <div className="form-group">
                    <label>3. 이화이언 사이트는 이용에 어떤 점이 가장 불편한가요?</label><br/>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="q3" 
                                    id="1" 
                                    value="1"
                                    checked={this.state.q3==='1'} 
                                    onChange={this.onChangeQ3}
                                    />
                            <label className="form-check-label">잦은 서버 오류</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="q3" 
                                    id="2" 
                                    value="2" 
                                    checked={this.state.q3==='2'} 
                                    onChange={this.onChangeQ3}
                                    />
                            <label className="form-check-label">느린 속도 </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="q3" 
                                    id="3" 
                                    value="3" 
                                    checked={this.state.q3==='3'} 
                                    onChange={this.onChangeQ3}
                                    />
                            <label className="form-check-label">취약한 보안(훌리건 문제) </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="q3" 
                                    id="4" 
                                    value="4" 
                                    checked={this.state.q3==='4'} 
                                    onChange={this.onChangeQ3}
                                    />
                            <label className="form-check-label">불편함이 없다</label>
                        </div>
                    </div>

                    <div className="form-check">
                    <label>4. 이화이언을 사용하지 않는 주변인이 있다면 그 이유는 무엇이라고 생각하나요? (중복 선택 가능)</label><br/>
                        <input className="form-check-input"
                                id="q4_1"
                                type="checkbox"
                                name="q4_1"
                                onChange={this.onChangeQ4_1}
                                checked={this.state.q4_1}
                                value={this.state.q4_1}
                                />
                        <label className="form-check-label" htmlFor="q4_1">
                        콘텐츠 및 이벤트에 대한 홍보 부족
                        </label><br/>
                        <input className="form-check-input"
                                id="q4_2"
                                type="checkbox"
                                name="q4_2"
                                onChange={this.onChangeQ4_2}
                                checked={this.state.q4_2}
                                value={this.state.q4_2}
                                />
                        <label className="form-check-label" htmlFor="q4_2">
                        서비스의 참신함과 재미 부족
                        </label><br/>
                        <input className="form-check-input"
                                id="q4_3"
                                type="checkbox"
                                name="q4_3"
                                onChange={this.onChangeQ4_3}
                                checked={this.state.q4_3}
                                value={this.state.q4_3}
                                />
                        <label className="form-check-label" htmlFor="q4_3">
                        불안정한 접속 환경 
                        </label><br/>
                        <input className="form-check-input"
                                id="q4_4"
                                type="checkbox"
                                name="q4_4"
                                onChange={this.onChangeQ4_4}
                                checked={this.state.q4_4}
                                value={this.state.q4_4}
                                />
                        <label className="form-check-label" htmlFor="q4_4">
                        어플 자체의 불편함(시간표 기능, UI/UX 등)
                        </label><br/>                  
                    </div>

                    <div className="form-group">
                    <label>5. 본인이 가장 자주 이용하는 게시판은 무엇인가요?</label><br/>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="q5" 
                                    id="1" 
                                    value="1"
                                    checked={this.state.q5==='1'} 
                                    onChange={this.onChangeQ5}
                                    />
                            <label className="form-check-label">컨텐츠(다인다색, 문화공감 등)</label><br/>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="q5" 
                                    id="2" 
                                    value="2" 
                                    checked={this.state.q5==='2'} 
                                    onChange={this.onChangeQ5}
                                    />
                            <label className="form-check-label">라이프(열린광장, 벼룩시장 등)</label><br/>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="q5" 
                                    id="3" 
                                    value="3" 
                                    checked={this.state.q5==='3'} 
                                    onChange={this.onChangeQ5}
                                    />
                            <label className="form-check-label">캠퍼스(강의평가, 이화계보 등)</label><br/>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="q5" 
                                    id="4" 
                                    value="4" 
                                    checked={this.state.q5==='4'} 
                                    onChange={this.onChangeQ5}
                                    />
                            <label className="form-check-label">비밀의 화원</label>
                        </div>
                    </div>
                    
                    <div className="form-check">
                    <label>6. 이화이언 이벤트(오프라인 행사, 온라인 이벤트, 부스 등 모두 포함)에 대한 정보를 주로 어디에서 접하나요? (중복 선택 가능)</label><br/>
                        <input className="form-check-input"
                                id="q6_1"
                                type="checkbox"
                                name="q6_1"
                                onChange={this.onChangeQ6_1}
                                checked={this.state.q6_1}
                                value={this.state.q6_1}
                                />
                        <label className="form-check-label" htmlFor="q6_1">
                        교내 홍보물(포스터, 브로슈어, 현수막 등)
                        </label><br/>
                        <input className="form-check-input"
                                id="q6_2"
                                type="checkbox"
                                name="q6_2"
                                onChange={this.onChangeQ6_2}
                                checked={this.state.q6_2}
                                value={this.state.q6_2}
                                />
                        <label className="form-check-label" htmlFor="q6_2">
                        SNS 홍보물
                        </label><br/>
                        <input className="form-check-input"
                                id="q6_3"
                                type="checkbox"
                                name="q6_3"
                                onChange={this.onChangeQ6_3}
                                checked={this.state.q6_3}
                                value={this.state.q6_3}
                                />
                        <label className="form-check-label" htmlFor="q6_3">
                        주변인의 소개
                        </label><br/>
                        <input className="form-check-input"
                                id="q6_4"
                                type="checkbox"
                                name="q6_4"
                                onChange={this.onChangeQ6_4}
                                checked={this.state.q6_4}
                                value={this.state.q6_4}
                                />
                        <label className="form-check-label" htmlFor="q6_4">
                        학교 온라인 커뮤니티
                        </label><br/>                  
                    </div>

                    <div className="form-group">
                    <label></label>7. 본인이 느끼는 이화이언 이벤트(오프라인 행사, 온라인 이벤트, 부스 등 모두 포함)의 이미지를 선택해주세요. <br/>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="q7" 
                                    id="1" 
                                    value="1"
                                    checked={this.state.q7==='1'} 
                                    onChange={this.onChangeQ7}
                                    />
                            <label className="form-check-label">상업적이다</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="q7" 
                                    id="2" 
                                    value="2" 
                                    checked={this.state.q7==='2'} 
                                    onChange={this.onChangeQ7}
                                    />
                            <label className="form-check-label">약간 상업적이다</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="q7" 
                                    id="3" 
                                    value="3" 
                                    checked={this.state.q7==='3'} 
                                    onChange={this.onChangeQ7}
                                    />
                            <label className="form-check-label">비상업적이다</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="q7" 
                                    id="4" 
                                    value="4" 
                                    checked={this.state.q7==='4'} 
                                    onChange={this.onChangeQ7}
                                    />
                            <label className="form-check-label">매우 비상업적이다</label>
                        </div>
                    </div>
                    
                    <div className="form-check">
                    <label>8. 이화이언 이벤트(오프라인 행사, 온라인 이벤트, 부스 등 모두 포함)에 참여하지 않은 이유는 무엇입니까? (중복 선택 가능)</label><br/>
                        <input className="form-check-input"
                                id="q8_1"
                                type="checkbox"
                                name="q8_1"
                                onChange={this.onChangeQ8_1}
                                checked={this.state.q8_1}
                                value={this.state.q8_1}
                                />
                        <label className="form-check-label" htmlFor="q8_1">
                        참여 방식이 복잡해서 
                        </label><br/>
                        <input className="form-check-input"
                                id="q8_2"
                                type="checkbox"
                                name="q8_2"
                                onChange={this.onChangeQ8_2}
                                checked={this.state.q8_2}
                                value={this.state.q8_2}
                                />
                        <label className="form-check-label" htmlFor="q8_2">
                        이벤트에 호감 또는 관심이 가지 않아서 
                        </label><br/>
                        <input className="form-check-input"
                                id="q8_3"
                                type="checkbox"
                                name="q8_3"
                                onChange={this.onChangeQ8_3}
                                checked={this.state.q8_3}
                                value={this.state.q8_3}
                                />
                        <label className="form-check-label" htmlFor="q8_3">
                        이벤트 시행 여부를 몰라서 
                        </label><br/>
                        <input className="form-check-input"
                                id="q8_4"
                                type="checkbox"
                                name="q8_4"
                                onChange={this.onChangeQ8_4}
                                checked={this.state.q8_4}
                                value={this.state.q8_4}
                                />
                        <label className="form-check-label" htmlFor="q8_4">
                        행사 시간이 일정과 맞지 않아서
                        </label><br/>                  
                    </div>

                    <div className="form-group">
                    <label>9. 이화이언은 지난해 11월, 배꽃정원 행사를 개최하였습니다. 해당 행사를 이화이언에서 주최했다는 사실을 알고 있었나요? </label><br/>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="q9" 
                                    id="1" 
                                    value="1"
                                    checked={this.state.q9==='1'} 
                                    onChange={this.onChangeQ9}
                                    />
                            <label className="form-check-label">예</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="q9" 
                                    id="2" 
                                    value="2" 
                                    checked={this.state.q9==='2'} 
                                    onChange={this.onChangeQ9}
                                    />
                            <label className="form-check-label">아니오</label>
                        </div>
                    </div>

                    <div className="form-group">
                    <label>10. 배꽃정원에 대한 주변 사람들의 인식이 어땠나요?</label><br/>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="q10" 
                                    id="1" 
                                    value="1"
                                    checked={this.state.q10==='1'} 
                                    onChange={this.onChangeQ10}
                                    />
                            <label className="form-check-label">대부분이 알고 있었다.</label><br/>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="q10" 
                                    id="2" 
                                    value="2" 
                                    checked={this.state.q10==='2'} 
                                    onChange={this.onChangeQ10}
                                    />
                            <label className="form-check-label">모르는 사람도 있었지만 알고 있는 사람이 더 많았다.</label><br/>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="q10" 
                                    id="3" 
                                    value="3" 
                                    checked={this.state.q10==='3'} 
                                    onChange={this.onChangeQ10}
                                    />
                            <label className="form-check-label">아는 사람도 있었지만 모르는 사람이 더 많았다.</label><br/>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="q10" 
                                    id="4" 
                                    value="4" 
                                    checked={this.state.q10==='4'} 
                                    onChange={this.onChangeQ10}
                                    />
                            <label className="form-check-label">대부분이 모르고 있었다.</label><br/>
                        </div>
                    </div>

                    <div className="form-group">
                    <label>11. 배꽃정원에 대해 알던 주변 사람들의 평판은 어땠나요?</label><br/>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="q11" 
                                    id="1" 
                                    value="1"
                                    checked={this.state.q11==='1'} 
                                    onChange={this.onChangeQ11}
                                    />
                            <label className="form-check-label">이벤트에 대한 호감이 높고 참여하고 싶어 했다.</label><br/>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="q11" 
                                    id="2" 
                                    value="2" 
                                    checked={this.state.q11==='2'} 
                                    onChange={this.onChangeQ11}
                                    />
                            <label className="form-check-label">이벤트에 대한 특별한 관심이나 호감이 없었다.</label><br/>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="q11" 
                                    id="3" 
                                    value="3" 
                                    checked={this.state.q11==='3'} 
                                    onChange={this.onChangeQ11}
                                    />
                            <label className="form-check-label">이벤트에 대한 호감이 낮고 참여하고 싶어 하지 않았다.</label><br/>
                        </div>
                    </div>

                    <div className="form-group">
                    <label>12. 이화이언은 올해 5월, 오월드림 행사를 개최하였습니다. 해당 행사를 이화이언에서 주최했다는 사실을 알고 있었나요?</label><br/>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="q11" 
                                    id="1" 
                                    value="1"
                                    checked={this.state.q11==='1'} 
                                    onChange={this.onChange12}
                                    />
                            <label className="form-check-label">예</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="q11" 
                                    id="2" 
                                    value="2" 
                                    checked={this.state.q11==='2'} 
                                    onChange={this.onChange12}
                                    />
                            <label className="form-check-label">아니오</label>
                        </div>
                    </div>

                    <div className="form-group">
                    <label>13. 배꽃정원에 대한 주변 사람들의 인식이 어땠나요?</label><br/>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="q13" 
                                    id="1" 
                                    value="1"
                                    checked={this.state.q13==='1'} 
                                    onChange={this.onChange13}
                                    />
                            <label className="form-check-label">대부분이 알고 있었다.</label><br/>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="q13" 
                                    id="2" 
                                    value="2" 
                                    checked={this.state.q13==='2'} 
                                    onChange={this.onChange13}
                                    />
                            <label className="form-check-label">모르는 사람도 있었지만 알고 있는 사람이 더 많았다.</label><br/>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="q13" 
                                    id="3" 
                                    value="3" 
                                    checked={this.state.q13==='3'} 
                                    onChange={this.onChange13}
                                    />
                            <label className="form-check-label">아는 사람도 있었지만 모르는 사람이 더 많았다.</label><br/>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="q13" 
                                    id="4" 
                                    value="4" 
                                    checked={this.state.q13==='4'} 
                                    onChange={this.onChange13}
                                    />
                            <label className="form-check-label">대부분이 모르고 있었다.</label><br/>
                        </div>
                    </div>

                    <div className="form-group">
                    <label>14. 배꽃정원에 대해 알던 주변 사람들의 평판은 어땠나요?</label><br/>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="q14" 
                                    id="1" 
                                    value="1"
                                    checked={this.state.q14==='1'} 
                                    onChange={this.onChange14}
                                    />
                            <label className="form-check-label">이벤트에 대한 호감이 높고 참여하고 싶어 했다.</label><br/>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="q14" 
                                    id="2" 
                                    value="2" 
                                    checked={this.state.q14==='2'} 
                                    onChange={this.onChange14}
                                    />
                            <label className="form-check-label">이벤트에 대한 특별한 관심이나 호감이 없었다.</label><br/>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="q14" 
                                    id="3" 
                                    value="3" 
                                    checked={this.state.q14==='3'} 
                                    onChange={this.onChange14}
                                    />
                            <label className="form-check-label">이벤트에 대한 호감이 낮고 참여하고 싶어 하지 않았다.</label><br/>
                        </div>
                    </div>

                    <div className="form-group">
                    <label>15. 이화이언이나 이화이언의 행사, 이벤트, 컨텐츠가 언론에 노출되는 것에 대해 어떻게 생각하시나요?</label><br/>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="q15" 
                                    id="1" 
                                    value="1"
                                    checked={this.state.q15==='1'} 
                                    onChange={this.onChangeQ15}
                                    />
                            <label className="form-check-label">어떤 언론이든 노출되어도 괜찮다.</label><br/>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="q15" 
                                    id="2" 
                                    value="2" 
                                    checked={this.state.q15==='2'} 
                                    onChange={this.onChangeQ15}
                                    />
                            <label className="form-check-label">매체에 따라서 다르다.</label><br/>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="q15" 
                                    id="3" 
                                    value="3" 
                                    checked={this.state.q15==='3'} 
                                    onChange={this.onChangeQ15}
                                    />
                            <label className="form-check-label">어떤 언론에도 노출되어서는 안 된다.</label><br/>
                        </div>
                    </div>
                    
                    <div className="form-check">
                    <label>16. 이화이언이 노출되어도 괜찮다고 생각하는 언론지를 선택해주세요. (중복 선택 가능)</label><br/>
                        <input className="form-check-input"
                                id="q16_1"
                                type="checkbox"
                                name="q16_1"
                                onChange={this.onChangeQ16_1}
                                checked={this.state.q16_1}
                                value={this.state.q16_1}
                                />
                        <label className="form-check-label" htmlFor="q16_1">
                        이화여대 내부 언론 (학보, 교지 등)
                        </label><br/>
                        <input className="form-check-input"
                                id="q16_2"
                                type="checkbox"
                                name="q16_2"
                                onChange={this.onChangeQ16_2}
                                checked={this.state.q16_2}
                                value={this.state.q16_2}
                                />
                        <label className="form-check-label" htmlFor="q16_2">
                        대학생을 대상으로 하는 언론 (대학내일 등) 
                        </label><br/>
                        <input className="form-check-input"
                                id="q16_3"
                                type="checkbox"
                                name="q16_3"
                                onChange={this.onChangeQ16_3}
                                checked={this.state.q16_3}
                                value={this.state.q16_3}
                                />
                        <label className="form-check-label" htmlFor="q16_3">
                        일반인을 대상으로 하는 잡지 
                        </label><br/>
                        <input className="form-check-input"
                                id="q16_4"
                                type="checkbox"
                                name="q16_4"
                                onChange={this.onChangeQ16_4}
                                checked={this.state.q16_4}
                                value={this.state.q16_4}
                                />
                        <label className="form-check-label" htmlFor="q16_4">
                        온라인 기사 
                        </label><br/>                  
                    </div>

                    <div className="form-group">
                    <label>17. 컨텐츠 카테고리 중 가장 업데이트가 기다려지는 코너는 무엇인가요?</label><br/>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="q17" 
                                    id="1" 
                                    value="1"
                                    checked={this.state.q17==='1'} 
                                    onChange={this.onChangeQ17}
                                    />
                            <label className="form-check-label">다인다색 </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="q17" 
                                    id="2" 
                                    value="2" 
                                    checked={this.state.q17==='2'} 
                                    onChange={this.onChangeQ17}
                                    />
                            <label className="form-check-label">문화공감</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="q17" 
                                    id="3" 
                                    value="3" 
                                    checked={this.state.q17==='3'} 
                                    onChange={this.onChangeQ17}
                                    />
                            <label className="form-check-label">화연수첩</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="q17" 
                                    id="4" 
                                    value="4" 
                                    checked={this.state.q17==='4'} 
                                    onChange={this.onChangeQ17}
                                    />
                            <label className="form-check-label">기고만장</label>
                        </div>
                    </div>

                    <div className="form-group">
                    <label>18. 하루 동안 본인의 연락 확인 가능 빈도를 체크해주세요.</label><br/>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="q18" 
                                    id="1" 
                                    value="1"
                                    checked={this.state.q18==='1'} 
                                    onChange={this.onChangeQ18}
                                    />
                            <label className="form-check-label">세 시간 이내 확인 가능</label><br/>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="q18" 
                                    id="2" 
                                    value="2" 
                                    checked={this.state.q18==='2'} 
                                    onChange={this.onChangeQ18}
                                    />
                            <label className="form-check-label">한 시간 이내 확인 가능</label><br/>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="q18" 
                                    id="3" 
                                    value="3" 
                                    checked={this.state.q18==='3'} 
                                    onChange={this.onChangeQ18}
                                    />
                            <label className="form-check-label">거의 상시 가능</label><br/>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="q18" 
                                    id="4" 
                                    value="4" 
                                    checked={this.state.q18==='4'} 
                                    onChange={this.onChangeQ18}
                                    />
                            <label className="form-check-label">잘 확인하지 않음</label><br/>
                        </div>
                    </div>
                    <br />

                    <div className="form-group">
                    <input type="submit" value="제출하기" className="btn btn-primary" />
                    </div>
                </form>
                <Link to="/research2">
                    <button type="button" className="btn btn-primary">
                         다음 설문
                    </button>
                </Link>
            </div>
        )
    }
}