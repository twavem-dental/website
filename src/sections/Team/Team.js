import React from 'react';
import './Team.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import imgOne from '../../assets/about/team/1.png';
import imgTwo from '../../assets/about/team/2.png';
import imgThree from '../../assets/about/team/3.png';
import imgFour from '../../assets/about/team/4.png';
import imgFive from '../../assets/about/team/5.png';
import imgSix from '../../assets/about/team/6.png';
import imgSeven from '../../assets/about/team/7.png';

const Team = () => {

    const teams = [
        {
            'img': imgOne,
            'name': 'Dr. Aman Raj',
            'degree': 'BDS, MDS',
            'department': 'Prosthodontist & Implantologist'
        },
        {
            'img': imgTwo,
            'name': 'Dr. Raushan Bhatt',
            'degree': 'BDS, MDS',
            'department': 'Prosthodontist & Implantologist'
        },
        {
            'img': imgThree,
            'name': 'Dr. Anushka',
            'degree': 'BDS, MDS',
            'department': 'Orthodontist'
        },
        {
            'img': imgSix,
            'name': 'Dr. Rahul',
            'degree': 'BDS, MDS',
            'department': 'Oral Surgeon'
        },
        {
            'img': imgFour,
            'name': 'Dr. Ankit Saha',
            'degree': 'BDS, MDS',
            'department': 'Endodontist'
        },
        {
            'img': imgFive,
            'name': 'Dr. Shadab Anwar',
            'degree': 'BDS, MDS',
            'department': 'Pedodontist'
        },
        {
            'img': imgSeven,
            'name': 'Dr. Bharti',
            'degree': 'BDS, MDS',
            'department': 'Pedodontist'
        },
    ]


    return (
        <section className='team-section pt-100' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <SectionTitle 
                            subTitle="Meet our Team"
                            title="Get to know the Twamev
                            Dental Team"
                        />
                    </div>

                    <div className="col-lg-5">
                        <p className='pt-5'>Passionate about dentistry and patient care, our team works to bring you the best in modern dental treatments.</p>
                    </div>
                </div>

                <div className="row">
                    {
                        teams.map (team => 
                            <div className="col-lg-3 col-sm-6">
                                <div className="team-card">
                                    <div className="team-img">
                                        <img src={team.img} alt="" />
                                    </div>
                                    <h3>{team.name}</h3>
                                    <span>{team.degree}</span>
                                    <br/>
                                    <h8>({team.department})</h8>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Team;