import Movies from "./about/movies";

export default async function Home() {
  const apiKey = "525e675d3dcd9dedb4d1d5ea9e2ab6a7";
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

  const res = await fetch(url);
  const data = await res.json();
  console.log(data);

  return (
    <main className="">
      <div>
        <div className='grid gap-16 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
          {data.results?.map(item =>
            <Movies key={item.id}
              id={item.id}
              title={item.title}
              poster_path={item.poster_path}
              release_date={item.release_date} />
          )}
        </div>
      </div>
    </main >
  );
}
