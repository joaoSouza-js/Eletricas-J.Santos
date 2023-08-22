import { styled } from "../../styles/global"
import PresentationBackground from '../../assets/presentationBackgorund.jpg'
import FooterBackground from  '../../assets/footerBackground.png'
import { Flame } from "lucide-react"

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
        zIndex: 2,

        '& > h2': {
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
        
        '& > h2': {
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
    
    display: 'grid',
    gap: '1.88rem' ,
    maxWidth: '74.375rem',
    margin: '0 auto',
    marginTop: '-14.1rem',
    gridTemplateColumns: 'repeat(auto-fill, minmax(16.43rem, 1fr))',
})

export const StorePresentation = styled('section', {
    textAlign: 'center',
    marginTop: '9.88rem',
    paddingTop: '3.75rem',
    paddingBottom: '5.62rem',
    backgroundColor: '$gray100',

    

    '& > h2': {
        color: '$blue800',
           
       'font-size': '2.1875rem',
       'font-weight': 700,
       'lineHeight': 1.2,
    },

})

export const StorePresentationContent = styled('div', {
    marginTop: '1rem',
    display: 'flex',
    
    alignItems: 'center',
    gap: '1.44rem',

    '& > img': {
 
    },
   
  
 
    '& > div p': {
        color: '$gray800',
        fontWeight: 400,
        fontSize: '1.125rem',
        maxWidth: 555
    },

    '& > div a': { 
       
        marginTop: '3.88rem'
    }   
})

export const PhoneContact = styled('footer', {
    marginTop: '9.75rem',
    background: `url(${FooterBackground})`,
    width: '100%',
   
    paddingLeft:'1.5rem',
    paddingRight: '1.5rem',

    backgroundSize: 'cover', 
    backgroundPosition: 'center',

    '& > div': {
        display: 'flex',
        justifyContent:'center',
        alignItems: 'flex-end',
        columnGap: '1.38rem',
       

        '& > img': {
            marginTop: '-70px'
        },

        '& > a': {
            marginBottom: '3.5rem'
        }


        
    }

})

