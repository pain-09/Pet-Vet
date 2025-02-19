import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Departments = () => {
    const departmentsArray = [
        {
            name: "Dog",
            imageUrl: "/departments/dog.jpg",
        },
        {
            name: "Cat",
            imageUrl: "/departments/cat.jpg",
        },
        {
            name: "Rabbit",
            imageUrl: "/departments/rabbit.jpg",
        },
        {
            name: "Birds",
            imageUrl: "/departments/birds.jpg",
        },
        {
            name: "Hamster",
            imageUrl: "/departments/hamster.jpg",
        },
        {
            name: "Horse",
            imageUrl: "/departments/horse.jpg",
        },
        {
            name: "Fish",
            imageUrl: "/departments/fish.jpg",
        },
        {
            name: "Cow",
            imageUrl: "/departments/cow.jpg",
        },
        {
            name: "Tortoise",
            imageUrl: "/departments/tortoise.jpg",
        },
    ];

    const responsive = {
        extraLarge: {
            breakpoint: { max: 3000, min: 1324 },
            items: 4,
            slidesToSlide: 1, // optional, default to 1.
        },
        large: {
            breakpoint: { max: 1324, min: 1005 },
            items: 3,
            slidesToSlide: 1, // optional, default to 1.
        },
        medium: {
            breakpoint: { max: 1005, min: 700 },
            items: 2,
            slidesToSlide: 1, // optional, default to 1.
        },
        small: {
            breakpoint: { max: 700, min: 0 },
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
        },
    };

    return (
        <>
            <div className="container departments">
                <h2>Departments</h2>
                <Carousel
                    responsive={responsive}
                    removeArrowOnDeviceType={[
                        // "superLargeDesktop",
                        // "desktop",
                        "tablet",
                        "mobile",
                        "medium",
                        "small",
                    ]}
                >
                    {departmentsArray.map((depart, index) => {
                        return (
                            <div key={index} className="card carousel-container">
                                <div className="depart-name">{depart.name}</div>
                                <img src={depart.imageUrl} alt="Department" />
                            </div>
                        );
                    })}
                </Carousel>
            </div>
        </>
    );
};

export default Departments;