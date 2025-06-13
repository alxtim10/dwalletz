'use client'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { currency, initial_market_data } from "@/constants"
import { Currency, UserAsset } from "@/interfaces";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

interface DropdownAssetProps {
    selected: UserAsset;
    setSelected: React.Dispatch<React.SetStateAction<UserAsset>>;
}

export function DropdownAssets({ selected, setSelected }: DropdownAssetProps) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 focus:outline-0">
                    <Image src={selected.image} alt={selected.name} width={20} height={20} />
                    {selected.name}
                    <ChevronDown className='w-4' />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="start">
                <DropdownMenuGroup>
                    {initial_market_data.map((item, i) => {
                        return (
                            <DropdownMenuItem
                                onClick={() => {
                                    setSelected(item);
                                }}
                                className="p-2"
                                key={i}>
                                <Image src={item.image} alt={item.name} width={20} height={20} />
                                {item.name}
                            </DropdownMenuItem>
                        )
                    })}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
