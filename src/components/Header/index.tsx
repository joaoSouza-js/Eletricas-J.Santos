import HeaderBobbleSvg  from '../../assets/headerBobble.svg'
import { HeaderNavigator, HeaderContainer } from './styles'
import LogoSvg from '../../assets/Logo.svg'
import { CategoryDropDownMenu } from '../CategoryDropDown'
import { CategoryList } from '../../utils/categoryList'

export function Header(){
    return (
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
                <CategoryDropDownMenu categoryList={CategoryList}/>
                <a href="#">Sobre</a>
                <a href="#">Localização</a>
                <a href="#">Contato</a>
            </HeaderNavigator>
        </HeaderContainer>

    )
}