import HeaderBobbleSvg  from '../../assets/headerBobble.svg'
import { HeaderNavigator, HeaderContainer, MobileHomeContainer } from './styles'
import LogoSvg from '../../assets/Logo.svg'
import { CategoryHoverCard } from '../CategoryHoverCard'
import { CategoryList } from '../../utils/categoryList'
import { ButtonLink } from '../ButtonLink'
import { useEffect, useState } from 'react'
import { Navigation } from '../Navigation'
import Logo from '../../assets/icon.svg'

export function Header(){
    const [windowWidth, setWindowWidth] = useState<number|null>(null)

    function handleWindowResized(){
        setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize',handleWindowResized );

    useEffect(() => handleWindowResized,[])



    return (
        <>
            {
                !!windowWidth && windowWidth <= 720 ? (
                    <MobileHomeContainer>
                        <img src={Logo} />
                        <Navigation categoryList={CategoryList}/>
                    </MobileHomeContainer>
            ):(
                <HeaderContainer>
                    <div>
                        <img
                            alt=''
                            src={HeaderBobbleSvg}
                        />
                        <div>
                        <img
                            alt=''
                            src={LogoSvg}
                        />
        
                        </div>
                    
        
                    </div>
                
                        <HeaderNavigator>
                            <a href="#" >Home</a>
                            <CategoryHoverCard categoryList={CategoryList}/>
                            <a href="#">Sobre</a>
                            <a href="#">Localização</a>
                            <ButtonLink type='tertiary' size={'sm'} href="#">Contato</ButtonLink>
                        </HeaderNavigator>
                </HeaderContainer>
            
            )
            }
        </>

    )
}