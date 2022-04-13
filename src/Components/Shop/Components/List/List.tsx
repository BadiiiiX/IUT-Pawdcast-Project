// @ts-ignore
import sticker from '../../../../assets/img/sticker.png';
// @ts-ignore
import tshirt from '../../../../assets/img/tshirt.png';
// @ts-ignore
import sweat from '../../../../assets/img/sweat.png';

import styled, {css} from 'styled-components';
import {colors}      from '../../../../Utils/globalStyle';

interface RowType {
	isRow?: boolean;
}

export const List = () => {
	
	const Row = styled.div<RowType>`
		display: flex;
		flex-direction: ${props => props.isRow ? 'row' : 'column'};
		justify-content: space-around;
		align-items: center;
		flex-wrap: wrap;
		height: 90%;
		${props => props.isRow && css`
		
			width: 100%;
		
		`}
		
		${props => !props.isRow && css`
			@media screen and (min-width: 768px) {
				min-height: calc(100vh - 140px);
			}
		`};
	`;
	
	const ItemCtx = styled.div`
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 0 3rem;
		
		@media screen and (min-width: 768px) {
				width: 256px;
		}
	`;
	
	const ImageCtx = styled.div`
		border: 2px solid ${colors.text};
		border-radius: 45px;
		& img {
			padding: 15px;
			width: 100%;
			height: 100%;
		}
	`;
	
	const ItemTitle = styled.h3`
		color: ${colors.text};
		font-size: 18px;
		font-weight: bold;
		margin: 0;
		text-align: center;
	`;
	
	const ItemPrice = styled.h4`
		color: ${colors.text};
		font-size: 16px;
		font-weight: bold;
		margin: 0;
		text-align: center;
	`;
	
	const HeroTitle = styled.h1`
		font-family: 'Cooper Black', sans-serif;
		font-stretch: 50%;
		font-size: 42px;
		text-align: center;
	`;
	
	return (
	  <Row>
		  <div>
			  <HeroTitle>
				  Shop
			  </HeroTitle>
		  </div>
		  <Row isRow>
			  <ItemCtx>
				  
				  <ImageCtx>
					  <img
						src={tshirt}
						alt="T-Shirt"/>
				  </ImageCtx>
				
				  <ItemTitle>T-shirt ‘Save a friend’</ItemTitle>
				  <ItemPrice>19.99€</ItemPrice>
			  </ItemCtx>
			  <ItemCtx>
				  
				  <ImageCtx>
					  <img
						src={sticker}
						alt="Sticker"/>
				  </ImageCtx>
				  
				  <ItemTitle>Sticker ‘Save a friend’</ItemTitle>
				  <ItemPrice>3.99€</ItemPrice>
			  </ItemCtx><ItemCtx>
			  
			  <ImageCtx>
				  <img
					src={sweat}
					alt="Sweat"/>
			  </ImageCtx>
			  
			  <ItemTitle>Hoodie ‘Save a friend’</ItemTitle>
			  <ItemPrice>39.99€</ItemPrice>
		  </ItemCtx>
		  </Row>
	  </Row>
	);
};