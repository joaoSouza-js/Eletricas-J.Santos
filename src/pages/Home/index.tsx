import { Header } from "../../components/Header";
import { HomeContainer, Presentation, PresentationContent, PresentationFooter, PresentationNavigation } from "./styles";
import { ArrowDown } from 'lucide-react';
import WomenImage from '../../assets/women.png'

export function Home(){
    return (
    <HomeContainer>
        <Header/>
        <Presentation>
            <PresentationContent>
                <h1>ILUMINE O SEU DIA A DIA!</h1>
                <p>Aqui na Elétrica J. Santos queremos trazer mais luz para o seu dia a dia! Temos produtos para toda sua casa com a melhor qualidade e atendimento da região!</p>

                <PresentationNavigation>
                    <a href="#">VEJA NOSSOS PRODUTOS</a>
                    <a href="#">NOS CONHEÇA MELHOR</a>

                </PresentationNavigation>
                <PresentationFooter>
                    <ArrowDown/>
                    <span>Role para ver mais</span>
                </PresentationFooter>
            </PresentationContent>
            <img
                style={{
                    height:796,
                }}
                src={WomenImage}
            />
        </Presentation>
        <div></div>
     </HomeContainer>
    )
}