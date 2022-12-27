import { Text, useMantineColorScheme, useMantineTheme } from "@mantine/core";

const CharacterCard = () => {

    const theme = useMantineTheme();

    const { colorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    return <>
    
        <div 
            className="character_card_contain"
            style={{
                background: dark ? theme.colors.dark[7] : theme.colors.gray[0],
                borderColor: dark ? theme.colors.dark[4] : theme.colors.gray[3]
            }}
        >
            <div className="character_image">
                <img src="https://i.pinimg.com/564x/8e/4a/ca/8e4acaebc29c36e9fe7fd4b2735179f5.jpg" alt="" />
            </div>
            <div 
                className="character_name"
                style={{
                    background: theme.colors.indigo
                }}
            >
                <Text weight={700} color="white">Luke Skywalker</Text>
            </div>
        </div> 

    </>

}

export default CharacterCard