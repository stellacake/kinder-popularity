import React from 'react';
import TreatCard from './TreatCard';
import '../styles/css/TreatList.css';

const TreatList = [
    {
        picture: "https://www.kinder.com/fr/sites/kinder_fr/files/2020-07/320x320_kbl_kinder.png?t=1602083001",
        shadow: "",
        name: "Kinder Bueno",
        quote: "the fine one",
        liked: true,

    },
    {
        picture: "https://www.kinder.com/fr/sites/kinder_fr/files/2019-11/milk-chocolate-bar-kinder-chocolate-t16.png?t=1602083001",
        shadow: "",
        name: "Kinder Chocolat",
        quote: "the original",
        liked: false,

    },
    {
        picture: "https://www.kinder.com/fr/sites/kinder_fr/files/2019-11/milk-chocolate-bar-kinder-country-t1.png?t=1602083001",
        shadow: "",
        name: "Kinder Country",
        quote: "the alibi ",
        liked: false,

    },
    {
        picture: "https://www.kinder.com/fr/sites/kinder_fr/files/2020-09/kinder_kd_gamme_t1_320x320px.png?t=1602083001",
        shadow: "",
        name: "Kinder Délice",
        quote: "the con-artist",
        liked: false,

    },
    {
        picture: "https://www.kinder.com/fr/sites/kinder_fr/files/2019-11/ice-sandwich-kinder-pingui-cacao-t1.png?t=1602083001",
        shadow: "",
        name: "Kinder Pingui",
        quote: "the cool one",
        liked: true,

    },
    {
        picture: "https://www.kinder.com/fr/sites/kinder_fr/files/2020-08/gamme_produits_320x320_125g.png?t=1602083001",
        shadow: "",
        name: "Kinder Schoko-Bons",
        quote: "the over-rated one",
        liked: false,

    },
    {
        picture: "https://www.kinder.com/fr/sites/kinder_fr/files/2019-11/chocolate-egg-kinder-surprise-unisexe.png?t=1602083001",
        shadow: "",
        name: "Kinder Surprise",
        quote: "the reggressive one",
        liked: false,

    }
]

const Treats = () => {
    return (
            <div className="TreatList">
                {TreatList.map(treat => <TreatCard picture={treat.picture}  name={treat.name} quote={treat.quote} liked={treat.liked}/>)}
            </div>
    )
    }
        
    
export default Treats;
