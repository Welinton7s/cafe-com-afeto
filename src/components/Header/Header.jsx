import { useEffect, useState } from "react"
import './Header.css'
import { FaSun, FaMoon, FaBars, FaXmark } from "react-icons/fa6"

function Header() {

    const [tema, setTema] = useState(
        () => localStorage.getItem("tema") || "light"
    )
    const [menuAberto, setMenuAberto] = useState(false)

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", tema)
        localStorage.setItem("tema", tema)
    }, [tema])

    function alternarTema() {
        setTema(tema === "light" ? "dark" : "light")
    }

    function alternarMenu() {
        setMenuAberto(!menuAberto)
    }

    return (
        <div className="header">
            <div className="container">
                <div className="logo">
                    <strong>Café com Afeto</strong>
                </div>

                <button
                    className="menu-hamburguer"
                    onClick={alternarMenu}
                    aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
                >
                    {menuAberto ? <FaXmark /> : <FaBars />}
                </button>

                <div className={`menu ${menuAberto ? "menu-aberto" : ""}`}>
                    <ul>
                        <li>Home</li>
                        <li>Doar</li>
                        <li>Seja Voluntario</li>
                        <li>Campanhas</li>
                        <li>Historias</li>
                    </ul>
                    <button
                        className="tema-toggle"
                        onClick={alternarTema}
                        aria-label="Alternar tema claro/escuro"
                    >
                        {tema === "light" ? <FaMoon /> : <FaSun />}
                    </button>
                    <button>Entrar</button>
                </div>
            </div>
        </div>
    )
}

export default Header