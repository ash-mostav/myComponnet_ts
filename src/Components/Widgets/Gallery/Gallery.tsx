import React, { ImgHTMLAttributes } from "react";
import { PhotoGrid, PhotoCard } from "./Gallery.Styles";

interface IIMageProps {
    alt?: string | undefined;
    crossOrigin?: "anonymous" | "use-credentials" | "" | undefined;
    decoding?: "async" | "auto" | "sync" | undefined;
    height?: number | string | undefined;
    loading?: React.ImgHTMLAttributes<HTMLImageElement>;
    referrerPolicy?: React.HTMLAttributeReferrerPolicy | undefined;
    sizes?: string | undefined;
    src?: string | undefined;
    srcSet?: string | undefined;
    useMap?: string | undefined;
    width?: number | string | undefined;
    className?: string | undefined;
    style?: React.CSSProperties;
   
}
const Gallery: React.FC = () => {
    return (
        <>
            <PhotoGrid>
                <PhotoCard className=" card-wide card-tall" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1583511416766-083ba12de77c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60")' }} />
                

                <PhotoCard className=" card-tall" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1583355964351-03849a598923?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60")' }} />

                <PhotoCard className="" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1579033835392-22eb83e321ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60")' }} />

                <PhotoCard className="card-tall" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1558980664-10e7170b5df9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60")' }} />

                <PhotoCard className="card-wide" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1583870908921-85a37e9ab2ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60")' }} />

                <PhotoCard className="" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1583932692977-7c74a6b7e7ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60")' }} />

                <PhotoCard className=" card-wide card-tall" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1583853094378-b60a35f7af97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60")' }} />

                <PhotoCard className="card-wide" style={{ backgroundImage: 'url("background-image:url("https://images.unsplash.com/photo-1583913836387-ab656f4e0457?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60")' }} />

                <PhotoCard className="card-tall" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1583863541613-c55405a2f8d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60")' }} />

                <PhotoCard className="card-tall" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1583922828313-28057c4cbd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60")' }} />
                <PhotoCard className="" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1567322501588-60c8e1a37eeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60")' }} />

                <PhotoCard className=""  style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1583800896921-080f88712a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60")' }} />

            </PhotoGrid>
        </>
    );
}
export default Gallery;

export const ImageController: React.FC<IIMageProps> = ({ className, style, alt, crossOrigin, decoding, height, loading , referrerPolicy, sizes, src, srcSet, useMap, width }) => {
    
    return <img
        style={style}
        className={className}
        alt={alt}
        crossOrigin={crossOrigin}
        decoding={decoding}
        height={height}
        loading={"lazy"}
        referrerPolicy={referrerPolicy}
        sizes={sizes}
        src={src}
        srcSet={srcSet}
        useMap={useMap}
        width={width}
    />
}