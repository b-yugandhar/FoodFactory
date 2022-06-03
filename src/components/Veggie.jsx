import React, { useEffect, useState } from 'react'
import { Splide,SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import styled from 'styled-components'
const Veggie = () => {
    const[veggie,setVeggie]=useState([])
    useEffect(()=>{
    
        getVeggie();
    },[])
    const getVeggie = async()=>{
        const check = localStorage.getItem('veggie');
        if(check){
            setVeggie(JSON.parse(check))
        }
        else{
            const api = fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tag=vegetarian`)
        }
    }
    return (
    <div>
     <Wrapper>
         <h3>Veggie</h3>
     <Splide options={{
        perPage:4,  
        arrows:false,
        pagination:false,
        drag:'free',
        gap:'5rem'       
     }}>
     {
            veggie.map((recipe)=>{
                return (
                    <SplideSlide>

                    <Card>
                        
                        <p>{recipe.title}</p>
                        <img src={recipe.image} alt="dfd" />
                       
                        <Gradient/>
                       
                    </Card>
                    </SplideSlide>
                )
            })
        }
        </Splide>
     </Wrapper>
    </div>
  )
}
const Wrapper = styled.div`
    margin: 4rem 0;
`
const Card = styled.div`
    height: 15rem;
    background-position: center;
    background-size: cover;
    overflow: hidden;
    border-radius: 2rem;
    position: relative;
    img{
    border-radius: 2rem;
    width: 100%;
    height: 100%;
    
    position: absolute;

    }
    p{
        position: absolute;
        z-index: 10;
        left: 70%;
        bottom: 0%;
        transform: translate(-50%,-50%);
        color: white;
        width: 100%;
}
`
const Gradient = styled.div`
    z-index: 3;
    position: absolute;

    height: 100%;
    width: 100%;
    background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));

`



export default Veggie