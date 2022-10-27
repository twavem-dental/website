import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import PageTitle from '../components/PageTitle/PageTitle';
import Footer from '../sections/Footer/Footer';
import BlogCard from '../components/BlogCard/BlogCard';
import imgOne from '.././assets/blogs/1.png';
import imgTwo from '.././assets/blogs/2.png';
import imgThree from '.././assets/blogs/3.png';
import imgFour from '.././assets/blogs/4.png';
import imgFive from '.././assets/blogs/5.png';
import imgSix from '.././assets/blogs/6.png';

const BlogsPage = () => {

    const Blogs = [
        {
            'img': imgOne,
            'title':'New Technology Make for Dental Operation',
            'description':'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing ',
            'category': 'TECHNOLOGY'
        },
         {
            'img': imgTwo,
            'title':'Regular Dental care make Your Smile Brighter',
            'description':'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing ',
            'category': 'DENTAL'
        },
        {
            'img': imgThree,
            'title':'Dental Hygiene for All Age to Make Smile',
            'description':'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing ',
            'category': 'HYGIENE'
        },
        {
            'img': imgFour,
            'title':'New Technology Make for Dental Operation',
            'description':'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing ',
            'category': 'TECHNOLOGY'
        },
         {
            'img': imgFive,
            'title':'Regular Dental care make Your Smile Brighter',
            'description':'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing ',
            'category': 'DENTAL'
        },
        {
            'img': imgSix,
            'title':'Dental Hygiene for All Age to Make Smile',
            'description':'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing ',
            'category': 'HYGIENE'
        }
    ]

    return (
        <>
            <Navbar />
            <PageTitle />
            <section className='pb-70'>
                <div className="container">
                    <div className="row">
                        {
                            Blogs.map(blog => <BlogCard blog={blog} />)
                        }
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default BlogsPage;