import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
//import { Icon } from 'react-icons-kit';
//import { facebook } from 'react-icons-kit/fa/facebook';
//import { dribbble } from 'react-icons-kit/fa/dribbble';
//import { googlePlus } from 'react-icons-kit/fa/googlePlus';
//import { skype } from 'react-icons-kit/fa/skype';
//import { twitter } from 'react-icons-kit/fa/twitter';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
//import Heading from 'common/components/Heading';
import Logo from 'common/components/UIElements/Logo';
import Container from 'common/components/UI/Container';
import FooterWrapper, {
  CurvIcon,
  //List,
  //ListItem,
  SocialList,
} from './footer.style';

//import footerlogo from 'common/assets/image/interior/IbexImages/IbexBionomicsLogo2.png';


/*const socialLinks = [
  {
    id: 1,
    icon: <Icon icon={facebook} />,
    name: 'facebook',
    link: '#',
  },
  {
    id: 2,
    icon: <Icon icon={dribbble} />,
    name: 'dribbble',
    link: '#',
  },
  {
    id: 3,
    icon: <Icon icon={googlePlus} />,
    name: 'googlePlus',
    link: '#',
  },
  {
    id: 4,
    icon: <Icon icon={skype} />,
    name: 'skype',
    link: '#',
  },
  {
    id: 5,
    icon: <Icon icon={twitter} />,
    name: 'twitter',
    link: '#',
  },
];*/

const Footer = ({ 
  row, 
  //col, 
  colOne, 
  //colTwo 
}) => {
  const data = useStaticQuery(graphql`
    query {
      interiorJson {
        footerData {
          logo {
            publicURL
          }
          mail
          phone
          menuWidgets {
            id
            title
            menu {
              id
              text
              link
            }
          }
        }
      }
    }
  `);
  const { logo, mail, phone, 
    //menuWidgets 
    } = data.interiorJson.footerData;
 
  return (
    <Fragment>
      {/***/}<CurvIcon>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 222.29">
          <g>
            <g>
              <path d="M0,222.29S547.82,11.93,1248.06.64C1867.75-9.36,1920,101.3,1920,101.3v121Z" />
            </g>
          </g>
        </svg>
      </CurvIcon>

      <FooterWrapper>
        <Container width="1330px">
          <Box className="row" {...row}>
            <Box className="col-one" {...colOne}>
              <li >
                <Logo
                className="logo"
                href="/"
                logoSrc={logo.publicURL}
                title="Interior"
                style={{backgroundColor: '#FFFFFF',
                mozBorderRadius: "120px / 70px",
                webkitBorderRadius: "120px / 70px",
                borderRadius: "120px / 70px",
                boxShadow: "0 0 15px 15px #FFFFFF"}}
                />
                <a href={"mailto:info@IBEXBionomics.com"} >
                  <Text className="text" content={mail} />
                </a>
                <Text className="text" content={phone} />
              </li>
              
              <SocialList>
                {/**
                {socialLinks.map((item) => (
                  <li className={item.name} key={`link-key${item.id}`}>
                    <a aria-label={item.name} href={item.link}>
                      {item.icon}
                    </a>
                  </li>
                ))} */}
              </SocialList>
            </Box>
            {/* End of logo column */}
                  {/**
            <Box className="col-two" {...colTwo}>
              {menuWidgets.map((widget) => (
                <Box
                  className="col"
                  {...col}
                  key={`footer_widget-key${widget.id}`}
                >
                  <Heading
                    className="widget_title"
                    as="h3"
                    content={widget.title}
                  />
                  <List>
                    {widget.menu.map((item) => (
                      <ListItem key={`list__item-${item.id}`}>
                        <a href={item.link}>{item.text}</a>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              ))}
            </Box>
             */}
            {/* End of List column */}
          </Box>
          {/* End of widgets row */}
          <Box className="row copyright" {...row}>
            <Text className="text" content="copyright 2021 Ibex Bionomics" />
            {/**
            <p>
              Built & designed with
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11.243"
                height="10.378"
                viewBox="0 0 11.243 10.378"
              >
                <path
                  id="f141"
                  d="M10.324-44.135a3.191,3.191,0,0,1,.919,2.311,3.191,3.191,0,0,1-.919,2.311l-4.7,4.892-4.7-4.892A3.191,3.191,0,0,1,0-41.825a3.191,3.191,0,0,1,.919-2.311A2.618,2.618,0,0,1,2.905-45a2.618,2.618,0,0,1,1.986.865l.73.757.757-.757A2.6,2.6,0,0,1,8.351-45,2.6,2.6,0,0,1,10.324-44.135Zm0,0"
                  transform="translate(0 45)"
                  fill="#f4291e"
                />
              </svg>
            </p> */}
          </Box>
          {/* End of copyright row */}
        </Container>
      </FooterWrapper>
    </Fragment>
  );
};

// Footer style props
Footer.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  colOne: PropTypes.object,
  colTwo: PropTypes.object,
};

// Footer default style
Footer.defaultProps = {
  // Footer row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  // Footer col one style
  colOne: {
    width: ['100%', '30%', '35%', '28%'],
    mt: [0, '13px', '0'],
    mb: ['30px', 0],
    pl: ['15px', 0],
    pr: ['15px', '15px', 0],
  },
  // Footer col two style
  colTwo: {
    width: ['100%', '70%', '65%', '72%'],
    flexBox: true,
    flexWrap: 'wrap',
  },
  // Footer col default style
  col: {
    width: ['100%', '50%', '50%', '25%'],
    pl: '15px',
    pr: '15px',
    mb: '30px',
  },
};

export default Footer;
