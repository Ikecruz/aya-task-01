import React from 'react';
import { Text, Tabs, Badge, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import SchemeToggler from './components/schemeToggler';
import AllCharacter from './components/allCharacter';

export default function App() {

    const theme = useMantineTheme();

    const { colorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    return <>

        <div className='hero_container'>
            <Text className='hero_main_text' color="indigo">character display</Text>
            <Text color="dimmed">Ayagigs project by Onyeka Ikedinobi</Text>
        </div>

        <div className='tab_container'>
            <Tabs 
                defaultValue="gallery"
                classNames={{
                    tabLabel: 'tab_label',
                    panel: 'tab_panel'
                }}
                styles={{
                    panel: {
                        background: dark ? theme.colors.dark[6] : theme.colors.gray[1]
                    }
                }}
            >
                <Tabs.List position='center'>
                    <Tabs.Tab value="gallery">All</Tabs.Tab>
                    <Tabs.Tab 
                        value="messages"
                        rightSection={
                            <Badge
                              sx={{ width: 16, height: 16, pointerEvents: 'none' }}
                              variant="filled"
                              size="xs"
                              p={0}
                            >
                              6
                            </Badge>
                          }
                    >
                        Favourites
                    </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="gallery">
                    <AllCharacter />
                </Tabs.Panel>

                <Tabs.Panel value="messages">
                    Messages tab content
                </Tabs.Panel>
            </Tabs>
        </div>

        <SchemeToggler />

    </>
}
