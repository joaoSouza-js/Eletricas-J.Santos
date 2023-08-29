import { styled } from "../../styles/global"
import PresentationBackground from '../../assets/presentationBackgorund.jpg'
import FooterBackground from  '../../assets/footerBackground.png'


export const HomeContainer = styled('div', {
    height: '100vh'
})

export const Presentation = styled('section', {
    display: 'flex',
    justifyContent: 'center',

    background: `url(${PresentationBackground})`,
    width: '100%',
    

 

    backgroundSize: 'cover', 
    backgroundPosition: 'center',

    '& > div': {
        maxWidth: '77.43rem',
        marginLeft: '6.03rem',
        display: 'flex',
        
        '@media (max-width: 900px)': {
            paddingLeft:'2rem',
            paddingRight: '2rem',
            maxWidth: 'none',
            width: '100%',
            marginLeft: '0px',

        },

        '& > img': {
            height:796,
            width: '70%',
            maxWidth: 702,
            
            '@media (max-width: 900px)': {
                height:0,
    
                width: 0,
                position: 'absolute',
                top: '-20px',
                left: '-20px',
                 
            },
        }
    }
    

})

export const PresentationContent = styled('div', {
    maxWidth: 560,
    marginTop: '5rem',
    paddingBottom: '1.5rem',

    '@media (max-width: 920px)': {
        width: '100%',
        display: 'flex',
        maxWidth: 'none',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    color: '$white',

        '& > h1': {
          
            'font-size': '4.375rem',
            'font-weight': 700,
            'lineHeight': 1.2,

            '@media (max-width: 900px)': {
                textAlign: 'center',
                'font-size': '2.375rem',
            }
            
        },

        '& > p': {
            'marginTop': '1.88rem' ,//30px
            'font-size': '1.125rem',
            'font-weight': 400,
            'letter-spacing': '0.02em',
            'lineHeight': 2,
            
        }
})

export const PresentationNavigation  = styled('div', {
    marginTop: '1.38rem',
    display: 'flex',
    flexDirection: 'column',
   
    rowGap: '1.44rem',

    '@media (max-width: 900px)': {
        alignItems: 'center',
    }

    
})

export const PresentationFooter = styled('div', {
    fontSize: '1rem',
    marginTop: '2.5rem',
    display: 'flex',
    gap: '1.31rem',
    alignItems: 'center',
})

export const EmphasisProducts = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '5.5rem',
    alignItems: 'center',
   
    
    '& > div:nth-of-type(2)': {
        marginTop: '-11.2rem',
        zIndex: 2,
        paddingLeft:'2rem',
            paddingRight: '2rem',

        '& > h2': {
            color: '$white',
            marginLeft: '15rem',
            'font-size': '2.1875rem',
            'font-weight': 700,
            'lineHeight': 1.2,

            '@media (max-width: 920px)':{
                textAlign: 'center',
                marginLeft: '0',

            }
            
        },

    }



})

export const EmphasisProductsHeader = styled('div', {
    position: 'relative',
    left: '-7.4375rem',
    display:'flex',
    width: '100%',
    zIndex: -1,
    maxWidth: '78.3125rem',
   
    margin: '0 auto',

    '@media (max-width: 920px)':{
        width: '100%',
        left:'0',
    },

    '& > img': {
        zIndex: -2,
        marginLeft: '-4.2rem',
        marginTop: '1.62rem',
        position: 'relative',
        width: '15.625rem',
        height:' 15.75rem',

        '@media (max-width: 920px)': {
          
            height:0,
        
            width: 0,
            position: 'absolute',
            top: '-20px',
            left: '-20px',
        },

    },

    

    '& > div:nth-of-type(1)': {
        maxWidth: '67.0625rem',
        width: '100%',
        height: '28.5rem',
        borderTopRightRadius: '0.94rem',
        background: '$blue800',

        '& > img': {
            marginLeft: '20.75rem',
        },

        '@media (max-width: 920px)':{
            width: '100%',
            paddingLeft:'2rem',
            paddingRight: '2rem',

            '& > img': {
                marginLeft: '0rem',
            }

        }

       

    }}
)

export const Products = styled('section', {
    display: 'flex',
   
    margin: '0 auto',
    marginTop: '1.56rem',
    
   
    maxWidth: '71.6rem',
   
    flexWrap: 'wrap',
    columnGap: '1.88rem' ,
    rowGap: '2.06rem',

    '@media (max-width: 1120px)': {
        justifyContent: 'center',
        maxWidth: '53.0625rem'
    },

})


export const Category = styled ('div', {
    marginTop: '3.75rem',
    textAlign: 'center',

    '& > div:nth-of-type(1)': {
        height: '28.5rem',
        display: 'flex',
        columnGap: '7.19rem',
        borderTopRightRadius: '0.94rem',
        justifyContent: 'center',
        backgroundColor : '$blue800',

        '@media (max-width: 720px)': {
            flexDirection: 'column',
            justifyContent: 'normal',

        },

       

        "& > img": {
            width: '6.20rem',
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
    maxWidth: '71.6rem',
    display: 'flex',
    columnGap: '1.88rem' ,
    rowGap: '2.06rem',
    flexWrap: 'wrap',
   
    margin: '0 auto',
    marginTop: '-14.1rem',

    '@media (max-width: 1120px)': {
        justifyContent: 'center',
        paddingLeft:'2rem',
        paddingRight: '2rem',
        maxWidth: '53.0625rem'
    },
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

    '@media (max-width: 720px)': {
        paddingLeft:'2rem',
        paddingRight: '2rem',
    }

})

export const StorePresentationContent = styled('div', {
    marginTop: '1rem',
    display: 'flex',
    
    alignItems: 'center',
    gap: '1.44rem',


    '@media (max-width: 720px)': {
        '& > div': {
            
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }
    },

    '@media (max-width: 900px)': {
        flexDirection: 'column',
    },

   
  
 
    '& > div:nth-of-type(2) p': {
        textAlign:'left',
        color: '$gray800',
        fontWeight: 400,
        fontSize: '1.125rem',
        maxWidth: 555
    },

    '& > div a': { 
       
        marginTop: '3.88rem'
    }   
})

export const StorePresentationContentImageWrapper = styled('div', {
    display: 'flex',
    alignItems: 'center',

    '& > div': {
        background: '$blue800',
        width: '18rem',
        height: '20.5625rem',
    },

    '& > img': {
        width: '100%',
        maxWidth: '34.6875rem',
        height: '34.125rem',
    },

    '@media (max-width: 900px)': {
        '& > div': {
            display: 'absolute',
            width: '1px',
            top: '-2px',
            left: '-2px',
            height: '1px',
        },

        '& > img': {
            width: '100%',
            height: 'auto',
        },
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

    '@media (max-width: 900px)': {
        padding: '1.5rem',  
        marginTop: '4rem',
    },

    'img': {
        '@media (max-width: 900px)': {
            height:0,

            width: 0,
            position: 'absolute',
            top: '-20px',
            left: '-20px',
             
        },
    },

  

    '& > div': {
        display: 'flex',
        justifyContent:'center',
        alignItems: 'flex-end',
        columnGap: '1.38rem',
       

        '& > img': {
            marginTop: '-70px'
        },

        '& > a': {
            marginBottom: '3.5rem',

            
            '@media (max-width: 900px)': {
                marginBottom: 0,
            },
        }


        
    }

})

