import { FormatCurrency } from '../../utils/Format'
import {ProductCardContainer,Separator,ProductPrices, ProductCategory, ProductInformation, ProductFooter} from './styles'



interface ProductCardProps {
    category: string,
    imageUrl: string,
    name:  string,
    price: number,
    oldPrice: number,
    maximumInstallment: number,
}

export function ProductCard({category,imageUrl,name,oldPrice,price,maximumInstallment}:ProductCardProps){
    return (
        <ProductCardContainer>
            <img

            
                src={imageUrl}
                title={`imagen do produto ${name}`}
                alt={`imagen do produto ${name}`}
            />
            <ProductCategory>
                <span>{category}</span>

            </ProductCategory>

            <Separator/>

            <ProductInformation>
                <strong>{name}</strong>
                <ProductPrices>
                    <span>{FormatCurrency.format(oldPrice)}</span>
                    <div>
                        <span>{FormatCurrency.format(price)}</span>

                    </div>
                </ProductPrices>
                <ProductFooter>
                    <span>ou em {maximumInstallment}x de {FormatCurrency.format(price / maximumInstallment)}</span>

                </ProductFooter>
            </ProductInformation>

            
        </ProductCardContainer>
    )
}