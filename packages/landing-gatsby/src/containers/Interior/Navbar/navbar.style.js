import styled from 'styled-components';
//import { themeGet } from '@styled-system/theme-get';

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  .info_container{
    display: flex; 
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-evenly;
  }

  @media only screen and (max-width: 480px) {
    .info_container{
      flex-direction: column;
      p{
        margin-block-start: .5em;
        margin-block-end: .5em;
      }
    }
  }
  
`;

{/**
  a{
      background-color: ${themeGet('colors.banner', '#171717')};
      box-shadow: 0px 0px 10px 10px #171717;
    }

    a{
    background-color: rgba(255, 255, 255, .25); // Needed for IEs 

	-moz-box-shadow: 5px 5px 5px rgba(68,68,68,0.6);
	-webkit-box-shadow: 5px 5px 5px rgba(68,68,68,0.6);
	box-shadow: 5px 5px 5px rgba(68,68,68,0.6);
  }
*/}

export { Container };
