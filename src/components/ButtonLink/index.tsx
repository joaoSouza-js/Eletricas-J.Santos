import { styled } from "../../styles/global";

export const ButtonLink = styled('a', {
    fontWeight: 700,
    display: 'flex',
    fontSize: '1rem',
    justifyContent: 'center',
    textTransform: 'uppercase',
    alignItems: 'center',
    width: '22.5rem',
    height: '3.93rem',
    borderRadius: '0.94rem',
    borderWidth: 1,
    borderStyle: "solid",

    '&:hover': {
        opacity: .8,
    },
    
    variants: {
        type: {
            primary: {
                color: '$blue800',
                backgroundColor: '$yellow400'
            },
            secondary: {
                color: '$white',
                backgroundColor: 'transparent',
                borderColor: '$white'
            },
            tertiary: {
                color: '#fff',
                backgroundColor: '$blue800'
            }
        }
    },

    defaultVariants: {
        type: 'primary'
    }
})