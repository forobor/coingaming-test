import { device } from './../../config/devices';
import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #1e262f;
  @media ${device.mobile} {
    padding: 44px 16px;
    box-sizing: border-box;
  }
`;

export const Content = styled.div`
  max-width: 1160px;
	padding: 0 10%;

  @media ${device.mobile} {
    max-width: 100%;
		padding: 0;
  }
`;

export const Title = styled.h1`
  font-weight: normal;
	font-family: "Roboto Slab";
	font-size: 24px;
	line-height: 32px;
	color: #ffffff;
	margin-top: 32px;
	margin-bottom: 32px;
	width: 100%;
`;
export const PromotionsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
`;

export const PromoContainer = styled.div`
	margin-bottom: 25px;
	margin-right: 16px;
	&:last-child {
		margin-bottom: 0px;
	}
`;
