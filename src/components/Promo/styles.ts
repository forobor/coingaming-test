import styled from "styled-components";
import { device } from "../../config/devices";

interface ContainerProps {
  isChosen: boolean;
}

const selected = require('../../assets/selected.png')

export const Container = styled.div<ContainerProps>`
  display: flex;
  width: 560px;
  height: 236px;
  box-shadow: 0px 24px 40px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  background: #1A212A;
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
  &:before {
    ${p => p.isChosen && `content: ''`};
    background: url('${selected}');
    width: 20px;
    height: 24px;
    left: 30px;
    position: absolute;
    @media ${device.mobile} {
      left: 10px;
    }
  }

  @media ${device.mobile} {
    max-width: 100%;
    width: auto;
    height: 296px;
    border-radius: 8px;
    box-shadow: none;
    flex-direction: column;
  }
`
interface TextContainerProps {
  isChosen: boolean;
}

export const TextContainer = styled.div<TextContainerProps>`
  padding: 48px 50px 40px 32px;
  width: 50%;
  box-sizing: border-box;
  border-radius:  6px  0  0 6px;
  border: 1px solid transparent;
  ${p => p.isChosen && `
    border-top: 1px solid #FFAB00;
    border-left: 1px solid #FFAB00;
    border-bottom: 1px solid #FFAB00;
  `}
  @media ${device.mobile} {
    padding: 20px 24px;
    width: 100%;
    border-radius:  0 0 8px 8px;
    box-sizing: border-box;
    flex:1;

    ${p => p.isChosen && `
      border-top: none;
      border-right: 1px solid #FFAB00;
      border-left: 1px solid #FFAB00;
      border-bottom: 1px solid #FFAB00;
   `}
  }
`

export const Title = styled.div`
  font-family: "Roboto Slab";
  color: white;
  font-size: 20px;
  line-height: 28px;
  margin-bottom: 16px;
`
export const Description = styled.div`
  font-family: "Roboto Slab";
  color: #8697A2;
  line-height: 24px;
  font-size: 16px;
`

interface ImageProps {
  image: string;
}

export const Image = styled.div<ImageProps>`
  width: 50%;
  border-radius: 0 6px 6px 0;
  background: url('${p => p.image}');
  background-size: cover;
  background-position-x: center;
  background-position-y: center;

  @media ${device.mobile} {
    width: 100%;
    height: 132px;
    border-radius: 8px 8px 0 0;
  }
`