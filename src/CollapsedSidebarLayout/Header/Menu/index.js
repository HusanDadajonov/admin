import {
  Menu,
  MenuItem,
} from '@mui/material';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { NavLink } from 'react-router-dom';


function HeaderMenu() {
  const { t } = useTranslation();

  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Menu
        disableScrollLock
        anchorEl={ref.current}
        onClose={handleClose}
        open={isOpen}
      >
        <MenuItem component={NavLink} to="/">
          {t('Features tour')}
        </MenuItem>
        <MenuItem component={NavLink} to="/docs/introduction">
          {t('Getting started guide')}
        </MenuItem>
        <MenuItem component={NavLink} to="/docs/contact-support">
          {t('Contact support')}
        </MenuItem>
      </Menu>
    </>
  );
}

export default HeaderMenu;
