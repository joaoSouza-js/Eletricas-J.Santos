import { Copyright, FooterContainer, HomeFooterContent, HomeFooterHeader } from "./styles";
import LogoWhiteImage from '../../assets/Logowhite.svg';
import FacebookImage from  "../../assets/facebook.svg"
import WhatsappImage from  "../../assets/whatsapp.svg"
import InstagramImage from  "../../assets/instagram.svg"


export function Footer(){
    return (
        <FooterContainer>
                <HomeFooterContent>
                    <HomeFooterHeader>
                        <div>
                            <img
                                src={LogoWhiteImage}
                                
                            />
                            <span>Venha na Elétrica J. Santos e garanta a melhor opção para sua casa!</span>
                        </div>
                        <div>
                            <span>NOS SIGA NAS REDES</span>
                            <div>
                                <a href="#">
                                    <img  
                                    title="imagem do icone do Facebook"
                                    src={FacebookImage} 
                                    alt="imagem do icone do Facebook" />
                                </a>
                                <a href="#">
                                    <img 
                                    title="imagem do icone do Whatsapp"
                                    src={WhatsappImage} 
                                    alt="imagem do icone do Whatsapp" />
                                </a>
                                <a href="#">
                                    <img 
                                    title="imagem do icone do Instagram"
                                    src={InstagramImage}
                                     alt="imagem do icone do Instagram" />
                                </a>

                            </div>

                        </div>
                    </HomeFooterHeader>

                    <Copyright>
                        <span>© Copyright 2021 - Elétrica J. Santos - Todos os Direitos Reservados</span>
                        <span>Desenvolvido por </span>
                    </Copyright>

                </HomeFooterContent>
        </FooterContainer>
    )
}