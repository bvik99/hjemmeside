import Image from "next/image";

export default function Home() {
  return (
    <div className="text-center">
      <br />
      <h1 className="text-6xl">Programmering</h1>
      <br />
      <br />
      <p>Ulike temaer som er aktuelle å lære om:</p>
      <ul className="text-3xl">
        <li>Python</li>
        <li>Java</li>
        <li>Javascript</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
    </div>
  );
}
