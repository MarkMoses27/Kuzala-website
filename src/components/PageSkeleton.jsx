import { Link } from "react-router-dom"

function PageSkeleton({ title, description1, description2, description3, description4, image1, image2, image3, image4 }) {
return (
    <div className="about-wrapper">
    <section className="about">
        <div className="about-heading">
            <Link to="/" className="text-2xl">
                Home
            </Link>
            <span className="separator text-green-500 text-2xl "> {">"} </span>
            <Link className="text-2xl">
                {title}
            </Link>
        </div>
    </section>

    <section className="about-content">
        <div className="about-text">
            <h2 className="about-heading">{title}</h2>
            {
                image1 ?
                    <div className="mt-10 flex align-middle lg:gap-2 gap-1 lg:overflow-y-hidden lg:w-[100%] lg:h-[30rem] w-[20rem] overflow-scroll p-1">
                        <img src={image1} className="w-2/3 h-3/4"/>
                        <img src={image2} className="w-2/3 h-3/4"/>
                        <img src={image3} className="w-2/3 h-3/4"/>
                        <img src={image4} className="w-2/3 h-3/4"/>
                    </div>
                : ''
            }
            <p className="about-description">
                {description1}
            </p>

            <p className="about-description">
                {description2}
            </p>

            <p className="about-description">
                {description3}
            </p>

            <p className="about-description">
                {description4}
            </p>
        </div>
    </section>
    </div>
)
}

export default PageSkeleton
