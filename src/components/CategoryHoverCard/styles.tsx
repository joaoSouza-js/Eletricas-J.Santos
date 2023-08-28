import * as HoverCard from '@radix-ui/react-hover-card';
import { styled } from '../../styles/global';

export const HoverCardContent = styled(HoverCard.Content,{
    padding: '2.53rem 0px',
    borderRadius: 20,
    backgroundColor: '#fff',
    width: '22.5rem',
  
    maxHeight: '80vh',
    overflow: 'auto',

    boxShadow:' 0px 0px 4px 0px rgba(0, 0, 0, 0.5)'

})

export const HoverCardArrow = styled(HoverCard.Arrow,{
    color: '$white',
    width:20, height:14
})

export const HoverCardTrigger = styled(HoverCard.Trigger,{
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
            transform: 'rotate(-180deg)',
        }

    }

  
})

export const HoverCardItem = styled('button',{
    cursor: 'pointer',
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

