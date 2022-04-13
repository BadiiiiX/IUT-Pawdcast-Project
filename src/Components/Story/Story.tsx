// @ts-ignore
import apple   from '../../assets/img/apple.svg';
// @ts-ignore
import spotify from '../../assets/img/spotify.svg';
// @ts-ignore
import cover   from '../../assets/img/cover.png';
// @ts-ignore
import music   from '../../assets/music/pawdcast.mp3';

import styled, {css} from 'styled-components';
import {colors}      from '../../Utils/globalStyle';
import {useState}    from 'react';

interface RowInt {
	primary?: boolean;
	secondary?: boolean;
}

export const Story = () => {
	let audio = new Audio(music);
	
	const [audioState] = useState(audio);
	
	const [playing, setPlaying] = useState(false);
	
	const playMusic = () => {
		const changeStyle = () => {
			setPlaying(!playing);
		};
		
		const changeStatus = () => {
			audioState.paused ? audioState.play() : audioState.pause();
		};
		
		changeStyle();
		changeStatus();
		
	};
	
	const stopMusic = () => {
		audioState.pause();
		audioState.currentTime = 0;
		setPlaying(false);
	};
	
	const Row = styled.div<RowInt>`
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		margin: 0 3rem;
		height: 90%;
		
		${props => (props.secondary || !props.primary) && css`
			margin: 3rem;
			padding: 42px 72px;
			border: 2px solid ${colors.text};
			border-radius: 45px;
		`}
		
		@media screen and (min-width: 768px) {
			${props => (!props.secondary || props.primary) && css`
				width: 80%;
				margin: 0 auto;
				min-height: calc(100vh - 140px);
  			`}
		}
	`;
	
	const StoryCtx = styled.div`
		flex: 0 0 100%;
		max-width: 100%;
	`;
	
	const StoryItem = styled.div`
		position relative;
		flex: 0 0 100%;
		max-width: 100%;
		margin: 1rem 0;
    	
    	@media screen and (min-width: 1100px) {
    	    flex: 0 0 30%;
    		max-width: 30%;
    		margin: 0 1.5% 1.5% 0;
    		text-align: center;
    	}
	`;
	
	const StoryTitle = styled.h1`
		font-family: 'Cooper Black', sans-serif;
		font-stretch: 50%;
		font-size: 42px;
		text-align: center;
	`;
	
	const StoryLink = styled.a`
		position: relative;
		display: block;
		color: ${colors.text};
		font-size: 24px;
		margin: 16px 0;
		
		@media screen and (min-width: 768px) {
			text-align: left;
		}
	`;
	
	const StoryEpisode = styled.h2`
		font-weight: normal;
		text-decoration: underline;
		text-align: left;
	`;
	
	const ApplePodcasts = styled.h6`
		position: absolute;
		display: block;
		top: 50%;
		left: 110px;
		transform: translateY(-50%);
		font-weight: 500;
		& small {
			display: block;
		}
	`;
	
	const PlayMusic = styled.div`
		position: absolute;
		bottom: 8%;
		right: 8%;
		
		width: 17%;
		height: 17%;
		border-radius: 50%;
		background-color: ${colors.background};
		
		cursor: pointer;
	`;
	
	const StopMusic = styled.div`
		position: absolute;
		bottom: 8%;
		right: 28%;
		
		width: 10%;
		height: 10%;
		border-radius: 50%;
		background-color: ${colors.background};
		
		cursor: pointer;
	`;
	
	const TriangleMusic = styled.div`
		position: absolute;
		top: 50%;
		transform: translate(-50%, -50%);
		${!playing && css`
			left: 55%;
			width: 0;
			height: 0;
			border-top: 14px solid transparent;
			border-bottom: 14px solid transparent;
			border-left: 24px solid ${colors.text};
		`}
		
		${playing && `
		
			height: 50%;
			width: 45%;
		
		    left: 50%;
			border-right: 8px solid;
    		border-left: 8px solid;
    		border-color: ${colors.text};
		
		`}
	`;
	
	const CubeMusic = styled.div`
		position: absolute;
		top: 50%;
		transform: translate(-50%, -50%);
		left: 50%;
		height: 14px;
		width: 14px;
		background-color: ${colors.text};
	`;
	
	return (
	  <Row primary>
		  <StoryCtx>
			  
			  <StoryTitle>
				  Dernier épisode
			  </StoryTitle>
			  <Row secondary>
				  <StoryItem>
					  <StoryEpisode>Épisode 01: Save a Friend</StoryEpisode>
					  <StoryLink href="/">
						  <img src={spotify} alt="Spotify" width={200}/>
					  </StoryLink>
					  <StoryLink href="/">
						  <img src={apple} alt="Apple" width={80}/>
						  <ApplePodcasts><small>Écoutez sur</small> Apple Podcasts</ApplePodcasts>
					  </StoryLink>
				  </StoryItem>
				  
				  <StoryItem>
					  A l'approche des fêtes, nous vous conseillons et avertissons sur l'adoption précaire des animaux
					  de companies. <br/> De plus, dans ce podcast nous parlerons des multiples abandons et des
					  nouvelles lois visant à lutter contre la maltraitance animale.
				  </StoryItem>
				  
				  <StoryItem>
					  <img src={cover} alt="Save a Friend Pawdcast" width="100%"/>
					  <PlayMusic onClick={() => playMusic()}>
						  <TriangleMusic/>
					  </PlayMusic>
					  {playing && <StopMusic onClick={() => stopMusic()}>
                          <CubeMusic/>
                      </StopMusic>}
				  </StoryItem>
			  </Row>
		  </StoryCtx>
	  </Row>
	);
};