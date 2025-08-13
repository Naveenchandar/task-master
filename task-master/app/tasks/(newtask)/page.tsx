import { TaskTypeComboBox } from "@/components/task-type";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { TASKS_LABELS } from "@/constants/labels";

export default function NewTask() {
    const { NEW_TASK_FORM, NEW_TASK } = TASKS_LABELS
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">New Task</Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>{NEW_TASK}</SheetTitle>
                </SheetHeader>
                <div className="grid flex-1 auto-rows-min gap-6 px-4">
                    <div className="grid gap-3">
                        <Label htmlFor="new-task-title">{NEW_TASK_FORM.TITLE}</Label>
                        <Input id="new-task-title" placeholder={NEW_TASK_FORM.TITLE} />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="new-task-description">{NEW_TASK_FORM.DESCRIPTION}</Label>
                        <Input id="new-task-description" placeholder={NEW_TASK_FORM.DESCRIPTION} />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="new-task-description">{NEW_TASK_FORM.PRIORITY}</Label>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder={NEW_TASK_FORM.PRIORITY} />
                            </SelectTrigger>
                            <SelectContent>
                                {NEW_TASK_FORM.TASK_PRIORITY_OPTIONS && Object.entries(NEW_TASK_FORM.TASK_PRIORITY_OPTIONS).map(([value, label]) => (
                                    <SelectItem key={value} value={value}>
                                        {label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="new-task-description">{NEW_TASK_FORM.STATUS}</Label>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder={NEW_TASK_FORM.STATUS} />
                            </SelectTrigger>
                            <SelectContent>
                                {NEW_TASK_FORM.TASK_STATUS_OPTIONS && Object.entries(NEW_TASK_FORM.TASK_STATUS_OPTIONS).map(([value, label]) => (
                                    <SelectItem key={value} value={value}>
                                        {label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="new-task-description">{NEW_TASK_FORM.TASK_TYPE}</Label>
                        <TaskTypeComboBox />
                    </div>
                </div>
                <SheetFooter>
                    <Button type="submit">Save changes</Button>
                    <SheetClose asChild>
                        <Button variant="outline">Close</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}