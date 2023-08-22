import { styled } from "../../styles/global";

export const HeaderContainer = styled('header',{
    display: 'grid',
    gridTemplateColumns: '45%  55%',
    height: '5rem',
    
    
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

    '& > a': {
        cursor:'pointer',
        
        '&:hover': {
            color:  '$blue400',
            
            transition: 'all 0.3s ease'
    
            
        }


    }
})