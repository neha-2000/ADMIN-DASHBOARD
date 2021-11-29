import React from 'react'

const MenuHook = () => {
  const menuItems = [
    {
      name: 'Dashboard',
      exact: true,
      to: '/',
      iconClassName: 'bi bi-clipboard-data'
    },
    {
      name: 'Orders', to: '/orders',
      exact: true,
      iconClassName: 'bi bi-cart2',
     } ,
    {
      name: 'Customers', to: '/customers',
      exact:true,
      iconClassName: 'bi bi-people',
      submenu: [
        {
          name: "Customer Roles",
          to: '/customers/customerRoles'
        },
        {
          name: "Vendors",
          to: '/customers/vendor'
        }]
    },
    { name: 'Content Management', to: '/management', iconClassName: 'bi bi-boxes' },
    { name: 'Configuration', to: '/configuration', iconClassName: 'bi bi-gear' },
    { name: 'System', to: '/system', iconClassName: 'bi bi-exclude' },
    { name: 'Reports', to: '/reports', iconClassName: 'bi bi-graph-up-arrow' },
    { name: 'Help', to: '/help', iconClassName: 'bi bi-question-circle' }

  ]
  return { menuItems }
}

export default MenuHook
