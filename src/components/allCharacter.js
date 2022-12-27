import { Grid, useMantineColorScheme, useMantineTheme } from "@mantine/core";
import CharacterCard from "./characterCard";

const AllCharacter = () => {

    const theme = useMantineTheme();

    const { colorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    return <>
    
        <div 
            className="character_box"
        >

            <Grid>

                <Grid.Col sm={3}>
                    <CharacterCard />
                </Grid.Col>

            </Grid>

        </div>

    </>

}

export default AllCharacter