import { Progress } from 'antd'
import { storage } from 'firebase'
import React, { useState, useEffect } from 'react'

const useStoreage = () => {
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)
    useEffect(() => {
        const storeageRef = storage.ref(file.name)

        storeageRef.put(file).on(
            "state_changed",
            (snap) => {
                let percentage = (snap.butesTransFerred / snap.totalBytes) * 100
                setProgress(percentage)
            },
            (err) => {
                setError(err)
            },
            () => {
                const url = await storeageRef.getDownloadURL()
                setUrl(url)
            }
        )
    }, [file])
    return { progress, url, error }
}

export default useStoreage
