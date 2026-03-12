export default function ComponentA({ title, children }) {
  return (
    <div className="comp-a" style={{ border: '1px solid red', padding: '10px' }}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}
