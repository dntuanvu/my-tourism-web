import {
  Input,
  Box,
  Button,
  AutocompleteRenderInputParams,
} from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { AutoCompleteInput } from "@/components/AutoCompleteInput";
import DatePickerInput from "@/components/DatePickerInput";
import moment from "moment";
import { ReactNode } from "react";

const Search = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      destination: "",
      startDate: moment().toDate(), // Ensure startDate is a valid date object
    },
  });

  const onSubmit: SubmitHandler<Record<string, any>> = (data) => {
    const { destination, startDate } = data;
    const date = moment(startDate).format("YYYY-MM-DD");
    const url = `search?destination=${destination}&date=${date}`;
    console.log(url);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        display="flex"
        gap={0.5}
        p={1}
        borderRadius={2}
        bgcolor="warning.main"
      >
        <AutoCompleteInput
          label="What is your destination?"
          name="destination"
          control={control}
          options={[
            {
              label: "Paris",
              value: "Paris",
            },
            {
              label: "New York",
              value: "New York",
            },
            {
              label: "London",
              value: "London",
            },
          ]}
          
          renderInput={function (
            params: AutocompleteRenderInputParams
          ): ReactNode {
            throw new Error("Function not implemented.");
          }}
        />
        <DatePickerInput
          label="When you are ready?"
          name="startDate"
          control={control}
          defaultValue={moment().toDate()} // Ensure defaultValue is a valid date object
        />
        <Button
          variant="contained"
          type="submit"
          sx={{
            minWidth: 100,
            borderRadius: 1,
            backgroundColor: "primary.main",
            color: "white",
            borderColor: "primary.main",
          }}
        >
          Search
        </Button>
      </Box>
    </form>
  );
};

export default Search;
