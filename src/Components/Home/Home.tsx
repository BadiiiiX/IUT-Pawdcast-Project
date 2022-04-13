// @ts-ignore
import chien  from '../../assets/img/chien.svg';
import styled from 'styled-components';
import {colors} from '../../Utils/globalStyle';

export const Home = () => {
	
	const Row = styled.div`
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		margin: 0 3rem;
		height: 90%;
		
		@media screen and (min-width: 768px) {
			min-height: calc(100vh - 140px);
		}
	`;
	
	const WolfCtx = styled.div`
		flex: 0 0 100%;
		max-width: 100%;
		text-align: center;
		@media screen and (min-width: 768px) {
			flex: 0 0 40%;
			max-width: 40%;
		}
	`
	
	const HeroCtx = styled.div`
		flex: 0 0 100%;
		max-width: 100%;
		
		@media screen and (min-width: 768px) {
			flex: 0 0 50%;
			max-width: 50%;
		}
		
	`
	
	const HeroTitle = styled.h1`
		font-family: 'Cooper Black', sans-serif;
		font-stretch: 50%;
		font-size: 42px;
		text-align: center;
		
		@media screen and (min-width: 768px) {
			text-align: left;
		}
	`
	
	const HeroLink = styled.a`
		display: block;
		color: ${colors.text};
		font-size: 24px;
		margin: 16px 0;
		text-align: center;
		
		@media screen and (min-width: 768px) {
			text-align: left;
		}
	`
	
	const Wolf = styled.img`
		height: 50%;
	`;
	
	return (
	  <Row>
		  <WolfCtx>
			  <Wolf src={chien} alt="DogCast"/>
		  </WolfCtx>
		  <HeroCtx>
			  <HeroTitle>
				  Le Podcast Animalier <br/> n°1 en France
			  </HeroTitle>
			  <HeroLink href="/story">Écouter maintenant</HeroLink>
		  </HeroCtx>
	  </Row>
	);
};