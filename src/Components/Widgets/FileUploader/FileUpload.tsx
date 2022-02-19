import React, { useRef, useState } from 'react';
import { DropFileInputDiv, DropFileInputLabel, DropFilePreview, DropFileTitle, DropFileItem, FilePreviewContainer, PreviewList, PreviewContainer, ImagePreview, FileMetaData, RemoveFileIcon } from './FileUpload.Styles';
import uploadImg from '../../../Assets/cloud-upload-regular-240.png';
import { ImageConfig } from '../../../config/ImageConfig';
import { FlexColumn } from '../../../GlobalStyledCom';

interface IDropFileInputProps {
    onFileChange?: () => Array<[]>;
    files?: Array<[]>;
    updateFilesCb?: any;
    maxFileSizeInBytes?: any;
    accept?:string;
}
const KILO_BYTES_PER_BYTE = 1000;
const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 500000;

const convertNestedObjectToArray = (nestedObj: any) =>
    Object.keys(nestedObj).map((key) => nestedObj[key]);

const convertBytesToKB = (bytes: number) => Math.round(bytes / KILO_BYTES_PER_BYTE);


function DropFileInput({ onFileChange,accept, files = [] }: IDropFileInputProps) {

    const [fileList, setFileList] = useState(files);
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    const onDragEnter = () => wrapperRef.current?.classList.add('dragover');
    const onDragLeave = () => wrapperRef.current?.classList.remove('dragover');
    const onDrop = () => wrapperRef.current?.classList.remove('dragover');

    const onFileDrop = (e: any) => {
        const newFile = e.target.files[0];

        if (newFile) {
            const updatedList = [...fileList, newFile];
            setFileList(updatedList);
            // onFileChange(updatedList);
        }
    }
    // const [files, setFiles] = useState({});

// const addNewFiles = (newFiles) => {
//   for (let file of newFiles) {
//     if (file.size <= maxFileSizeInBytes) {
//       if (!multiple) {
//         return { file };
//       }
//       files[file.name] = file;
//     }
//   }
//   return { ...files };
// };

    const fileRemove = (file: any) => {
        const updatedList = [...fileList];
        updatedList.splice(fileList.indexOf(file[0]), 1);
        setFileList(updatedList);
        // onFileChange(updatedList);
    }
    
    return (
        <FlexColumn style={{ border: `1px solid #fff`, width: `100%` }}>
            <DropFileInputDiv
                ref={wrapperRef}
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
            >
                <DropFileInputLabel>
                    <img src={uploadImg} alt="Icon" />
                    <p>Drag and Drop your files here</p>
                </DropFileInputLabel>
                <input type="file" value="" onChange={onFileDrop} accept={accept}/>
            </DropFileInputDiv>
            <FlexColumn style={{ border: `1px solid #fff`, marginTop: `5px` }}>
                <DropFileTitle>
                    Ready to upload
                </DropFileTitle>
                {
                    fileList.length > 0 ? (
                        <DropFilePreview>
                            {
                                fileList.map((item: any, index: number) => {
                                    let iconitem: string = item.type.split('/').splice(1).toString();
                                    let extension: String[] = item.name.split('.').splice(1).toString();
                                    let ico = Object.keys(ImageConfig).filter((filtered: any) => {
                                        if (filtered === extension) return filtered
                                    });
                                    console.log("ico", ico)
                                    return (
                                        <DropFileItem key={index}>
         /////////Here////////    {/* <img src={ImageConfig[ico] || ImageConfig['default']} alt="" /> */}
                                            <div className="drop-file-preview__item__info">
                                                <p>{item.name}</p>
                                                <p>{item.size / 1024}--Kbyte</p>
                                            </div>
                                            <span className="drop-file-preview__item__del" onClick={() => fileRemove(item)}>x</span>
                                        </DropFileItem>
                                    )
                                })
                            }
                        </DropFilePreview>
                    ) : null
                }
                <FilePreviewContainer>
                    <span>To Upload</span>
                    <PreviewList>
                        {fileList.map((file: any, index) => {
                            console.log("file",file)
                            let isImageFile = file.type.split("/")[0] === "image";
                            let isPlainFile = file.type.split("/") === "text/plain";
                            let isHtmlFile = file.type.split("/") === "text/html" ;
                            return (
                                <PreviewContainer key={index}>
                                    <div>
                                        {/* {isImageFile && (
                                            <ImagePreview
                                                src={URL.createObjectURL(file)}
                                                alt={`file preview ${index}`}
                                            />
                                        )} */}
                                        {isPlainFile && (
                                            <embed 
                                            src={URL.createObjectURL(file)}
                                            type={"text/plain"}
                                            width={"250px"}
                                            height={"125px"}
                                            />
                                        )
                                        }
                                        {/* {isHtmlFile &&   (
                                            <embed 
                                            src={URL.createObjectURL(file)}
                                            width={"200px"}
                                            height={"200px"}
                                            />
                                        )
                                        } */}
                                        <FileMetaData isImageFile={isImageFile}>
                                            <span>{file.name}</span>
                                            <aside>
                                                <span>{convertBytesToKB(file.size)} kb</span>
                                                <RemoveFileIcon
                                                    className="close-icon"
                                                    onClick={() => fileRemove(file)}
                                                />
                                            </aside>
                                        </FileMetaData>
                                    </div>
                                </PreviewContainer>
                            );
                        })}
                    </PreviewList>
                </FilePreviewContainer>               
            </FlexColumn>
        </FlexColumn>
    );
}
DropFileInput.defaultProps ={
    accept:".*",
}

export default DropFileInput;


// ImageConfig[item.type.split('/')[1]] || ImageConfig['default']ImageConfig[item.type.split('/')[1]] ||

// const fileInputField = useRef(null);
// const [files, setFiles] = useState({});

// const addNewFiles = (newFiles) => {
//   for (let file of newFiles) {
//     if (file.size <= maxFileSizeInBytes) {
//       if (!multiple) {
//         return { file };
//       }
//       files[file.name] = file;
//     }
//   }
//   return { ...files };
// };

// const callUpdateFilesCb = (files) => {
//   const filesAsArray = convertNestedObjectToArray(files);
//   updateFilesCb(filesAsArray);
// };

// const handleNewFileUpload = (e) => {
//   const { files: newFiles } = e.target;
//   if (newFiles.length) {
//     let updatedFiles = addNewFiles(newFiles);
//     setFiles(updatedFiles);
//     callUpdateFilesCb(updatedFiles);
//   }
// };

// const removeFile = (fileName) => {
//   delete files[fileName];
//   setFiles({ ...files });
//   callUpdateFilesCb({ ...files });
// };
