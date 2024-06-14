import Melding from './Melding'; // Importerer Melding-klassen

class Meldesystem {
    // Funksjoner for meldesystemet

    // En liste over alle gyldige meldinger
    private gyldigeMeldinger: string[] = ["Pass", "1 Spar", "1 Hjerter", "1 Ruter", "1 Kløver", "1 NT", "2 Spar", /* osv... */];

    // Funksjon for å tolke en melding og returnere dens betydning
    tolkMelding(melding: Melding): string {
        if (this.gyldigeMeldinger.includes(melding.farge)) {
            return `Melding tolket: ${melding.antallStikk} stikk i ${melding.farge}`;
        } else {
            return `Ugyldig melding: ${melding.farge}`;
        }
    }

    // Funksjon for å spørre makkeren om betydningen av en melding
    sporMakker(melding: Melding): string {
        // Simulerer en spørring til makker
        return `Spør makkeren om betydningen av meldingen: ${melding.antallStikk} stikk i ${melding.farge}`;
    }
}

// Eksporter meldesystemet
export default Meldesystem;