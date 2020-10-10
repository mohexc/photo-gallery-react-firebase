import { motion } from 'framer-motion'
import React from 'react'

const Modal = ({ selectedImg, setSelectedImg }) => {
    console.log(selectedImg)

    const handleClick = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setSelectedImg(null)

        }
    }

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="backdrop" onClick={handleClick}>
            <motion.img initial={{ y: '-100vh' }} animate={{ y: 0 }} src={selectedImg} alt="enlargd pic" />
        </motion.div>
    )
}

export default Modal
