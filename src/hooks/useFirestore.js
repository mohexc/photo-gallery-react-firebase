import { useState, useEffect } from 'react'
import { db } from '../configs/firebases'

const useFirestore = (collection) => {
    const [docs, setDocs] = useState()
    useEffect(() => {
        const unsub = db.collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snapshots) => {
                setDocs(snapshots.docs.map(doc => {
                    return (
                        { ...doc.data(), id: doc.id }
                    )
                }))
            })
        return () => unsub()
    }, [collection])
    return { docs }
}

export default useFirestore
