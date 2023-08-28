import { styled } from "../../styles/global";

export const HeaderContainer = styled('header',{
    display: 'grid',
    gridTemplateColumns: '45%  55%',
    height: '5rem',
    

    '@media (max-width: 900px)': {
        display: 'flex',
        flexDirection: 'column'
        
    },
    
    
    '& > div': {
        display: 'flex',

        '& > img:nth-of-type(1)': {
            height: '5rem',
            width: '9rem',

        },

        '& > div' : {
            flexGrow: 1,
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center',
        

            '& >  img:nth-of-type(1)': {
                '@media (max-width: 900px)': {
                    marginLeft: '-9rem'
                }
            }
        },

    },



})

export const MobileHomeContainer = styled('header', {
    display: 'flex',
    padding: '2rem 3rem',
    justifyContent: 'space-between',

    '& > img': {
        width: '2.5rem',
        height: '2.5rem',
    }

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

    '@media (max-width: 900px)': {
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


    },

    '& > a:last-of-type': {
        color: '$white',
        textTransform: 'capitalize',
        '@media (max-width: 900px)': {
            color:  '$blue800',
            width: 'min-content',
            backgroundColor: 'transparent',
            
        

        }

    }
})