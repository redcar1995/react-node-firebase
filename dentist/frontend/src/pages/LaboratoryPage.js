
import Header from "../components/Header";
import Footer from "../components/Footer";
import Appointment from "../components/Appointment";
import { useSelector } from "react-redux";
import { useEffect } from "react";



export default function LaboratoryPage(props) {

    const { isLoggedIn } = useSelector(state => state.auth);
    if(isLoggedIn){
        

    }
    useEffect(() => {
        // dispatch(clearMessage());
        console.log(props.authed);

    }, [])

    
    return (
        <>
            <Header/>
            <Appointment/>
            <Footer/>
        </>
    )
}
