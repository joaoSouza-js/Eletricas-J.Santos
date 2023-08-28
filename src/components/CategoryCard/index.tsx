import { CategoryCardContainer } from "./styles";

interface CategoryCardProps {
    category: string,
    imageUrl: string,
}


export function CategoryCard({category,imageUrl}: CategoryCardProps){
   return (
        <CategoryCardContainer>
            <div>
                <span>{category}</span>
            </div>
            <div>
                <img 
                    src={imageUrl} 
                    alt={`ilustração para a catgoria de  productos: ${category}`} 
                    title={`ilustração para a catgoria de  productos: ${category}`}
                />

            </div>

        </CategoryCardContainer>

    )
}