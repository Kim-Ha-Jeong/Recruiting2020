import React, { Component } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Create from './result/Create';
import './Submit.css';
import {Row} from 'antd';

class Submit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null
        }
    };

    onChangeHandler = event => {
        var file = event.target.files[0];
        console.log(file);
       this.setState({
        selectedFile: file
        });
    }

    fileUploadHandler = () => {
        const data = new FormData()
        console.log(this.state.selectedFile);
        data.append('file', this.state.selectedFile)
        for(var key of data.keys()){
            console.log(key)
        }
        for(var value of data.values()){
            console.log(value);
        }
        axios.post("http://localhost:4000/upload", data)
            .then(res => { // then print response status
                toast.success('upload success')
            })
            .catch(err => { // then print response status
                toast.error('upload fail')
            })

    };

    render() {
        return (
                <div id="wrapper">
                    <Row>
                        <h2 id="title" align="center">지원서 제출</h2>
                    </Row>
                    <hr />
                <div className="row">
                    <div className="col-md-6">
                        <ToastContainer />
                        <form name="file" method="post" encType="multipart/form-data">
                            <div className="file-upload-wrapper" >
                            <input type="file" name="file" id="input-file-now" className="file-upload" onChange={this.onChangeHandler} />
                            </div>
                            <div className="col-md-6 pull-right">
                                <button width="100%" type="button" className="btn btn-info" onClick={this.fileUploadHandler}>Upload File</button>
                            </div>
                        </form>
                    </div>
                </div>
                <Create></Create>
            </div>
        );
    }
}
export default Submit;