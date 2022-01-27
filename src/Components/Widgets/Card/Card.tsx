import { StyledCard } from "./Card.Styles";

interface ICardProps {
    children?: React.ReactNode;

}

const Card: React.FC<ICardProps> = ({ children }) => {
    return (
        <StyledCard>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIkf1v8kY4Y9Caj9_CNDhQ9wW_d_5VIauJ3Q&usqp=CAU" alt="icon" />
            <footer>
                <h4>Solo Leveling</h4>
                <p>{children} sol jing woo</p>
            </footer>
        </StyledCard>

    );
}
export default Card;