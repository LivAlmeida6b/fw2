import { Container } from "react-bootstrap"
import Menu from "./component/navbar"
import Footer from "./component/footer"

export default function Promessa)(){
    var prometido=""
    setTimeout(() => {
        prometido= "é dívida"
        document.title="Promessa é dívida";
    }, 2000); 
    return <>
    <Menu/>
    <Container>
        Promessa {prometido}
    </Container>
    <Footer/>
}