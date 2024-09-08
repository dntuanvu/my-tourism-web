import { TextField, TextFieldProps } from "@mui/material";
import {
  FieldValues,
  useController,
  UseControllerProps,
  UseControllerReturn,
} from "react-hook-form";

type Props<FormValues extends FieldValues> = Omit<
  TextFieldProps,
  keyof UseControllerProps | keyof UseControllerReturn["field"] | "inputRef"
> &
  UseControllerProps<FormValues>;

export function TextInput<FormValues extends FieldValues>({
  name,
  rules,
  control,
  defaultValue,
  shouldUnregister,
  ...inputProps
}: Props<FormValues>) {
  const {
    field: { ref, ...formProps },
    fieldState: { error },
  } = useController({ name, rules, control, defaultValue, shouldUnregister });
  return (
    <div className="flex flex-col space-y-2">
      <TextField
        {...inputProps}
        {...formProps}
        inputRef={ref}
        sx={{
          "& .MuiOutlinedInput-root": {
            backgroundColor: "white !important",
            placeholder: {
              color: "#6B6B6B",
            },
          },
        }}
      />
      {error && (
        <div className="rounded border border-red-500 text-red-500 text-sm px-4 py-0.5">
          {error.message}
        </div>
      )}
    </div>
  );
}
