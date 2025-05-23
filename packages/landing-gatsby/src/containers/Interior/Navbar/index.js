import React from 'react';
//, { useContext }
import PropTypes from 'prop-types';
//import { useStaticQuery, graphql } from 'gatsby';
import { openModal, closeModal } from '@redq/reuse-modal';
//import { Icon } from 'react-icons-kit';
//import { androidClose } from 'react-icons-kit/ionicons/androidClose';
import NavbarWrapper from 'common/components/Navbar';
//import Drawer from 'common/components/Drawer';
import Button from 'common/components/Button';
import Logo from 'common/components/UIElements/Logo';
//import HamburgMenu from 'common/components/HamburgMenu';
//import ScrollSpyMenu from 'common/components/ScrollSpyMenu';
//import { DrawerContext } from 'common/contexts/DrawerContext';
import { Container } from './navbar.style';
//import SearchPanel from '../SearchPanel';
//import LoginModal from '../LoginModal';
//import Copyright from '../Copyright';

//import logo from 'common/assets/image/interior/logo.svg';
import logo from 'common/assets/image/interior/IbexImages/IbexBionomicsLogo2.png';

{/**
const CloseModalButton = () => (
  <Button
    className="modalCloseBtn"
    variant="fab"
    onClick={() => closeModal()}
    icon={<i className="flaticon-plus-symbol" />}
  />
);

const CloseModalButtonAlt = () => (
  <Button
    className="modalCloseBtn alt"
    variant="fab"
    onClick={() => closeModal()}
    icon={<i className="flaticon-plus-symbol" />}
  />
);
 */}
const Navbar = ({ navbarStyle, logoStyle }) => {
  {/**
  const data = useStaticQuery(graphql`
    query {
      interiorJson {
        menuData {
          path
          label
          offset
        }
        socialProfile {
          id
          icon
          link
        }
      }
    }
  `);

  const { state, dispatch } = useContext(DrawerContext);

  const handleSearchModal = () => {
    openModal({
      config: {
        className: 'search-modal',
        disableDragging: true,
        width: '100%',
        height: '100%',
        animationFrom: { transform: 'translateY(100px)' },
        animationTo: { transform: 'translateY(0)' }, //
        transition: {
          mass: 1,
          tension: 180,
          friction: 26,
        },
      },
      component: SearchPanel,
      componentProps: {},
      closeComponent: CloseModalButtonAlt,
      closeOnClickOutside: false,
    });
  };

  const handleLoginModal = () => {
    openModal({
      config: {
        className: 'login-modal',
        disableDragging: true,
        width: '100%',
        height: '100%',
        animationFrom: { transform: 'translateY(100px)' },
        animationTo: { transform: 'translateY(0)' },
        transition: {
          mass: 1,
          tension: 180,
          friction: 26,
        },
      },
      component: LoginModal,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: false,
    });
  };

  const toggleHandler = () => {
    dispatch({
      type: 'TOGGLE',
    });
  }; */}

  return (
    <NavbarWrapper {...navbarStyle}>
      <Container>
        <Logo
          href="/"
          logoSrc={logo}
          title="Interior"
          logoStyle={logoStyle}
        />
        <div className="info_container">
          {/**
          <div style={{ display: 'flex'}}>
            <p>
              305-
            </p>
            <p>
              772-
            </p>
            <p>
              5111
            </p>
          </div> */}
          <div style={{ display: 'flex'}}>
            <a href={"mailto:info@IBEXBionomics.com"} >
              <p >
                info@IBEXBionomics.com
              </p>
            </a>
          </div>
        </div>
        {/**
          <Button
            variant="textButton"
            onClick={handleSearchModal}
            icon={<i className="flaticon-magnifying-glass" />}
            aria-label="search button"
          />
          <Button
            variant="textButton"
            onClick={handleLoginModal}
            icon={<i className="flaticon-user" />}
            aria-label="registration button"
          />
          <Drawer
            width="420px"
            placement="right"
            drawerHandler={<HamburgMenu />}
            open={state.isOpen}
            toggleHandler={toggleHandler}
          >
            <button
              type="button"
              className={state.isOpen ? 'active' : ''}
              onClick={toggleHandler}
              aria-label="drawer toggle button"
            >
              <Icon icon={androidClose} />
            </button>
            <ScrollSpyMenu
              menuItems={data.interiorJson.menuData}
              drawerClose={true}
              offset={-100}
            />
            <Copyright data={data.interiorJson.socialProfile} />
          </Drawer>
        </div> */}
      </Container>
    </NavbarWrapper>
  );
};

Navbar.propTypes = {
  navbarStyle: PropTypes.object,
  logoStyle: PropTypes.object,
};

Navbar.defaultProps = {
  navbarStyle: {
    minHeight: '70px',
  },
  logoStyle: {
    width: '128px',
    height: 'auto',
  },
};

export default Navbar;
