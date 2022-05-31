import React from 'react'
import { Box,styled,  } from '@mui/material';
import SiderBarMenu from './SideBarMenu/SiderBarMenu';

function SideBar() {
    const SidebarWrapper = styled(Box)(
        ({ theme }) => `
              width: ${theme.spacing(12)};
              color: ${theme.sidebar.textColor};
              background: ${theme.sidebar.background};
              box-shadow: ${theme.sidebar.boxShadow};
              height: 100%;
              
              @media (min-width: ${theme.breakpoints.values.md}px) {
                top: 0;
                left: 0;
                position: fixed;
                z-index: 10;
                border-top-right-radius: ${theme.general.borderRadius};
                border-bottom-right-radius: ${theme.general.borderRadius};
              }
      `
      );
      
      const TopSection = styled(Box)(
        ({ theme }) => `
              display: flex;
              height: 80px;
              align-items: center;
              margin: ${theme.spacing(0, 2)};
              border-bottom: ${theme.sidebar.dividerBg} solid 1px;
      `
      );

  return (
    <SidebarWrapper
        sx={{
          display: { xs: 'none', md: 'inline-block' }
        }}
      >
        <TopSection>
          {/* <Logo /> */}
        </TopSection>
        <Box
          sx={{
            height: 'calc(100% - 80px)'
          }}
        >
        <SiderBarMenu />
        </Box>
    </SidebarWrapper>
  )
}

export default SideBar