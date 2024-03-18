/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { Space } from 'antd';
// material-ui
import { useTheme } from '@mui/material/styles';
import { AppBar, IconButton, Toolbar, useMediaQuery, Button } from '@mui/material';

// project import
import AppBarStyled from './AppBarStyled';
import HeaderContent from './HeaderContent';

// assets
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

// ==============================|| MAIN LAYOUT - HEADER ||============================== //
const Header = ({ open, handleDrawerToggle }) => {
    const theme = useTheme();
    const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));

    const iconBackColor = 'grey.100';
    const iconBackColorOpen = 'grey.200';

    // console.log(open);
    // common header
    const mainHeader = (
        <Toolbar>
            {/* <IconButton
                disableRipple
                aria-label="open drawer"
                onClick={handleDrawerToggle}
                edge="start"
                color="secondary"
                sx={{ color: 'text.primary', bgcolor: open ? iconBackColorOpen : iconBackColor, ml: { xs: 0, lg: 0 } }}
            >
                {!open ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                
            </IconButton> */}
            <HeaderContent />
        </Toolbar>
    );

    // app-bar params
    const appBar = {
        position: 'fixed',
        color: 'inherit',
        elevation: 0,
        sx: {
            borderBottom: `1px solid ${theme.palette.divider}`
            // boxShadow: theme.customShadows.z1
        }
    };

    return (
        <>
            <Space>
                {!matchDownMD ? (
                    <AppBarStyled open={false} {...appBar}>
                        {mainHeader}
                    </AppBarStyled>
                ) : (
                    <AppBar {...appBar}>{mainHeader}</AppBar>
                )}
            </Space>
        </>
    );
};

Header.propTypes = {
    open: PropTypes.bool,
    handleDrawerToggle: PropTypes.func
};

export default Header;
