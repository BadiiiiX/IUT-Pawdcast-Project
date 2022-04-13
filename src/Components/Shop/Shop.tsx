// @ts-ignore
import shop  from '../../assets/img/shop.gif';
import styled from 'styled-components';
import {colors} from '../../Utils/globalStyle';

export const Shop = () => {
	
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
		text-align: center;
		
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
	`
	
	const HeroSubTitle = styled.h2`
		display: block;
		font-weight: normal;
		text-decoration: underline;
		color: ${colors.text};
		font-size: 24px;
		margin: 16px 0;
		text-align: center;
	`
	
	const HeroLink = styled.a`
		display: block;
		text-decoration: none;
		width: fit-content;
		margin: 2.2rem auto;
		color: ${colors.text};
		font-size: 22px;
		padding: 16px 24px;
  		border: solid 1px ${colors.text};
  		border-radius: 50px;
	`
	
	const Wolf = styled.img`
		height: 35vw;
	`;
	
	return (
	  <Row>
		  <HeroCtx>
			  <HeroTitle>
				  Visitez notre shop
			  </HeroTitle>
			  <HeroSubTitle>[100% des profits reversés à la SPA]</HeroSubTitle>
			  <HeroLink href="/shop/list">Acheter maintenant</HeroLink>
		  </HeroCtx>
		  <WolfCtx>
			  <Wolf src={shop} alt="ShopGif"/>
		  </WolfCtx>
	  </Row>
	);
};