import React, { Component } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Create from './result/Create';
import './Submit.css';

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

    downloadHandler = () => {
        axios({
            url: 'http://localhost:4000/download/ewhaian_application_37.docx',
            method: 'GET',
            responseType: 'blob', // important
          }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'ewhaian_application_37.docx');
            document.body.appendChild(link);
            link.click();
          });
    }
   
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                    <button className="btn btn-primary" onClick={this.downloadHandler}>지원서 다운로드</button>
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