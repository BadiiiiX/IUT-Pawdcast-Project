// @ts-ignore
import apple    from '../../assets/img/apple.svg';
// @ts-ignore
import logo     from '../../assets/img/logo.png';
// @ts-ignore
import spotify  from '../../assets/img/spotify.svg';
import styled   from 'styled-components';
import {colors} from '../../Utils/globalStyle';

export const Footer = () => {
	const Navbar = styled.nav`
		  border-top: 2px solid ${colors.text};
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
		display: flex;
		flex-direction: column;
		
		@media screen and (min-width: 768px) {
			margin-right: 30px;
			flex-direction: row;
			justify-content: flex-end;
		}
	`;
	
	const Item = styled.a`
		display: block;
		text-align: center;
		height: 100%;
  		margin: 15px auto;
  		padding: 10px auto;
  		
  		text-decoration: none;
  		font-size: 22px;
  		color: ${colors.text};
  		
  		@media screen and (min-width: 768px) {
  			margin-left: 40px;
  			padding: 16px 20px;
  		}
	`;
	
	const LogoCtx = styled.div`
		text-align: center;
		margin: 0 0 3rem;
		@media screen and (min-width: 768px) {
			margin: 0;
			margin-left: 25px;
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
	
	const SFirst = styled.img`
		 width: 40px;
		
		 @media screen and (min-width: 768px) {
  			margin: 0;
  			width: 50px;
  		}
	`;
	
	const SLast = styled.img`
		width: 110px;
		
		@media screen and (min-width: 768px) {
  			margin: 0;
  			width: 155px;
  		}
	`;
	
	return (
	  <Navbar>
		  <NavbarContainer>
			  <LogoCtx>
				  <Logo src={logo} alt="Pawdcast Logo"/>
			  </LogoCtx>
			  <Menu>
				  <Item href="/">
					  <SFirst src={apple} alt="Apple Podcast"/>
				  </Item>
				  <Item href="/">
					  <SLast src={spotify} alt="Spotify Podcast"/>
				  </Item>
			  </Menu>
		  </NavbarContainer>
	  </Navbar>
	);
};