import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import './Blogs.scss';
import imgOne from '../../assets/blogs/1.png';
import imgTwo from '../../assets/blogs/2.png';
import imgThree from '../../assets/blogs/3.png';
import BlogCard from '../../components/BlogCard/BlogCard';

const Blogs = () => {

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
        }
    ]


    return (
        <section className='pt-100 pb-70 blog-section'>
            <div className="container">
                <SectionTitle
                    subTitle="Blogs"
                    title="Stay updated with our latest news"
                />

                <div className="row">
                    {
                        Blogs.map (blog => <BlogCard blog={blog} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blogs;