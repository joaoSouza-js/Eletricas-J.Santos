import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { styled } from '../../styles/global';

export const DropdownMenuContent = styled(DropdownMenu.Content,{
    padding: '2.53rem 0px',
    borderRadius: 20,
    backgroundColor: '#fff',
    width: '70vw',
    zIndex: 3,
    position: 'relative',
    right: '1.5rem',
  
    maxHeight: '60vh',
    overflow: 'auto',

    boxShadow:' 0px 0px 4px 0px rgba(0, 0, 0, 0.5)'

})

export const DropdownMenuArrow = styled(DropdownMenu.Arrow,{
    color: '$white',
    width:20, height:14
})

export const DropdownMenuTrigger = styled(DropdownMenu.Trigger,{
    fontSize: '1.125rem',
    display: 'flex',
    fontWeight: 500,
    justifyContent: 'center',
    alignItems: 'center',
    color: '$white',
    cursor: 'pointer',

    borderBottom: '1px solid $blue400',
        
    '&:hover , &[data-state=open]': {
          borderBottom: '1px solid $white',
    }  
})

export const DropdownMenuItem = styled(DropdownMenu.Item,{
    display: 'flex',
    padding: '0px 1.87rem',
    marginTop: '1.25rem',
    alignItems: 'center',
    columnGap: '1.43rem',
    

    '& > div': {
        height: '4.25rem',
        width: '4.25rem',
        padding: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '0.9375rem',
        backgroundColor: '$yellow400',

        '& img': {
            width: '100%',
            height: '100%',
        }
    },

    '& > span':{
        fontSize: '1.125rem',
        color: '$blue800',
        fontWeight: 500,

        '@media (max-width: 720px)': {
            'font-size': '1rem',
            fontWeight: 700
        }
    }
})