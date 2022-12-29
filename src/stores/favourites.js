import { atom, selector, useRecoilState } from "recoil";

const favoritesState = atom({
    key: 'Favourites',
    default: []
})

const favoritesCountState = selector({
    key: 'favoritesCountState',
    get: ({get}) => {
      const value = get(favoritesState);
      return value.length;
    },
});

const addItem = (item, setFavorites) => {
    setFavorites((oldFavorites) => [
        ...oldFavorites,
        item
    ])
}

const removeItem = (item, favorites, setFavorites) => {
    const newList = favorites.filter(f => f.url !== item.url)
    setFavorites(newList)
}

const containsItem = (item, favorites) => {
    const favourite = favorites.find(f => f.url === item.url)
    return favourite ? true : false
}

const toggleLike = (item, favorites, setFavorites) => {
    if (containsItem(item, favorites)) {
        removeItem(item, favorites, setFavorites)
    } else {
        addItem(item, setFavorites)
    }
}

export {
    favoritesState,
    favoritesCountState,
    addItem,
    removeItem,
    containsItem,
    toggleLike
}