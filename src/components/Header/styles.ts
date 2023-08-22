import { styled } from "../../styles/global";

export const HeaderContainer = styled('header',{
    display: 'grid',
    gridTemplateColumns: '45%  55%',
    height: '5rem',

    '@media (max-width: 720px)': {
        display: 'flex',
        flexDirection: 'column',
    },
    
    
    '& > div': {
        display: 'flex',

        '& > img:nth-of-type(1)': {
            height: '5rem',

        },

        '& > div' : {
            flexGrow: 1,
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center',
        

        }
    },



})

export const HeaderNavigator = styled('nav', {
    display: 'flex',
    flexWrap: 'wrap',
    flexGrow: 1,
    alignItems: 'center',
    paddingLeft: '158px',
    background:  '$yellow400',
    borderTopLeftRadius: '150px',
    borderBottomLeftRadius: '150px',
    columnGap: '1.875rem',

    '@media (max-width: 720px)': {
        justifyContent: 'center',
        padding: '0.5rem 1.5rem',
        gap: '1rem',
        paddingLeft: 0,
        borderRadius: 0,
    },

    '& > a': {
        cursor:'pointer',
        fontSize: '1.125rem',
        
        '&:hover': {
            color:  '$blue400',
            
            transition: 'all 0.3s ease'
    
            
        }


    }
})