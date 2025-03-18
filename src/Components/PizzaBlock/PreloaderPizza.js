import ContentLoader from "react-content-loader";

function PreloaderPizza() {
    return (<ContentLoader
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"

        >
            <circle cx="137" cy="141" r="120"/>
            <rect x="0" y="330" rx="6" ry="6" width="280" height="84"/>
            <rect x="0" y="292" rx="6" ry="6" width="280" height="30"/>
            <rect x="0" y="420" rx="6" ry="6" width="133" height="40"/>
            <rect x="145" y="420" rx="6" ry="6" width="135" height="40"/>
        </ContentLoader>

    )
}

export default PreloaderPizza;