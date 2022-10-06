import styled from "styled-components";

const WaveStyle = styled.svg`
  position: absolute;
  z-index: 1;
	bottom: -320px;
  left: -20px;
  transform: rotateZ(180deg);
  width: 120%;
  height: 100%;

  path {
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 800px) {
    width: 100vh;
    height: 100%;
    left: auto;
    top: 0;
    right: -318px;
    transform: rotateZ(90deg);
  }
`;

export default function Wave() {
  return (
    <WaveStyle xmlns="http://www.w3.org/2000/svg">
      <path
        fill='#f8a990'
        fillOpacity="1"
        d="M0,64L34.3,58.7C68.6,53,137,43,206,48C274.3,53,343,75,411,122.7C480,171,549,245,617,282.7C685.7,320,754,320,823,314.7C891.4,309,960,299,1029,272C1097.1,245,1166,203,1234,176C1302.9,149,1371,139,1406,133.3L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
      ></path>
    </WaveStyle>
  );
}
