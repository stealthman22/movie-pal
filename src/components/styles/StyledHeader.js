import styled from "styled-components";

export const StyledHeader = styled.div`
	background: #1c1c1c;
	padding: 0 20px;
	box-sizing: border-box;

	.header-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 1280px;
		min-height: 120px;
		padding: 1px 0 0 0;
		margin: 0 auto;
		box-sizing: border-box;

		@media screen and (max-width: 500px) {
			max-width: 1280px;
			min-height: 0px;
		}
	}
`;

export const StyledRMDBLogo = styled.img`
	width: 250px;
	margin-top: 20px;
	vertical-align: baseline;

	@media screen and (max-width: 500px) {
		width: 150px;
		margin-top: 5px;
	}
`;

export const StyledTMDBLogo = styled.img`
	width: 122px;
	margin-top: 5px;

	@media screen and (max-width: 500px) {
		display: inline-block;
		width: 80px;
		margin-top: 0px;
	}
`;
