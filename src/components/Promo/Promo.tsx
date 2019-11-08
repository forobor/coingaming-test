import React from "react";
import { Promotion } from "../../models/Promotion";

import { Container, TextContainer, Title, Description, Image } from "./styles";
import { useMediaQuery } from "react-responsive";
import { sizes } from "../../config/devices";

interface Props {
	promotion: Promotion;
	isChosen: boolean;
	onClick: () => void;
}

const Promo: React.FC<Props> = ({ promotion, isChosen, onClick }) => {
	const isMobile = useMediaQuery({ maxDeviceWidth: sizes.mobile });

	const renderImage = (imageUrl: string) => <Image image={imageUrl} />;

	return (
		<Container isChosen={isChosen} onClick={onClick}>
			{isMobile && renderImage(promotion.image)}
			<TextContainer isChosen={isChosen}>
				<Title>{promotion.title}</Title>
				<Description>{promotion.desription}</Description>
			</TextContainer>
			{!isMobile && renderImage(promotion.image)}
		</Container>
	);
};

export default Promo;
