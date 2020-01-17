import React, { Component } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

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
        /*
        console.log(this.validateSize(event));
        if (this.validateSize(event)) {
            console.log(file);
            // if return true allow to setState
        
            this.setState({
                selectedFile: file
            });

        }
        */
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
    /*
    validateSize = (event) => {
        let file = event.target.files[0];
        let size = 300000;
        let err = '';
        console.log(file.size);
        if (file.size > size) {
            err = file.type + 'is too large, please pick a smaller file\n';
            toast.error(err);
        }
        return true
    };
*/
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <ToastContainer />
                        <form name="file" method="post" encType="multipart/form-data">
                            <div className="form-group files">
                                <label>Upload Your File </label>
                                <input type="file" name="file" className="form-control" onChange={this.onChangeHandler} />
                            </div>
                            <div className="col-md-6 pull-right">
                                <button width="100%" type="button" className="btn btn-info" onClick={this.fileUploadHandler}>Upload File</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Submit;