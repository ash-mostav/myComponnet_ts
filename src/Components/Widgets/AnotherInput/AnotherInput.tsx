import * as React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`;

type InputIconProps = {
  icon: any;
};

const InputIcon = styled.span<InputIconProps>`
  position: absolute;
  bottom: 16px;
  left: 16px;
  height: 20px;
  width: 20px;
  background: url(${props => props.icon});
  background-size: 100% 100%;
`;

const Emoji = styled.div`
  position: absolute;
  bottom: 16px;
  left: 16px;
  height: 20px;
  width: 20px;
  background-size: 100% 100%;
`;

type InputComponentProps = {
  hasIcon: boolean;
  hasEmoji: boolean;
  maxWidth: string;
};

const InputComponent = styled.input<InputComponentProps>`
  width: 100%;
  border-radius: 2px;
  border: 2px solid #f2f2f2;
  background-color: ${props => (props.readOnly ? "#e9ecef" : "transparent")};
  font-size: 16px;
  padding: 15px;
  max-width: ${props => props.maxWidth || "100%"};
  padding-left: ${props => (props.hasIcon || props.hasEmoji ? "48px" : "15px")};
 
`;

interface StyleObject {
  wrapper?: React.CSSProperties;
  icon?: React.CSSProperties;
  input?: React.CSSProperties;
}

export interface IInputProps {
  iconSrc?: any;
  emojiSrc?: any;
  value?: string;
  onChange: (changeEvent: { [name: string]: string }) => void;
  placeholder?: string;
  defaultValue?: string;
  name?: string;
  id?: string;
  className?: string;
  maxWidth?: string;
  style?: StyleObject;
  readOnly?: boolean;
}

export const Input = (props: IInputProps) => {
  const {
    iconSrc,
    emojiSrc,
    value,
    onChange,
    placeholder,
    defaultValue,
    name,
    id,
    className,
    maxWidth,
    style,
    readOnly
  } = props;

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    onChange({ [name || "value"]: value });
  };

  const hasControlledValue = value ? { value } : {};
  const hasIdValue = id ? { id } : {};
  return (
    <InputWrapper style={(style && style.wrapper) || {}}>
      {iconSrc ? (
        <InputIcon style={(style && style.icon) || {}} icon={iconSrc} />
      ) : null}
      {emojiSrc ? <Emoji>{props.emojiSrc}</Emoji> : null}
      <InputComponent
        defaultValue={defaultValue || ""}
        placeholder={placeholder || ""}
        name={name || ""}
        className={className || ""}
        readOnly={readOnly || false}
        style={(style && style.input) || {}}
        hasIcon={Boolean(iconSrc)}
        hasEmoji={Boolean(emojiSrc)}
        onChange={handleChange}
        maxWidth={maxWidth || ""}
        {...hasControlledValue}
        {...hasIdValue}
      />
    </InputWrapper>
  );
};
