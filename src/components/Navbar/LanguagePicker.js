import React from 'react';
import { useIntl } from 'react-intl';
import { Link } from 'gatsby';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import LanguageIcon from '@material-ui/icons/Language';

const languages = [
  {
    code: 'en',
    label: 'English',
  },
  {
    code: 'zh',
    label: '中文',
  },
];

function LanguageItem({ code, label, pathname = '/' }) {
  return (
    <MenuItem
      component={Link}
      to={code === 'en' ? pathname : `/${code}${pathname}`}
    >
      {label}
    </MenuItem>
  );
}

function LanguagePicker({ pathname }) {
  const intl = useIntl();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = React.useCallback(event => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleMenuClose = React.useCallback(() => {
    setAnchorEl(null);
  }, []);

  const currentLanguage = React.useMemo(() => {
    return languages.find(lang => lang.code === intl.locale) || languages[0];
  }, [intl]);

  return (
    <div>
      <Button
        aria-controls="language-picker"
        aria-haspopup="true"
        onClick={handleMenuOpen}
        startIcon={<LanguageIcon />}
      >
        {currentLanguage.label}
      </Button>
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        {languages.map(({ code, label }) => (
          <LanguageItem
            key={code}
            code={code}
            label={label}
            pathname={pathname}
          />
        ))}
      </Menu>
    </div>
  );
}

export default LanguagePicker;
