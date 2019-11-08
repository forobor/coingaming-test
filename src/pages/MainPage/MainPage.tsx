import React, { useState } from "react";
import { Promotion } from "../../models/Promotion";
import Promo from "../../components/Promo/Promo";

import { Container, Content, Title, PromotionsContainer, PromoContainer } from "./styles";

const promotions: Promotion[] = [
	{
		id: 1,
		title: "Become a week's American Streak Hero!",
		desription: '"GD Treasure Island Maintenanc...',
		image: "https://wallpapercave.com/wp/HlX1d5t.jpg"
	},
	{
		id: 2,
		title: "Become a week's American Streak Hero!",
		desription: '"GD Treasure Island Maintenanc...',
		image: "https://wallpapercave.com/wp/HlX1d5t.jpg"
	},
	{
		id: 3,
		title: "Become a week's American Streak Hero!",
		desription: '"GD Treasure Island Maintenanc...',
		image: "https://wallpapercave.com/wp/HlX1d5t.jpg"
	},
	{
		id: 4,
		title: "Become a week's American Streak Hero!",
		desription: '"GD Treasure Island Maintenanc...',
		image: "https://wallpapercave.com/wp/HlX1d5t.jpg"
	}
];

interface Props {}

const MainPage: React.FC<Props> = () => {
	const [ chosenPromo, setChosenPromo ] = useState<number>();

	return (
		<Container>
			<Content>
				<Title>Limited time offers</Title>
				<PromotionsContainer>
					{promotions.map((promo: Promotion) => (
						<PromoContainer key={promo.id}>
							<Promo promotion={promo} isChosen={chosenPromo === promo.id} onClick={() => setChosenPromo(promo.id)}/>
						</PromoContainer>
					))}
				</PromotionsContainer>
			</Content>
		</Container>
	);
};

export default MainPage;
