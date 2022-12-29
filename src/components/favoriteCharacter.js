import { Center, Grid, Stack, Text } from "@mantine/core";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { favoritesState } from "../stores/favourites";
import CharacterCard from "./characterCard";
import CharacterModal from "./characterModal";
import { ImFileEmpty } from "react-icons/im"

const FavoriteCharacters = () => {

    const characters = useRecoilValue(favoritesState)

    const [selectedCharacter, setSelectedCharacter] = useState(null)

    return <>

        <div
            className="character_box"
        >

            {
                characters.length > 0 &&
                <Grid>
                    {
                        characters.map((character) => (
                            <Grid.Col xs={6} sm={3} key={character.url} >
                                <CharacterCard
                                    character={character}
                                    onClick={() => setSelectedCharacter(character)}
                                />
                            </Grid.Col>
                        ))
                    }
                </Grid>
            }

            {
                characters.length < 1 &&
                <Center style={{ height: "400px" }}>
                    <Stack align="center">
                        <ImFileEmpty size="70px" />
                        <Text>You currently have no items added to favourites</Text>
                    </Stack>
                </Center>
            }

            <AnimatePresence initial={false}>
                <CharacterModal
                    opened={selectedCharacter}
                    close={() => setSelectedCharacter(null)}
                />
            </AnimatePresence>

        </div>

    </>

}

export default FavoriteCharacters