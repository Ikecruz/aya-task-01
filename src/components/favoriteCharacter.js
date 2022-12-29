import { Grid } from "@mantine/core";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { favoritesState } from "../stores/favourites";
import CharacterCard from "./characterCard";
import CharacterModal from "./characterModal";

const FavoriteCharacters = () => {

    const characters = useRecoilValue(favoritesState)

    const [selectedCharacter, setSelectedCharacter] = useState(null)

    return <>

        <div
            className="character_box"
        >

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