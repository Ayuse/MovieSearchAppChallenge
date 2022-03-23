import styled, { css } from "styled-components";
import img from '../../../public/Rectangle5.png'
// import media from "styled-media-query";
const src = "Rectangle5.png"
type ImageProps = {
	src: string;
    image: any;
};
export const Wrapper = styled.div`
/* position: absolute; */
width: 100%;
height: 650px;
background-color:grey ;
background-position: center; /* Center the image */
background-size: cover; /* Resize the background image to cover the entire container */
/* left: 0px;
top: 138px; */
`


export const Image = styled.div<ImageProps>`
	    width: 100%;
        background-image: url(${props => props.image.src});
        height: 100%;
        /* background-color:; */
		background-position: center;
        background-repeat: no-repeat; /* Do not repeat the image */
		background-size: cover ;
        
        
		/* ${media.greaterThan("medium")`
			height: 58rem;
		`} */
	`


export const TextContainer = styled.div`
position: absolute;
width: 490px;
height: 282px;
left: 77px;
top: 247px;
`

export const Text = styled.h1`
font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 72px;
line-height: 94px;
letter-spacing: -0.05em;

color: #FFFFFF;
`