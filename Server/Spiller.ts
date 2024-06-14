import Kort from './Kort'; // Sørg for å importere Kort-klassen

class Spiller {
    private navn: string;
    private kortListe: Kort[];
    private meldingsListe: string[]; // Legg til en liste for å lagre meldinger

    constructor(navn: string) {
        this.navn = navn;
        this.kortListe = [];
        this.meldingsListe = [];
    }

    // Metode for å få tilgang til spillerens navn
    getNavn(): string {
        return this.navn;
    }

    // Metode for å få tilgang til spillerens kortliste
    getKortListe(): Kort[] {
        return this.kortListe;
    }

    // Metode for å legge til kort i spillerens kortliste
    leggTilKort(kort: Kort): void {
        this.kortListe.push(kort);
    }

    // Metode for å legge til en melding i spillerens meldingsliste
    leggTilMelding(melding: string): void {
        this.meldingsListe.push(melding);
    }
}

export default Spiller;