import React, { useState } from 'react'
import ProgressBar from './ProgressBar';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const types = ['image/jpg', 'image/png', 'image/jpeg']
    const changeHandler = (e) => {
        let selected = e.target.files[0];
        // console.log(selected);
        // selected && types.includes(selected.type) ? setFile(selected) : setFile(null);
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError(null);
        } else {
            setFile(null);
            setError('Seleted a jpeg/png file !');
        }
    };
    return (
        <>
            <form className="upload-form" action="">
                <button>+</button>
                <input type="file" onChange={changeHandler} />
            </form>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {/* {file && <div className="file">{file.name}</div>} */}
                {file && < ProgressBar file={file} setFile={setFile} />}
            </div>
        </>
    )
}

export default UploadForm
