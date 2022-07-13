import React from 'react'

import ImageLogin from "../assets/images/furniture.png"
// import VectorfavI
import { CardContent, CardImageElement, CardPriceElement, CardSubTitleElement, CardTitleElement, HeaderElement } from './CardComponentElements'
import { FavoriteBtnElement } from './CardComponentElements'


const CardComponent = ({ image, title, location, price }) => {
    return (
        <HeaderElement>
            <FavoriteBtnElement  />
            <CardImageElement src={ImageLogin} alt="Login image" />

            <CardContent>
                <CardTitleElement>Components
                    <CardSubTitleElement>Subtitle
                        <CardPriceElement>712,123 lei</CardPriceElement>
                    </CardSubTitleElement>
                </CardTitleElement>
            </CardContent>

        </HeaderElement >
    )
}

export default CardComponent