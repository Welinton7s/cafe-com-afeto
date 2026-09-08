import { FaLocationDot, FaRegCalendar } from "react-icons/fa6"
import './CampaignCard.css'

function CampaignCard({ campanha }) {
    return (
        <div className="carousel-item">
            <img
                src={campanha.imagem}
                alt={campanha.altText}
            />
            <div className="carousel-text">
                <h3>{campanha.titulo}</h3>
                <strong>{campanha.organizador}</strong>
                <p>{campanha.descricao}</p>
            </div>
            <div className="carousel-local">
                <FaLocationDot aria-hidden="true" />
                <p>{campanha.local}</p>
            </div>
            <div className="calendario">
                <FaRegCalendar aria-hidden="true" />
                <p>{campanha.data}</p>
            </div>
        </div>
    )
}

export default CampaignCard