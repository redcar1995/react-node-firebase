
import Testimonial from "./Testimonial";



export default function Testimonials() {
  
    return (
        <>
            <div className="container my-24 px-6 mx-auto">

                <section className="mb-32 text-gray-800 text-center">

                    <h2 className="text-3xl font-bold mb-12">Better Services</h2>

                    <div className="grid md:grid-cols-3 gap-x-6 lg:gap-x-12">
                        <Testimonial/>
                        <Testimonial/>
                        <Testimonial/>
                    </div>

                </section>

            </div>
        </>


    )
}