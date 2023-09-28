import "./Card.css";
import Tag from "../Tag/Tag";
export default function Card(props) {
  const item = props.item;

  const tags = [
    `Status: ${item.status}`,
    `Species: ${item.species}`,
    `Origin: ${item.origin.name}`,
  ];

  return (
    <div className="card">
      <h2>{item.name}</h2>

      <div className="tags">
        {tags.map(function (tag, index) {
          return <Tag key={index} tag={tag} />;
        })}
      </div>

      <img src={item.image} alt={item.name} />
    </div>
  );
}
