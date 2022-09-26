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
	width: 400px;
	padding: 20px 50px;
	font-size: 30px;

	p, li {
		inline-size: 400px;
		word-break: break-all;
	}

	> div h3 {
		font-size: 50px;
	}

	> div p, ul {
		padding-left: 20px;
	}

	> div ul {
		list-style-type: none;
	}
`

export const Step = styled.li`
	display: flex;
	align-items: flex-start;
	gap: 12px;
	font-size: 30px;

	span{
		word-break: normal;
	}
`