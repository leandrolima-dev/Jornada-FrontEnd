import "./Card.css";
import Tag from "../Tag/Tag";
export default function Card(props) {
  const item = props.item;

  const tags = item.tags || [];

  return (
    <div className="card">
      <h2>{item.nome}</h2>

      <div className="tags">
        {tags.map(function (tag, index) {
          return <Tag key={index} text={tag} />;
        })}
      </div>

      <img src={item.imagemUrl} alt="Rick Sanchez" />
    </div>
  );
}
