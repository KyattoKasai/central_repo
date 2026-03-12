// Cible : Créer ComposantA, ComposantB, ComposantC
// Structure actuelle : A( B C B ) et A( C B )

// ComposantA
function ComponentA({ children }) {
  return (
    <div className="comp-a" style={{ border: '1px solid red', padding: '10px' }}>
      <h2>Service Global Alpha</h2>
      {children}
    </div>
  );
}

// ComposantB
function ComponentB() {
  return (
    <div className="comp-b" style={{ margin: '5px' }}>
      <span>Option Beta - Actif</span>
    </div>
  );
}

// ComposantC
function ComponentC() {
  return (
    <div className="comp-c" style={{ margin: '5px' }}>
      <i>Détail Gamma - Vérifié</i>
    </div>
  );
}

export default function ServiceManager() {
  return (
    <section className="exo-1">
      {/* Premier Bloc : A( B C B ) */}
      <ComponentA>
        <ComponentB />
        <ComponentC />
        <ComponentB />
      </ComponentA>
      <br />
      {/* Deuxième Bloc : A( C B ) */}
      <ComponentA>
        <ComponentC />
        <ComponentB />
      </ComponentA>
    </section>
  );
}
