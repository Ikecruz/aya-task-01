import { Text, useMantineColorScheme, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { motion } from "framer-motion";

const CharacterCard = ({ onClick, character }) => {

    const theme = useMantineTheme();

    const matches = useMediaQuery('(min-width: 768px)')

    const { colorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    const cardVariant = {
        hover: {
            scale: 1.1,
            rotate: 5
        },
        tap: { scale: 0.9 }
    }

    return <>

        <motion.div
            className="character_card_contain"
            style={{
                background: dark ? theme.colors.dark[7] : theme.colors.gray[0],
                borderColor: dark ? theme.colors.dark[4] : theme.colors.gray[3]
            }}
            whileHover={matches && 'hover'}
            whileTap="tap"
            variants={cardVariant}
            onClick={onClick}
            layoutId={character.url}
        >
            <div className="character_image">
                <img src="https://i.pinimg.com/564x/8e/4a/ca/8e4acaebc29c36e9fe7fd4b2735179f5.jpg" alt="" />
            </div>
            <div
                className="character_name"
                style={{
                    background: theme.colors.indigo[8]
                }}
            >
                <Text weight={700} color="white">{character.name}</Text>
            </div>
        </motion.div>

    </>

}

export default CharacterCard