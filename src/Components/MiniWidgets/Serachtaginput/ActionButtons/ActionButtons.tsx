import {IconsConatainer,CloseIcon,AddIcon} from "./ActionButton.Styles";

export interface IActionSectionProps {
    onAdd?: () => void;
    onDelete?: () => void;
}


function ActionSection({ onAdd, onDelete }: IActionSectionProps): JSX.Element {
    return (
        <IconsConatainer>
            <AddIcon
                onClick={onAdd}>
                +
            </AddIcon>
            <CloseIcon
                onClick={onDelete}
            >
                x
            </CloseIcon>
        </IconsConatainer>
    );
};

export default ActionSection;
