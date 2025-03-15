import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export const Sidebar = [
    {
        title: 'Home',
        icon: <HomeIcon />,
        link: '/Homepage'
    },
    {
        title: 'Transactions',
        icon: <AccountBalanceIcon />,
        link: '/Transactions'
    },
    {
        title: 'Accounts',
        icon: <CreditCardIcon />,
        link: '/Accounts'
    },
    {
        title: 'Budgets',
        icon: <AttachMoneyIcon />,
        link: '/Budgets'
    }
];
