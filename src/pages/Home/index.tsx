import { Header } from "../../components/Header";
import { EmphasisProducts, HomeContainer, Presentation, PresentationContent, PresentationFooter, PresentationNavigation, Products } from "./styles";
import { ArrowDown } from 'lucide-react';
import WomenImage from '../../assets/women.png'
import EmphasisLayerImage from '../../assets/emphasisLayer.jpg'
import productImage01Image from '../../assets/productImage01.jpeg'
import { ProductCard } from "../../components/ProductCard";
import { ProductList } from "../../utils/productsList";


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
        <EmphasisProducts>
            <img 
                src={EmphasisLayerImage}
            />
            <div>
                <strong>PRODUTOS EM DESTAQUE</strong>
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


        
     </HomeContainer>
    )
}