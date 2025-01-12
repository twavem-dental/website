import React from 'react';
import './Testimonial.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import imgOne from '../../assets/testimonial/1.png';
import imgTwo from '../../assets/testimonial/2.png';
import imgThree from '../../assets/testimonial/3.png';
import TestimoniCard from '../../components/TestimoniCard/TestimoniCard';
import { AiFillStar } from "react-icons/ai";
import Slider from "react-slick";

const Testimonial = () => {

    const testimonails = [
        {
            'img': imgOne,
            'name': 'Shubham Kumar',
            'description' : 'I had a root canal and an implant done by Dr. Aman Raj, and both procedures were painless. The clinic is clean, well-maintained, and I highly recommend him for dental care!',
            'ratings':[<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>]
        },
        {
            'img': imgThree,
            'name': 'Kanchan Gupta',
            'description' : 'I came in here with severe pain and left pain-free thanks to Dr. Aman Raj\'s friendly and painless treatment. Highly recommend for affordable and effective care!',
            'ratings':[<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>]
        },
        {
            'img': imgTwo,
            'name': 'Rishikesh Kumar',
            'description' : 'Dr Aman Raj is well behaved, knowledgeable dentist who takes time to plain treatment options very patiently. Will definitely recommend Twamev Dental for best treatment in Patna.',
            'ratings':[<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>]
        },
        {
            'img': imgOne,
            'name': 'Shiphalika Sinha',
            'description' : 'Dr. Aman is a skilled dentist, he provides quiet comfortable and painless dental treatment,  I would definitely recommend him to anyone in Patna.',
            'ratings':[<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>]
        },
        {
            'img': imgOne,
            'name': 'Satyam Raj',
            'description' : 'Dr. Aman Raj is polite and humble in his approach to patients. I had a root canal treatment (RCT) done, and it was perfect. My pain subsided quickly after the procedure. Thank you, doctor! 🙏',
            'ratings':[<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>,<AiFillStar/>]
        }
    ]

    // slider
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };

    return (
        <section className='testimonail-section section-bg section-common pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <SectionTitle 
                        subTitle="TESTIMONIAL"
                        title="What people have said about us"
                        />
                    </div>
                    <div className="col-lg-6">
                        <p className="pt-5">Discover how Twamev Dental Clinic has made a difference in the lives of our patients through exceptional care and expertise.</p>
                    </div>
                </div>

                <Slider {...settings} className="testimoni-slider">
                    {
                        testimonails.map(testimonail => <TestimoniCard testimonail={testimonail} />)
                    }
                </Slider>
               
            </div>
        </section>
    );
};

export default Testimonial;