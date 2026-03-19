import Image from "next/image";

export default function Home() {
  return (
    <div className="text-center gap-20 max-w-sm mx-auto bg-blue-500/75">
      <h1 className="text-6xl font-medium text-#D3D3D3">Programmering</h1>
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
