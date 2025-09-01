import * as React from "react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-0", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-between items-center mb-4 px-2",
        caption_label: "font-medium flex-1 text-center text-sm text-teal-600",
        // nav: "flex justify-between items-center space-x-1",
        // nav_button: cn(
        //   "bg-transparent p-0 opacity-70 hover:opacity-100 rounded-md transition-all duration-200"
        // ),
        // nav_button_previous: "",
        // nav_button_next: "",
        table: "w-full border-collapse",
        head_row: "flex mb-2",
        head_cell:
          "text-teal-600 w-10 font-medium text-[0.75rem] text-center uppercase",
        row: "flex w-full",
        cell: "relative p-0",
        day: cn(
          "h-10 w-10 p-0 font-normal text-sm rounded-md transition-colors",
          "hover:bg-teal-100 hover:text-teal-700 focus:bg-teal-200 focus:text-teal-800"
        ),
        day_range_end: "day-range-end",
        day_selected:
          "bg-teal-500 text-white hover:bg-teal-600 hover:text-white focus:bg-teal-600 focus:text-white rounded-md",
        day_today: "border border-teal-400 font-medium text-teal-600",
        day_outside: "text-muted-foreground opacity-30",
        day_disabled: "text-muted-foreground opacity-30",
        day_range_middle: "aria-selected:bg-teal-100 aria-selected:text-teal-700",
        day_hidden: "invisible",
        ...classNames,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
