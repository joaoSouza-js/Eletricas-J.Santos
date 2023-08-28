import {  PopoverContent, PopoverItem, PopoverTrigger } from './styles';
import {  Menu } from 'lucide-react';
import * as Popover from '@radix-ui/react-popover';
import { CategoryHoverCard } from '../CategoryHoverCard';
import { CategoryList } from '../../utils/categoryList';
import { CategoryDropDownMenu } from '../CategoryDropDown';

interface Category {
    category: string,
    imageUrl: string 
}

interface CategoryPopover {
    categoryList: Category[]
}

export function Navigation({categoryList}:CategoryPopover){
    return (
        <Popover.Root>
            <PopoverTrigger >
                <Menu/>
            </PopoverTrigger>

            <Popover.Portal>
                <PopoverContent>
                  
                        <a href="#" >Home</a>
                        <CategoryDropDownMenu categoryList={CategoryList}/>
                        <a href="#">Sobre</a>
                        <a href="#">Localização</a>
                        <a >Contato</a>

                 
                </PopoverContent>

            </Popover.Portal>
        </Popover.Root>

    )
}