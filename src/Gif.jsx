export default function Gif({ url, alt }) {
    return (
        <div className="gif_container" >
            <img className="gif" src={url} alt={alt} />
        </div>
    )
}