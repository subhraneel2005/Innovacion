"use client"
import React, { useState } from 'react'
import styles from "./Button.module.scss"
import {Inter} from "next/font/google"
import { HiArrowLongRight } from 'react-icons/hi2';

import { motion } from 'framer-motion';

const inter = Inter({subsets: ["latin"]});

function Button({name, color}) {
    const [isHover, setIsHover] = useState(false)
  return (
    <div className={inter.className}>
        <div className={styles.buttonContainer} 
            onMouseEnter={(event) => setIsHover(true)}
            onMouseLeave={(event) => setIsHover(false)}
        >
            <motion.div className={styles.circle}
                animate={{
                    scale: isHover ? 45: 1,
                    backgroundColor: isHover ? color : "#000000",
                }}
                transition={{
                    ease: "easeIn",
                    duration: 0.1
                }}
            >

            </motion.div>
            <motion.div className={styles.title}
                animate={{
                    x: isHover ? -4 : 4,
                    color: isHover ? "white" : "white"
                }}
            >
                <p>{name}</p>
            </motion.div>
            
            <motion.div className={styles.iconContainer}
                animate={{
                    x: isHover ? 0 : 32,
                }}
            >
                <HiArrowLongRight size={20} className={styles.icon}/>
            </motion.div>
        </div>
    </div>
  )
}

export default Button