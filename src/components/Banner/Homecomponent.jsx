import styled from "styled-components";

export const Banner = styled.div`
  height: 60vh;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: url(${(props) => props.bgImage}); /* Accepts a background image prop */
  background-size: cover;
  opacity:0.5;
  background-color:black;
  background-position: center;
`;

export const Clicking = styled.button`
  padding: 2rem 4rem;
  border: none;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8); /* Darker background on hover */
  }
`;



export const BannerContent = styled.div`
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2rem;
  font-weight: bold;
`;

export const BannerImg = styled.img`
  height: 60vh;
  width: 100%;
  object-fit: cover;

`;
