import stackXSvg from '../../assets/images/stackX.svg'
import {
    Container,
    Content,
    LogoImage,
} from './style'

export function Header() {

    function linkStackX() {
        window.open ('https://www.stackx.com.br/','_blank')
    }
    
    return(
        <Container>
            <Content>
                <LogoImage src={stackXSvg} onClick={linkStackX}/>
            </Content>
        </Container>
    )
}