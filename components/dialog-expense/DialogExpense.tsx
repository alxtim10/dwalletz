import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog"
import { DropdownAssets } from "../dropdown-assets/DropdownAssets"
import { useState } from "react";
import { UserAsset } from "@/interfaces";
import { initial_market_data } from "@/constants";
import { useAppDispatch } from "@/stores";
import { updateAsset } from "@/stores/slices/assets";

export function DialogExpense() {
    const [selected, setSelected] = useState<UserAsset>(initial_market_data[0]);
    const [expense, setExpense] = useState<string>('');
    const dispatch = useAppDispatch();
    const handleExpense = () => {
        let converted = parseFloat(expense.replace(',', '.'));
        dispatch(updateAsset({ amount: converted, id: selected.id }))
        setSelected(initial_market_data[0])
        setExpense('');
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value;
    
        // Allow only digits and a single comma
        const sanitized = raw
          .replace(/[^\d,]/g, '')       // Remove letters/symbols
          .replace(/^0+(?=\d)/, '')     // Remove leading zeroes unless "0,"
          .replace(/(,+)/g, ',')        // Reduce multiple commas to one
          .replace(/^,/, '0,');         // If starts with comma, prefix with 0
    
        const parts = sanitized.split(',');
        if (parts.length > 2) return; // Disallow more than one comma
    
        setExpense(sanitized || '0');
      };

    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <button>Expense</button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-black">
                    <DialogHeader>
                        <DialogTitle>Expense</DialogTitle>
                    </DialogHeader>
                    <div className="my-5 flex items-center justify-between">
                        <DropdownAssets selected={selected} setSelected={setSelected} />
                        <input
                            type="text"
                            inputMode="decimal"
                            value={expense}
                            onChange={(e) => {
                                handleChange(e);
                            }}
                            className="bg-transparent text-right focus:outline-0 placeholder:text-[#707070]"
                            placeholder={`0.00 - ${selected.amount}`}
                        />
                    </div>
                    <DialogFooter>
                        <DialogClose
                            onClick={handleExpense}
                            className="w-full bg-maintext text-black rounded-lg p-2 text-sm">Save
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}
