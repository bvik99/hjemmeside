import Image from "next/image";

export default function Home() {
  return (
    <div className="text-center gap-y-8">
      <h1 className="text-6xl">Programmering</h1>
      <div className="text-3xl">
        <p>
          Ulike temaer som er aktuelle å lære om:
        </p>
        <ul>
          <li>Python</li>
          <li>Java</li>
          <li>Javascript</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      </div>
      <div className="text-3xl">
        <p>Kodesnutt</p>
        <code>
          def hello ():
            print ("hello")
        </code>
      </div>
    </div>
  );
}
