# Oppgave 2

## Litt om komponenter i React

React er biblioteket som brukes i Next.js for å lage modulære komponenter. Man kan tenke på komponenter som funksjoner som outputter UI.

For eksempel:

```tsx
function MyComponent() {
  return <h1>Jeg elsker Webkom!</h1>;
}
```

Denne funksjonen kan man bruke i andre komponenter slik:

```tsx
function App() {
  return (
    <div>
      <MyComponent />
      <p>Koding er gøy!</p>
    </div>
  );
}
```

De har også mulighet til å ta inn parametere, som gjør dem mer gjenbrukbare:

```tsx
// `interface` er en måte å definere objekter/typer i TypeScript
// Her tar vi inn et objekt med en variabel `name` som er en streng
interface GreetingProps {
  name: string;
}

function Greeting({ name }: GreetingProps) {
  return <h1>Hei, {name}!</h1>;
}
```

```tsx
function App() {
  return (
    <div>
      <Greeting name="Andreas" />
      <Greeting name="Bo" />
    </div>
  );
}
```

Som vil gi:

```html
<div>
  <h1>Hei, Andreas!</h1>
  <h1>Hei, Bo!</h1>
</div>
```

For å gjøre komponentene tilgjengelige i andre filer, bruker man `export`-nøkkelordet foran funksjonen. For eksempel:

```tsx
export function MyComponent() {
  return <h1>Jeg elsker Webkom!</h1>;
}
```

Da kan man importere komponenten i andre filer:

```tsx
import { MyComponent } from "./my-component";
```

Dette er eksempel på en "named export". Det finnes også "default exports", som er en måte å eksportere en enkelt ting fra en fil. For eksempel:

```tsx
export default function MyComponent() {
  return <h1>Jeg elsker Webkom!</h1>;
}
```

```tsx
import MyComponent from "./my-component";
```

Merk: Med "default exports" trenger man ikke å bruke "{}" rundt navnet på komponenten når man importerer den. Det kan også bare være én "default export" per fil.

[Les mer om komponenter i React her](https://react.dev/learn/your-first-component).

## Lage en prosjektliste (Oppgave)

I denne oppgaven skal du lage en ny komponent som viser en liste av prosjekter. Hvert prosjekt skal ha en tittel og en beskrivelse.

Du kan lage en ny fil i `src/components`-mappen med navnet `project-list.tsx`. Lag deretter en komponent som viser en liste av prosjekter. Hvert prosjekt skal ha en tittel og en beskrivelse.

Bygg videre på denne koden:

```tsx
export function ProjectList() {
return (
  // Din kode her
)
}
```

<details>

<summary>💡 Hint</summary>

```tsx
export default function ProjectList() {
  return (
    <div>
      <h2 className="text-2xl mb-4">Prosjekter</h2>
      <ul className="pl-4 list-disc space-y-4">
        <li>
          <h3 className="text-lg">Tetris</h3>
          <p className="text-sm">Semesteroppgave jeg hadde i INF101</p>
        </li>
        <li>
          <h3 className="text-lg">Egen hjemmeside</h3>
          <p className="text-sm">
            En nettside jeg laget på workshop med echo Webkom
          </p>
        </li>
      </ul>
    </div>
  );
}
```

</details>

Ikke glem å legge til litt styling med Tailwind CSS!

Videre må du inkludere denne komponenten i `src/app/page.tsx`-filen. Sånn at den vises på siden.

Fremover anbefaler vi også å lage komponenter når du føler at det er nødvendig. Det er veldig vanlig ha å en haug med komponenter i React-prosjekter, og det er en god praksis for å holde koden oversiktlig og gjenbrukbar.

[Tilbake til oppgave 1](./oppgave-1.md)

[Trykk her for å gå til oppgave 3](./oppgave-3.md)