import React from 'react';
//{ Fragment, useState, useEffect }
import { useStaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
//import { Icon } from 'react-icons-kit';
//import { iosEmailOutline } from 'react-icons-kit/ionicons/iosEmailOutline';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
//import Button from 'common/components/Button';
//import Input from 'common/components/Input';
//import GlideCarousel from 'common/components/GlideCarousel';
//import GatsbyImage from 'common/components/GatsbyImage';
//import GlideSlide from 'common/components/GlideCarousel/glideSlide';
//import { CircleLoader } from '../interior.style';
import BannerWrapper, {
  Container,
  ContentArea,
  //HighlightedText,
  //FormWrapper,
  //ButtonGroup,
  //CarouselArea,
} from './banner.style';

import leafimages from '../../../common/assets/image/interior/IbexImages/S2/LeafImages.png'
import IBEXLogo from '../../../common/assets/image/interior/IbexImages/IbexBionomicsLogo.png'

const S2Products = () => {
  
  const data = useStaticQuery(graphql`
    query {
      interiorJson {
        S2ProductsData {
          
          title
          text
        }
      }
    }
  `);

  const { title, text } =
  data.interiorJson.S2ProductsData;

  return(
    <div> 
      <BannerWrapper>
        <Container>
        {/** <GatsbyImage
                          src={(bg_url !== null) | undefined
                            ? bg_url
                            : {}}
                          alt="IbexBG"
                          className="carousel_img"
                        /> <img src={leafbg} alt="IbexBG" className="bg_img" /> */}
          <Fade bottom >
            <ContentArea className="shadow">
              <img src={leafimages}/>
              <Heading as="h2" textAlign="center" content={"ALL LIQUID PRODUCTS ARE AVAILABLE IN THE FOLLOWING PRESENTATIONS:"} />
              <Text content="High Density Plastic Container" />
              <Text content="4 liters Bottle" />
              <Text content="20 liters Drum" />
              <Text content="60 liters Container" />
              <Text content="1000 liters" />
              <br/>
              <br/>
              <br/>
              <Heading as="h3" textAlign="center" content={"ALL SOLID PRODUCTS ARE AVAILABLE IN THE FOLLOWING PRESENTATIONS:"} />
              <Text content="High Density Plastic Container" />
              <Text content="1 kilogram" />
              <Text content="25 kilograms" />
            </ContentArea>
          </Fade>
          <Fade bottom >
            <ContentArea>
              <img src={IBEXLogo} />
              <Heading as="h1" content={title} textAlign="left" />
              <Text content={text} textAlign="left" />
              <br/>
              <Text content=" All IBEX Bionomics agricultural products are fully biodegradable and harmless to the environment." textAlign="left" />
            </ContentArea>
          </Fade>
        </Container>
      </BannerWrapper>
    </div>
  )
};
    


export default S2Products;


{/**



  const glideOptions = {
    type: 'carousel',
    perView: 3,
    gap: 20,
    breakpoints: {
      1200: {
        perView: 2,
      },
      667: {
        perView: 2,
      },
      480: {
        perView: 1,
      },
    },
  };

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
  }, []);

  const [state, setState] = useState({ email: '', valid: '' });
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //eslint-disable-line

  const handleOnChange = (e) => {
    let value = '';
    if (e.target.value.match(emailRegex)) {
      if (e.target.value.length > 0) {
        value = e.target.value;
        setState({ ...state, email: value, valid: 'valid' });
      }
    } else {
      if (e.target.value.length > 0) {
        setState({ ...state, valid: 'invalid' });
      } else {
        setState({ ...state, valid: '' });
      }
    }
  };

  const handleSubscriptionForm = (e) => {
    e.preventDefault();
    if (state.email.match(emailRegex)) {
      console.log(state.email);
      setState({ email: '', valid: '' });
    }
  };
 
  return (
    <BannerWrapper>
      <Container>
        <ContentArea>
          <Fade bottom delay={30}>
            <HighlightedText>
              <strong>{discount}</strong> {discountLabel}
            </HighlightedText>
            <Heading as="h1" content={title} />
            <Text content={text} />
            <FormWrapper onSubmit={handleSubscriptionForm}>
              <Input
                className={state.valid}
                type="email"
                placeholder="Enter email address"
                icon={<Icon icon={iosEmailOutline} />}
                iconPosition="left"
                required={true}
                onChange={handleOnChange}
                aria-label="email"
              />
              <ButtonGroup>
                <Button
                  type="submit"
                  colors="primaryWithBg"
                  title="FREE CONSULT"
                />
                <Button
                  title="EXPLORE MORE"
                  variant="textButton"
                  icon={<i className="flaticon-next" />}
                />
              </ButtonGroup>
            </FormWrapper>
          </Fade>
        </ContentArea>
        */}
        {/* End of content section */}
        {/*
                <CarouselArea>
                  {loading ? (
                    <GlideCarousel
                      carouselSelector="interior_carousel"
                      options={glideOptions}
                      nextButton={<span className="next_arrow" />}
                      prevButton={<span className="prev_arrow" />}
                    >
                      <Fragment>
                        {carousel.map((item) => (
                          <GlideSlide key={`carousel_key${item.id}`}>
                            <a href={item.link} className="item_wrapper">
                              <GatsbyImage
                                src={
                                  (item.thumb_url !== null) | undefined
                                    ? item.thumb_url.childImageSharp.gatsbyImageData
                                    : {}
                                }
                                alt={item.title}
                                className="carousel_img"
                              />
                              <Heading as="h4" content={item.title} />
                            </a>
                          </GlideSlide>
                        ))}
                      </Fragment>
                    </GlideCarousel>
                  ) : (
                    <CircleLoader>
                      <div className="circle"></div>
                      <div className="circle"></div>
                    </CircleLoader>
                  )}
                </CarouselArea>
                */}
                {/* End of carousel section */}
                {/*
              </Container>
            </BannerWrapper>
          );
        };
        */}