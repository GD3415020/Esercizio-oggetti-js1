let persona = {
    'nome' : `Giovanni`,
    'cognome' : `D'Isanto`,
    'età' : `40`,
    'saluta' : function (utente) {
        console.log(`Ciao, sono ${persona.nome} ${persona.cognome} e ho ${persona.età} anni`);
    }
};

persona.saluta();