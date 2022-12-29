import { Button, Center, Grid, Group, Stack, Text } from "@mantine/core";
import axios from "axios";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { MdSignalWifiStatusbarConnectedNoInternet1 } from "react-icons/md";
import CardSkeleton from "./cardSkeleton";
import CharacterCard from "./characterCard";
import CharacterModal from "./characterModal";

const AllCharacter = () => {

    const maleImages = [
        "https://i.pinimg.com/564x/8e/4a/ca/8e4acaebc29c36e9fe7fd4b2735179f5.jpg",
        "https://i.pinimg.com/474x/df/67/f3/df67f33b922cbbb63fae756038ec6ade.jpg",
        "https://i.pinimg.com/474x/42/ed/3f/42ed3f13e1473abe0599d4cb2ffd4db5.jpg",
        "https://i.pinimg.com/474x/29/42/c7/2942c7f8536f3e46d4db7cadfcd8197d.jpg",
        "https://i.pinimg.com/474x/4c/59/6f/4c596ff818e29edea16bb21b6c5ab482.jpg",
        "https://i.pinimg.com/474x/35/c5/dc/35c5dcbfea030b75054f2f6aaefc67d5.jpg",
        "https://i.pinimg.com/474x/e1/bf/e2/e1bfe286f1e1e0ddd7ba3d20a2c3422d.jpg"
    ]

    const femaleImages = [
        "https://i.pinimg.com/474x/bb/b6/72/bbb6723fa85bc7454617b4ff345b1af1.jpg",
        "https://i.pinimg.com/474x/06/84/02/068402d5702481e54e7a7f06d9ff501d.jpg",
        "https://i.pinimg.com/474x/76/cc/ee/76ccee9e3eb0138e72bce0f479f6cb9e.jpg",
        "https://i.pinimg.com/474x/b1/12/17/b112175475ef5696a29466d1df6e2f9e.jpg",
        "https://i.pinimg.com/474x/49/20/b3/4920b3a6291f1d323b69e41a41701c2b.jpg"
    ]

    const getRandomImg = (gender) => {
        return gender === "male" ? maleImages[Math.floor(Math.random() * maleImages.length)] :
            femaleImages[Math.floor(Math.random() * femaleImages.length)]
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

                setCharacters(results.map(res => ({ ...res, image: getRandomImg(res.gender) })))

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
                <>
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

                    <Group mt="30px" position="center">
                        <Button
                            leftIcon={<AiOutlineArrowLeft />}
                            disabled={!pagination.previous}
                            onClick={() => getCharacter(pagination.previous)}
                        >
                            Previous
                        </Button>
                        <Button
                            rightIcon={<AiOutlineArrowRight />}
                            disabled={!pagination.next}
                            onClick={() => getCharacter(pagination.next)}
                        >
                            Next
                        </Button>
                    </Group>
                </>
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

            {
                status === "error" &&
                <Center style={{ height: "400px" }}>
                    <Stack align="center">
                        <MdSignalWifiStatusbarConnectedNoInternet1 size="70px" />
                        <Text>An error occured...Try again later</Text>
                        <Button onClick={getCharacter}>
                            Try again
                        </Button>
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

export default AllCharacter