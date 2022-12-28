import { Grid, useMantineColorScheme, useMantineTheme } from "@mantine/core";
import axios from "axios";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import CardSkeleton from "./cardSkeleton";
import CharacterCard from "./characterCard";
import CharacterModal from "./characterModal";

const AllCharacter = () => {

    const theme = useMantineTheme();

    const { colorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    const [open, setOpen] = useState(false)

    const [status, setStatus] = useState(null) 

    const [characters, setCharacters] = useState(null)

    const [selectedCharacter, setSelectedCharacter] = useState(null)

    const [pagination, setPagination] = useState()

    const getCharacter = (url = "https://swapi.dev/api/people") => {

        setStatus('loading')

        axios.get(url)
        .then(res => {
            const { next, previous, results } = res.data
            setPagination({ next, previous })

            console.log(results)
            setCharacters(results)
            setStatus("success")
        })
        .catch(err => {
            setStatus('error')
        })

    }

    useEffect(() => {
        getCharacter()
    }, [])

    return <>

        <div
            className="character_box"
        >

            {
                status === "success" &&
                <Grid>
                    {
                        characters.map((character) => (
                            <Grid.Col xs={6} sm={3}>
                                <CharacterCard 
                                    character={character} 
                                    key={character.url} 
                                    onClick={() => setSelectedCharacter(character)} 
                                />
                            </Grid.Col>
                        ))
                    }

                </Grid>
            }

            {
                status === "loading" &&
                <Grid>
    
                    {
                        Array(8).fill(0).map((n, index) => (
                            <Grid.Col xs={6} key={index} sm={3}>
                                <CardSkeleton />
                            </Grid.Col>
                        ))
                    }
    
                </Grid>
            }

            <AnimatePresence>
                <CharacterModal
                    opened={selectedCharacter}
                    close={() => setSelectedCharacter(null)}
                    layoutId={selectedCharacter?.url}
                />
            </AnimatePresence>

        </div>

    </>

}

export default AllCharacter