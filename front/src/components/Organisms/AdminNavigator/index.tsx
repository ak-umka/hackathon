import * as React from "react";
import Divider from "@mui/material/Divider";
import Drawer, { DrawerProps } from "@mui/material/Drawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import SchoolIcon from "@mui/icons-material/School";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import PublicIcon from "@mui/icons-material/Public";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import SettingsInputComponentIcon from "@mui/icons-material/SettingsInputComponent";
import TimerIcon from "@mui/icons-material/Timer";
import SettingsIcon from "@mui/icons-material/Settings";
import PhonelinkSetupIcon from "@mui/icons-material/PhonelinkSetup";

const categories = [
  {
    id: "Build",
    children: [
      {
        id: "Authentication",
        icon: <PeopleIcon />,
        active: true,
      },
      { id: "School", icon: <SchoolIcon /> },
      { id: "Teacher", icon: <PersonAddAltIcon /> },
      { id: "Library", icon: <PublicIcon /> },
      { id: "Group", icon: <GroupAddIcon /> },
    ],
  },
  {
    id: "Quality",
    children: [
      { id: "Analytics", icon: <SettingsIcon /> },
      { id: "Performance", icon: <TimerIcon /> },
      { id: "Test Lab", icon: <PhonelinkSetupIcon /> },
    ],
  },
];

const item = {
  py: "2px",
  px: 3,
  color: "rgba(255, 255, 255, 0.7)",
  "&:hover, &:focus": {
    bgcolor: "rgba(255, 255, 255, 0.08)",
  },
};

const itemCategory = {
  boxShadow: "0 -1px 0 rgb(255,255,255,0.1) inset",
  py: 1.5,
  px: 3,
};

export default function AdminNavigator() {
  // const { ...other } = props;

  return (
    <Drawer
      variant="permanent"
      PaperProps={{
        sx: {
          backgroundColor: "#13253c",
        },
      }}
    >
      <List disablePadding>
        <ListItem
          sx={{ ...item, ...itemCategory, fontSize: 22, color: "#fff" }} //#031932
        >
          Admin
        </ListItem>

        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: "#101F33" }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: "#fff" }}>{id}</ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active }) => (
              <ListItem disablePadding key={childId}>
                <ListItemButton selected={active} sx={item}>
                  <ListItemIcon sx={{ color: "white" }}>{icon}</ListItemIcon>
                  <ListItemText>{childId}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </List>
    </Drawer>
  );
}