import { Container } from "@mui/material";
import { Dispatch, bindActionCreators } from "redux";
import {
  SchoolHead,
  SchoolInfo,
  SchoolDetail,
} from "../../components/Organisms";
import { RootState } from "../../store";
import { getSchoolId } from "../../store/action/schoolAction";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import React from "react";

function School(props: any) {
  const { id } = useParams();
  const [singleSchool, setSingleSchool] = React.useState<any>(null);

  React.useEffect(() => {
    props.getSchoolId(id);
  }, []);

  React.useEffect(() => {
    if (singleSchool == props.school) return;
    console.log(props.school, "school");
    setSingleSchool(props.school);
  }, [props.school]);

  return (
    <>
      <Container fixed>
        {singleSchool ? (
          <>
            <SchoolHead
              name={singleSchool.name}
              rating={
                singleSchool?.ratings?.length
                  ? singleSchool?.ratings[0]?.rating
                  : 0
              }
            />
            <SchoolInfo image={singleSchool.image} />
            <SchoolDetail />
          </>
        ) : null}
      </Container>
    </>
  );
}

const mapStateToProps = (state: RootState) => ({
  school: state.school.school,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      getSchoolId,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(School);
