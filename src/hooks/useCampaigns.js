import { useState } from "react"
import { campanhas } from "../data/campanhas"


export function useCampaigns() {
    const [dados] = useState(() => campanhas)

    return { campanhas: dados, carregando: false, erro: null }
}
