import styled, { keyframes } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import error from 'common/assets/image/error.svg';
import success from 'common/assets/image/success.svg';
import S5RhyzomacBG from '../../../common/assets/image/interior/IbexImages/S5/S5RhyzomacBG.jpg'

const shake = keyframes`
  0% {
    transform: translateX(0);
    opacity: 0;
  }
  50% {
    transform: translateX(7px);
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const BannerWrapper = styled.div`
  padding-top: 0px;
  margin-bottom: 81px;
  background-color: ${themeGet('colors.banner', '#171717')};
  @media only screen and (max-width: 1440px) {
    margin-bottom: 60px;
  }
  @media only screen and (max-width: 767px) {
    
    margin-bottom: 42px;
  }
`;

export const Container = styled.div`
  background-image: url(${S5RhyzomacBG});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  width: 100%;
  height: 100%;
  max-width: 1580px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 20px;
  display: flex-column;
  align-items: center;
  .alignCenter{
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: center;
    text-align: center;
    padding: 30px 0;
    img{
      width: auto;
    }
  }
  .alignTop{
    margin: 0 auto;
    align-items: flex-start;
    align-self: flex-start;
  }
  .h100{
    height: 100%;
  }
  .textAlignLeft{
    //text-align: left;
  }
  .textAlignCenter{
    //text-align: center;
  }
  .textJustify{
    //text-align: justify;
  }
  @media only screen and (max-width: 1600px) {
    padding: 100px 81px;
    flex-direction: column;
    .flex{
      display: flex;
      flex-direction: row;
    }
    
  }
  @media only screen and (max-width: 1360px) {
    padding: 100px 60px;
    flex-direction: column;
    .flex{
      display: flex;
      flex-direction: row;
    }
  }
  @media only screen and (max-width: 991px) {
    padding: 100px 30px;
    flex-direction: column;
    .flex{
      display: flex;
      flex-direction: column;
    }
  }
  @media only screen and (max-width: 767px) {
    padding: 100px 35px;
    flex-direction: column;
    .flex{
      display: flex;
      flex-direction: column;
    }
  }
  .shadow{
    padding: 10px;
    background: rgb(136, 66, 213, 0.4);
    border-radius: 15px;
    -moz-border-radius: 15px;
    //border: 2px solid #000;
  }
  .shadowDark{
    padding: 10px;
    background: rgb(0, 0, 0, 0.4);
    border-radius: 15px;
    -moz-border-radius: 15px;
    //border: 2px solid #000;
  }
  .smPadding{
    padding: 10px;
  }
  .medPadding{
    padding: 25px;
  }
  .flex-row{
    display: flex;
    flex-direction: row;
    padding-top: 10vh;
    //border: medium dashed green;
    div{
      width: 100%;
      padding: 10px 10px;
      color: ${themeGet('colors.label', '#C6C6C6')};
      b{
        color: ${themeGet('colors.label', '#949494')};
      }
      
    }
  }
`;

export const ContentArea = styled.div`
  height: 100%; 
  width: 100%;
  minHeight: 50vh; 
  minWidth: 50vw;
  min-width: calc(${props => (props.minWidth ? props.minWidth : "50vw")} - 50px);
  min-height: calc(${props => (props.minHeight ? props.minHeight : "50vh")} - 50px);
  display: inline-block;
  align-items: center;
  align-self: center;
  justify-content: center;
  text-align: center;
  margin:  auto;
  padding: 20px;
  img{
    height: auto;
    width: auto;
    min-width: 25vw;
    padding: 20px 0;
  }
  h2,h3{
    color: ${themeGet('colors.label', '#C6C6C6')};
    font-size: 25px;
    line-height: 30px;
    padding-bottom: 20px;
    }
    p{
      font-size: 20px;
      line-height: 25px;
      b{
        font-size: 25px;
        line-height: 30px;
      }
    }
  @media only screen and (max-width: 1600px) {
    width: 50%;
  }
  @media only screen and (max-width: 1360px) {
    width: 50%;
  }
  @media only screen and (max-width: 1200px) {
    width: 50%;
    .flex-row{
      display: block;
    }
  }
  @media only screen and (max-width: 767px) {
    width: 100%;
    padding-right: 50px;
    .flex-row{
      display: block;
    }
  }
  @media only screen and (max-width: 480px) {
    padding: 10px 0;
    margin: 0;
    h2,h3{
    font-size: 32px;
    line-height: 35px;
    padding-bottom: 20px;
    }
    p{
      font-size: 22px;
      line-height: 38px;
      b{
        font-size: 25px;
        line-height: 38px;
        text-align: center;
      }
    }
    li{
      font-size: 22px;
      line-height: 38px;
    }
    .flex-row{
      display: block;
    }
  }
  

  h1,
  p {
    color: ${themeGet('colors.label', '#C6C6C6')};
  }

  h1 {
    margin-bottom: 30px;
    + p {
      margin: 0;
    }
  }
  li{
    list-style-type: disc;
    text-align: left;
    padding: 5px;
    margin-left: 5px;
  }
