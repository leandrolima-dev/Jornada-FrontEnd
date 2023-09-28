import "./Tag.css";
export default function Tag(props) {
  const tag = props.tag
   
  return (
    <div className="tag">{tag}</div>
  );
}
