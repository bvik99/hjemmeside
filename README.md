# How to sideprosjekt

Velkommen til "How to sideprosjekt"!

Dette repoet tilhører en workshop/arrangement som handler om å lage sitt eget sideprosjekt. Du behøver ikke å ha deltatt for å bruke dette git-repoet.

- [How to sideprosjekt](#how-to-sideprosjekt)
  - [Forutsetninger](#forutsetninger)
  - [Hvordan starte?](#hvordan-starte)
  - [Nyttige lenker](#nyttige-lenker)
  - [Oppgaver](#oppgaver)

## Forutsetninger

### NPM

Vi forventer at du har `node` og `npm` installert. For å laste ned til ditt operativsystem sjekk innstruksene her:

- **På Mac**: `node` og `npm` kan enkelt installeres ved å bruke [Homebrew](https://brew.sh). Åpne terminalen og kjør kommandoen `brew install node`. Om du ikke Homebrew, kan du laste ned `node` fra [Node.js sin offisielle nettside](https://nodejs.org/en/download).
- **Windows-brukere**: Besøk [Node.js sin offisielle nettside](https://nodejs.org/en/download) og last ned den relevante installasjonsfilen for ditt system.
- **Linux-brukere**: Sjekk ut pakkehåndteringssystemet som følger med din distro for å installere `node` og `npm`.

### GitHub

Lag en konto på [Github](https://github.com)

## Hvordan starte?

Naviger til den mappen du ønsker å ha prosjektet ditt i med `cd` kommandoen i terminalen. I den riktige mappen gjør følgende:

1. Lag et nytt Next.js-prosjekt ved å kjøre `npx create-next-app@latest` i terminalen eller fork dette prosjektet på GitHub og clone repoet.

```bash
npx create-next-app@latest
```

2. Velg `recomended nextjs defaults` og trykk `enter`. Dette laster ned TypeScript som språk, ESLint, Tailwind CSS, og velger "App Router".

3. Når prosjektet er ferdig installert, må du først navigere til prosjektmappen, og deretter installere avhengigheter.

```bash
cd <prosjektnavn>
npm install
```

4. Start prosjektet ved å kjøre `npm run dev`.

```bash
npm run dev
```

Dette vil starte en lokal server på `http://localhost:3000`. Når du endrer filer, vil nettsiden automatisk oppdatere seg selv.

## Nyttige lenker

- [Next.js sin dokumentasjon](https://nextjs.org/docs)
- [React sin dokumentasjon](https://react.dev)
- [Tailwind CSS sin dokumentasjon](https://tailwindcss.com/docs)
- [Claude](https://claude.ai) 

Om du bruker VSCode anbefaler vi å laste ned [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) for autocomplete av css klasser.

## Oppgaver

_(Valgfritt! Gjerne lag noe eget.):_

Vi har laget noen oppgaver for deg som du kan prøve å løse. Disse oppgavene kommer til å ta deg gjennom grunnleggende React og Next.js. Målet kommer til å være å lage en enkel portefølje-side for å vise frem prosjektene dine.

Det kommer til å være noen eksempler til kode på hvordan du kan "løse" oppgavene, men de er ikke nødvendigvis en fasit. Om du har lyst til å gjøre noe annerledes, er det bare å kjøre på! Oppgavene er laget for å gi deg en pekepinn på hva du kan gjøre.

Før du starter på oppgavene anbefaler vi å forke dette repoet til din egen GitHub-konto. Om du gjør det kan du også følge [how-to-deploy](./oppgaver/how-to-deploy.md) for å lære hvordan du kan deploye prosjektet ditt til Vercel.

1. [Oppgave 1](./oppgaver/oppgave-1.md) lage forsiden
2. [Oppgave 2](./oppgaver/oppgave-2.md) komponenter 
3. [Oppgave 3](./oppgaver/oppgave-3.md) lage en underside for prosjekter
4. [Oppgave 4](./oppgaver/oppgave-4.md) navigasjon og Link komponentetn
