import fileDefault from '../Assets/Imag-uploader-Icons/Blank.png';
import fileCSS from '../Assets/Imag-uploader-Icons/CSS.png';
import filePdf from '../Assets/Imag-uploader-Icons/PDF.png';
import filePng from '../Assets/Imag-uploader-Icons/PNG.png';
import fileAvi from '../Assets/Imag-uploader-Icons/AVI.png';
import fileDll from '../Assets/Imag-uploader-Icons/DLL.png';
import fileDoc from '../Assets/Imag-uploader-Icons/Doc.png';
import fileEps from '../Assets/Imag-uploader-Icons/EPS.png';
import fileHtm from '../Assets/Imag-uploader-Icons/HTML.png';
import fileJpg from '../Assets/Imag-uploader-Icons/JPG.png';
import fileMov from '../Assets/Imag-uploader-Icons/MOV.png';
import fileMp3 from '../Assets/Imag-uploader-Icons/MP3.png';
import filePpt from '../Assets/Imag-uploader-Icons/PPT.png';
import filePsd from '../Assets/Imag-uploader-Icons/PSD.png';
import fileTxt from '../Assets/Imag-uploader-Icons/TXT.png';
import fileWav from '../Assets/Imag-uploader-Icons/WAV.png';
import fileXls from '../Assets/Imag-uploader-Icons/XLS.png';
import fileZip from '../Assets/Imag-uploader-Icons/ZIP.png';


type ImageConfig = {
    default: string;
    pdf: string;
    png: string;
    css: string;
    avi: string;
    dll: string;
    docx: string;
    eps: string;
    html: string;
    jpg: string;
    jpeg: string;
    mov: string;
    mp3: string;
    pptx: string;
    psd: string;
    plain: string;
    txt: string;
    wav: string;
    xlsx: string;
    zip: string;
    rar: string;
}
export const ImageConfig: ImageConfig = {
    default: fileDefault,
    pdf: filePdf,
    png: filePng,
    css: fileCSS,
    avi:fileAvi,
    dll:fileDll,
    docx:fileDoc,
    eps:fileEps,
    html:fileHtm,
    jpg:fileJpg,
    jpeg:fileJpg,
    mov:fileMov,
    mp3:fileMp3,
    pptx:filePpt,
    psd:filePsd,
    plain:fileTxt,
    txt:fileTxt,
    wav:fileWav,
    xlsx:fileXls,
    zip:fileZip,
    rar:fileZip
}

// export { default as AddIcon } from "./Icons/Add";