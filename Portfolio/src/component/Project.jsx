import React from 'react'
import Portfolio from '../assets/Portfolio.png'
import SpicyBites from '../assets/SpicyBites.png'
// import Youtube from '../assets/Youtube.png'
import Webelite from '../assets/Webelite.png'
import Supercar from '../assets/Supercar.png'
import Hotel from "../assets/Hotel.png"
import Gemni from "../assets/Gemni.png"
import Food from "../assets/Food.png"
import Movie from "../assets/Movie.png"
import ReduxStore from "../assets/ReduxStore.png"
import Samachar from  "../assets/Samachar.png"
import Scrapper from "../assets/Scrapper.png"
import WhatsApp from "../assets/WhatsApp.png"
import Pictur from "../assets/Pictur.png"

import Calculator from "../assets/Calculator.png"
import Cards from './Cards'


const Projects = () => {

    const projectJson = [
        {
          title: 'Portfolio',
          desc: 'Webelite Builders did an amazing job on our website. Their professionalism and dedication to our project were outstanding.',
          image: Pictur,
          live: "https://shimmering-blini-41560d.netlify.app/",
          github: "https://github.com/rohitsingh93300/portfolio"
        },
       
       
        
       
        {
          title:"Wonderlust",
desc:"Wanderlust is a hotel booking web app where users can browse hotels with photos, prices, places, and ratings. It features secure authentication, allowing users to log in and manage bookings. Customers can test payments in test mode and easily book their stay",
image:Hotel,
live:"https://wonderlust-s4b8.onrender.com",
github:"https://github.com/Ajit2213/wonderlust"
        },
        {
          title:"Real-Time Chat App",
desc:"A real-time chat app with user authentication, where users can send text and image messages instantly, ensuring smooth and secure communication",
image:WhatsApp,
live:"https://fullstackchatapp-hu8a.onrender.com",
github:"https://github.com/Ajit2213/mern-chat-app"
        },
        {
          title:"Gemni ChatBot",
          desc:"A Gemini chatbot built using JavaScript and Gemini API, providing real-time AI responses with a simple and interactive chat interface",
          image:Gemni,
          live:"https://effortless-bunny-a56757.netlify.app/",
          github:"https://github.com/Ajit2213/AI"
        },
        {
          title:"News Web App",
desc:"A modern web app with user-friendly interface, secure authentication, and smooth functionality designed to deliver an efficient user experience",
image:Samachar,
live:"https://samachar-frontend.onrender.com/",
github:"https://github.com/Ajit2213/Samachar"
        },
        {
          title:"Food Store",
          desc:"A static food catalog web app where users can browse a list of food items, search/filter them, and add items to a Favorites or Cart section—all managed with Redux.",
          image:ReduxStore,
          live:"https://static-hunger-app.onrender.com/",
          github:"https://github.com/Ajit2213/Static-Hunger-App"
        },
        {
          title:"Social Scrapper",
desc:"A YouTube scraper web app that extracts video and channel details from any YouTube video URL quickly and efficiently.",
image:Scrapper,
live:"https://social-7otb.onrender.com/",
github:"https://github.com/Ajit2213/Social"
        },
        {
          title:"SIP Calculator",
desc:"A simple SIP calculator web app to calculate investment returns based on monthly amount, interest rate, and tenure.",
image:Calculator,
live:"https://sip-calculator-jty0.onrender.com/" ,
github:"https://github.com/Ajit2213/Sip-Calculator"
        },
        {
          Title:"Food Recipe",
          desc:"A food web app where users can search food items and instantly read their nutritional information in a simple, clean interface.",
          image:Food,
          live:"https://stupendous-fox-f06c6b.netlify.app/",
          github:"https://github.com/Ajit2213/Food-search"
        },
        {
          title:"Movie Search",
          desc:"A movie search web app where users can find movies, view details like ratings, release date, and synopsis in a simple interface.",
          image:Movie,
          live:"https://tranquil-fenglisu-2367b7.netlify.app/",
          github:"https://github.com/Ajit2213/Movie-search"
          
        }
      ];

  return (
    <section id='projects' className='relative bg-gray-700 py-10 px-4'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
            {projectJson.map((items,index)=> {
                return (
                  <div key={index}>
                    <Cards item={items}/>

                  </div>
                )
                
            })}
        </div>
      </div>
    </section>
  )
}

export default Projects
