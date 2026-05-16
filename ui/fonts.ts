import {Newsreader, Playfair_Display, Public_Sans} from 'next/font/google';

export const publicSans = Public_Sans({
    subsets: ['latin'],
    variable: '--font-public-sans'
})
export const PlayfairDisplay = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair-display'
})
export const newsreader = Newsreader({
    subsets: ['latin'],
    variable: '--font-newsreader'
})
