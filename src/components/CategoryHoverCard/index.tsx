import * as HoverCardRadix from '@radix-ui/react-hover-card';
import {  ChevronDown } from 'lucide-react';
import { HoverCardTrigger, HoverCardContent, HoverCardItem } from './styles';

interface Category {
    category: string,
    imageUrl: string 
}

interface CategoryHoverCardProps {
    categoryList: Category[]
}

export function CategoryHoverCard({categoryList}:CategoryHoverCardProps){
    return (
        <HoverCardRadix.Root openDelay={400} >
            <HoverCardTrigger   >
                Categories 
                <ChevronDown/>
            </HoverCardTrigger>

            <HoverCardRadix.Portal>
                <HoverCardContent>
                    <HoverCardRadix.Arrow width={20} height={14} fill='#fff'  />
                    {
                        categoryList.map(category => (
                            <HoverCardItem >
                                <div>
                                    <img src={category.imageUrl}/>
                                </div>
                                <span>{category.category}</span>
                            </HoverCardItem>

                        ))
                    }
                </HoverCardContent>

            </HoverCardRadix.Portal>
        </HoverCardRadix.Root>

    )
}