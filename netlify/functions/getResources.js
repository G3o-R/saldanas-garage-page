exports.handler = async (event, context) => {

    const page_components = {
        cards: [
            {   
                id: 1,
                image: "/car6.jpg",
                title: "Keeping your car cool...",
                text: "With Nano Pro ceramic tinting, blocking nearly 99.9% of UVA and UVB rays",
                orientation: "landscape"
            },
            {
                id: 2,
                image: "/tinting_work.jpg",
                title: "And you looking cooler...",
                text: "By transforming your car with our custom wraps",
                orientation: "portrait"
            },
            {
                id: 3,
                image: "/comercial_work2.jpg",
                title: "We do comercial...",
                text: "Suit up your company with our professional tints and wraps",
                orientation: "landscape"
            },
            {
                id: 4,
                image: "/Jose.jpg",
                title: "We do it all...",
                text: "Trust that in our hands your business will be handled professionally and beyond expectation",
                orientation: "portrait"
            }
        ],
        images_arr: [
            {
                id: 1,
                image: "/car1.jpg"
            },
            {
                id: 2,
                image: "/comercial_work.jpg"
            },
            {
                id: 3,
                image: "/car2.jpg"
            },
            {
                id: 4,
                image: "/car3.webp"
            },
            {
                id: 5,
                image: "/comercial_work2.jpg"
            },
            {
                id: 6,
                image: "/car4.webp"
            },
            {
                id: 7,
                image: "/car5.jpg"
            },
            {
                id: 8,
                image: "/car6.jpg"
            },
            {
                id: 9,
                image: "/car7.jpg"
            },
            {
                id: 10,
                image: "/car8.jpg"
            }
        ],
        reviews: [
            {
                id: 1,
                reviewer: "Cory Conklin",
                review: "Really nice job! reasonable pricing! The shop is very clean. Real professional. I was very indecisive on how dark I wanted my tint. He was able to give great examples of what the finished product would look like and was genuinely concerned with the way I wanted my tint to look. Finished product looked amazing! Very satisfied! I'm bringing my other car in to get tinted too! So is my dad.",
                stars: 5,
                review_link: "https://g.co/kgs/gKd7j4S"
            },
            {
                id: 2,
                reviewer: "IN DA SKYZ",
                review: "Saldana completed an amazing job on my F55 Mini Cooper S, fantastic pricing and even got me scheduled in such short notice. He is incredibly dedicated to his business and ensuring the job is done well and his customers are happy. I referred my mother, and he came in before his normal hours to squeeze us into his busy schedule. Look forward to doing more business together! May get my vehicle wrapped by him soon as well. I'll post pictures of my mother’s vehicle after it’s been returned. Thank you Saldana!",
                stars: 5,
                review_link: ""
            },
            {
                id: 3,
                reviewer: "John Noble",
                review: "Found this place through other owners on the Tesla users group. Luis is super friendly, and knows his tint. Consulted me on the right type of tint, the ceramic technology is super cool stuff. I got to the appointment on time, and he got me in and out faster than expected. Super happy with the high-end materials and workmanship, and the price was really affordable compared to the other quotes. Five stars all the way.",
                stars: 5,
                review_link: "https://g.co/kgs/iFD4ZdD"
            },
            {
                id: 4,
                reviewer: "PDF",
                review: "Small little garage off Indian School Rd. The workmanship was amazing, communicated with us the entire time with texts and pictures. We have had the Ceramic Tint for a week and so far so good. Installation came with a warranty, hopefully we never need it.",
                stars: 5,
                review_link: ""
            },
            {
                id: 5,
                reviewer: "Andrew",
                review: "Luis is the real deal. Quality EVERY SINGLE TIME. I've had a ton of tint guys over the years and lots of cars and trucks tinted. He is hands down the best pricing and quality for true Ceramic tint in the Valley. He's quick and efficient with the 3 vehicles I have brought to him just this year. I won't be switching to anyone else anytime soon. Give him a try, you won't regret it!!!",
                stars: 5,
                review_link: "https://g.co/kgs/X5CyZyz"
            },
            {
                id: 6,
                reviewer: "Adam U",
                review: "These guys do solid work and the Pro Nano Ceramic tints really work magic in the AZ sun.",
                stars: 5,
                review_link: ""
            },
            {
                id: 7,
                reviewer: "Kristian Waugh",
                review: "Amazing quality, nice shop, affordable, and nice guys. Definitely come here if you are looking for a nice ceramic tint job.",
                stars: 5,
                review_link: "https://g.co/kgs/Zhskcxe"
            },
            {
                id: 8,
                reviewer: "Benjamin Demarbieux",
                review: "Great prices, good quality, great customer service!",
                stars: 5,
                review_link: "https://g.co/kgs/zD5hwb3"
            },
            {
                id: 9,
                reviewer: "Keyanna Blass",
                review: "Great service!",
                stars: 5,
                review_link: "https://g.co/kgs/ct9XKFr"
            }
        ]
    };
    

    return{
        statusCode: 200,
        body: JSON.stringify(page_components),
    };
};