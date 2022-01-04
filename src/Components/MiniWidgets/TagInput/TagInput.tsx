import { useState } from "react";
import { CloseIcon, StyledTagg, StyledTagIput, Tagg, TagInputDev, TagTitle,CloseingTag } from "./TagInput.Styles";

interface ITagProps {
  // tags:Array<[string, (...value: string) => string]>;
  [key: string]: any;
  tags: Array<string>;
  event?: (event: React.KeyboardEventHandler<HTMLInputElement>) => string | number;
  onClick?: () => void;


}

const TagInput: React.FC<ITagProps> = ({ tags }) => {
  const [tagData, setTagData] = useState<Array<string>>(tags);

  const removeTagData = (indexToRemove: number) => {
    setTagData([...tagData.filter((_: any, index: number) => index !== indexToRemove)]);
  };
  const addTagData = (event: any) => {
    if (event.target.value.trim() !== '') {
      setTagData([...tagData, event.target.value]);
      event.target.value = '';
    }
  };
  const handlekeypress = (event: any) => {
    if (event.target.value.trim() !== "") {
      if (event.key === "Backspace" && tagData.length === 0) {
        setTagData([...tagData.filter((_, index) => index)]);
      }
    }
  }
  const handleKeys = (e: any) => {
    if (e.key === "Enter") {
      addTagData(e);
    } else if (e.key === "Backspace") {
      setTagData([...tagData.filter((_, index) => index)])
    }
  }
  const onClose = () => {
    setTagData([])
  }


  return (
    <>
      {tagData.map(x=><p>{x}</p>)}
      <TagInputDev>
      <CloseingTag>
        {tagData.length}
        <span className={tagData.length !== 0 ?"close-btn":""} onClick={() => onClose()}>
          <span className="close-icon" />
        </span>
        </CloseingTag>
        <Tagg>
          {tagData.map((tag: any, index: number) => (
            <StyledTagg key={index} >
              <TagTitle>{tag}</TagTitle>
              <CloseIcon
                onClick={() => removeTagData(index)}
              >
                x
              </CloseIcon>
            </StyledTagg>
          ))}
        </Tagg>
        <StyledTagIput
          type="text"
          onKeyUp={e => handleKeys(e)}
          // onKeyUp={(event:React.KeyboardEvent<HTMLInputElement>) => (event.key === 'Enter' ? addTagData(event) : null)}
          placeholder="Press enter to add a tag"
        />
      </TagInputDev>
    </>
  );
};

export default TagInput;

