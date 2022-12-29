import React, { useState } from 'react';
import { Text, Tabs, Badge, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import SchemeToggler from './components/schemeToggler';
import AllCharacter from './components/allCharacter';
import { favoritesCountState } from './stores/favourites';
import { useRecoilValue } from 'recoil';
import FavoriteCharacters from './components/favoriteCharacter';

export default function App() {

    const theme = useMantineTheme();

    const { colorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    const favoriteCount = useRecoilValue(favoritesCountState)

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
                              {favoriteCount}
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
                    <FavoriteCharacters />
                </Tabs.Panel>
            </Tabs>
        </div>

        <SchemeToggler />

    </>
}
