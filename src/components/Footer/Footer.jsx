import './Footer.css'
import { FaLocationDot, FaPhone, FaEnvelope, FaRegCopyright } from "react-icons/fa6"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <strong>Café com Afeto</strong>
          <div className='footer-text'>
            <p>Conetamos doadores
                e voluntários a famílias
                que mais precisam,
                com transparência 
                em cada etapa.</p>
          </div>
        </div>
        <div className='footer-menu'>
          <strong>Institucional</strong>
          <ul>
            <li>Sobre Nós</li>
            <li>Nossa Missão</li>
            <li>Transparência</li>
            <li>Prestação de Contas</li>
          </ul>
        </div>
        <div className='footer-menu-ajuda'>
          <strong>Como Ajudar</strong>
          <ul>
            <li>Fazer uma Doação</li>
            <li>Ser Voluntário</li>
            <li>Campanhas Ativas</li>
            <li>Histórias de Impacto</li>
          </ul>
        </div>
        <div className='contato'>
          <strong>Contato</strong>
          <div className='local'>
            <FaLocationDot />
            <p>Presidente Dutra, MA</p>
          </div>
          <div className='tel'>
            <FaPhone />
            <p>(99) 99999-9999</p>
          </div>
          <div className='email'>
            <FaEnvelope />
            <p>contato@cafecomafeto.org</p>
          </div>
        </div>
      </div>
      <div className='copy'>
        <FaRegCopyright />
        <p>2026 Café com Afeto. Todos os direitos reservados</p>
      </div>
    </footer>
  )
}

export default Footer
