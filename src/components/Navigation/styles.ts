import * as Popover from '@radix-ui/react-popover';
import { styled } from '../../styles/global';

export const PopoverContent = styled(Popover.Content,{
    padding: '2.53rem',
    borderRadius: 20,
    display: 'flex',
    position: 'relative',
    right: '1.5rem',
    alignItems: 'flex-start',
    flexDirection: 'column',
    backgroundColor: '$blue400',
    gap: '1.5rem',

    '& > a': {
        fontSize: '1.125rem',
        color: '$white',
        transition: 'transform 0.4s ease',
        display: 'inline-block',
        borderBottom: '1px solid $blue400',
        
      '&:hover': {
            borderBottom: '1px solid $white',
      }  
    },

    '& > div': {
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        gap: '1.5rem',
       
    },

    
  
    maxHeight: '60vh',
    
    overflow: 'auto',

    boxShadow:' 0px 0px 4px 0px rgba(0, 0, 0, 0.5)'

})

export const PopoverArrow = styled(Popover.Arrow,{
    color: '$white',
    width:20, height:14
})

export const PopoverTrigger = styled(Popover.Trigger,{
    fontSize: '1.125rem',
    display: 'flex',
    fontWeight: 500,
    justifyContent: 'center',
    alignItems: 'center',
    color: '$blue800',
    cursor: 'pointer',

    '& > svg': {
        transition: 'transform 0.4s ease'
    },

    '&[data-state=open]' :{
        color: '$blue400',
        '& > svg': {
            transform: 'rotate(90deg)',
        }

    }

  
})

export const PopoverItem = styled('a',{
    display: 'flex',
    padding: '0px 1.87rem',
    marginTop: '1.25rem',
    alignItems: 'center',
    columnGap: '1.43rem',


})