import {useState} from "react";
import ImageUploading, {ImageListType} from "react-images-uploading";

export type UploadProperties={
    setCarImg:(image: string)=>void,
}

export default function SingleImageUploadComponent(props: UploadProperties) {
    const [images, setImages] = useState([]);
    const maxNumber = 1;

    const onChange = (
        imageList: ImageListType,
        addUpdateIndex: number[] | undefined
    ) => {
        props.setCarImg(imageList[0].dataURL!)
        console.log(imageList, addUpdateIndex);
        setImages(imageList as never[]);
    };

    return (

        <ImageUploading
            multiple = {false}
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
        >
            {({
                  imageList,
                  onImageUpdate,
                  isDragging,
                  dragProps
              }) => (
                <div className="upload__image-wrapper">
                    <button
                        style={isDragging ? { color: "red" } : undefined}
                        onClick={() => { onImageUpdate(0)}}
                        {...dragProps}
                    >
                        Upload image
                    </button>
                    {imageList.map((image, index) => (
                        <div key={index} className="image-item">
                            <img src={image.dataURL} alt="" width="100"/>
                        </div>
                    ))}
                </div>
            )}
        </ImageUploading>)
}