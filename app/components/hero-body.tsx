import React from 'react';
import { HeroTitles } from './home-hero';

interface HeroBodyProps {
    title: HeroTitles;
}

const HeroBody: React.FC<HeroBodyProps> = ({ title }) => {
    return (
        <div className="hero-body">
            <h1>{title}</h1>
        </div>
    );
};

export default HeroBody;
