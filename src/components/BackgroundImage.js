import React, { useEffect, useState } from 'react';
import { createClient } from 'pexels';
import './BackgroundImage.css';

const BackgroundImage = ({ description }) => {
    const [backgroundImage, setBackgroundImage] = useState(null);
    const [author, setAuthor] = useState(null);
    const [authorUrl, setAuthorUrl] = useState(null);
    const pexelsApiKey = process.env.REACT_APP_PEXELS_API_KEY;
    const client = createClient(pexelsApiKey);

    useEffect(() => {
        if (description) {
            fetchBackgroundImage(description);
        } else {
            fetchDefaultBackgroundImage();
        }
    }, [description]);

    const fetchBackgroundImage = async (weatherDescription) => {
        try {
            const response = await client.photos.search({ query: weatherDescription, per_page: 1 });
            const photo = response.photos[0];
            if (photo) {
                setBackgroundImage(photo.src.original);
                setAuthor(photo.photographer);
                setAuthorUrl(photo.photographer_url);
            }
        } catch (e) {
            console.error("Could not fetch background image", e);
        }
    };

    const fetchDefaultBackgroundImage = async () => {
        try {
            const response = await client.photos.search({ query: 'weather', per_page: 1 });
            const photo = response.photos[0];
            if (photo) {
                setBackgroundImage(photo.src.original);
                setAuthor(photo.photographer);
                setAuthorUrl(photo.photographer_url);
            }
        } catch (e) {
            console.error("Could not fetch default background image", e);
        }
    };

    return (
        <div>
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                }}
            />
            {author && (
                <div className="image-credit">
                    Photo by <a href={authorUrl} target="_blank" rel="noopener noreferrer">{author}</a> on <a href="https://www.pexels.com" target="_blank" rel="noopener noreferrer">Pexels</a>
                </div>
            )}
        </div>
    );
};

export default BackgroundImage;
