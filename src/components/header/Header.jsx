import './Header.css'

export function Header({ children }) {
  return (
    <header className="header__section">
      {children}
    </header>
  )
}