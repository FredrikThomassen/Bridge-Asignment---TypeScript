import Kort from './Kort'; // Sørger for å importere Kort-klassen

class Utils {
    // Funksjon for å blande en stokk med kort
    static blandKort(stokk: Kort[]): Kort[] {
        for (let i = stokk.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [stokk[i], stokk[j]] = [stokk[j], stokk[i]];
        }
        return stokk;
    }

    // Funksjon for å opprette en stokk med standard kortstokk
    static opprettKortStokk(): Kort[] {
        const kortStokk: Kort[] = [];
        const farger: string[] = ['Hjerter', 'Spar', 'Ruter', 'Kløver'];
        const verdier: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Kn', 'D', 'K', 'E'];

        farger.forEach(farge => {
            verdier.forEach(verdi => {
                // Konverter verdi til rangering
                let rangering = this.konverterVerdiTilRangering(verdi);

                // Legger til suit for hvert kort
                let suit = 'suit'; // Legger til den riktige suiten basert på kortet

                kortStokk.push(new Kort(rangering, verdi, suit)); // Legger til kort i stokken
            });
        });

        return kortStokk;
    }

    // Funksjon for å konvertere kortverdier til rangering
    static konverterVerdiTilRangering(verdi: string): number {
        switch (verdi) {
            case '2': return 2;
            case '3': return 3;
            case '4': return 4;
            case '5': return 5;
            case '6': return 6;
            case '7': return 7;
            case '8': return 8;
            case '9': return 9;
            case '10': return 10;
            case 'Kn': return 11;
            case 'D': return 12;
            case 'K': return 13;
            case 'E': return 14;
            default: throw new Error('Ugyldig kortverdi');
        }
    }

    // andre hjelpefunksjoner og verktøy?
}

export default Utils;