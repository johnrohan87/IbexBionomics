import styled, { keyframes } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

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
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: 1580px;
  min-height: 50vh;
  display: flex-column;
  align-items: center;

  .alignCenter {
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: center;
    text-align: center;

    img {
      width: auto;
    }
  }

  .h100 {
    height: 100%;
  }

  .cursorPointer {
    cursor: pointer;
  }

  .centerXandY {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  @media only screen and (max-width: 1600px),
         only screen and (max-width: 1360px),
         only screen and (max-width: 1000px) {
    flex-direction: column;

    .flex {
      display: flex;
      flex-direction: row;
    }
  }

  @media only screen and (max-width: 999px),
         only screen and (max-width: 767px) {
    flex-direction: column;

    .flex {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const ContentArea = styled.div`
  background-image: ${props => (props.backgroundImage ? props.backgroundImage : '')};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  height: 100%;
  width: 100%;
  min-width: calc(${props => (props.minWidth ? props.minWidth : '50vw')} - 50px);
  min-height: calc(${props => (props.minHeight ? props.minHeight : '50vh')} - 50px);
  display: inline-block;
  align-items: center;
  align-self: center;
  justify-content: center;
  text-align: center;
  margin: auto;

  .cursorPointer {
    cursor: pointer;
  }

  .centerXandY {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 40vh;
  }

  .whiteText {
    color: white;
    text-shadow: 0 0 10px #000, 0 0 15px #000;
  }

  @media only screen and (max-width: 1600px),
         only screen and (max-width: 1360px),
         only screen and (max-width: 1200px) {
    width: 100%;
    min-width: calc(${props => (props.minWidth ? props.minWidth : '50vw')} - 50px);
  }

  @media only screen and (max-width: 999px),
         only screen and (max-width: 767px),
         only screen and (max-width: 480px) {
    width: 100%;
    min-width: calc(${props => (props.minWidth ? props.minWidth : '100vw')} - 50px);
    padding: 10px 0;
    margin: 0;
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
`;

export const PDFDisplayArea = styled.div`
  background-image: ${props => (props.backgroundImage ? props.backgroundImage : '')};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  height: 100%;
  width: 100%;
  min-width: calc(${props => (props.minWidth ? props.minWidth : '50vw')} - 50px);
  min-height: calc(${props => (props.minHeight ? props.minHeight : '10vh')} - 50px);
  display: inline-block;
  align-items: center;
  align-self: center;
  justify-content: center;
  text-align: center;
  margin: auto;

  .cursorPointer {
    cursor: pointer;
  }

  .centerXandY {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 40vh;
  }

  .whiteText {
    color: white;
    text-shadow: 0 0 10px #000, 0 0 15px #000;
  }

  @media only screen and (max-width: 1600px),
         only screen and (max-width: 1360px),
         only screen and (max-width: 1200px) {
    width: 100%;
    min-width: calc(${props => (props.minWidth ? props.minWidth : '50vw')} - 50px);
    min-height: 1vh;
  }

  @media only screen and (max-width: 999px),
         only screen and (max-width: 767px),
         only screen and (max-width: 480px) {
    width: 100%;
    min-width: calc(${props => (props.minWidth ? props.minWidth : '100vw')} - 50px);
    padding: 10px 0;
    margin: 0;
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
`;

export default BannerWrapper;