import React, {useEffect, useState} from 'react';
import "./projects.css"

const fetchAllImages = () => {
    const imagePaths = require.context("../../assets/our_work_images", true)
    const imagesArray = [];

    imagePaths.keys().forEach(image => {
        const imgPath = imagePaths(image);
        imagesArray.push(imgPath);
    });
    return imagesArray
}

function Projects(props) {
    const [images, setImages] = useState([])

    useEffect(() => {
        const images = fetchAllImages()

        setImages(images)
    }, [])
    return (
        <div className="projects-container">
            <div className="projects-container_text">
                <span className="projects-title">
                    Наши работы
                </span>
            </div>
            <div className="projects-image_container">
                    {images.slice(0, 6).map((image, key) => (
                        <div className="image-wrapper">
                            <img src={image} alt="image"  key={key} className="projects-image"/>
                        </div>
                    ))}
            </div>
            <a href="#" className="projects-button">Показать больше</a>

        </div>
    );
}

export default Projects;