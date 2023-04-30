import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import img1 from '../assets/images/happycouple1.jpeg';

export default function About() {
    useEffect(() => {
        AOS.init({
                duration: 1000,
            });
        AOS.refresh();
      }, []);

    return (
        <>
            <div className="flex flex-row space-x-24  m-24 justify-between">
                <div className="w-1/2 flex flex-col rounded-lg " data-aos="fade-right">
                    <div className="about-left" >
                        <img src={img1} alt="donto" className="img-fluid donto rounded-lg" />
                        {/* <img src={img1} alt="donto" className="img-fluid animated dontoAnim" /> */}
                    </div>

                </div>
                <div className="w-1/2 flex flex-col ">
                    <div className="about-right">
                        <div className="about-content text-start" data-aos="zoom-in">
                            <h1 className=' text-5xl font-bold text-center'>Welcome to a Family</h1><br/>
                            <p className='text-xl justify-left '>Welcome to Datobbo Dental represents everything going to dentist necessary. We have upgraded your dreaded dentist appointment and transformed it into a relaxing. Consectetur adipisicing elit. Quod ea, consequuntur itaque enim et expedita, optio omnis ipsa magni, perspiciatis totam ipsum! Voluptatibus, neque at.</p>
                        </div>
                        <div className="fun-fact-sec" data-aos="fade-right">
                            <div className="single-fun">
                                <span>500</span>
                                <span>+</span>
                                <p>Happy Patients</p>
                            </div>
                            <div className="single-fun sp-fun" data-aos="fade-right">
                                <span>88</span>
                                <span>+</span>
                                <p>Qualified Doctors</p>
                            </div>
               
                            <span className="line"></span>
                            <button className="theme-btn btn-fill form-btn mt-5">Learn more</button>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}