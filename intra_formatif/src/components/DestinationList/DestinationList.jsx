export default function DestinationList({ items }) {
  // "items" sera passé par App.jsx (voir plus bas)
  return (
    <section className="exo-3">
      <h2>Destinations</h2>
      <ul>
        {/* Rendu laid à remplacer par items.map(...) */}
        <li>{items[0].name} - {items[0].price} (Départ: {items[0].date})</li>
        <li>{items[1].name} - {items[1].price} (Départ: {items[1].date})</li>
        <li>{items[2].name} - {items[2].price} (Départ: {items[2].date})</li>
      </ul>
    </section>
  );
}