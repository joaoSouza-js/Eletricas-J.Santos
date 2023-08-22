import { styled } from "@stitches/react";

export const CategoryCardContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    width: '16.43rem',
   
    flexDirection: 'column',
    gap: '1.25rem',

    '& > span': {
        fontWeight: 'bold',
        fontSize: '1.375rem',
        color: '$yellow400',
    },


    '& > div': {
        height: '16.125rem',
        width: '16.4375rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '4.38rem',
        backgroundColor: '$yellow400',

        '& img': {
            width: '12.125rem',
            height: '12.125rem',
        }
    }
})