import { styled } from "../../styles/global"

export const FooterContainer = styled('div', {
    backgroundColor: '$blue800',
    fontSize: '1.125rem',
    padding: '0 1.5rem',
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
    borderTop: '1px solid $yellow400'
})