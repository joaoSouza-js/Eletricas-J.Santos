import { styled } from "../../styles/global"
import PresentationBackground from '../../assets/presentationBackgorund.jpg'

export const HomeContainer = styled('div', {
    height: '100vh'
})

export const Presentation = styled('section', {
    display: 'flex',
    justifyContent: 'center',

    background: `url(${PresentationBackground})`,
    width: '100%',
    minHeight: 'calc(100% - 5rem)',
   
    paddingLeft:'1.5rem',
    paddingRight: '1.5rem',

    backgroundSize: 'cover', // Para ajustar a imagem ao tamanho do elemento mantendo a proporção
    backgroundPosition: 'center'
})

export const PresentationContent = styled('div', {
    maxWidth: 560,
    marginTop: '5rem',
    color: '$white',

        '& > h1': {
          
            'font-size': '4.375rem',
            'font-weight': 700,
            'lineHeight': 1.2,
            
        },

        '& > p': {
            'marginTop': '1.875rem' ,//30px
            'font-size': '1.125rem',
            'font-weight': 400,
            'letter-spacing': '0.02em',
            'lineHeight': 2,
            
        }
})

export const PresentationNavigation  = styled('div', {
    marginTop: '5.5rem',
    display: 'flex',
    flexDirection: 'column',
   
    rowGap: '2.1875rem',

    '& > a': {
        fontWeight: 700,
        background: 'Red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '22.5rem',
        height: '3.93rem',
        borderRadius: '0.94rem',
        borderWidth: 1,
        borderStyle: "solid",



    },

    '& > a:nth-of-type(1)':{
        color: '$blue800',
        backgroundColor: '$yellow400'
    },

    '& > a:nth-of-type(2)':{
        color: '$white',
        backgroundColor: 'transparent',
        borderColor: '$white'
    },

    '& > a:hover': {
        opacity: .8,
    }
})

export const PresentationFooter = styled('div', {
    marginTop: '2rem',
    display: 'flex',
    alignItems: 'center',
})