import Background from "./Background/Background";
import Footer from "./Footer/Footer";
import Nav from "./Nav/Nav";
export default function Layout(props){
    return (
        <>
            <Background/>
            <Nav/>
                {props.children}
            <Footer/>
        </>
    )
}