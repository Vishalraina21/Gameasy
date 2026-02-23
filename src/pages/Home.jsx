import React from 'react'
import Cards from '../components/Cards'
import Services from '../components/Services'
import Tags from '../components/Tags'
import Hero from '../components/Hero'
import Grow from '../components/Grow'
import Tenders from '../components/Tenders'
import Offer from '../components/Offer'
import OurPartners from '../components/OurPartners'

function Home() {
    return (
        <div className='w-full overflow-x-hidden'>
            <Hero />
            <Offer />
            <Cards />
            <Grow />
            <OurPartners />
            <Services />
            <Tags />
            <Tenders />
        </div>
    )
}

export default Home