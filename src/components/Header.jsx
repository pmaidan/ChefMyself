export function Header({ title }) {
  return (
    <header className="theme-terracotta" style={{ width: '100%', padding: '1rem', textAlign: 'center' }}>
      <h1>{title}</h1>
    </header>
  );
}