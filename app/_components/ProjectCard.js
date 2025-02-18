"use client"
import React from 'react'
import { motion } from "motion/react"

const ProjectCard = ({ readme }) => {
    return (
        <motion.div className='rounded-lg backdrop-blur-md bg-gray-200/10 cursor-pointer hover:backdrop-blur-xl' whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }} >
            <div className="relative w-full h-[180px] bg-cover bg-center bg-no-repeat overflow-hidden rounded-tl-lg rounded-tr-lg" style={{ backgroundImage: "url('https://i.pinimg.com/736x/2f/67/30/2f67301c15a11ab286b36ef972cfb211.jpg')" }}>
                <span className='gradient-bg absolute px-2 p-1 rounded-full right-3 top-3 text-sm'>new</span>
            </div>
            <div className='p-3 border-t-0 border-1 rounded-bl-lg rounded-br-lg border-gray-500'>
                <h1 className='mb-5'>{readme.title}</h1>
                <p className='text-gray-400'>This is a ecommerce website</p>
            </div>
        </motion.div>
    )
}

export default ProjectCard