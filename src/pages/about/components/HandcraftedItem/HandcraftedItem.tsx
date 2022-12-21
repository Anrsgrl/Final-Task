import React from 'react';
import './HandcraftedItem.scss';
import { Link } from 'react-router-dom';

interface IElement {
    imgSrc: string;
    title: string;
    text: string;
    flexStyle: string;
}
export default function HandcraftedItem (props: IElement) {
    const { imgSrc, title, text, flexStyle } = props;
    return (
        <div className="Handcrafted-card" style={{ justifyContent: `${flexStyle}` }}>
            <div className="HCard-img">
                <Link to={'/shop'}>
                    <img src={imgSrc} alt="HCardImg"/>
                </Link>
            </div>
            <div className="Handcrafted-card-content">
                <span>{title}</span>
                <p>{text}</p>
            </div>
        </div>
    );
};