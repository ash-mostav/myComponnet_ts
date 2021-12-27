

type ButtonProps = {
    value: "Submit" | "Continue" | "Update";
    processing: boolean;
};
function SButton({ value, processing }: ButtonProps) {
    return <button>{processing ? "Processing" : value}</button>;
}



export default SButton;