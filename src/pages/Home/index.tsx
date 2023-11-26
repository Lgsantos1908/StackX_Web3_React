import {Header} from '../../compoentes/Header'
import { LanguageFooter } from '../../compoentes/LanguageIFooter'
import { useState } from 'react'

import {
    Container,
    Content,
    SkillsList,
} from './style'

export function Home(){

    const skills = ["Javascript","React",'Vue js','Tailwind CSS','Styled Components','Saas',"Node",'TypeScript',"Angular","Java"]



    const idioma = {
        en: "Hello, my name is Luiz Gabriel Santos and I am a Front-End Developer, Technologies that I have experience:",
        pt: "Olá, meu nome é Luiz Gabriel Santos e eu sou Desenvolvedor Front-End, Tecnologias que tenho experiência:",
        es: "Hola, mi nombre es Luiz Gabriel Santos y soy Desarrollador Front-End, Tecnologías en las que tengo experiencia:"
    }; 
    
    const [language, setLanguage] = useState('pt')
    const [idiomabtpt, setBtnPt] = useState("Português");
    const [idiomabtnen, setBtnEn] = useState("Inglês");
    const [idiomabtnes, setBtnEs] = useState("Espanhol");
    
    function handelLanguage(newLanguage: string) {
        setLanguage(newLanguage)

        if (newLanguage === 'pt') {
            setBtnPt("Português");
            setBtnEn("Inglês");
            setBtnEs("Espanhol");
          } else if (newLanguage === 'en') {
            setBtnPt("Portuguese");
            setBtnEn("English");
            setBtnEs("Spanish");
          } else {
            setBtnPt("Portugués");
            setBtnEn("Inglés");
            setBtnEs("Español");
          }

    }   
    
    return (
       <Container>
            
            <Header/>
            <Content>
                <h1>{idioma[language as keyof typeof idioma]}</h1>
                               
                <SkillsList>
                <ul>
                    {skills.map((e,) => (<li>{e}</li>))}
                    
                </ul>
                </SkillsList>
            </Content>
                <LanguageFooter btnen={idiomabtnen} btnes={idiomabtnes} btnpt={idiomabtpt} languages={handelLanguage}/>
       </Container>
    )
}