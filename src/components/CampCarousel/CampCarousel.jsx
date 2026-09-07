import { useEffect, useState } from "react"
import './CampCarousel.css'
import { FaLocationDot, FaRegCalendar } from "react-icons/fa6"

import carousel1 from "../../assets/images/carousel1.jpg"
import carousel2 from "../../assets/images/carousel2.jpg"
import carousel3 from "../../assets/images/carousel3.jpg"
import carousel4 from "../../assets/images/carousel4.jpg"

const campanhas = [
    {
        id: 1,
        imagem: carousel1,
        altText: "Voluntário entregando refeição para pessoa em situação de rua",
        titulo: "Bazar Beneficiente",
        organizador: "por café com afeto",
        descricao: "Dias 05 e 06 de setembro (sábado e domingo, das 11h ás 21h), com o objetivo de arrecadar fundos.",
        local: "Presidente Dutra, MA",
        data: "05 e 06/09"
    },
    {
        id: 2,
        imagem: carousel2,
        altText: "Voluntários organizando doações em uma mesa",
        titulo: "Bazar Beneficiente",
        organizador: "por café com afeto",
        descricao: "Dias 05 e 06 de setembro (sábado e domingo, das 11h ás 21h), com o objetivo de arrecadar fundos.",
        local: "Presidente Dutra, MA",
        data: "05 e 06/09"
    },
    {
        id: 3,
        imagem: carousel3,
        altText: "Voluntários separando roupas e cobertores doados",
        titulo: "Campanha do Agasalho",
        organizador: "por café com afeto",
        descricao: "Doações de roupas e cobertores podem ser entregues durante todo o mês de junho na sede da ONG.",
        local: "Presidente Dutra, MA",
        data: "01 a 30/06"
    },
    {
        id: 4,
        imagem: carousel4,
        altText: "Voluntários organizando cestas de Natal",
        titulo: "Ação Solidária de Natal",
        organizador: "por café com afeto",
        descricao: "Distribuição de cestas básicas e brinquedos para famílias em situação de vulnerabilidade.",
        local: "Presidente Dutra, MA",
        data: "20/12"
    }
]

function calcularCardsVisiveis(largura) {
    if (largura < 640) return 1
    if (largura < 1024) return 2
    return 3
}

function Carousel() {

    const [atual, setAtual] = useState(0)
    const [cardsVisiveis, setCardsVisiveis] = useState(
        () => calcularCardsVisiveis(window.innerWidth)
    )

    function anterior() {
        setAtual(
            atual === 0
                ? campanhas.length - 1
                : atual - 1
        )
    }

    function proximo() {
        setAtual(
            (atual + 1) % campanhas.length
        )
    }

    useEffect(() => {
        const intervalo = setInterval(() => {
            proximo()
        }, 10000)

        return () => clearInterval(intervalo)
    }, [atual])

    useEffect(() => {
        function aoRedimensionar() {
            setCardsVisiveis(calcularCardsVisiveis(window.innerWidth))
        }

        window.addEventListener("resize", aoRedimensionar)
        return () => window.removeEventListener("resize", aoRedimensionar)
    }, [])

    const offsets = Array.from({ length: cardsVisiveis }, (_, i) => i)

    return (
        <div className="carousel">

            <div className="carousel-container">

                <div className="carousel-header">
                    <h2>Nossas Campanhas</h2>
                    <p>Conheça as ações que estamos organizando para ajudar quem mais precisa.</p>
                </div>

                <div className="carousel-slider">
                    <button
                        className="anterior"
                        onClick={anterior}
                    >
                        ❮
                    </button>

                    <div className="carousel-imagens">
                        {offsets.map((offset) => {
                            const index = (atual + offset) % campanhas.length
                            const campanha = campanhas[index]

                            return (
                                <div className="carousel-item" key={campanha.id}>
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
                                        <FaLocationDot />
                                        <p>{campanha.local}</p>
                                    </div>
                                    <div className="calendario">
                                        <FaRegCalendar />
                                        <p>{campanha.data}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <button
                        className="proximo"
                        onClick={proximo}
                    >
                        ❯
                    </button>
                </div>

            </div>

        </div>
    )
}

export default Carousel