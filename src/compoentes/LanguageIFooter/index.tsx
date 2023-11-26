import brazil from '../../assets/images/Brazil.svg'
import use from '../../assets/images/USA.svg'
import spain from '../../assets/images/Spain.svg'

import {
    Container,
} from './style'

import { LanguageData } from '../../types'


export function LanguageFooter({btnpt, btnen, btnes, languages}:LanguageData){

    return(
        <Container>
            <button onClick={() => languages('pt')}>
                <img src= {brazil} alt="Português" />
                <p>{btnpt}</p>
            </button>

            <button onClick={() => languages('en')}>
                <img src= {use} alt="English" />
                <p>{btnen}</p>
            </button>

            <button onClick={() => languages('es')}>
                <img src= {spain} alt="Español" />
                <p>{btnes}</p>
            </button>

        </Container>
    )
}