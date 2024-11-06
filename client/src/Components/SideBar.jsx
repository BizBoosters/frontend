import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {List} from "@material-tailwind/react";
import {
  HomeIcon as HomeOutlineIcon,
  UserGroupIcon,
  BanknotesIcon,
  ChatBubbleOvalLeftIcon,
} from "@heroicons/react/24/outline";
import SidebarIcon from '../assets/newSide.svg';
import SidebarIconClosed from '../assets/newSideclosed.svg';

export function SidebarWithSearch() {
  const [collapsed, setCollapsed] = useState(false);

  const location = useLocation(); // Get the current route location
  const activePath = location.pathname;

  const toggleSidebar = () => setCollapsed(!collapsed);
  const [activeItem, setActiveItem] = useState(1);
  // const menuItems = [
  //   { id: 1, label: "Home", icon: HomeOutlineIcon, path: "/" },
  //   { id: 2, label: "Blogs", icon: ChatBubbleOvalLeftIcon, path: "/blogs" },
  //   { id: 3, label: "Community", icon: UserGroupIcon, path: "/community" },
  //   { id: 4, label: "Raise Funds", icon: BanknotesIcon, path: "/raise-funds" },
  // ];

  return (
    <div className={`relative border-r-[1px] h-screen ${collapsed ? "w-16" : "w-64"} transition-width duration-300`}>
      <div className={`h-full w-1/5 max-w-[20rem] p-4 pt-0 shadow-xl shadow-blue-gray-900/5 rounded-none ${collapsed ? "w-16" : "w-64"}`}>

        <div className="h-[81px] items-center flex">
          <button
            onClick={toggleSidebar}
            className=" pb-0 pt-0 pl-4 text-blue-gray-500 hover:text-blue-gray-900"
          >
            {collapsed ? (
              <img src={SidebarIconClosed} className="w-6 h-6"alt="Toggle Sidebar" />
            ) : (
              <img src={SidebarIcon} className="size-6" alt="Toggle Sidebar" />
            )}
          </button>
        </div>

        <List className="font-primary">
          <Link to="/home" onClick={() => setActiveItem(1)}>
            <div className={`menu-item flex items-center gap-2 p-2 h-10 rounded-lg hover:bg-blue-100  ${activePath === "/home" ? "bg-blue-500 text-white" : "bg-default"}  ${collapsed === true ? "w-fit" : ""}`}>
              <HomeOutlineIcon className="size-5" />
              {!collapsed && "Home"}
            </div>
          </Link>
          <Link to="/blogs" onClick={() => setActiveItem(2)}>
            <div className={`menu-item flex items-center gap-2 p-2 h-10 rounded-lg hover:bg-blue-100 ${activePath === "/blogs" ? "bg-blue-500 text-white" : "bg-default"}  ${collapsed === true ? "w-fit" : ""}`}>
              <ChatBubbleOvalLeftIcon className="size-5" />
              {!collapsed && "Blogs"}
            </div>
          </Link>
          <Link to="/community" onClick={() => setActiveItem(3)}>
            <div className={`menu-item flex items-center gap-2 p-2 h-10 rounded-lg hover:bg-blue-100 ${activePath === "/community" ? "bg-blue-500 text-white" : "bg-default"}  ${collapsed === true ? "w-fit" : ""}`}>
              <UserGroupIcon className="size-5" />
              {!collapsed && "Community"}
            </div>
          </Link>
          <Link to="/raise-funds" onClick={() => setActiveItem(4)}>
            <div className={`menu-item flex items-center gap-2 p-2 h-10 rounded-lg hover:bg-blue-100 ${activePath === "/raise-funds" ? "bg-blue-500 text-white" : "bg-default"}  ${collapsed === true ? "w-fit" : ""}`}>
              <BanknotesIcon className="size-5" />
              {!collapsed && "Raise Funds"}
            </div>
          </Link>
        </List>
      </div>
    </div>
  );
}


