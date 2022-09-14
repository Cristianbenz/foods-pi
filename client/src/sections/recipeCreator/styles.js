import styled from "styled-components";

export const CreateSection = styled.section`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	gap: 40px;
	padding: 25px;
`

export const DetailsContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px 50px;
	font-size: 30px;

	> div h3 {
		font-size: 50px;
	}

	> div p, ul {
		padding-left: 20px;
	}

	> div ul {
		list-style-type: none;
	}

	> div ul li{
		display: flex;
		gap: 12px;
	}
`

export const Step = styled.li`
	font-size: 30px;
`