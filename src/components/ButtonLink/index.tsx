import { styled } from "../../styles/global";

export const ButtonLink = styled('a', {
    fontWeight: 700,
    display: 'flex',
    fontSize: '1.125rem',
    justifyContent: 'center',
    textTransform: 'uppercase',
    alignItems: 'center',
    width: '22.5rem',
    height: '3.93rem',
    borderRadius: '0.94rem',
    borderStyle: "solid",

    '&:hover': {
        opacity: .95,
      
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
                borderColor: '$white',
                borderWidth: 1,
            },
            tertiary: {
                color: '#fff',
                backgroundColor: '$blue800'
            }
        },
        size: {
            md: {
                width: '22.5rem',
                height: '3.93rem',
            },
            sm: {
                width: '8.875rem',
                height: '2.625rem',
              
            }
        }
    },

    defaultVariants: {
        type: 'primary',
        size: 'md'
    }
})