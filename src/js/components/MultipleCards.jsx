import React from "react";
import Card from "./Card";

let cardInfo = [
    {
        URL: 'https://marketplace.canva.com/8-1Kc/MAGoQJ8-1Kc/1/tl/canva-ginger-cat-with-paws-raised-in-air-MAGoQJ8-1Kc.jpg',
        Title: 'Gato sorpresa',
        Description: 'This is a picture of a cat',
        Button: 'This is a button',
    }, {
        URL: 'https://www.cdc.gov/healthy-pets/media/images/2024/04/Cat-on-couch.jpg',
        Title: 'Gato relajado',
        Description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean.',
        Button: 'Hello',
    }, {
        URL: 'https://www.hartz.com/wp-content/uploads/2022/04/small-dog-owners-1.jpg',
        Title: 'Perro feroz',
        Description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.',
        Button: 'Maybe',
    }, {
        URL: 'https://www.nylabone.com/-/media/project/oneweb/nylabone/images/dog101/activities-fun/10-great-small-dog-breeds/maltese-portrait.jpg?h=448&w=740&hash=B111F1998758CA0ED2442A4928D5105D',
        Title: 'Perro confundido',
        Description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Amet consectetur adipiscing elit quisque faucibus ex sapien. Quisque faucibus ex sapien vitae pellentesque sem placerat. Vitae pellentesque sem placerat in id cursus mi.',
        Button: 'Goodbye',
    }
];

const MultipleCards = () => {
    return (
        <div className="flex-container ps-5 pe-5">
            <div className='row g-2'>
                {
                    cardInfo.map((item) => {
                        return (
                            <Card info={item} />
                        )
                    })
                }
            </div>
        </div>
    )
}
export default MultipleCards

