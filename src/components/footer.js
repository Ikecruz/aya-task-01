import { Center, Stack, Text } from "@mantine/core"

const Footer = () => {

    return <>
    
        <Center py="20px" px="10px">
            <Stack align="center"  spacing="4px">
                <Text align="center">
                    Made with ❤️,{" "}
                    <Text component="a" underline href="https://reactjs.org/">React</Text>,{" "} 
                    <Text component="a" underline href="https://recoiljs.org/">Recoil</Text>,{" "}
                    <Text component="a" underline href="https://mantine.dev/">Mantine</Text>,{" "}  
                    and {" "}
                    <Text component="a" underline href="https://www.framer.com/motion/">Framer Motion</Text>,{" "} 
                </Text>
                <Text align="center">&copy; {(new Date()).getFullYear()} | Ikecruz</Text>
            </Stack>
        </Center>

    </>

}

export default Footer