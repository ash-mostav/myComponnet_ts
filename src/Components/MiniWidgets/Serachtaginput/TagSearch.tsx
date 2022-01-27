import React, { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { FlexBox } from "../../../GlobalStyledCom";
import { TagShape } from "../../../Layout/NavBar/NavBar";
import AdvancedTT from "../../Widgets/ToolTip/AdvancedToolTip";
import DropMenu from "../MiniDropmenu/MiniDrop";
import ActionSection, { IActionSectionProps } from "./ActionButtons/ActionButtons";
import {
  Button,
  Form,
  IStyledInputProps,
  InputPopList,
  StyledTagg,
  StyledTagIput,
  Tagg,
  TagInputDev,
  TagTitle,
  CloseingTag,
  Tagger,
  StyledTagger,
  TagerTitle,
  Hcontainer,
  Vcontainer,
} from "./TagSearch.Styles";

interface IInputProps extends IStyledInputProps {
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  [key: string]: any;
  tags?: Array<TagShape>;
  event?: (event: React.KeyboardEventHandler<HTMLInputElement>) => string | number;
  onClick?: () => void;
}

interface ITagMap extends IActionSectionProps {
  tagArr: any;
  tagDataEdit?: any;
  originalTagData?: Array<TagShape>;
}

//////////////////////////////////////////////////////////////////////////

const SearchTaginput: React.FC<IInputProps> = ({ tags = [], ...props }) => {
  const formRef = useRef<HTMLDivElement | null>(null);
  const inputFocus = useRef<HTMLInputElement | null>(null);
  const [barOpened, setBarOpened] = useState<boolean>(false);
  const [tagData, setTagData] = useState<TagShape[]>(tags);
  const [list, setList] = useState<boolean>(false);
  const [list2, setList2] = useState<boolean>(false);
  const [filterText, setFilterText] = useState<string>("");
  const [options, setOptions] = useState<string>("Have any of");

  const onFormSubmit = (e: any) => {
    e.preventDefault();
    // setBarOpened(false);
    if (getSelectedOptions().length === 0) {
      alert(" there are no tag selected ");
    }
  };

  const removeTagData = (itemtoRemove: string) => {
    setTagData([...tagData.filter((item: any) => item.tag !== itemtoRemove)]);
  };
  const handleCheck = (itemtosetselect: string) => {
    setTagData(
      tagData.map((option: any) => {
        if (option.tag !== itemtosetselect) return option;
        return { ...option, isselected: !option.isselected };
      }),
    );
    setFilterText("");
  };
  const getSelectedOptions = () => {
    return tagData.filter((item: { tag: string; isselected: boolean }) => item.isselected);
  };
  const getNonSelectedOptions = () => {
    return tagData.filter((item: { tag: string; isselected: boolean }) => !item.isselected);
  };
  const addTagData = (event: any) => {
    if (event.target.value.trim() !== "") {
      const firstfilter = tagData.map((item: any) => item.tag);
      console.log(firstfilter);

      if (firstfilter.includes(event.target.value.trim())) {
        // event.target.value = 'There is a tag with same name';
        alert("'There is a tag with same name'");
        event.target.value = "";
      } else {
        const newtag = {
          tag: event.target.value || "",
          isselected: true,
        };
        setTagData((perv) => [...perv, newtag]);
        event.target.value = "";
      }
    }
  };
  const handleKeys = (e: any) => {
    if (e.key === "Enter") {
      addTagData(e);
    } else if (e.key === "Delete") {
      const lastTag = tagData.length - 1;
      setTagData([...tagData.filter((item: any, index) => index !== lastTag)]);
      // setTagData([...tagData.filter((item:any,index) => index !== lastTag)]);
    }
  };
  const onClose = () => {
    setTagData([]);
  };
  const handlechange = (val: string) => {
    setFilterText(val);
  };
  useEffect(() => {
    if (barOpened === false) {
      return;
    } else if (filterText.trim() === "") {
      setBarOpened(true);
      setList(true);
      setList2(false);
    } else if (filterText.trim() !== "") {
      setList(false);
      setList2(true);
    }
  }, [barOpened, filterText, props.tags?.length, options]);
  return (
    <FlexBox>
      <Form
        barOpened={barOpened}
        onClick={() => {
          setBarOpened(true);
          inputFocus.current?.focus();
        }}
        onFocus={() => {
          setBarOpened(true);
          setList2(true);
          setList(true);
          inputFocus.current?.focus();
          if (inputFocus.current?.value.trim().length) {
            setList2(true);
          }
        }}
        onBlur={() => {
          if (inputFocus.current?.value.trim() !== "") {
            setList(true);
          } else {
            setBarOpened(false);
            setList(false);
            setList2(false);
          }
        }}
        ref={formRef}
      >
        <Button onClick={onFormSubmit} barOpened={barOpened}>
          Search
        </Button>
        <TagInputDev>
          <CloseingTag>
            {getSelectedOptions().length}
            <AdvancedTT
              type={"bottom"}
              content={
                <Tagg>
                  {getSelectedOptions().map((item: any, index: number) => (
                    <StyledTagger className={!item.isselected ? "notselected" : "selected"}>
                      <TagerTitle key={index}>{item.tag}</TagerTitle>
                    </StyledTagger>
                  ))}
                </Tagg>
              }
            >
              <span
                className={getSelectedOptions().length !== 0 ? "close-btn" : ""}
                onClick={() => onClose()}
              >
                <span className="close-icon" />X
              </span>
            </AdvancedTT>
          </CloseingTag>

          <Tagg>
            {getSelectedOptions()
              .map((item: any, index: number) => (
                <StyledTagg key={index} className={!item.isselected ? "notselected" : "selected"}>
                  <TagTitle>{item.tag}</TagTitle>
                  <ActionSection
                    onAdd={() => handleCheck(item.tag)}
                    onDelete={() => removeTagData(item.tag)}
                  />
                </StyledTagg>
              ))
              .slice(0, 2)}
          </Tagg>
          <StyledTagIput
            type="text"
            onKeyUp={(e) => handleKeys(e)}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              handlechange(e.target.value);
            }}
            ref={inputFocus}
          />
        </TagInputDev>

        {list && (
          <InputPopList list={list}>
            <div className="listheader">
              <p>Use " * " to veiw all items</p>
            </div>
            <Vcontainer>
              <TagMap
                tagArr={getNonSelectedOptions()}
                tagDataEdit={(newtagdata: []) => setTagData(newtagdata)}
                originalTagData={tagData}
              />
              <TagMap
                tagArr={getSelectedOptions()}
                tagDataEdit={(newtagdata: []) => setTagData(newtagdata)}
                originalTagData={tagData}
              />
            </Vcontainer>
          </InputPopList>
        )}
        {list2 && (
          <InputPopList list2={list2}>
            <div className="listheader">
              <p>there is text {filterText}</p>
              <div className="filterContainer">
                <p>Filter Options</p>
                <DropMenu
                  name={"FilterOption"}
                  editOption={(newOptions: any) => setOptions(newOptions)}
                />
              </div>
            </div>
            <Vcontainer>
              {/* <TagMap tagArr={getFilteredOptions()} tagDataEdit={(newtagdata: []) => setTagData(newtagdata)} originalTagData={tagData} /> */}
              <Tagg>
                {getFilteredOptions(tagData, filterText, options).map(
                  (item: any, index: number) => (
                    <StyledTagg
                      key={index}
                      className={!item.isselected ? "notselected" : "selected"}
                    >
                      <TagTitle>{item.tag}</TagTitle>
                      <ActionSection
                        onAdd={() => handleCheck(item.tag)}
                        onDelete={() => removeTagData(item.tag)}
                      />
                    </StyledTagg>
                  ),
                )}
              </Tagg>
            </Vcontainer>
          </InputPopList>
        )}
      </Form>
    </FlexBox>
  );
};
export default SearchTaginput;

