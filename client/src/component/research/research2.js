import React, { Component } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

export default class Research2 extends Component {

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeTeam = this.onChangeTeam.bind(this);
        this.onChangeQ1 = this.onChangeQ1.bind(this);
        this.onChangeQ2 = this.onChangeQ2.bind(this);
        this.onChangeQ3 = this.onChangeQ3.bind(this);
        this.onChangeQ4 = this.onChangeQ4.bind(this);
        this.onChangeQ5 = this.onChangeQ5.bind(this);
        this.onChangeQ6 = this.onChangeQ6.bind(this);
        this.onChangeQ7 = this.onChangeQ7.bind(this);
        this.onChangeQ8 = this.onChangeQ8.bind(this);
        this.onChangeQ9 = this.onChangeQ9.bind(this);
        this.onChangeQ10 = this.onChangeQ10.bind(this);
        this.onChangeQ11 = this.onChangeQ11.bind(this);
        this.onChangeQ12 = this.onChangeQ12.bind(this);
        this.onChangeQ13 = this.onChangeQ13.bind(this);
        this.onChangeQ14 = this.onChangeQ14.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            team: '',
            q1: '',
            q2: '',
            q3: '',
            q4: '',
            q5: '',
            q6: '',
            q7: '',
            q8: '',
            q9: '',
            q10: '',
            q11: '',
            q12: '',
            q13: '',
            q14: ''
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
    onChangeQ4(e) {
        this.setState({
            q4: e.target.value
        });
    }
    onChangeQ5(e) {
        this.setState({
            q5: e.target.value
        });
    }
    onChangeQ6(e) {
        this.setState({
            q6: e.target.value
        });
    }
    onChangeQ7(e) {
        this.setState({
            q7: e.target.value
        });
    }
    onChangeQ8(e) {
        this.setState({
            q8: e.target.value
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

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        const research2 = {
            name: this.state.name,
            team: this.state.team,
            q1: this.state.q1,
            q2: this.state.q2,
            q3: this.state.q3,
            q4: this.state.q4,
            q5: this.state.q5,
            q6: this.state.q6,
            q7: this.state.q7,
            q8: this.state.q8,
            q9: this.state.q9,
            q10: this.state.q10,
            q11: this.state.q11,
            q12: this.state.q12,
            q13: this.state.q13,
            q14: this.state.q14
        }

        axios.post('http://localhost:4000/research2/add', research2)
            .then(res => console.log(res.data));

        this.setState({
            name: '',
            team: '',
            q1: '',
            q2: '',
            q3: '',
            q4: '',
            q5: '',
            q6: '',
            q7: '',
            q8: '',
            q9: '',
            q10: '',
            q11: '',
            q12: '',
            q13: '',
            q14: ''
        })
    }

    render() {
        return (
            <div>
                <h5 align="center">이화이언 사전 설문조사</h5>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>이름</label>
                        <input type="text"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <label>1. 이화이언 홍보물을 접한 위치는 어디인가요?
<br />ex 포스코관 계단 포스터, 새터 브로슈어, 학문관 앞 현수막
</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.q1}
                            onChange={this.onChangeQ1}
                        />
                    </div>
                    <div className="form-group">
                        <label>2. ‘이화이언’하면 떠오르는 이미지는 무엇인지, 그 이유와 함께 작성해주세요.</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.q2}
                            onChange={this.onChangeQ2}
                        />
                    </div>
                    <div className="form-group">
                        <label>3. 타 커뮤니티와 비교할 때, 이화이언 사이트의 장점과 단점은 무엇인지 자유롭게 적어주세요.</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.q3}
                            onChange={this.onChangeQ3}
                        />
                    </div>
                    <div className="form-group">
                        <label>4. 이화이언은 인증제로 운영되며, 인증 여부에 따라 게시판 접근 권한이 결정됩니다. 이러한 시스템에 대해 어떻게 생각하는지 적어주세요.</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.q4}
                            onChange={this.onChangeQ4}
                        />
                    </div>
                    <div className="form-group">
                        <label>5. 이화이언의 홍보 채널(인스타그램, 페이스북, 네이버 블로그) 중 하나를 택하여 활용도를 평가하고 그 이유를 자유롭게 작성해주세요.</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.q5}
                            onChange={this.onChangeQ5}
                        />
                    </div>
                    <div className="form-group">
                        <label>6. 온·오프라인 통틀어 이화이언 이벤트(오프라인 행사, 온라인 이벤트, 부스 등 모두 포함)에 대해 알고 계신 대로 적어주세요. 이벤트 명을 모르시는 경우, 해당 이벤트에 관해 간략히 설명해주셔도 됩니다. (추가 작성 가능)</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.q6}
                            onChange={this.onChangeQ6}
                        />
                    </div>
                    <div className="form-group">
                        <label>7. 이화이언에서 진행하면 좋을법한 이벤트(오프라인 행사, 온라인 이벤트, 부스 등 모두 포함) 아이디어를 작성해주세요.
                            <br/>ex ‘입학식 이벤트’: 입학식 때 포토카드를 배부하고 인증샷을 해쉬태그와 함께 SNS에 업로드하면 이화이언 굿즈 선물 </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.q7}
                            onChange={this.onChangeQ7}
                        />
                    </div>
                    <div className="form-group">
                        <label>8. 해당 이벤트(오프라인 행사, 온라인 이벤트, 부스 등 모두 포함)에 참여해서 좋았던 점과 개선해야할 점을 적어주세요. (여러개 작성 가능)
                                <br/>ex 수습 모집 부스 - 장점: 이화인 인증 이벤트도 함께 진행 / 단점: 줄이 길다</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.q8}
                            onChange={this.onChangeQ8}
                        />
                    </div>
                    <div className="form-group">
                        <label>9. 언론에 노출되어서는 안 된다고 생각하는 이유는 무엇입니까?</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.q9}
                            onChange={this.onChangeQ9}
                        />
                    </div>
                    <div className="form-group">
                        <label>10. 컨텐츠 카테고리에서 가장 흥미롭게 읽은 기사 내용을 그 이유와 함께 작성해주세요.</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.q10}
                            onChange={this.onChangeQ10}
                        />
                    </div>
                    <div className="form-group">
                        <label>11. 이화이언 컨텐츠 카테고리의 장점이 무엇이라고 생각하나요?
                            <br />ex 흥미로운 인터뷰, 도서 이벤트</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.q11}
                            onChange={this.onChangeQ11}
                        />
                    </div>
                    <div className="form-group">
                        <label>12. 이화이언 컨텐츠의 다인다색 게시판에서 인터뷰하면 좋을 인물을 추천해주세요. 이유도 함께 적어주세요.</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.q12}
                            onChange={this.onChangeQ12}
                        />
                    </div>
                    <div className="form-group">
                        <label>13. 이화이언 컨텐츠 카테고리에 추가적으로 생기면 좋을 기능이나 보고 싶은 컨텐츠 아이디어를 적어주세요.</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.q13}
                            onChange={this.onChangeQ13}
                        />
                    </div>
                    <div className="form-group">
                        <label>14.본인이 이화이언 리뉴얼을 하게 된다면 어떤 방향으로 진행하고 싶은지 구체적으로 기술해주세요.(기술, 기능, 카테고리, 웹/앱 디자인 등 다각도로 설명)</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.q14}
                            onChange={this.onChangeQ14}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="제출하기" className="btn btn-primary" />
                    </div>
                </form>
            </div >
        )
    }
}