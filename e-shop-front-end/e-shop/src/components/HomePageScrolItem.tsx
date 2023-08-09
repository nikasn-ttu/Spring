import { CategoryDTO } from "../domain/CategoryDTO";

interface Props  {
    category : CategoryDTO
    handleClick : (event: any) => void
}

export const HomePageScrolItem = (props : Props) => {
    return (
        <div className="category-scroll-container-item" id={props.category.id} onClick={(() => props.handleClick(props.category.id))} >
            <img src={props.category.image} alt="Image is not available"/>
            <p>{props.category.name}</p>
        </div>
    );
}