const TagMap = React.memo(function ({
  tagArr,
  tagDataEdit,
  originalTagData = [],
}: ITagMap): JSX.Element {
  const [originalData] = useState<TagShape[]>(originalTagData);

  const removeTagData = useCallback(
    (indexToRemove: number) => {
      tagDataEdit([...originalData?.filter((_: any, index: number) => index !== indexToRemove)]);
    },
    [originalData, tagDataEdit],
  );

  const handleCheck = useCallback(
    (itemtosetselect: string) => {
      tagDataEdit(
        originalData?.map((option: any) => {
          if (option.tag !== itemtosetselect) return option;
          return { ...option, isselected: !option.isselected };
        }),
      );
    },
    [originalData, tagDataEdit],
  );
  useEffect(() => {}, [originalData, originalTagData]);
  return (
    <Hcontainer>
      <Tagg>
        {tagArr?.map((item: any, index: number) => (
          <StyledTagg key={index} className={!item.isselected ? "notselected" : "selected"}>
            <TagTitle>{item.tag}</TagTitle>
            <ActionSection
              onAdd={() => handleCheck(item.tag)}
              onDelete={() => removeTagData(index)}
            />
          </StyledTagg>
        ))}
      </Tagg>
    </Hcontainer>
  );
});

// <Hcontainer>
//     <Tagg>
//         {getNonSelectedOptions().map((item: any, index: number) => (
//             <StyledTagg key={index} className={!item.isselected ? "notselected" : "selected"} >
//                 <TagTitle>{item.tag}</TagTitle>
//                 <ActionSection
//                     onAdd={() => handleCheck(item.tag)}
//                     onDelete={() => removeTagData(item.tag)}
//                 />
//             </StyledTagg>
//         ))}
//     </Tagg>

// </Hcontainer>

const getFilteredOptions = (tagData: any[], filterText: string, options: string) => {
  return tagData.filter((item: any) => {
    const textIsEmpty = filterText.length === 0;
    let optionName = item.tag.toUpperCase();
    let textInOptionName = optionName.includes(filterText.trim().toUpperCase());
    let startsWithOptionName = optionName.startsWith(filterText.trim().toUpperCase().charAt(0));
    if (filterText.trim() === "*") {
      return optionName;
    }
    if (options.match("Starting with")) {
      return textIsEmpty || startsWithOptionName;
    } else if (options.match("Have any of")) {
      return textIsEmpty || textInOptionName;
    }
  });
};
