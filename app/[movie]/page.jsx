import Image from "next/image";
import GoBack from "./GoBack";

export async function generateStaticParams() {
    const apiKey = "525e675d3dcd9dedb4d1d5ea9e2ab6a7";
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

    const res = await fetch(url);
    const data = await res.json();
    return data.results.map((movie) => ({
        movie: toString(movie.id),
    }))
}

export default async function Page({ params }) {
    const imagePath = `https://image.tmdb.org/t/p/original`;
    const { movie } = params
    const apiKey = "525e675d3dcd9dedb4d1d5ea9e2ab6a7";
    const url = `https://api.themoviedb.org/3/movie/${movie}?api_key=${apiKey}`

    const res = await fetch(url)
    const data = await res.json()
    console.log(data, movie)

    return (
        <div className="flex justify-center items-center gap-2 flex-col bg-slate-900 rounded-md py-4 px-24">
            <GoBack />

            <div className="flex justify-start gap-2 items-start mt-2 flex-col">
                <h2 className="text-3xl font-semibold text-center">{data.title}</h2>
                <p className="text-lg font-semibold text-center">{data.release_date}</p>
                <p className="text-lg font-semibold text-center">{data.runtime} min</p>
                <span className="bg-red-500 py-4 px-4 rounded-lg">
                    {data.status}
                </span>
                <Image className="hover:rounded-md duration-200 transition-all" src={`${imagePath + data.backdrop_path}`} width={500} height={500} alt={data.title} priority />

            </div>

            <span>{data.overview}</span>

        </div>
    )
}