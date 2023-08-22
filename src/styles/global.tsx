import {createStitches, } from '@stitches/react';

export const {styled,config,createTheme,css,globalCss,getCssText} = createStitches({
    theme: {
        colors: {
            white: '#fff',
            'blue400': '#1F2860',
            'blue800': '#202332',
            'yellow400': '#FBAF17',
            'gray300': '#E0E0E0',
            'gray800': '#333',
            'gray100': '#F7F7F7',

        },
        fonts: {
            sans: 'gothan , sans-serif'
        },
        media: {
            bp1: '(max-width: 640px)',
            bp2: '(min-width: 768px)',
            bp3: '(min-width: 1024px)',
          },
    }
})