import styled from "styled-components";

export const DropFileInputDiv=styled.div `
    position: relative;
    width: 400px;
    height: 200px;
    border: 2px dashed #f2f2;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--input-bg);
    input {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
}
    &:hover,.dragover {
    opacity: 0.6;
}
`


export const DropFileInputLabel=styled.div`
    text-align: center;
    color:#000;
    font-weight: 600;
    padding: 10px;
img {
    width: 100px;
}
`

export const DropFilePreview=styled.div`
    margin-top: 30px;
     p {
    font-weight: 500;
}

.drop-file-preview__item__info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.drop-file-preview__item__del {
    background-color: var(--box-bg);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    box-shadow: var(--box-shadow);
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.drop-file-preview__item:hover .drop-file-preview__item__del {
    opacity: 1;
}
`

export const DropFileTitle=styled.p`
    margin-bottom: 20px;
`

export const DropFileItem=styled.div `{
    position: relative;
    display: flex;
    margin-bottom: 10px;
    background-color: var(--input-bg);
    padding: 15px;
    border-radius: 20px;
}

.drop-file-preview__item img {
    width: 50px;
    margin-right: 20px;
}

`