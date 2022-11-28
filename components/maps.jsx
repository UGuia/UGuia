"use client";
export default function Maps({ url }) {
  return (
    <div className="maps">
      <h5>Localizacion</h5>
      <iframe
        src={url}
        width="100%"
        height="100%"
        //style="border:0;"
        //allowfullscreen=""
        loading="lazy"
        // referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      {/* <iframe src={url} frameborder="0"></iframe> */}
      {/* <Image src={proc} alt="" className="tienda-image" /> */}
    </div>
  );
}
