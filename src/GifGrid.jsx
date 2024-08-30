import Gif from "./Gif";

export default function GifGrid({ gifs }) {
    return (
        <div className="gif_grid">
            {gifs.map(gif => {
                const { url } = gif.images.original
                return <Gif key={url} url={url} alt={gif.alt_text} />
            })}
        </div>
    )
}