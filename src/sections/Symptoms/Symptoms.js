import React from 'react';
import './Symptoms.scss';
import IconList from '../../components/IconList/IconList';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Symptoms = ({symptomsHeader, symptomsData}) => {

    return (
        <section className='symptoms-section section-common pt-100 pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <SectionTitle 
                    subTitle="Symptoms"
                    title={symptomsHeader}
                    description="Recognizing the signs and symptoms of a dental issue early can make all the difference. Understanding these indicators helps ensure you get timely and effective treatment for lasting oral health."
                />

                <div className="row">
                    {
                        symptomsData.map(singleSymptoms => 
                            <IconList 
                                icon={singleSymptoms.icon}
                                title={singleSymptoms.title}
                                description={singleSymptoms.description}
                            />
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Symptoms;