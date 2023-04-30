import Header from "../components/Header";
import Footer from "../components/Footer";
import Appointment from "../components/Appointment";
import { useSelector } from "react-redux";
import Carrousel from "../components/Carrousel";
import Testimonials from "../components/Testimonials";
import About from "../components/About";


export default function MainPage() {
    const { isLoggedIn } = useSelector(state => state.auth);
    if(isLoggedIn){

    }
    return (
        <>
            <Header/>
            <Carrousel/>
            <About/>
            <Testimonials/>
            <Appointment/>
            <Footer/>
        </>
    )
}
