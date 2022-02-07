/*!

=========================================================
* Now UI Dashboard React - v1.5.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import TableList from "views/TableList.js";
import FieldGround from "views/FieldGround.js";
import Upgrade from "views/Upgrade.js";
import UserPage from "views/UserPage.js";
import FieldLocation from "views/FieldLocation"
import AddNewUser from "views/AddNewUser.js";
import FieldRoof from "views/FieldRoof";
import FieldFloor from "views/FieldFloor";
import FieldUser from "views/FieldUser";
import FieldBookng from "views/FieldBooking";
var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "design_app",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/FieldBooking",
    name: "Field Booking",
    icon: "location_map-big",
    component: FieldBookng,
    layout: "/admin",
  },
  {
    path: "/FieldGround",
    name: "Field Ground",
    icon: "location_map-big",
    component: FieldGround,
    layout: "/admin",
  },
  {
    path: "/FieldLocation",
    name: "Field Ground",
    icon: "location_map-big",
    component: FieldLocation,
    layout: "/admin",
  },
  {
    path: "/FieldRoof",
    name: "Field Roof",
    icon: "location_map-big",
    component: FieldRoof,
    layout: "/admin",
  }, 
  {
    path: "/FieldFloor",
    name: "Field Floor",
    icon: "location_map-big",
    component: FieldFloor,
    layout: "/admin",
  }, {
    path: "/FieldUser",
    name: "Field User",
    icon: "location_map-big",
    component: AddNewUser,
    layout: "/admin",
  }, 
  //  {
  //   path: "/newuser",
  //   name: "Users",
  //   icon: "users_circle-08",
  //   component: AddNewUser,
  //   layout: "/admin",
  // },
  {
    pro: true,
    path: "/upgrade",
    name: "Upgrade to PRO",
    icon: "objects_spaceship",
    component: Upgrade,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "ui-1_bell-53",
    component: Notifications,
    layout: "/admin",
  },
  {
    path: "/user-page",
    name: "User Profile",
    icon: "users_single-02",
    component: UserPage,
    layout: "/admin",
  },

  {
    path: "/extended-tables",
    name: "Table List",
    icon: "files_paper",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "design-2_ruler-pencil",
    component: Typography,
    layout: "/admin",
  }, {
    path: "/icons",
    name: "Icons",
    icon: "design_image",
    component: Icons,
    layout: "/admin",
  },
  {
    pro: true,
    path: "/upgrade",
    name: "Upgrade to PRO",
    icon: "objects_spaceship",
    component: Upgrade,
    layout: "/admin",
  },

];
export default dashRoutes;
