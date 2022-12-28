import { useMantineColorScheme, useMantineTheme } from "@mantine/core"
import { useScrollLock } from "@mantine/hooks"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const CharacterModal = ({ opened, close, layoutId }) => {

    const [, setScrollLocked] = useScrollLock()

    const theme = useMantineTheme()

    const { colorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    useEffect(() => {

        if (opened) {
            setScrollLocked(true)
            return
        }
        
        setScrollLocked(false)

    }, [opened])

    return opened ? <>

        <div className="character_modal">

            {/* OVERLAY */}
            <div 
                style={{
                    background: theme.colors.indigo[3]
                }}
                className="character_modal_overlay"
                onClick={() => close()}
            />

            {/* ACTUAL MODAL */}
            <motion.div 
                className="character_modal_card"
                style={{
                    background: dark ? theme.colors.dark[7] : theme.colors.gray[0],
                    borderColor: dark ? theme.colors.dark[4] : theme.colors.gray[3]
                }}
                layoutId={layoutId}
            >
                <div className="character_modal_image">
                    <img src="https://i.pinimg.com/564x/8e/4a/ca/8e4acaebc29c36e9fe7fd4b2735179f5.jpg" alt="" />
                </div>
            </motion.div>
        </div>

    </> : null

}

export default CharacterModal