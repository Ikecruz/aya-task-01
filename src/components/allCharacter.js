import { Grid, useMantineColorScheme, useMantineTheme } from "@mantine/core";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import CharacterCard from "./characterCard";
import CharacterModal from "./characterModal";

const AllCharacter = () => {

    const theme = useMantineTheme();

    const { colorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    const [open, setOpen] = useState(false)

    return <>

        <div
            className="character_box"
        >

            <Grid>

                <Grid.Col xs={6} sm={3}>
                    <CharacterCard layoutId={1} onClick={() => setOpen(true)} />
                </Grid.Col>

                <Grid.Col xs={6} sm={3}>
                    <CharacterCard layoutId={2} onClick={() => setOpen(true)} />
                </Grid.Col>

                <Grid.Col xs={6} sm={3}>
                    <CharacterCard />
                </Grid.Col>

                <Grid.Col xs={6} sm={3}>
                    <CharacterCard />
                </Grid.Col>

                <Grid.Col xs={6} sm={3}>
                    <CharacterCard />
                </Grid.Col>

            </Grid>

            <AnimatePresence>
                <CharacterModal
                    opened={open}
                    close={() => setOpen(false)}
                    layoutId={1}
                />
            </AnimatePresence>

        </div>

    </>

}

export default AllCharacter