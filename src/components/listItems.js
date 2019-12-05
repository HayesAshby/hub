import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Subscriptions from '@material-ui/icons/Subscriptions';
import Explore from '@material-ui/icons/Explore';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AccountCircle />
      </ListItemIcon>
      <ListItemText primary="Account" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Subscriptions />
      </ListItemIcon>
      <ListItemText primary="Subscriptions" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Explore />
      </ListItemIcon>
      <ListItemText primary="Explore" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Secondary List</ListSubheader>
  </div>
);