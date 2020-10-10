import { motion } from 'framer-motion'
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
        <React.Fragment>
            <motion.div initial={{ width: 0 }} animate={{ width: progress + "%" }} className="progress-bar" style={{ width: progress + "%" }}></motion.div>
            <div style={{ margin: "1rem" }}>
                {progress.toFixed(2)}
            </div>
        </React.Fragment>


    )
}

export default ProgressBar
