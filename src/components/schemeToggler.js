import { ActionIcon, Affix, useMantineColorScheme } from "@mantine/core"
import { IoMdSunny } from "react-icons/io"
import { BsMoonStarsFill } from "react-icons/bs"

const SchemeToggler = () => {

    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    return <>

        <Affix position={{ bottom: 30, right: 30 }}>
            <ActionIcon
                variant="outline"
                color={dark ? 'yellow' : 'blue'}
                onClick={() => toggleColorScheme()}
                radius="lg"
                size="lg"
            >
                {dark ? <IoMdSunny size={18} /> : <BsMoonStarsFill size={18} />}
            </ActionIcon>
        </Affix>

    </>

}

export default SchemeToggler