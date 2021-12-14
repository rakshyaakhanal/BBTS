import React from 'react';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import SecurityIcon from '@mui/icons-material/Security';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';


export const SidebarData = [
    {
        title : "Dashboard",
        icon : <DashboardCustomizeIcon/>
    },

    {
        title : "Drivers",
        icon : <PersonOutlineIcon />
    },

    {
        title : "Vehicles",
        icon : <DriveEtaIcon/>
    },

    {
        title : "Owners",
        icon : <PersonIcon />
    },

    {
        title : "Employees",
        icon : <GroupIcon />
    },

    {
        title : "Insurance",
        icon : <SecurityIcon />
    },

    {
        title : "Levy",
        icon : <AttachMoneyIcon/>
    },

    {
        title : "Settings",
        icon : <SettingsOutlinedIcon/>
    },

    {
        title : "Notifications",
        icon : <NotificationsNoneIcon/>
    },

    {
        title : "Others",
        icon : <DashboardIcon/>
    },

    {
        title : "Sign out",
        icon : <ExitToAppIcon/>
    }

]

