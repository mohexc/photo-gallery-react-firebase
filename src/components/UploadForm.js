import React from 'react'

const UploadForm = () => {

    const chnageHandler = (e) => {
        let selected = e.target.files[0]
        console.log(selected)
    }
    return (
        <form>
            <input type="file" onChange={chnageHandler} />
        </form>
    )
}

export default UploadForm
