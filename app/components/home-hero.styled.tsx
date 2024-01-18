"use client"
import Styled from 'styled-components';

export const HomeHeroStyled = Styled.div`
    &{
        height : 300vh;
        background-color: #000;
        color: #fff;
        display : flex;
        position : relative;
        .container{
            background : url('/images/hero.jpg');
            height : 100vh;
            width : 100%;
            background-size: cover;
            position : absolute;
            .hero-item-list-container{
                display : flex;
                gap : 1rem;
                position : fixed;
            }
        }
    }
`;