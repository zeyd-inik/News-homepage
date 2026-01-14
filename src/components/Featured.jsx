import './Featured.css';

export default function Featured({ src, alt, title, description, index }) {
  return (
    <div className="Featured">
      <div className="img_container">
        <img
          src={src}
          alt={alt}
        />
      </div>
      <div className="text_container">
        <p className="number">{index < 10 ? `0${index + 1}` : index + 1}</p>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
