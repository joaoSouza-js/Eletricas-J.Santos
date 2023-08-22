import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {  DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './styles';
import {  ChevronDown } from 'lucide-react';

interface Category {
    category: string,
    imageUrl: string 
}

interface CategoryDropDownMenu {
    categoryList: Category[]
}

export function CategoryDropDownMenu({categoryList}:CategoryDropDownMenu){
    return (
        <DropdownMenu.Root>
            <DropdownMenuTrigger >
                Categories 
                <ChevronDown/>
            </DropdownMenuTrigger>

            <DropdownMenu.Portal>
                <DropdownMenuContent>
                    <DropdownMenu.Arrow width={20} height={14} fill='#fff'  />
                    {
                        categoryList.map(category => (
                            <DropdownMenuItem >
                                <div>
                                    <img src={category.imageUrl}/>
                                </div>
                                <span>{category.category}</span>
                            </DropdownMenuItem>

                        ))
                    }
                </DropdownMenuContent>

            </DropdownMenu.Portal>
        </DropdownMenu.Root>

    )
}