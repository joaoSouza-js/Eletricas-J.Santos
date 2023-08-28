import {  PopoverContent,  PopoverTrigger } from './styles';
import {  Menu } from 'lucide-react';
import * as Popover from '@radix-ui/react-popover';
import { CategoryList } from '../../utils/categoryList';
import { CategoryDropDownMenu } from '../CategoryDropDown';



export function Navigation(){
    return (
        <Popover.Root>
            <PopoverTrigger>
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