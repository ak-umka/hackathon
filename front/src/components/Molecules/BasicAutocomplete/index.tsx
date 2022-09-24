import { Autocomplete, TextField } from "@mui/material";

function BasicAutocomplete({ options = ["Default"] }) {
  return (
    <>
      <Autocomplete
        disablePortal
        id="filter-1"
        options={options}
        renderInput={(params) => <TextField {...params} />}
      />
    </>
  );
}

export default BasicAutocomplete;