{/* <Accordion
            open={open === 1}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
              />
            }
          >
            <ListItem className="p-0" selected={open === 1}>
              <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
                <ListItemPrefix>
                  <PresentationChartBarIcon className="h-5 w-5" />
                </ListItemPrefix>
                <Typography color="blue-gray" className="mr-auto font-normal">
                  Dashboard
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Analytics
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Reporting
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Projects
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 2}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
              />
            }
          >
            <ListItem className="p-0" selected={open === 2}>
              <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
                <ListItemPrefix>
                  <ShoppingBagIcon className="h-5 w-5" />
                </ListItemPrefix>
                <Typography color="blue-gray" className="mr-auto font-normal">
                  E-Commerce
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Orders
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Products
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion> */}
          {/* <hr className="my-2 border-blue-gray-50" /> */}


          // import React, { useState } from "react";
          // import {
          //   Card,
          //   Typography,
          //   List,
          //   ListItem,
          //   ListItemPrefix,
          //   IconButton,
          //   ListItemSuffix,
          //   Chip,
          //   Accordion,
          //   AccordionHeader,
          //   AccordionBody,
          //   Alert,
          //   Input,
          // } from "@material-tailwind/react";
          // import {
          //   HomeIcon as HomeSolidIcon,
          //   ChevronLeftIcon, 
          
          // } from "@heroicons/react/24/solid";
          // import {
          //   HomeIcon as HomeOutlineIcon,
          //   UserGroupIcon,
          //   BanknotesIcon,
          //   ChatBubbleOvalLeftIcon,
          // } from "@heroicons/react/24/outline";
          // import SidebarIcon from '../assets/newSide.svg';
          // import SidebarIconClosed from '../assets/newSideclosed.svg';
          
          // export function SidebarWithSearch() {
          //   const [open, setOpen] = useState(0);
          //   const [openAlert, setOpenAlert] = useState(true);
          
          //   const [collapsed, setCollapsed] = useState(false);
          //   const toggleSidebar = () => setCollapsed(!collapsed);
          //   const [activeItem, setActiveItem] = useState(1);
           
          //   const handleOpen = (value) => {
          //     setOpen(open === value ? 0 : value);
          //   };
           
          //   return (
          //     <div className={`relative h-full ${collapsed ? "w-16": "w-64"} transition-width duration-300 `}>
          //       <Card className={`h-full w-1/5 max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 rounded-none ${collapsed ? "w-16": "w-64"}`}>
          //         <div className="mb-2 flex items-center gap-4 p-4">
          //           <button
          //             onClick={toggleSidebar}
          //             className="absolute top-6 text-blue-gray-500 hover:text-blue-gray-900"
          //           >
          //             {collapsed? (
          //               <img src={SidebarIconClosed} className="h-5 w-5"/>
          //             ) : (
          //               <img src={SidebarIcon} className="h-5 w-5"/>
          //             )}
          //           </button>
          //           {/* <img src={Sidee} alt="sidebar collapsible icon" className="h-5 w-5" /> */}
          //           {/* {!collapsed && (
          //             <Typography variant="h5" color="blue-gray">
          //             BizBoost
          //             </Typography>
          //           )} */}
          //         </div>
                  
          //         {/* <div className="p-2">
          //           <Input icon={<MagnifyingGlassIcon className="h-5 w-5" />} label="Search" />
          //         </div> */}
          //         <List className="font-primary">
          //           <ListItem>
          //             <HomeOutlineIcon className="size-5"/>
          //             {!collapsed && "Home"}
          //           </ListItem>
          //           <ListItem>
          //             <ListItemPrefix>
          //               <ChatBubbleOvalLeftIcon className="h-5 w-5" />
          //             </ListItemPrefix>
          //             {!collapsed && "Blogs"}
          //           </ListItem>
          //           <ListItem>
          //             <ListItemPrefix>
          //             <UserGroupIcon className="h-5 w-5" />
          //             </ListItemPrefix>
          //             {!collapsed && "Community"}
          //           </ListItem>
          //           <ListItem>
          //             <ListItemPrefix>
          //               <BanknotesIcon className="h-5 w-5" />
          //             </ListItemPrefix>
          //             {!collapsed && "Raise Funds"}
          //           </ListItem>
          //         </List>
          //       </Card>
          //     </div>
          //   );
          // }