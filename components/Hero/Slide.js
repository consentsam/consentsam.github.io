import React from 'react';
import { IconPlayerPlay } from '@tabler/icons';

const Slide = ({ slide }) => {
  return (
    <div className="projects">
        <img src={slide.image} alt={slide.title} className="projects__bg" />

        <div className="projects__info">
            <div className="row projects__container">
                <div className="col-lg-6 col-sm-10 projects__data">
                    {slide.title && <h1 className="projects__title">{slide.title}</h1>}
                    <a href="#" className="btn btn-primary projects__button">Explore</a>
                </div>

                <div className="col-lg-6 col-sm-2 projects__video">
                    <div className="projects__video-content">
                        <IconPlayerPlay className="projects__video-icon" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Slide