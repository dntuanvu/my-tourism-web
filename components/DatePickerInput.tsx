import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { Control, Controller } from "react-hook-form";
import {
  DateTimePicker,
  DateTimePickerProps,
} from "@mui/x-date-pickers/DateTimePicker";
import moment from "moment";

import {
  FieldValues,
  useController,
  UseControllerProps,
  UseControllerReturn,
} from "react-hook-form";

type Props<FormValues extends FieldValues> = Omit<
  DateTimePickerProps<any, any>,
  keyof UseControllerProps | keyof UseControllerReturn["field"] | "inputRef"
> &
  UseControllerProps<FormValues>;
export function DatePickerInput<FormValues extends FieldValues>({
  label,
  name,
  rules,
  control,
  defaultValue,
  shouldUnregister,
  ...inputProps
}: Props<FormValues>) {
  const {
    field: { ref, onChange, value, ...formProps },
    fieldState: { error },
  } = useController({ name, rules, control, defaultValue, shouldUnregister });
  const handleDateChange = (date: any) => {
    if (moment(date).isValid()) {
      onChange(date);
    } else {
      onChange(null);
    }
  };
  return (
    <div className="flex flex-col space-y-2 w-full">
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DateTimePicker
          {...inputProps}
          {...formProps}
          label={label}
          views={["year", "month", "day"]}
          value={value ? moment(value) : null}
          onChange={handleDateChange}
          sx={{
            "& .MuiOutlinedInput-root": {
              backgroundColor: "white !important",
              placeholder: {
                color: "#6B6B6B",
              },
            },
          }}
          inputRef={ref}
        />
      </LocalizationProvider>
      {error && (
        <div className="rounded border border-red-500 text-red-500 text-sm px-4 py-0.5">
          {error.message}
        </div>
      )}
    </div>
  );
}
export default DatePickerInput;
