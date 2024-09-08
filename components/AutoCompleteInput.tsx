import { TextField, Autocomplete, AutocompleteProps } from "@mui/material";

import {
  FieldValues,
  useController,
  UseControllerProps,
  UseControllerReturn,
} from "react-hook-form";

type Props<FormValues extends FieldValues> = Omit<
  AutocompleteProps<any, any, any, any>,
  keyof UseControllerProps | keyof UseControllerReturn["field"] | "inputRef"
> &
  UseControllerProps<FormValues> & { label: string };

export function AutoCompleteInput<FormValues extends FieldValues>({
  name,
  label,
  rules,
  control,
  defaultValue,
  shouldUnregister,
  options,

  ...inputProps
}: Props<FormValues>) {
  const {
    field: { ref, ...formProps },
    fieldState: { error },
  } = useController({ name, rules, control, defaultValue, shouldUnregister });
  return (
    <div className="flex flex-col space-y-2 w-full">
      <Autocomplete
        fullWidth
        disablePortal
        clearIcon={null}
        options={options}
        sx={{
          width: "100%",
          "& .MuiOutlinedInput-root": {
            backgroundColor: "white !important",
            placeholder: {
              color: "#6B6B6B",
            },
          },
        }}
        {...inputProps}
        {...formProps}
        renderInput={(params) => (
          <TextField
            hiddenLabel
            {...params}
            label={label}
            slotProps={{
              input: {
                ...params.InputProps,
              },
            }}
          />
        )}
      />

      {error && (
        <div className="rounded border border-red-500 text-red-500 text-sm px-4 py-0.5">
          {error.message}
        </div>
      )}
    </div>
  );
}