`;

export const HighlightedText = styled.p`
  display: flex;
  align-items: center;
  max-width: 334px;
  width: 100%;
  min-height: 28px;
  border-radius: 80px;
  padding: 3px 28px 3px 4px;
  font-size: 12px;
  line-height: 18px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${themeGet('colors.label', '#C6C6C6')};
  background-color: ${themeGet('colors.darkBg', '#0D0D0D')};
  margin: 0 0 40px;
  @media only screen and (max-width: 767px) {
    margin: 0 0 30px;
    padding: 3px 4px;
  }

  strong {
    display: inline-flex;
    align-items: center;
    min-width: 51px;
    min-height: 20px;
    padding: 3px 11px;
    border-radius: 30px;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0;
    color: ${themeGet('colors.heading', '#191919')};
    background-color: ${themeGet('colors.primary', '#FDEF00')};
    margin-right: 10px;
  }
`;

export const FormWrapper = styled.form`
  margin-top: 45px;
  @media only screen and (max-width: 767px) {
    margin-top: 40px;
  }

  .input_element {
    display: flex;
    align-items: center;
    position: relative;

    input {
      width: 100%;
      border: 0;
      font-size: 16px;
      padding: 20px 25px 20px 65px;
      border-radius: 5px;
      color: ${themeGet('colors.label', '#C6C6C6')};
      background-color: ${themeGet('colors.black', '#000000')};

      &::placeholder {
        color: ${themeGet('colors.lightText', '#7E7E7E')};
      }
    }

    .input-icon {
      position: absolute;
      left: 22px;

      i {
        color: ${themeGet('colors.lightText', '#7E7E7E')};
        svg {
          width: auto;
          height: 24px;
        }
      }
    }

    &::after {
      content: '';
      width: 16px;
      height: 16px;
      position: absolute;
      top: calc(50% - 16px / 2);
      right: 25px;
    }

    &.invalid {
      &::after {
        background-image: url(${error});
      }
    }
    &.valid {
      &::after {
        background-image: url(${success});
      }
    }
  }
`;

export const ButtonGroup = styled.div`
  margin-top: 50px;
  @media only screen and (max-width: 767px) {
    margin-top: 25px;
    margin-bottom: 54px;
  }

  .reusecore__button {
    font-size: 14px;
    font-weight: 500;
    border-radius: 5px;
    &:first-child {
      margin-right: 20px;
      &:hover {
        opacity: 0.95;
      }
    }

    &:hover {
      .btn-icon {
        animation: ${shake} 1s infinite;
      }
    }
  }
`;

export const CarouselArea = styled.div`
  width: calc(100% - 595px);
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1600px) {
    width: calc(100% - 560px);
  }
  @media only screen and (max-width: 1360px) {
    width: 60%;
  }
  @media only screen and (max-width: 1200px) {
    width: 55%;
  }
  @media only screen and (max-width: 767px) {
    width: 100%;
  }

  #interior_carousel {
    .glide__slide {
      .item_wrapper {
        display: block;
        height: 100vh;
        max-height: 540px;
        border-radius: 20px;
        overflow: hidden;
        position: relative;
        @media only screen and (max-width: 1440px) {
          max-height: 460px;
        }
        @media only screen and (max-width: 1200px) {
          max-height: 420px;
        }
        @media only screen and (max-width: 991px) {
          max-height: 400px;
        }
        @media only screen and (max-width: 767px) {
          max-height: 380px;
        }

        &::after {
          content: '';
          display: block;
          width: 100%;
          height: 30%;
          background: linear-gradient(
            rgba(255, 255, 255, 0),
            rgba(0, 0, 0, 0.8)
          );
          position: absolute;
          bottom: 0;
          left: 0;
          transition: height 0.3s ease;
        }

        .carousel_img {
          height: 100%;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        h4 {
          width: 100%;
          position: absolute;
          bottom: 0;
          left: 0;
          margin: 0;
          padding: 25px 30px;
          color: ${themeGet('colors.label', '#C6C6C6')};
          font-weight: 600;
          z-index: 1;
          transition: bottom 0.3s ease;

          @media only screen and (max-width: 1440px) {
            font-size: 20px;
          }
        }
      }

      &:hover {
        .item_wrapper {
          &::after {
            height: 70%;
          }

          img {
            transform: scale(1.1);
          }

          h4 {
            color: ${themeGet('colors.white', '#ffffff')};
            bottom: 10px;
          }
        }
      }
    }

    .glide__controls {
      > div {
        > span {
          &.next_arrow {
            width: 45px;
            background-color: ${themeGet('colors.primary', '#FDEF00')};
            @media only screen and (max-width: 667px) {
              width: 30px;
            }

            &::before {
              background-color: ${themeGet('colors.primary', '#FDEF00')};
              transform: rotate(42deg);
            }

            &::after {
              background-color: ${themeGet('colors.primary', '#FDEF00')};
              transform: rotate(-42deg);
            }
          }
        }
      }
    }
  }
`;

export default BannerWrapper;