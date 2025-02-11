export const CardComponent = ({ element }) => {
  return (
    <div className="card" key={element.id}>
      <h2>{element.name}</h2>
      <img width={200} src={element.image} alt={`Foto do ${element.name}`} />
      <p>{element.status}</p>
      <p>{element.species}</p>
      <p>{element.location.name}</p>
    </div>
  );
};
