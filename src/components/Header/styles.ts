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
        paddingLeft: '0px',
        padding: '.8rem 1rem',
        gap: '0.5rem',
        borderRadius: 0,
    },

    '& > a:nth-of-type(1)': {
        fontWeight: 'bold',
        borderBottom: '3px solid $white',
        borderRadius: '3px'
        
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