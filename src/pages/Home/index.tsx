import { Header } from "../../components/Header";
import { Category, CategoryProducts,  EmphasisProducts, HomeContainer, PhoneContact, Presentation, PresentationContent, PresentationFooter, PresentationNavigation, Products, StorePresentation, StorePresentationContent } from "./styles";
import { ArrowDown } from 'lucide-react';
import WomenImage from '../../assets/women.png'
import EmphasisLayerImage from '../../assets/emphasisLayer.jpg'
import { ProductCard } from "../../components/ProductCard";
import { ProductList } from "../../utils/productsList";
import { CategoryCard } from "../../components/CategoryCard";
import SnowImage from '../../assets/snow.svg'
import StoreImage from '../../assets/store.png'
import WomenThinkingImage from '../../assets/womenThink.png'
import { ButtonLink } from "../../components/ButtonLink";

import { Footer } from "../../components/Footer";
import { CategoryList } from "../../utils/categoryList";



export function Home(){
    return (
    <HomeContainer>
        <Header/>
        <Presentation>
            <PresentationContent>
                <h1>ILUMINE O SEU DIA A DIA!</h1>
                <p>Aqui na Elétrica J. Santos queremos trazer mais luz para o seu dia a dia! Temos produtos para toda sua casa com a melhor qualidade e atendimento da região!</p>

                <PresentationNavigation>
                    <ButtonLink href="#EmphasisProducts">VEJA NOSSOS PRODUTOS</ButtonLink>
                    <ButtonLink type={'secondary'}  href="#">NOS CONHEÇA MELHOR</ButtonLink>

                </PresentationNavigation>
                <PresentationFooter>
                    <ArrowDown/>
                    <span>Role para ver mais</span>
                </PresentationFooter>
            </PresentationContent>
            <img
                
                src={WomenImage}
            />
        </Presentation>
        <EmphasisProducts id="EmphasisProducts">
            <img 
                src={EmphasisLayerImage}
            />
            <div>
                <h2>PRODUTOS EM DESTAQUE</h2>
                <Products>
                    {
                        ProductList.map(product => (
                            <ProductCard
                                name={product.name}
                                oldPrice={product.oldPrice}
                                price={product.price}
                                maximumInstallment={product.maximumInstallment}
                                category={product.category}
                                imageUrl={product.imageUrl}
                            />

                        ))
                    }
                      
                </Products>

            </div>
        </EmphasisProducts>

        <Category>
            <div>
                <img
                    src={SnowImage}
                />
                <h2>
                    CATEGORIAS
                </h2>
            </div>
            <CategoryProducts>
                {
                     CategoryList.map(product => (
                        <CategoryCard
                            category={product.category}
                            imageUrl={product.imageUrl}
                        />
                     ) )
                }
            </CategoryProducts>
        </Category>

        <StorePresentation>
            <h2>SUA MELHOR OPÇÃO</h2>
            <StorePresentationContent>
                <img
                    src={StoreImage}
                />
                <div>
                     <p>
                        Desde 1970 somos especializados em materiais elétricos, sendo uma das 
                        principais distribuidoras do setor. ⠀ Oferecemos os melhores produtos, com o preço que cabe no seu bolso e atende todas as necessidades do seu dia a dia. ⠀ 
                         Venha conhecer a nossa loja, estamos na Avenida Rio das Pedras, 85/89, em Vila Carrão-SP. ⠀ Aqui você irá encontrar lustres, luminárias, utilidades domésticas, ferramentas, acessórios, lâmpadas, fios e cabos, quadros de distribuição, caixas de entrada padrão Eletropaulo, materiais elétricos em geral, equipamentos de segurança e comunicação.
                    
                     </p>
                     <ButtonLink type={"tertiary"} href="#">Saiba mais sobre nós</ButtonLink>
                </div>
                
            </StorePresentationContent>


        </StorePresentation>

        <PhoneContact>
            <div>
                <img src={WomenThinkingImage} alt="" />
                <ButtonLink href="#">
                    ACIONE NOSSO TELEVENDAS
                </ButtonLink>

            </div>

        </PhoneContact>

        <Footer/>


        
     </HomeContainer>
    )
}