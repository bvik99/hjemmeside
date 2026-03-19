import Image from "next/image";

export default function Home() {
  return (
    <div className="text-center mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
      <br />
      <h1 className="text-6xl">Programmering</h1>
      <br />
      <br />
      <p className="text-3xl">Ulike temaer som er aktuelle å lære om:</p>
      <br />
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
