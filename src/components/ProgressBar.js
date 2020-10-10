import { Col, Row } from 'antd'
import React, { useEffect } from 'react'
import useStorage from '../hooks/useStorage'

const ProgressBar = ({ file, setFile }) => {
    const { url, progress } = useStorage(file)
    console.log(progress)

    useEffect(() => {
        if (url) {
            setFile(null)
        }
        // eslint-disable-next-line
    }, [url])
    return (
        <Row justify="center" align="middle">
            <Col xs={23} lg={18}>
                <div className="progress-bar" style={{ width: progress + "%" }}></div>
                <div style={{ margin: "1rem" }}>
                    {progress.toFixed(2)}
                </div>
            </Col>
        </Row>
    )
}

export default ProgressBar
