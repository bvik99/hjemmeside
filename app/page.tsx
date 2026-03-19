import Image from "next/image";

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-6xl">\nProgrammering\n</h1>
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
