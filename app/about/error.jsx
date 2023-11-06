"use client";

function Error({ error, reset }) {
  return (
    <div>
      <p>This ain't working {error.message}</p>
      <button onClick={() => reset()}>reset</button>
    </div>
  );
}

export default Error;
