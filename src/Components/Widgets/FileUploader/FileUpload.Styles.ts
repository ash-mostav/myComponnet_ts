import styled from "styled-components";
interface IPreviewSection {
	isImageFile?: boolean;
}
export const DropFileInputDiv = styled.div`
	position: relative;
	width: 100%;
	max-width: 450px;
	height: auto;
	border: 2px dashed #fcd00748;
	border-radius: 7px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: inherit;
	box-sizing: content-box;
	background: #ffffff;
	input {
		opacity: 0;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		cursor: pointer;
	}
	&:hover,
	.dragover {
		background: #ffffff8f;
	}
`;

export const DropFileInputLabel = styled.div`
	text-align: center;
	color: #000;
	font-weight: 600;
	padding: 10px;
	img {
		width: 100px;
	}
`;

export const DropFilePreview = styled.div`
	margin-top: 10px;
	p {
		font-weight: 500;
	}
	width: 100%;
	flex-wrap: wrap;
	display: flex;
`;

export const DropFileTitle = styled.p`
	margin-bottom: 10px;
`;

export const DropFileItem = styled.div`
	max-width: 300px;
	flex: 1 1 30%;
	height: auto;
	position: relative;
	display: flex;
	margin: 10px;
	/* background-color: #f2f2f2; */
	padding: 7px;
	border-radius: 3px;
	border: 0.8px dashed #fff;

	img {
		width: 60px;
		height: auto;
		margin-right: 22px;
		object-fit: contain;
	}
	.drop-file-preview__item__info {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin: 1%;
		overflow: hidden;
	}

	.drop-file-preview__item__del {
		background-color: ${({ theme }) => theme.colors};
		width: 25px;
		height: 25px;
		border-radius: 7px;
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		right: 7px;
		top: 50%;
		transform: translateY(-50%);
		box-shadow: 0 2px 2px #fff;
		cursor: pointer;
		/* opacity: 0; */
		transition: opacity 0.3s ease;
	}

	&:hover .drop-file-preview__item__del {
		opacity: 1;
	}
`;

export const FilePreviewContainer = styled.article`
	margin-bottom: 35px;
	span {
		font-size: 14px;
	}
	width: 100%;
`;

export const PreviewList = styled.section`
	display: flex;
	flex-wrap: wrap;
	margin-top: 10px;
	@media only screen and (max-width: 400px) {
		flex-direction: column;
	}
`;

export const FileMetaData = styled.div<IPreviewSection>`
	display: ${(props) => (props.isImageFile ? "none" : "flex")};
	flex-direction: column;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	padding: 10px;
	border-radius: 6px;
	color: #FCD007;
	font-weight: bold;
	/* background-color: rgba(5, 5, 5, 0.1); */
	aside {
		margin-top: auto;
		display: flex;
		justify-content: space-between;
	}
    span{
        overflow: hidden;
    }
`;

export const RemoveFileIcon = styled.i`
	cursor: pointer;
	&:hover {
		transform: scale(1.3);
	}
`;
export const ImagePreview = styled.img`
	border-radius: 6px;
	width: 100%;
	height: 100%;
`;
export const PreviewContainer = styled.section`
	padding: 0.25rem;
	width: 120px;
	height: 150px;
	border-radius: 6px;
	box-sizing: border-box;
	&:hover {
		opacity: 0.55;
		${FileMetaData} {
			display: flex;
		}
		/* ${ImagePreview} {
			display: flex;
			transform: scale(80%);
			transition: transform 0.35s ease-in-out;
		} */
	}
	& > div:first-of-type {
		height: 100%;
		position: relative;
	}
	@media only screen and (max-width: 750px) {
		width: 25%;
	}
	@media only screen and (max-width: 500px) {
		width: 50%;
	}
	@media only screen and (max-width: 400px) {
		width: 100%;
		padding: 0 0 0.4em;
	}
`;
