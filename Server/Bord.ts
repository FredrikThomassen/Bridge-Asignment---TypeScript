// Bord.ts
import Spiller from './Spiller'; // Importerer Spiller-klassen
import Kort from './Kort'; // Importerer Kort-klassen

class Bord {
    private spillerListe: Spiller[];

    constructor() {
        this.spillerListe = [];
    }

    leggTilSpiller(spiller: Spiller): void {
        this.spillerListe.push(spiller);
    }

    getSpillerListe(): Spiller[] {
        return this.spillerListe;
    }

    delUtKort(kortStokk: Kort[]): void {
        if (kortStokk.length < this.spillerListe.length * 13) {
            throw new Error('Ikke nok kort i stokken for å dele ut til alle spillere');
        }

        this.spillerListe.forEach(spiller => {
            for (let i = 0; i < 13; i++) {
                // Legger til kort i spillerens kortliste
                spiller.leggTilKort(kortStokk.pop()!); // ! Sikrer at kortStokk ikke er tom
            }
        });
    }
}

export default Bord;