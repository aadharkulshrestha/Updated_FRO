import React from 'react';

import { Icon } from '@chakra-ui/react';
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
} from 'react-icons/md';

// Admin Imports
import MainDashboard from 'views/admin/default';
import AboutUs from '../src/views/admin/default/components/tempAbout';
import ContactUs from './views/admin/default/components/tempContact';
import MissionandVision from './views/admin/default/components/Mision';
import Highlights from './views/admin/default/components/Highlight';

// Auth Imports
import SignInCentered from 'views/auth/signIn';

const routes = [
  {
    name: 'Main Dashboard',
    layout: '/admin',
    path: '/default',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <MainDashboard />,
  },
  {
    name: 'About Us',
    layout: '/admin',
    path: '/aboutUs',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <AboutUs />,
  },
  {
    name: 'Mission and Vision',
    layout: '/admin',
    path: '/MissionandVission',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <MissionandVision />,
  },
  {
    name: 'Highlights',
    layout: '/admin',
    path: '/Highlights',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <Highlights />,
  },

  {
    name: 'Contact Us',
    layout: '/admin',
    path: '/contactUs',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <ContactUs />,
  }
  // {
  //   name: 'NFT Marketplace',
  //   layout: '/admin',
  //   path: '/nft-marketplace',
  //   icon: (
  //     <Icon
  //       as={MdOutlineShoppingCart}
  //       width="20px"
  //       height="20px"
  //       color="inherit"
  //     />
  //   ),
  //   component: <NFTMarketplace />,
  //   secondary: true,
  // },
  // {
  //   name: 'Data Tables',
  //   layout: '/admin',
  //   icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
  //   path: '/data-tables',
  //   component: <DataTables />,
  // },
  // {
  //   name: 'Profile',
  //   layout: '/admin',
  //   path: '/profile',
  //   icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
  //   component: <Profile />,
  // },
  // {
  //   name: 'Sign In',
  //   layout: '/auth',
  //   path: '/sign-in',
  //   icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
  //   component: <SignInCentered />,
  // },
  // {
  //   name: 'RTL Admin',
  //   layout: '/rtl',
  //   path: '/rtl-default',
  //   icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
  //   component: <RTL />,
  // },
];

export default routes;
