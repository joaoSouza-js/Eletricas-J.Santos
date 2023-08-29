import { styled } from "../../styles/global"

export const ProductCardContainer = styled('div', {
    width: '16.4375rem',
    position: 'relative',
    borderRadius: '0.9375rem',
    boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 1)',
    overflow: 'hidden',

    '& > img' : {
        width:  '100%',
        height: '13.5rem'
    },

    

    '@media (max-width: 600px)': {
        width: '22.4375rem',
    },

    '@media (max-width: 459px)': {
        width: '100%',
    },

})

export const ProductCategory = styled('div', {
    position: 'absolute',
    left: 0,
    padding: '.5rem 0.94rem',
    top: '0.94rem',
    backgroundColor: '$gray300',
    borderTopRightRadius: '62px',
    borderBottomRightRadius: '62px',

    '& > span': {
        color: '$gray800',
        fontWeight: 500,
        fontSize:' 0.8125rem'
    }
})


export const Separator = styled('div', {
    position: 'relative',
    top: '-0.59rem',
    width: '13.5625rem',
    margin: '0 auto',
    borderRadius: '0.94rem',
    height: '1.18rem',
    backgroundColor : '$blue800',

    '@media (max-width: 600px)': {
        width: '90%',
        margin: '0 auto'
    },


})


export const ProductInformation = styled('div', {
    marginTop: '1.25rem',
    color: '$blue800',
    textAlign: 'center',
    
    '& > strong': {
        fontSize: '1.43rem',
        fontWeight: 500,
        color: '$gray800', 
    },

    '& > span' : {
        marginTop: '2.87rem',
        fontWeight: 300,
        fontSize: '1rem',
        display: 'inline-block'
     }
})

export const ProductPrices = styled('div', {
    marginTop: '1.25rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    columnGap: '0.81rem',
    paddingLeft: '0.75rem',

     '& > span' : {
        textDecoration: 'line-through',
        fontSize: '1rem',
       
     },

     '& > div': {
        display: 'flex',
        alignItems: 'center',
        borderTopLeftRadius: '0.94rem',
        borderBottomLeftRadius: '0.94rem',
        
        paddingLeft: '0.94rem',
        backgroundColor: '$yellow400',
        width: '9rem',
        height: '3.1875rem',

        '& > span' : {
            fontWeight: 300,
            fontSize: '1.15rem',
           
         },
     },

})


export const ProductFooter = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '2.63rem',
    width: '13.5625rem',
    margin: '0 auto',
    marginTop: '2.87rem',
    borderTopLeftRadius: '0.94rem',
    borderTopRightRadius: '0.94rem',
    backgroundColor: '$gray100',

    '& > span' : {
        fontWeight: 300,
        fontSize: '1rem',
        display: 'inline-block'
     }
})
