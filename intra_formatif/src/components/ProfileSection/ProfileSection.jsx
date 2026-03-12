export default function ProfileSection(props) {
  // ÉTAPE 1 : Sortir cet objet et le mettre dans App.jsx
  const USER_DATA = { 
    name: "Alex Prof", 
    role: "Directeur", 
    joinDate: "2024-02-10" 
  };

  return (
    <section className="exo-2">
      <h2>Profil Utilisateur</h2>
      <div className="user-box">
        {/* ÉTAPE 2 : Remplacer par props.user.name, etc. */}
        <p>Nom : {USER_DATA.name}</p>
        <p>Rôle : {USER_DATA.role}</p>
        <p>Membre depuis : {USER_DATA.joinDate}</p>
      </div>
    </section>
  );
}