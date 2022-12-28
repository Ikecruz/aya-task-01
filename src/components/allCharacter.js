import { Grid } from "@mantine/core";
import axios from "axios";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import CardSkeleton from "./cardSkeleton";
import CharacterCard from "./characterCard";
import CharacterModal from "./characterModal";

const AllCharacter = () => {

    const images = [
        "https://i.pinimg.com/564x/8e/4a/ca/8e4acaebc29c36e9fe7fd4b2735179f5.jpg",
        "https://i.pinimg.com/474x/df/67/f3/df67f33b922cbbb63fae756038ec6ade.jpg",
        "https://i.pinimg.com/474x/42/ed/3f/42ed3f13e1473abe0599d4cb2ffd4db5.jpg",
        "https://i.pinimg.com/474x/29/42/c7/2942c7f8536f3e46d4db7cadfcd8197d.jpg",
        "https://i.pinimg.com/474x/4c/59/6f/4c596ff818e29edea16bb21b6c5ab482.jpg",
        "https://i.pinimg.com/474x/35/c5/dc/35c5dcbfea030b75054f2f6aaefc67d5.jpg",
        "https://i.pinimg.com/474x/e1/bf/e2/e1bfe286f1e1e0ddd7ba3d20a2c3422d.jpg"
    ]

    const getRandomImg = () => {
        return images[Math.floor(Math.random() * images.length)]
    }

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

            setCharacters(results.map(res => ({...res, image: getRandomImg()})))
            
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