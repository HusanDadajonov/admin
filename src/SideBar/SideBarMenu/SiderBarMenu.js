import AnalyticsTwoToneIcon from '@mui/icons-material/AnalyticsTwoTone';
import HealthAndSafetyTwoToneIcon from '@mui/icons-material/HealthAndSafetyTwoTone';
import AssignmentIndTwoToneIcon from '@mui/icons-material/AssignmentIndTwoTone';
import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import ReceiptTwoToneIcon from '@mui/icons-material/ReceiptTwoTone';
import BackupTableTwoToneIcon from '@mui/icons-material/BackupTableTwoTone';
import SmartToyTwoToneIcon from '@mui/icons-material/SmartToyTwoTone';
import { Box, List, Divider, styled } from '@mui/material';
import { useLocation, matchPath } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Fragment } from 'react';
import SidebarMenuItem from './SidebarMenuItem/SidebarMenuItem';

function SiderBarMenu() {
    const menuItems = [
        {
          heading: 'General',
          items: [
            {
              name: 'Store',
              icon: BackupTableTwoToneIcon,
              link: '/store',
              items: [
                {
                  link: '/store',
                  name: 'Main'
                },
                {
                  link: 'store/allProducts',
                  name: 'All products'
                },
                {
                  link: 'store/allProducts/create',
                  name: 'Create new Product'
                }
              ]
            },
            {
              name: 'Dashboards',
              icon: SmartToyTwoToneIcon,
              link: '/collapsed-sidebar/dashboards',
              items: [
                {
                  name: 'Reports',
                  link: 'dashboards/reports',
                  badge: '',
                  badgeTooltip: 'Reports Dashboard - version 3.0'
                },
                {
                  name: 'Expenses',
                  link: 'dashboards/expenses',
                  badge: '',
                  badgeTooltip: 'Expenses Dashboard - version 3.0'
                },
                {
                  name: 'Products',
                  link: 'dashboards/products',
                  badge: '',
                  badgeTooltip: 'Products Dashboard - version 3.0'
                },
                {
                  name: 'Statistics',
                  link: 'dashboards/statistics',
                  badge: '',
                  badgeTooltip: 'Statistics Dashboard - version 3.0'
                },
                {
                  name: 'Automation',
                  link: 'dashboards/automation'
                },
                {
                  name: 'Analytics',
                  link: 'dashboards/analytics'
                },
                {
                  name: 'Banking',
                  link: 'dashboards/banking'
                },
                {
                  name: 'Commerce',
                  link: 'dashboards/commerce'
                },
                {
                  name: 'Crypto',
                  link: 'dashboards/crypto'
                },
                {
                  name: 'Finance',
                  link: 'dashboards/finance'
                },
                {
                  name: 'Fitness',
                  link: 'dashboards/fitness'
                },
                {
                  name: 'Doctors',
                  link: 'dashboards/healthcare/doctor'
                },
                {
                  name: 'Hospital',
                  link: 'dashboards/healthcare/hospital'
                },
                {
                  name: 'Helpdesk',
                  link: 'dashboards/helpdesk'
                },
                {
                  name: 'Learning',
                  link: 'dashboards/learning'
                },
                {
                  name: 'Monitoring',
                  link: 'dashboards/monitoring'
                },
                {
                  name: 'Tasks',
                  link: 'dashboards/tasks'
                }
              ]
            },
            {
              name: 'Data Display',
              icon: HealthAndSafetyTwoToneIcon,
              badge: '',
              link: '/collapsed-sidebar/blocks',
              items: [
                {
                  name: 'Charts large',
                  link: 'blocks/charts-large'
                },
                {
                  name: 'Charts small',
                  link: 'blocks/charts-small'
                },
                {
                  name: 'Composed cards',
                  link: 'blocks/composed-cards'
                },
                {
                  name: 'Grids',
                  link: 'blocks/grids'
                },
                {
                  name: 'Icon cards',
                  link: 'blocks/icon-cards'
                },
                {
                  name: 'Image cards',
                  link: 'blocks/image-cards'
                },
                {
                  name: 'Lists large',
                  link: 'blocks/lists-large'
                },
                {
                  name: 'Lists small',
                  link: 'blocks/lists-small'
                },
                {
                  name: 'Navigation',
                  link: 'blocks/navigation'
                },
                {
                  name: 'Profile cards',
                  link: 'blocks/profile-cards'
                },
                {
                  name: 'Progress circular',
                  link: 'blocks/progress-circular'
                },
                {
                  name: 'Progress horizontal',
                  link: 'blocks/progress-horizontal'
                },
                {
                  name: 'Sparklines large',
                  link: 'blocks/sparklines-large'
                },
                {
                  name: 'Sparklines small',
                  link: 'blocks/sparklines-small'
                },
                {
                  name: 'Statistics',
                  link: 'blocks/statistics'
                }
              ]
            },
            {
              name: 'Applications',
              icon: AnalyticsTwoToneIcon,
              link: '/collapsed-sidebar/applications',
              items: [
                {
                  name: 'Calendar',
                  link: 'applications/calendar'
                },
                {
                  name: 'File Manager',
                  link: 'applications/file-manager'
                },
                {
                  name: 'Jobs Platform',
                  link: 'applications/jobs-platform'
                },
                {
                  name: 'Mailbox',
                  link: 'applications/mailbox/inbox'
                },
                {
                  name: 'Messenger',
                  link: 'applications/messenger'
                },
                {
                  name: 'Projects Board',
                  link: 'applications/projects-board'
                }
              ]
            }
          ]
        },
        {
          heading: 'Management',
          items: [
            {
              name: 'Users',
              icon: AssignmentIndTwoToneIcon,
              link: '/collapsed-sidebar/management/users',
              items: [
                {
                  name: 'List',
                  link: 'management/users/list'
                },
                {
                  name: 'User Profile',
                  link: 'management/users/single'
                }
              ]
            },
          
            {
              name: 'Commerce',
              icon: StorefrontTwoToneIcon,
              link: '/collapsed-sidebar/management/commerce',
              items: [
                {
                  name: 'Shop',
                  link: 'management/commerce/shop'
                },
                {
                  name: 'List',
                  link: 'management/commerce/products/list'
                },
                {
                  name: 'Details',
                  link: 'management/commerce/products/single/1'
                },
                {
                  name: 'Create',
                  link: 'management/commerce/products/create'
                }
              ]
            },
            {
              name: 'Invoices',
              icon: ReceiptTwoToneIcon,
              link: '/collapsed-sidebar/management/invoices',
              items: [
                {
                  name: 'List',
                  link: 'management/invoices/list'
                },
                {
                  name: 'Details',
                  link: 'management/invoices/single'
                }
              ]
            },
            {
              name: 'Settings',
              icon: AccountTreeTwoToneIcon,
              link: '/management/settings'
            }
          ]
        }
    ];

    const DividerWrapper = styled(Divider)(
        ({ theme }) => `
        background: ${theme.sidebar.menuItemIconColor};
        margin-left: ${theme.spacing(3)};
        margin-right: ${theme.spacing(3)};
        opacity: .25;
      `
      );
      
      const MenuWrapper = styled(Box)(
        ({ theme }) => `
      
        &:last-of-type + .MuiDivider-root {
            height: 0;
        }
      
        .MuiList-root {
          padding: ${theme.spacing(1, 0)};
      
          .MuiDivider-root {
            background: ${theme.sidebar.menuItemIconColor};
            margin-left: ${theme.spacing(3)};
            margin-right: ${theme.spacing(3)};
          }
      
          & > .MuiList-root {
            padding: 0;
          }
        }
      `
      );
      
      const SubMenuWrapper = styled(Box)(
        ({ theme }) => `
          .MuiList-root {
            padding: 0;
            
            .MuiList-root .MuiList-root .MuiListItem-root .MuiIconButton-root {
              font-weight: normal !important;
            }
      
            .MuiListItem-root {
              padding: 1px 0;
              justify-content: center;
          
              .MuiIconButton-root {
                display: flex;
                color: ${theme.sidebar.menuItemColor};
                background-color: ${theme.sidebar.menuItemBg};
                width: ${theme.spacing(6)};
                height: ${theme.spacing(6)};
                transition: ${theme.transitions.create(['all'])};
                justify-content: center;
                font-size: ${theme.typography.pxToRem(13)};
                padding: 0;
                position: relative;
      
                .name-wrapper {
                  display: none;
                }
      
                .MuiBadge-root {
                  position: absolute;
                  right: 10px;
                  top: 11px;
      
                  .MuiBadge-standard {
                    background: ${theme.colors.primary.main};
                    font-size: ${theme.typography.pxToRem(10)};
                    font-weight: bold;
                    text-transform: uppercase;
                    color: ${theme.palette.primary.contrastText};
                  }
                }
        
                .MuiSvgIcon-root {
                  transition: ${theme.transitions.create(['color'])};
                  font-size: ${theme.typography.pxToRem(28)};
                  color: ${theme.sidebar.menuItemIconColor};
                }
      
                &.Mui-active,
                &:hover {
                  background-color: ${theme.sidebar.menuItemBgActive};
                  color: ${theme.sidebar.menuItemColorActive};
      
                  .MuiSvgIcon-root {
                      color: ${theme.sidebar.menuItemIconColorActive};
                  }
                }
              }
            }
          }
      `
      );

      const reduceChildRoutes = ({ ev, path, item }) => {
        const key = uuidv4();
      
        const exactMatch = item.link
          ? !!matchPath(
              {
                path: item.link,
                end: true
              },
              path
            )
          : false;
      
        if (item.items) {
          const partialMatch = item.link
            ? !!matchPath(
                {
                  path: item.link,
                  end: false
                },
                path
              )
            : false;
      
          ev.push(
            <SidebarMenuItem
              key={key}
              active={partialMatch}
              open={partialMatch}
              name={item.name}
              icon={item.icon}
              link={item.link}
              badge={item.badge}
            >
              {renderSidebarMenuItems({
                path,
                items: item.items
              })}
            </SidebarMenuItem>
          );
        } else {
          ev.push(
            <SidebarMenuItem
              key={key}
              active={exactMatch}
              name={item.name}
              link={item.link}
              badge={item.badge}
              icon={item.icon}
            />
          );
        }
      
        return ev;
      };
      
      const renderSidebarMenuItems = ({ items, path }) => (
        <SubMenuWrapper>
          <List component="div">
            {items.reduce((ev, item) => reduceChildRoutes({ ev, item, path }), [])}
          </List>
        </SubMenuWrapper>
      );

  return (
      <>
        {menuItems.map((section) => (
            <Fragment key={uuidv4()}>
                <MenuWrapper>
                <List component="div">
                    {renderSidebarMenuItems({
                    items: section.items,
                    path: "/"
                    })}
                </List>
                </MenuWrapper>
                <DividerWrapper />
            </Fragment>
        ))}
      </>
    
  )
}

export default  SiderBarMenu;
