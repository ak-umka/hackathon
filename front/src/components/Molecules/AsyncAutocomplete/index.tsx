import * as React from "react";
import {
  Autocomplete,
  TextField,
  CircularProgress,
  Grid,
  Button,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { connect } from "react-redux";
import { RootState } from "../../../store/reducers/rootReducer";
import { Dispatch, bindActionCreators } from "redux";
import { search, getSchools } from "../../../store/action/schoolAction";

const mapStateToProps = (state: RootState) => ({
  school: state.school.school,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      search,
      getSchools,
    },
    dispatch
  );
};

interface School {
  id: string;
  name: string;
  address: string;
  image: string;
  shortHistory: string;
  teachers: [];
  direction: string;
  groups: [];
  rating: [];
}

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

const AsyncAutocomplete: React.FC<Props> = (props) => {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<readonly School[]>([]);
  const [searchText, setSearchText] = React.useState<string>("");
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) return undefined;

    (async () => {
      await sleep(1e3); // For demo purposes.

      if (active) {
        setOptions([...props?.school]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    props?.getSchools();
  }, []);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  React.useEffect(() => {
    !searchText.length && setOpen(false);
  }, [searchText]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={10}>
        <Autocomplete
          id="asynchronous-demo"
          open={open}
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
          isOptionEqualToValue={(option, value) => option.name === value.name}
          getOptionLabel={(option) => option.name}
          options={options}
          loading={loading}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Введите название, номер школы"
              color="primary"
              onChange={(event) => setSearchText(event.target.value)}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <React.Fragment>
                    {loading && !searchText.length ? (
                      <CircularProgress color="inherit" size={20} />
                    ) : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                ),
              }}
            />
          )}
        />
      </Grid>
      <Grid item xs={2}>
        <Button
          startIcon={<SearchIcon />}
          variant="contained"
          sx={{
            width: "100%",
            height: "100%",
            background: "#007DFF",
          }}
          onClick={() => props?.search(searchText)}
        >
          <Typography variant={"button"}>Поиск</Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AsyncAutocomplete);
