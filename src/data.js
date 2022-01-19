export default function() {
    return {
        back:  require('@/assets/back.png'),
        returnedCards : [],
        setNewGame: false,

        cards: [
            {
                id: 1,
                name: 'As rouge',
                value: 1,
                path: require('@/assets/1H.png'),
            },
            {
                id: 2,
                name: 'As noir',
                value: 1,
                path: require('@/assets/1C.png'),


            },
            {
                id: 3,
                name: 'Deux rouge',
                value: 2,
                path:  require('@/assets/2H.png'),


            },
            {
                id: 4,
                name: 'Deux noir',
                value: 2,
                path: require('@/assets/2C.png'),


            },
            {
                id: 5,
                name: 'Trois rouge',
                value: 3,
                path:  require('@/assets/3H.png'),


            },
            {
                id: 6,
                name: 'Trois noir',
                value: 3,
                path:  require('@/assets/3C.png'),


            },
            {
                id: 7,
                name: 'Quatre rouge',
                value: 4,
                path:  require('@/assets/4H.png'),


            },
            {
                id: 8,
                name: 'Quatre noir',
                value: 4,
                path:  require('@/assets/4C.png'),

            },
            {
                id: 9,
                name: 'Cinq rouge',
                value: 5,
                path:  require('@/assets/5H.png'),

            },
            {
                id: 10,
                name: 'Cinq noir',
                value: 5,
                path:  require('@/assets/5C.png'),

            },
            {
                id: 11,
                name: 'Six rouge',
                value: 6,
                path:  require('@/assets/6H.png'),

            },
            {
                id: 12,
                name: 'Six noir',
                value: 6,
                path:  require('@/assets/6C.png'),

            },
            {
                id: 13,
                name: 'Sept rouge',
                value: 7,
                path:  require('@/assets/7H.png'),

            },
            {
                id: 14,
                name: 'Sept noir',
                value: 7,
                path:  require('@/assets/7C.png'),

            },
            {
                id: 15,
                name: 'Huit rouge',
                value: 8,
                path:  require('@/assets/8H.png'),

            },
            {
                id: 16,
                name: 'Huit noir',
                value: 8,
                path:  require('@/assets/8C.png'),

            },
            
       ]
     }
}