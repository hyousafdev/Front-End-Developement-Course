import React from 'react'

function Hero({heroName}) { // heroName as prop

    if(heroName === 'Joker') {
        throw new Error('Not a Hero')
    }
    return (
        <div>
            {heroName}
        </div>
    )
}

export default Hero
