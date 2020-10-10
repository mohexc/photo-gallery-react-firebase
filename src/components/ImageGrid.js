import { motion } from 'framer-motion'
import React from 'react'
import useFirestore from '../hooks/useFirestore'

const ImageGrid = ({ setSelectedImg }) => {
    const { docs } = useFirestore('images')
    console.log(docs)
    return (
        <motion.div className="img-grid">
            {docs && docs.map(doc => {
                return (
                    <motion.div
                        layout
                        whileHover={{ opacity: 1 }}
                        className="img-wrap"
                        key={doc.id} onClick={() => setSelectedImg(doc.url)}>
                        <motion.img src={doc.url} alt="uploaded pic"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                        />
                    </motion.div>
                )
            })}
        </motion.div>
    )
}

export default ImageGrid
