class Melding {
    antallStikk: number;
    farge: string; // Dette kan være "Spar", "Hjerter", "Ruter", "Kløver" eller "NT" 

    constructor(antallStikk: number, farge: string) {
        this.antallStikk = antallStikk;
        this.farge = farge;
    }
}

export default Melding;