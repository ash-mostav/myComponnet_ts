import React, { useState, useRef, useEffect, lazy } from "react";
import useSnackBar from "../../Widgets/Snackbaar/SnackBaar";
import AdvancedTT from "../../Widgets/ToolTip/AdvancedToolTip";
import { Button, Form, Input, IStyledInputProps, InputPopList, CloseIcon, StyledTagg, StyledTagIput, Tagg, TagInputDev, TagTitle, CloseingTag, Tagger, StyledTagger, TagerTitle } from "./TagSearch.Styles";


interface IInputProps extends IStyledInputProps {
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
    [key: string]: any;
    tags?: Array<string>;
    event?: (event: React.KeyboardEventHandler<HTMLInputElement>) => string | number;
    onClick?: () => void;
}

const SearchTaginput: React.FC<IInputProps> = (props) => {
    const formRef = useRef<HTMLDivElement | null>(null);
    const inputFocus = useRef<HTMLInputElement | null>(null);
    const [input, setInput] = useState<string>("");
    const [barOpened, setBarOpened] = useState<boolean>(false);
    const [tagData, setTagData] = useState<Array<string>>(props.tags||[]);
    const [list, setList] = useState<boolean>(false);
    const [list2, setList2] = useState<boolean>(false);
    const [filterText, setFilterText] = useState<string>('');
    console.log("tags", props.tags)

    const onFormSubmit = (e: any) => {
        e.preventDefault();
        setInput("");
        // setBarOpened(false);
        alert(getFilteredOptions())
    };

    const getFilteredOptions = () => {
        return tagData.filter((tag: any) => {
            const textIsEmpty = filterText.length === 0;
            const optionName = tag.toUpperCase();
            const textInOptionName = optionName.includes(filterText.trim().toUpperCase());
            return textIsEmpty || textInOptionName;
        });
    }


    const removeTagData = (indexToRemove: number) => {
        setTagData([...tagData.filter((_: any, index: number) => index !== indexToRemove)]);
    };
    const addTagData = (event: any) => {
        if (event.target.value.trim() !== "") {
            const firstfilter = tagData.filter((tag: string) => { return tag; });
            if (firstfilter.includes(event.target.value.trim())) {
                event.target.value = 'There is a tag with same name';

            } else {
                setTagData([...tagData, event.target.value]);
                event.target.value = '';
            }
        }
        // if (event.target.value.trim() !== '' ) {
        //     setTagData([...tagData, event.target.value]);
        //     event.target.value = '';
        // }
    };
    const handleKeys = (e: any) => {
        if (e.key === "Enter") {
            addTagData(e);
        } else if (e.key === "Delete") {
            setTagData([...tagData.filter((_: any, index: number) => index)])
        }
    }
    const onClose = () => {
        setTagData([])
    }
    const handlechange = (val: string) => {
        setFilterText(val)
    }
    const handleinputblur = () => {
        if (inputFocus.current?.value.trim() !== '') {

        }
    }

    useEffect(() => {
        // if(tags?.length !==0)setTagData(tags)
        if (barOpened === false) {
            return

        }
        else if (filterText.trim() === '') {
            setBarOpened(true);
            setList(true);
            setList2(false);
        } else if (filterText.trim() !== ''){
            setList(false);
            setList2(true);
        }
    }, [barOpened, filterText, props.tags?.length]);
    return (
        < >
            <Form
                barOpened={barOpened}
                onClick={() => {
                    //   setList(true);
                    setBarOpened(true);
                    inputFocus.current?.focus();
                }}
                onFocus={() => {
                    setBarOpened(true);
                    setList2(true)
                    setList(true)
                    inputFocus.current?.focus();

                    if (inputFocus.current?.value.trim().length) {
                        setList2(true)


                    }
                }}
                onBlur={() => {
                    if (inputFocus.current?.value.trim() !== "") {
                        setList(true);
                    } else {
                        setBarOpened(false);
                        setList(false);
                        setList2(false)
                    }

                }}
                ref={formRef}
            >
                <Button 
                onClick={onFormSubmit}
                barOpened={barOpened}>
                    Search
                </Button>
                <TagInputDev>
                    <CloseingTag>
                        {tagData.length}
                        <AdvancedTT className={"mhd"} type={"bottom"} content={
                            <Tagger>
                                {tagData.map((tag: any, index: number) => (
                                    <StyledTagger  >
                                        <TagerTitle key={index}>{tag}</TagerTitle>
                                    </StyledTagger>
                                ))}
                            </Tagger>
                        }>
                            <span className={tagData.length !== 0 ? "close-btn" : ""} onClick={() => onClose()}>
                                <span className="close-icon" />
                            </span>
                        </AdvancedTT>
                    </CloseingTag>
                    {/* <Tagg>
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
                </Tagg> */}
                    <StyledTagIput
                        type="text"
                        onKeyUp={e => handleKeys(e)}
                        onChange={(e) => { handlechange(e.target.value); { console.log(e.target.value) } }}
                        // onBlur={handleinputblur}
                        ref={inputFocus}
                    // barOpened={props.barOpened=true}
                    />
                </TagInputDev>

                {list && <InputPopList list={list}  >

                    when there is no text

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

                </InputPopList >
                }
                {list2 && <InputPopList list2={list2}  >
                    <div>
                        there is text {filterText}
                    </div>
                    <div>
                        <Tagg>
                            {getFilteredOptions().map((tag: any, index: number) => (
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
                    </div>






                </InputPopList>}




            </Form>
        </>
    );
}
export default SearchTaginput;
