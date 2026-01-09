import './Topic.css';

export default function Topic({
  description = 'description',
  title = 'title',
}) {
  return (
    <div className="Topic">
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}
