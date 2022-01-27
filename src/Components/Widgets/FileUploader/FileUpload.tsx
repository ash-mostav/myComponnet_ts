import React, { useRef, useState } from 'react';
import { DropFileInputDiv, DropFileInputLabel, DropFilePreview, DropFileTitle,DropFileItem } from './FileUpload.Styles';
// import './drop-file-input.css';
// import { ImageConfig } from '../../config/ImageConfig';
// import uploadImg from '../../assets/cloud-upload-regular-240.png';

interface IDropFileInputProps {
    onFileChange?: () => Array<[]>;
    files?:Array<[]>;
}
function DropFileInput({ onFileChange ,files=[]}: IDropFileInputProps) {
    const [fileList, setFileList] = useState(files);
    const wrapperRef = useRef<HTMLDivElement|null>(null);

    const onDragEnter = () => wrapperRef.current?.classList.add('dragover');
    const onDragLeave = () => wrapperRef.current?.classList.remove('dragover');
    const onDrop = () => wrapperRef.current?.classList.remove('dragover');

    const onFileDrop = (e:any) => {
        const newFile = e.target.files[0];
        
        if (newFile) {
            const updatedList = [...fileList, newFile];
            setFileList(updatedList);
            // onFileChange(updatedList);
        }
    }

    const fileRemove = (file:any) => {
        const updatedList = [...fileList];
        updatedList.splice(fileList.indexOf(file[0]), 1);
        setFileList(updatedList);
        // onFileChange(updatedList);
    }

    return (
        <>
            <DropFileInputDiv
                ref={wrapperRef}
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
            >
                <DropFileInputLabel>
                    <img src={""} alt="Icon" />
                    <p>Drag & Drop your files here</p>
                </DropFileInputLabel>
                <input type="file" value="" onChange={onFileDrop} />
            </DropFileInputDiv>
            {
                fileList.length > 0 ? (
                    <DropFilePreview>
                        <DropFileTitle>
                            Ready to upload
                        </DropFileTitle>
                        {
                            fileList.map((item, index) => (
                                <DropFileItem key={index}>
                                    <img src={""} alt="image" />
                                    <div className="drop-file-preview__item__info">
                                        {item}
                                        {/* <p>{item.name}</p>
                                        <p>{item.size}B</p> */}
                                    </div>
                                    <span className="drop-file-preview__item__del" onClick={() => fileRemove(item)}>x</span>
                                </DropFileItem>
                            ))
                        }
                    </DropFilePreview>
                ) : null
            }
        </>
    );
}

export default DropFileInput;


// ImageConfig[item.type.split('/')[1]] || ImageConfig['default']