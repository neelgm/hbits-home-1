"use client";
import React from 'react';
import { HomeHeroStyled } from './home-hero.styled';
import HeroBody from './hero-body';

export enum HeroTitles {
    Earn = 'Earn',
    HigherReturns = 'Higher Returns',
    WithHbits = 'With hbits'
}

export const HomeHero = () => {

    const [activeTitle, setActiveTitle] = React.useState<HeroTitles>(HeroTitles.Earn);

    //add scroll event listener
    const handleScroll = () => {
        const scrollY = window.scrollY;
        if (scrollY > 300 && scrollY < 600) {
            setActiveTitle(HeroTitles.HigherReturns);
        } else if (scrollY > 600) {
            setActiveTitle(HeroTitles.WithHbits);
        }
        else {
            setActiveTitle(HeroTitles.Earn);
        }
    }
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <HomeHeroStyled>
            <div className='container'>
                <div className="hero-item-list-container">
                    <div className="title-container">
                        <div className="title"
                            onClick={() => setActiveTitle(HeroTitles.Earn)}
                        >{HeroTitles.Earn}</div>
                        <div className="title"
                            onClick={() => setActiveTitle(HeroTitles.HigherReturns)}
                        >{HeroTitles.HigherReturns}</div>
                        <div className="title"
                            onClick={() => setActiveTitle(HeroTitles.WithHbits)}
                        >{HeroTitles.WithHbits}</div>
                    </div>
                    <div className="body-container">
                        <HeroBody title={activeTitle} />
                    </div>
                </div>
            </div>
        </HomeHeroStyled>
    );
}