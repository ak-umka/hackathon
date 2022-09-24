import * as React from "react";
import { Box, Tabs, Tab } from "@mui/material";
import {
  ClassList,
  EmployeeList,
  HowToProceed,
  TabPanel,
  VacancyList,
} from "../../Molecules";

const tabList = [
  "классы",
  "Преподовательский состав",
  "Отзывы",
  "Как постпуить ?",
  "вакансии школы",
];

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function SchoolDetail() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Box
        sx={{ borderBottom: 1, borderColor: "divider", marginBottom: "48px" }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {tabList.map((tab, index) => (
            <Tab key={index} label={tab} {...a11yProps(index)} />
          ))}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ClassList />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <EmployeeList />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <HowToProceed />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <VacancyList />
      </TabPanel>
    </>
  );
}

export default SchoolDetail;
