import "./Header.css";
export default function Header() {
  return (
    <header className="header">
      <div>
        <a href="/" className="logo-link">
          <img src="https://oceanbrasil.com/assets/logo.svg" 
          alt="Logo do Ocean BR" />
        </a>
      </div>

      <nav className="navbar">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/criar-personagem">Criar</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}