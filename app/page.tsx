import Image from "next/image";

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-2xl">Programmering</h1>
      <p>Ulike temaer som er aktuelle å lære om:</p>
      <ul>
        <li>Python</li>
        <li>Java</li>
        <li>Javascript</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
    </div>
  );
}
