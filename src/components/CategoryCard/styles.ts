import { styled } from "@stitches/react";

export const CategoryCardContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    width: '16.4375rem',
   
    flexDirection: 'column',
    gap: '1rem',

    '@media (max-width: 600px)': {
        width: '22.4375rem',
    },

    '@media (max-width: 500px)': {
        width: '90%',
    },

    

    
    
    '& > div:nth-of-type(1)': {
        minHeight: '4rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        '& > span': {
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: '1.375rem',
            color: '$yellow400',
        },
    },


    '& > div:nth-of-type(2)': {
        height: '16.125rem',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        
        justifyContent: 'center',
        borderRadius: '4.38rem',
        backgroundColor: '$yellow400',

        '@media (max-width: 600px)': {
            height: '20.4375rem',
        },

        '& img': {
            maxWidth: '100%'
        }
    }
})