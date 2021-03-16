export default class Persona {
    constructor(pid,uname,pnome,pcognome){
        this.user_id=pid
        this.username = uname;
        this.email = "";
        this.nome = pnome;
        this.cognome = pcognome;
    }

    setNomeCognome(nome,cognome){
        this.nome = nome;
        this.cognome = cognome;
    }
    to_String()
    {
        return this.user_id+" "+this.username+" "+this.cognome+" "+this.nome+" "+this.email;
    } 
        
}