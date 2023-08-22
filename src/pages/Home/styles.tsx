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

export const EmphasisProducts = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '5.5rem',
    alignItems: 'center',
    textAlign: 'center',
    

    

    '& > img': {
        position: 'relative',
        left: '-9.44rem',
        width: '78.3rem',
        height: '28.5'
    },

    '& > div': {
        width: '100%',
        marginTop: '-9.5rem',
        '& >  strong': {
            color: '$white',
            
            'font-size': '2.1875rem',
            'font-weight': 700,
            'lineHeight': 1.2,
            
        }
    },



})

export const Products = styled('section', {
    display: 'grid',
    margin: '0 auto',
    marginTop: '1.56rem',
    maxWidth: '74.375rem',
    gridTemplateColumns: 'repeat(auto-fill, minmax(16.43rem, 1fr))',
    gap: '1.88rem' , 
})


export const Category = styled ('div', {
    marginTop: '3.75rem',

    '& > div:nth-of-type(1)': {
        height: '28.5rem',
        display: 'flex',
        gap: '7.19rem',
        borderTopRightRadius: '0.94rem',
        justifyContent: 'center',
        backgroundColor : '$blue800',

        "& > img": {
            width: '6.20038rem',
            height: '6.25rem',
        },
        
        '& > strong': {
            display: 'inline-block',
            marginTop: '5.19rem',
            color: '$white',
               
           'font-size': '2.1875rem',
           'font-weight': 700,
           'lineHeight': 1.2,
        }
        
    },


})
export const CategoryProducts = styled ('div', {
    position: 'relative',
    top: '-14.1rem',
    display: 'grid',
    gap: '1.88rem' ,
    maxWidth: '74.375rem',
    margin: '0 auto',
    gridTemplateColumns: 'repeat(auto-fill, minmax(16.43rem, 1fr))',
})