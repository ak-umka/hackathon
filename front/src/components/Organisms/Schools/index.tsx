import React from "react";
import { Grid, Typography } from "@mui/material";
import { SchoolCard } from "../../Molecules";
import { connect } from "react-redux";
import { getSchools, search } from "../../../store/action/schoolAction";
import { bindActionCreators, Dispatch } from "redux";
import { RootState } from "../../../store/reducers/rootReducer";
import { useNavigate } from "react-router-dom";

const mapStateToProps = (state: RootState) => ({
  schools: state.school.school,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      getSchools,
      search,
    },
    dispatch
  );
};

interface CardValues {
  image: string;
  address: string;
  name: string;
  ratings: {
    rating: number;
  };
}

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

function Schools(props: any) {
  const initialValue = 0;
  const navigate = useNavigate();

  const [schoolList, setSchoolList] = React.useState<any[]>([]);

  React.useEffect(() => {
    props.getSchools();
  }, []);

  React.useEffect(() => {
    console.log(props.schools);
    setSchoolList(props.schools);
  }, [props.schools]);

  const openSchoolById = (id: any) => {
    console.log(id);
    navigate(`/school/${id}`);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            variant="h4"
            sx={{
              marginBottom: "8px",
            }}
          >
            👑 Топ - 6 школ области
          </Typography>
          <Typography variant="h6">
            Рейтинг основан по результатам ЕНТ
          </Typography>
        </Grid>

        {schoolList?.length || 0
          ? schoolList.map((item, index) => (
              <Grid key={index} item xs={4}>
                <SchoolCard
                  ratingValue={10}
                  name={item?.name}
                  address={item?.address}
                  image={item?.image}
                  handleClick={openSchoolById}
                  id={item._id}
                />
              </Grid>
            ))
          : null}

        {/* <Grid item xs={4}>
          <SchoolCard />
        </Grid>
        <Grid item xs={4}>
          <SchoolCard />
        </Grid>
        <Grid item xs={4}>
          <SchoolCard />
        </Grid>
        <Grid item xs={4}>
          <SchoolCard />
        </Grid>
        <Grid item xs={4}>
          <SchoolCard />
        </Grid> */}
      </Grid>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Schools);
