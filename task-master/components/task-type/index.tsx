"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { TASKS_LABELS } from "@/constants/labels"

export function TaskTypeComboBox() {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    const OPTIONS = Object.values(TASKS_LABELS.NEW_TASK_FORM.TASK_TYPE_OPTIONS)

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[350px] justify-between"
                >
                    {value
                        ? OPTIONS.find((item) => item === value)
                        : "Select..."}
                    <ChevronsUpDown className="opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[350px] p-0">
                <Command>
                    <CommandInput placeholder="Search framework..." className="h-9" />
                    <CommandList>
                        <CommandEmpty>No task type found.</CommandEmpty>
                        <CommandGroup>
                            {OPTIONS.map((taskItem) => (
                                <CommandItem
                                    key={taskItem}
                                    value={taskItem}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue)
                                        setOpen(false)
                                    }}
                                >
                                    {taskItem}
                                    <Check
                                        className={cn(
                                            "ml-auto",
                                            value === taskItem ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
