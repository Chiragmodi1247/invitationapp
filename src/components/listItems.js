import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon color="primary" />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItem>
  </div>
);

// import React, { Component } from 'react';
// import { ListItemIcon, ListItemText, Divider, IconButton, MenuList, MenuItem, Drawer } from '@material-ui/core';
// import { Link, withRouter } from 'react-router-dom';
// import { withStyles } from '@material-ui/core/styles';
// import PropTypes from 'prop-types';

// import routes from '../routes/routes';

// export class Sidebar extends Component {
//   constructor(props) {
//     super(props);

//     this.activeRoute = this.activeRoute.bind(this);
//   }

//   activeRoute(routeName) {
//     return this.props.location.pathname.indexOf(routeName) > -1 ? true : false;
//   }

//   render() {
//     const { classes, theme } = this.props;
//     return (
//       <div>
//         <Drawer
//           variant="permanent"
//         >
//           <MenuList>
//             {routes.map((prop, key) => {
//               return (
//                 <Link to={prop.path} style={{ textDecoration: 'none' }} key={key}>
//                   <MenuItem selected={this.activeRoute(prop.path)}>
//                     <ListItemIcon>
//                       <prop.icon />
//                     </ListItemIcon>
//                     <ListItemText primary={prop.sidebarName} />
//                   </MenuItem>
//                 </Link>
//               );
//             })}
//           </MenuList>
//         </Drawer>
//       </div>
//     );
//   }
// }

// export default withRouter(Sidebar);
