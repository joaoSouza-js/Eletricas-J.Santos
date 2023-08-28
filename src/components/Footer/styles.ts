import { styled } from "../../styles/global"

export const FooterContainer = styled('div', {
    backgroundColor: '$blue800',

    padding: '0 3rem',

    'span': {
        fontSize: '1rem',
    }
})

export const HomeFooterContent = styled('div', {
    maxWidth: 1140,
    margin: '0 auto',
    paddingTop: '2.87rem',   
    color: '#fff'


})

export const HomeFooterHeader = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',

    '@media (max-width: 420px)': {
        flexDirection: 'column',
        justifyContent: 'normal',
        alignItems: 'center',
        gap: '2rem'
    },
    

    '& > div': {
        display: 'flex',
        flexDirection: 'column'


     },

     '& > div:nth-of-type(1)': {
        
        gap: '1.44rem',
        

        'img': {
            width: '9.0625rem',
            height:' 3.1875rem',
            
        },
        'span': {
            lineHeight: 2,
            maxWidth: '22.5rem',

        },

       '@media (max-width: 420px)': {
            display: 'flex',
           
            justifyContent: 'center',
            alignItems: 'center',
       }


     },

     '& > div:nth-of-type(2)': {
        gap: '1.87rem',
        alignItems: 'center',


        '& > div': {
            display: 'flex',
            gap: '1.63rem'
        }
     }
})

export  const Copyright = styled('div', {
    display: 'flex',
    
    justifyContent: 'space-between',
    paddingTop: '2.31rem',
    paddingBottom: '1.56rem',
    marginTop: '5.56rem',
    borderTop: '1px solid $yellow400',
    
    '& > div': {
        display: 'flex',
        gap: '0.31rem',
        alignItems: 'center',
    },

    '@media (max-width: 720px)': {
        
        '& > span': {
            display: 'inline-block',
     
            width: '100%',
            maxWidth: '65%'
        }
    },
    '@media (max-width: 420px)': {
        flexDirection: 'column',
        marginTop: '2.5rem',
        gap: '2rem',

        '& > span': {
            display: 'inline-block',
            maxWidth: 'none',
            width: '100%',
        
        },

        '& > div':{
            alignSelf: 'flex-end'
        }
    }
})