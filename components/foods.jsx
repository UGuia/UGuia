export default function Foods({ comidas }) {
  return (
    <div className="comidas">
      <h5>Comidas</h5>
      <article>
        <ul>
          {comidas.map((val, key) => {
            return (
              <li key={key}>
                {val.nombre} : {val.precio}
              </li>
            );
          })}
        </ul>
        ;
      </article>
    </div>
  );
}
