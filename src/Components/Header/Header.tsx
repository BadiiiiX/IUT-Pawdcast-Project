// @ts-ignore
import logo     from '../../assets/img/logo.png';
import styled   from 'styled-components';
import {colors} from '../../Utils/globalStyle';

export const Header = () => {
	const Navbar = styled.nav`
		  border-bottom: 2px solid ${colors.text};
		  padding-bottom: 10px;
	`;
	
	const NavbarContainer = styled.div`
		margin: 0 3em;
		@media screen and (min-width: 768px) {
		  	display: flex;
    		justify-content: space-between;
   		 	padding-bottom: 0;
    		height: 128px;
    		align-items: center;
		  }
	`;
	
	const Menu = styled.div`
		display: none;
		
		@media screen and (min-width: 768px) {
			display: flex;
			margin-right: 30px;
			flex-direction: row;
			justify-content: flex-end;
		}
	`;
	
	const Item = styled.a`
		display: block;
		text-align: center;
  		margin: 15px auto;
  		padding: 16px 20px;
  		
  		text-decoration: none;
  		font-size: 22px;
  		color: ${colors.text};
  		
  		@media screen and (min-width: 768px) {
  			margin-left: 40px;
  		}
  		
  		:last-child {
  			padding: 16px 42px;
  			
  			border: solid 1px ${colors.text};
  			border-radius: 50px;
  		}
	`;
	
	const LogoCtx = styled.div`
		text-align: center;
		margin: 0;
		@media screen and (min-width: 768px) {
			margin-left: 40px;
  		}
		`;
	
	const Logo = styled.img`
		width: 150px;
 		font-size: 22px;
 		margin-top: 10px;
  		
  		@media screen and (min-width: 768px) {
  			margin: 0;
  		}
	`;
	
	return (
	  <Navbar>
		  <NavbarContainer>
			  <LogoCtx>
				  <a href="/">
					  <Logo src={logo} alt="Pawdcast Logo"/>
				  </a>
			  </LogoCtx>
			  <Menu>
				  <Item href="/">Accueil</Item>
				  <Item href="/story">Episodes</Item>
				  <Item href="/shop">Shop</Item>
			  </Menu>
		  </NavbarContainer>
	  </Navbar>
	);
};