'use client'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { currency } from "@/constants"
import { Currency } from "@/interfaces";
import { ChevronDown } from "lucide-react";

interface DropdownCurrency {
    selected: string;
    setSelected: React.Dispatch<React.SetStateAction<Currency>>;
}

export function DropdownCurrency({ selected, setSelected }: DropdownCurrency) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1 focus:outline-0">
                    {selected}
                    <ChevronDown className='w-4' />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="start">
                <DropdownMenuGroup>
                    {currency.map((item, i) => {
                        return (
                            <DropdownMenuItem
                                onClick={() => {
                                    setSelected(item);
                                }}
                                key={i}>{item}</DropdownMenuItem>
                        )
                    })}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
