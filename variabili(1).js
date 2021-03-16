export default class Variabili {
    constructor( cognome , nome , data_nascita , sesso ,as_pz_lung, pas_cir_dx__14 , pas_cir_dx__7 , pas_cir_dx_gomito , pas_cir_dx_7 , pas_cir_dx_14 , pas_cir_dx_polso , pas_cir_dx_mano , pas_cir_sx__14 , pas_cir_sx__7 , pas_cir_sx_gomito , pas_cir_sx_7 , pas_cir_sx_14 , pas_cir_sx_polso , pas_cir_sx_mano , pcir_dx__20 , pcir_dx__10 , pcir_dx_ginocchio , pcir_dx_10 , pcir_dx_20 , pcir_dx_caviglia , pcir_dx_piede , pcir_sx__20 , pcir_sx__10 , pcir_sx_ginocchio , pcir_sx_10 , pcir_sx_20 , pcir_sx_caviglia , pcir_sx_piede ) {
//arti superiori
console.log('dentro constructor');
this.cognome=cognome;
this.nome=nome;
this.datanascita=data_nascita;
this.as_sesso = sesso;
this.as_pz_lung =as_pz_lung;
this.al_pz_lung =as_pz_lung;

console.log('ssss',this.cognome);

//circonferenza

this.as_cir_dx__14 = pas_cir_dx__14; //input
this.as_cir_dx__7 = pas_cir_dx__7; //input
this.as_cir_dx_gomito = pas_cir_dx_gomito; //input
this.as_cir_dx_7 = pas_cir_dx_7; //input
this.as_cir_dx_14 = pas_cir_dx_14; //input
this.as_cir_dx_polso = pas_cir_dx_polso; //input
this.as_cir_dx_mano = pas_cir_dx_mano; //input

this.as_cir_sx__14 = pas_cir_sx__14; //input
this.as_cir_sx__7 = pas_cir_sx__7; //input
this.as_cir_sx_gomito = pas_cir_sx_gomito; //input
this.as_cir_sx_7 = pas_cir_sx_7; //input
this.as_cir_sx_14 = pas_cir_sx_14; //input
this.as_cir_sx_polso = pas_cir_sx_polso; //input
this.as_cir_sx_mano = pas_cir_sx_mano; //input

//De leva 1996:
this.as_braccio_m_dl = 281.7; //braccio maschile - - input
this.as_braccio_f_dl = 275.1; //braccio femminile - - input

this.as_avambraccio_m_dl = 268.9; //avamposto maschile - - input
this.as_avambraccio_f_dl = 264.3; //avamposto femminile - - input

this.as_mano_m_dl = 86.2; //mano maschile - - input
this.as_mano_f_dl = 78; //mano femminile - - input

//maschio
this.as_braccio_m2 = 70; //input
this.as_braccio_m3 = 70; //input

this.as_avambraccio_m1 = 70; //input
this.as_avambraccio_m2 = 70; //input

//femmina
this.as_braccio_f2 = 70; //input
this.as_braccio_f3 = 70; //input

this.as_avambraccio_f1 = 70; //input
this.as_avambraccio_f2 = 70; //input

//F
this.as_braccio_f2 = 70; //input
this.as_braccio_f3 = 70; //input

this.as_avambraccio_f1 = 70; //input
this.as_avambraccio_f2 = 70; //input

//arti inferiori



 //circonferenza:
this.cir_dx__20 = pcir_dx__20; //circonferenza destro -20
this.cir_dx__10 = pcir_dx__10; //circonferenza destro -10
this.cir_dx_ginocchio = pcir_dx_ginocchio; //circonferenza destro ginocchio
this.cir_dx_10 = pcir_dx_10; //circonferenza destro 10
this.cir_dx_20 = pcir_dx_20; //circonferenza destro 20
this.cir_dx_caviglia = pcir_dx_caviglia; //circonferenza destro caviglia
this.cir_dx_piede = pcir_dx_piede; //circonferenza destro piede

this.cir_sx__20 = pcir_sx__20; //circonferenza destro -20
this.cir_sx__10 = pcir_sx__10; //circonferenza destro -10
this.cir_sx_ginocchio = pcir_sx_ginocchio; //circonferenza destro ginocchio
this.cir_sx_10 = pcir_sx_10; //circonferenza destro 10
this.cir_sx_20 = pcir_sx_20; //circonferenza destro 20
this.cir_sx_caviglia = pcir_sx_caviglia; //circonferenza destro caviglia
this.cir_sx_piede = pcir_sx_piede; //circonferenza destro piede

//De leva 1996:
this.coscia_m_dl = 422.2; //coscia kmaschio
this.coscia_f_dl = 368.5; //coscia femmina

this.gamba_m_dl = 434; //gamba maschio
this.gamba_f_dl = 432.3; //gamba femmina

this.piede_m_dl = 258.1; //piede maschio
this.piede_f_dl = 228.3; //piede femmina

this.tot_m_dl = 1114.3; //totale maschio
this.tot_f_dl = 1029.1; //totale femmina

//coscia maschio
this.coscia_m2 = 100; //coscia maschio 2
this.coscia_m3 = 100; //coscia maschio 3

//gamba maschio
this.gamba_m1 = 100; //gamba maschio 1
this.gamba_m2 = 100; //gamba maschio 2

//coscia femmina
this.coscia_f2 = 100; //coscia femmina 2
this.coscia_f3 = 100; //coscia femmina 3

//gamba femmina
this.gamba_f1 = 100; //gamba femmina 1
this.gamba_f2 = 100; //gamba femmina 2

//M tabella
this.braccio_2 = 100; //input
this.braccio_3 = 100; //input

this.avambraccio_1 = 100; //input
this.avambraccio_2 = 100; //input      

    }
    //calcoli arti superiori

        //raggio destro

        getas_r_dx__14()
        {
            return  this.as_cir_dx__14 / (2 * Math.cos(-1));
        }

        getas_r_dx__7()
        {
            return  this.as_cir_dx__7 / (2 * Math.cos(-1));
        }

        getas_r_dx_gomito()
        {
            return  this.as_cir_dx__gomito / (2 * Math.cos(-1));
        }

        getas_r_dx_7()
        {
            return  this.as_cir_dx_7 / (2 * Math.cos(-1));
        }

        getas_r_dx_14()
        {
            return  this.as_cir_dx_14 / (2 * Math.cos(-1));
        }

        getas_r_dx_polso()
        {
            return  this.as_cir_dx_polso / (2 * Math.cos(-1));
        }

        getas_r_dx_mano()
        {
            return  this.as_cir_dx_mano / (2 * Math.cos(-1));
        }
                    
        //raggio sinistra

        getas_r_sx__14()
        {
            return  this.as_cir_sx__14 / (2 * Math.cos(-1));
        }

        getas_r_sx__7()
        {
            return  this.as_cir_sx__7 / (2 * Math.cos(-1));
        }

        getas_r_sx_gomito()
        {
            return  this.as_cir_sx__gomito / (2 * Math.cos(-1));
        }

        getas_r_sx_7()
        {
            return  this.as_cir_sx_7 / (2 * Math.cos(-1));
        }

        getas_r_sx_14()
        {
            return  this.as_cir_sx_14 / (2 * Math.cos(-1));
        }

        getas_r_sx_polso()
        {
            return  this.as_cir_sx_polso / (2 * Math.cos(-1));
        }

        getas_r_sx_mano()
        {
            return  this.as_cir_dx_mano / (2 * Math.cos(-1));
        }

        //tronco di cono destra

        getas_trcono_dx__14()
        {
            return (Math.pow(this.getas_r_dx__14(), 2)) * (this.getas_braccio_f1() * Math.cos(-1));
        }
        
        getas_trcono_dx__7()
        {
            return (Math.cos(-1) / 3) * this.as_braccio_f2 * (Math.pow(this.getas_r_dx__7(), 2) + Math.pow(this.getas_r_dx__14(), 2) + this.getas_r_dx__7() * this.getas_r_dx__14());
        }

        getas_trcono_dx_gomito()
        {
            return (Math.cos(-1) / 3) * this.as_braccio_f3 * (Math.pow(this.getas_r_dx_gomito(), 2) + Math.pow(this.getas_r_dx__7(), 2) + this.getas_r_dx_gomito() * this.getas_r_dx__7());
        }

        getas_trcono_dx_7()
        {
            return (Math.cos(-1) / 3) * this.as_avambraccio_f1 * (Math.pow(this.getas_r_dx_7(), 2) + Math.pow(this.getas_r_dx_gomito(), 2) + this.getas_r_dx_7() * this.getas_r_dx_gomito());
        }

        getas_trcono_dx_14()
        {
            return (Math.cos(-1) / 3) * this.as_avambraccio_f2 * (Math.pow(this.getas_r_dx_14(), 2) + Math.pow(this.getas_r_dx_7(), 2) + this.getas_r_dx_14() * this.getas_r_dx_7());
        }
        
        getas_trcono_dx_polso() 
        {
            return (Math.cos(-1) / 3) * this.getas_avambraccio_f3() * (Math.pow(as_r_dx_polso, 2) + Math.pow(this.getas_r_dx_14(), 2) + this.getas_r_dx_polso() * this.getas_r_dx_14());
        }

        getas_trcono_dx_mano() 
        {
            return (Math.cos(-1) / 3) * this.getas_mano() * (Math.pow(this.getas_r_dx_mano(), 2) + Math.pow(this.getas_r_dx_polso(), 2) + this.getas_r_dx_mano() * this.getas_r_dx_polso());
        }

        //tronco di cono sinistra

        getas_trcono_sx__14()
        {
            return (Math.pow(this.getr_dx__14(), 2)) * (this.getas_braccio_f1() * Math.cos(-1));
        }

        getas_trcono_sx__7()
        {
            return (Math.cos(-1) / 3) * this.as_braccio_f2 * (Math.pow(this.getas_r_sx__7(), 2) + Math.pow(this.getas_r_sx__14(), 2) + this.getas_r_sx__7() * this.getas_r_sx__14());
        }

        getas_trcono_sx_gomito()
        {
            return (Math.cos(-1) / 3) * this.as_braccio_f3 * (Math.pow(this.getas_r_sx_gomito(), 2) + Math.pow(this.getas_r_sx__7(), 2) + this.getas_r_sx_gomito() * this.getas_r_sx__7());
        }
        
        getas_trcono_sx_7()
        {
            return (Math.cos(-1) / 3) * this.as_avambraccio_f1 * (Math.pow(this.getas_r_sx_7(), 2) + Math.pow(this.getas_r_sx_gomito(), 2) + this.getas_r_sx_7() * this.getas_r_sx_gomito());
        }
        
        getas_trcono_sx_14()
        {
            return (Math.cos(-1) / 3) * this.as_avambraccio_f2 * (Math.pow(this.getas_r_sx_14(), 2) + Math.pow(this.getas_r_sx_7(), 2) + this.getas_r_sx_14() * this.getas_r_sx_7());
        }
        getas_trcono_sx_polso()
        {
            return (Math.cos(-1) / 3) * this.as_avambraccio_f3 * (Math.pow(this.getas_r_sx_polso(), 2) + Math.pow(this.getas_r_sx_14(), 2) + this.getas_r_sx_polso() * this.getas_r_sx_14());
        }

        getas_trcono_sx_mano()
        {
            return (Math.cos(-1) / 3) * this.as_mano * (Math.pow(this.getas_r_sx_mano(), 2) + Math.pow(this.getas_r_sx_polso(), 2) + this.getas_r_sx_mano() * this.getas_r_sx_polso());
        }

        //tronco di cono differenza

        getas_trcono_diff__14()
        {
            return Math.abs(this.getas_trcono_dx__14() - this.getas_trcono_sx__14());
        }

        getas_trcono_diff__7()
        {
            return Math.abs(this.getas_trcono_dx__7() - this.getas_trcono_sx__7());
        }

        getas_trcono_diff_gomito()
        {
            return Math.abs(this.getas_trcono_dx_gomito() - this.getas_trcono_sx_gomito());
        }
        
        getas_trcono_diff_7()
        {
            return Math.abs(this.getas_trcono_dx_7() - this.getas_trcono_sx_7());
        }
        
        getas_trcono_diff_14()
        {
            return Math.abs(this.getas_trcono_dx_14() - this.getas_trcono_sx_14());
        }
        
        getas_trcono_diff_polso()
        {
            return Math.abs(this.getas_trcono_dx_polso() - this.getas_trcono_sx_polso());
        }
        
        getas_trcono_diff_mano()
        {
            return Math.abs(this.getas_trcono_dx_mano() - this.getas_trcono_sx_mano());
        }

        //De leva 1996:

        getas_tot_m_dl()
        {
            return this.as_braccio_m_dl + this.as_avambraccio_m_dl + this.as_mano_m_dl;
        }
        
        getas_tot_f_dl()
        {
            return this.as_braccio_f_dl + this.as_avambraccio_f_dl + this.as_mano_f_dl;
        }

        getas_braccio_m_percento_dl()
        {
            return (this.as_braccio_m_dl * 100) / this.getas_tot_m_dl();
        }

        getas_avambraccio_m_percento_dl()
        {
            return (this.as_avambraccio_m_dl * 100) / this.getas_tot_m_dl();
        }

        getas_mano_m_percento_dl()
        {
            return (this.as_mano_m_dl * 100) / this.getas_tot_m_dl();
        }

        getas_tot_m_percento_dl()
        {
            return this.getas_braccio_m_percento_dl() + this.getas_avambraccio_m_percento_dl() + this.getas_mano_m_percento_dl();
        }

        getas_braccio_f_percento_dl()
        {
            return (this.as_braccio_f_dl * 100) / this.getas_tot_f_dl();
        }

        getas_avambraccio_f_percento_dl()
        {
            return (this.as_avambraccio_f_dl * 100) / this.getas_tot_f_dl();
        }

        getas_mano_f_percento_dl()
        {
            return (this.as_mano_f_dl * 100) / this.getas_tot_f_dl();
        }

        getas_tot_f_percento_dl()
        {
            return this.getas_braccio_f_percento_dl() + this.getas_avambraccio_f_percento_dl() + this.getas_mano_f_percento_dl();
        }

        //tabella de leva m/f

        getas_braccio_m2_dl()
        {
            return (this.as_pz_lung * this.getas_braccio_m_percento_dl()) / 100;
        }
        
        getas_braccio_f2_dl()
        {
            return (this.as_pz_lung * this.getas_braccio_f_percento_dl()) / 100;
        }

        getas_avambraccio_m2_dl()
        {
            return (this.as_pz_lung * this.getas_avambraccio_m_percento_dl()) / 100;
        }
        
        getas_avambraccio_f2_dl()
        {
            return (this.as_pz_lung * this.getas_avambraccio_f_percento_dl()) / 100;
        }
        
        getas_mano_m1_dl()
        {
            return (this.as_pz_lung * this.getas_mano_m_percento_dl()) / 100;
        }

        getas_mano_f1_dl()
        {
            return (this.as_pz_lung * this.getas_mano_f_percento_dl()) / 100;
        }

        //tabella singola De Leva

        getas_braccio_m1()
        {
            return this.getas_braccio_m2_dl() - 140;
        }
        
        getas_avambraccio_m3()
        {
            return this.getas_avambraccio_m2_dl() - 140;
        }
        
        getas_mano_m2()
        {
            return this.getas_mano_m1_dl();
        }

        getas_braccio_f1()
        {
            return this.getas_braccio_f2_dl() - 140;
        }
        
        getas_avambraccio_f3()
        {
            return this.getas_avambraccio_f2_dl() - 140;
        }

        getas_mano_f2()
        {
            return this.getas_mano_f1_dl();
        }
        //volume totale mm3

        getas_tot_dx()
        {
            return this.getas_trcono_dx__14() + this.getas_trcono_dx__7() + this.getas_trcono_dx_gomito() + this.getas_trcono_dx_7() + this.getas_trcono_dx_14() + this.getas_trcono_dx_polso() + this.getas_trcono_dx_mano();
        }
        
        getas_tot_sx()
        {
            return this.getas_trcono_sx__14() + this.getas_trcono_sx__7() + this.getas_trcono_sx_gomito() + this.getas_trcono_sx_7() + this.getas_trcono_sx_14() + this.getas_trcono_sx_polso() + this.getas_trcono_sx_mano();
        }
       
        getas_diff()
        {
            return this.getas_trcono_diff__14() + this.getas_trcono_diff__7() + this.getas_trcono_diff_gomito() + this.getas_trcono_diff_7() + this.getas_trcono_diff_14() + this.getas_trcono_diff_polso() + this.getas_trcono_diff_mano();
        }

        //volume totale cc3 

        getas_tot2_dx()
        {
            return this.getas_tot_dx() / 1000;
        }

        getas_tot2_sx()
        {
            return this.getas_tot_sx() / 1000;
        }

        getas_diff2()
        {
            return this.getas_diff() / 1000;
        }

        //litri tot
        
        getas_dx()
        {
            return this.getas_tot2_dx() / 1000;
        }
        
        getas_sx()
        {
            return this.getas_tot2_sx() / 1000;
        }

        getas_diff1()
        {
            return this.getas_diff2() / 1000;
        }    
       
       getas_diff2()
       {
        if ( this.getas_dx() < this.getas_sx() )
                            
               {
                    return "SX"
                } 
        else
        {
            return "DX";
        }    

    }

    getas_percento()
    {
        if ( this.getas_diff2() == "DX")
            
                
                {
                    return (( this.getas_dx() / this.getas_sx() ) - 1) * 100;
                }
            

        else 
        {
            return (( this.getas_sx() / this.getas_dx() ) - 1) * 100;
        }
    }
        getas_braccio_dx()
        {
            return (this.getas_trcono_dx__14() + this.getas_trcono_dx__7() + this.getas_trcono_dx_gomito()) / 1000000;
        }

        getas_braccio_sx()
        {
            return (this.getas_trcono_sx__14() + this.getas_trcono_sx__7() + this.getas_trcono_sx_gomito()) / 1000000;
        }

        getas_braccio_diff1()
        {
            return (this.getas_trcono_diff__14() + this.getas_trcono_diff__7() + this.getas_trcono_diff_gomito()) / 1000000;
        }


        getas_braccio_diff2()
        {
        if ( this.getas_braccio_dx() < this.getas_braccio_sx() )
            
                
                {
                    return "SX" 
                }

        else
        {
            return "DX";
        }
        }

        getas_braccio_percento()
        {
        if ( this.getas_braccio_diff2() == "DX")
            
                
                {
                    return (( this.as_braccio_dx() / as_braccio_sx() ) - 1) * 100
                }
            
        else 
        {
            return (( this.getas_braccio_sx() / this.getas_braccio_dx() ) - 1) * 100;
        }
        }

        getas_avambraccio_dx()
        {
            return (this.getas_trcono_dx_14() + this.getas_trcono_dx_polso() + this.getas_trcono_dx_7()) / 1000000;
        }

        getas_avambraccio_sx()
        {
            return (this.getas_trcono_sx_7() + this.getas_trcono_sx_14() + this.getas_trcono_sx_polso()) / 1000000;
        }

        getas_avambraccio_diff1()
        {
            return (this.getas_trcono_diff_7() + this.getas_trcono_diff_14() + this.getas_trcono_diff_polso()) / 1000000;
        }


        getas_avambraccio_diff2()
        {
        if ( this.getas_avambraccio_dx() < this.getas_avambraccio_sx() )
            
                
                {
                    return "SX";
                }
            

        else 
        {
            return "DX"
        }
        }


        getas_avambraccio_percento()
        {
        if ( this.getas_avambraccio_diff2() == "DX")
          
                
                {
                    return (( this.getas_avambraccio_dx() / this.getas_avambraccio_sx() ) - 1) * 100
                }
            

        else 
        {
            return (( this.getas_avambraccio_sx() / this.getas_avambraccio_dx() ) - 1) * 100;
        }
        }

        getas_mano_dx()
        {            
            return this.getas_trcono_dx_mano() / 1000000;
        }

        getas_mano_sx()
        {
            return this.getas_trcono_sx_mano() / 1000000;
        }

        getas_mano_diff1()
        {
            return this.getas_trcono_diff_mano() / 1000000;
        }
        


        getas_mano_diff2()
        {
        if ( this.getas_mano_dx() < this.getas_mano_sx() )
        
                
                {
                    return "SX" 
                }
            

        else 
        {
            return "DX";
        }
        }


        getas_mano_percento()
        {
        if ( this.getas_mano_diff2() == "DX")
        

                
                {
                    return (( this.getas_mano_dx() / this.getas_mano_sx() ) - 1) * 100
                }
            

        else 
        {
            return (( this.getas_mano_sx() / this.getas_mano_dx() ) - 1) * 100;
        }
        }

        //tabella F singola 


        getas_braccio_f1()
        {
        if ( this.as_sesso == 'F' )
        
        
            
            {
                return this.getas_braccio_f2_dl() - 140;
            }
        
        else  
        {
            return this.getas_braccio_m2_dl() - 140;
        }    
        }

        getas_avambraccio_f1()
        {
        if ( this.as_sesso == 'F' )
        
            
            {
                return this.getas_avambraccio_f2_dl() - 140;
            }
        
        
        else  
        {
            return this.getas_avambraccio_m2_dl() - 140;
        }
        }

        getas_mano_f1()
        {
        if ( this.as_sesso == 'F' )
        
        
            
            {
                return this.getas_mano_f2_dl() - 140;
            }
        
        
        else  
        {
            return this.getas_mano_m2_dl() - 140;
        }
        }




        
        //calcoli arti inferiori

        //raggio dx

        getr_dx__20()
        {
            return this.cir_dx__20 / ( 2 * Math.cos(-1));
        }
        
        getr_dx__10()
        {
            return this.cir_dx__10 / ( 2 * Math.cos(-1));
        }
        
        getr_dx_ginocchio()
        {
            return this.r_dx_ginocchio / ( 2 * Math.cos(-1));
        }

        getr_dx_10()
        {
            return this.cir_dx_10 / ( 2 * Math.cos(-1));
        }

        getr_dx_20()
        {
            return this.cir_dx_20 / ( 2 * Math.cos(-1));
        }

        getr_dx_caviglia()
        {
            return this.cir_dx_caviglia / ( 2 * Math.cos(-1));
        }
        
        getr_dx_piede()
        {
            return this.cir_dx_piede / ( 2 * Math.cos(-1));
        }

        //raggio sx

        getr_sx__20()
        {
            return this.cir_sx__20 / ( 2 * Math.cos(-1));
        }
        
        getr_sx__10()
        {
            return this.cir_sx__10 / ( 2 * Math.cos(-1));
        }
        
        getr_sx_ginocchio()
        {
            return this.r_sx_ginocchio / ( 2 * Math.cos(-1));
        }

        getr_sx_10()
        {
            return this.cir_sx_10 / ( 2 * Math.cos(-1));
        }

        getr_sx_20()
        {
            return this.cir_sx_20 / ( 2 * Math.cos(-1));
        }

        getr_sx_caviglia()
        {
            return this.cir_sx_caviglia / ( 2 * Math.cos(-1));
        }
        
        getr_sx_piede()
        {
            return this.cir_sx_piede / ( 2 * Math.cos(-1));
        }

        //tronco di cono destra

        gettrcono_dx__20()
        {
            return (Math.pow(this.getr_dx__20(), 2)) * (this.getbraccio_1() * 2 * Math.cos(-1)); 
        }

        gettrcono_dx__10()
        {
            return (Math.cos(-1)/3) * this.braccio_2 * (this.getr_dx__10() ^ 2 + this.getr_dx__20() ^ 2 + this.getr_dx__10() * this.getr_dx__20());
        }

        gettrcono_dx_ginocchio()
        {
            return (Math.cos(-1)/3) * this.braccio_3 * (this.getr_dx_ginocchio() ^ 2 + this.getr_dx__10() ^ 2 + this.getr_dx_ginocchio() * this.getr_dx__10());
        }

        gettrcono_dx_10()
        {
            return (Math.cos(-1)/3) * this.avambraccio_1 * (this.getr_dx_10() ^ 2 + this.getr_dx_ginocchio() ^ 2 + this.getr_dx_10() * this.getr_dx_ginocchio());
        }

        gettrcono_dx_20()
        {
            return (Math.cos(-1)/3) * this.avambraccio_2 * (this.getr_dx_20() ^ 2 + this.getr_dx_10() ^ 2 + this.getr_dx_20() * this.getr_dx_10());
        }

        gettrcono_dx_caviglia()
        {
            return (Math.cos(-1)/3) * this.avambraccio_3 * (this.getr_dx_caviglia() ^ 2 + this.getr_dx_20() ^ 2 + this.getr_dx_caviglia() * this.getr_dx_20());
        }

        gettrcono_dx_piede()
        {
            return (Math.cos(-1)/3) * this.getmano_1() * (this.getr_dx_piede() ^ 2 + this.getr_dx_caviglia() ^ 2 + this.getr_dx_piede() * this.getr_dx_caviglia());
        }

        //tronco di cono sinistra

        gettrcono_sx__20()
        {
            return (Math.pow(this.getr_sx__20(), 2)) * this.getbraccio_1() * 2 * Math.cos(-1); 
        }

        gettrcono_sx__10()
        {
            return (Math.cos(-1)/3) * this.braccio_2 * (this.getr_sx__10() ^ 2 + this.getr_sx__20() ^ 2 + this.getr_sx__10() * this.getr_sx__20());
        }

        gettrcono_sx_ginocchio()
        {
            return (Math.cos(-1)/3) * this.braccio_3 * (this.getr_sx_ginocchio() ^ 2 + this.getr_sx__10() ^ 2 + this.getr_sx_ginocchio() * this.getr_sx__10());
        }

        gettrcono_sx_10()
        {
            return (Math.cos(-1)/3) * this.avambraccio_1 * (this.getr_sx_10() ^ 2 + this.getr_sx_ginocchio() ^ 2 + this.getr_sx_10() * this.getr_sx_ginocchio());
        }
        
        gettrcono_sx_20()
        {
            return (Math.cos(-1)/3) * this.avambraccio_2 * (this.getr_sx_20() ^ 2 + this.getr_sx_10() ^ 2 + this.getr_sx_20() * this.getr_ax_10());
        }
        
        gettrcono_sx_caviglia()
        {
            return (Math.cos(-1)/3) * this.avambraccio_3 * this.getr_sx_caviglia ^ 2 + this.getr_sx_20() ^ 2 + this.getr_sx_caviglia() * this.getr_sx_20();
        }
        
        gettrcono_sx_piede()
        {
            (Math.cos(-1)/3) * this.getmano_1() * (this.getr_sx_piede() ^ 2 + this.getr_sx_caviglia() ^ 2 + this.getr_sx_piede() * this.getr_sx_caviglia());
        }

        //tronco di cono differenza

        gettrcono_diff__20()
        {
            return Math.abs(this.gettrcono_dx__20() - this.gettrcono_sx__20());
        }
        
        gettrcono_diff__10()
        {
            return Math.abs(this.gettrcono_dx__10() - this.gettrcono_sx__10());
        }
        
        gettrcono_diff_ginocchio()
        {
            return Math.abs(this.gettrcono_dx_ginocchio() - this.gettrcono_sx_ginocchio());
        }
        
        gettrcono_diff_10()
        {
            return Math.abs(this.gettrcono_dx_10() - this.gettrcono_sx_10());
        }
        
        gettrcono_diff_20()
        {
            return Math.abs(this.gettrcono_dx_20() - this.gettrcono_sx_20());
        }
        
        gettrcono_diff_caviglia()
        {
            return Math.abs(this.gettrcono_dx_caviglia() - this.gettrcono_sx_caviglia());
        }
        
        gettrcono_diff_piede()
        {
            return Math.abs(this.gettrcono_dx_piede() - this.gettrcono_sx_piede());
        }

        //de Leva 1996
        
        gettot_m_dl()
        {
            return this.coscia_m_dl + this.gamba_m_dl + this.piede_m_dl; 
        }

        gettot_f_dl()
        {
            return this.coscia_f_dl + this.gamba_f_dl + this.piede_f_dl;
        }

        getcoscia_m_percento()
        {
            return this.coscia_m_dl * 100 / this.gettot_m_dl();
        }

        getcoscia_f_percento()
        {
            return this.coscia_f_dl * 100 / this.gettot_f_dl();
        }

        getgamba_m_percento()
        {
            return this.gamba_m_dl * 100 / this.gettot_m_dl();
        }
        
        getgamba_f_percento()
        {
            return this.gamba_f_dl * 100 / this.gettot_f_dl();
        }

        getpiede_m_percento()
        {
            return this.piede_m_dl * 100 / this.gettot_m_dl();
        }

        getpiede_f_percento()
        {
            return this.piede_f_dl * 100 / this.gettot_f_dl();
        }

        gettot_m_percento()
        {
            return this.getcoscia_m_percento() + this.getgamba_m_percento() + this.getpiede_m_percento();
        }

        gettot_f_percento()
        {
            return this.getcoscia_f_percento() + this.getgamba_f_percento() + this.getpiede_f_percento();
        }

        getcoscia_m()
        {
            return this.al_pz_lung * this.getcoscia_m_percento() / 100;
        }

        getcoscia_f()
        {
            return this.al_pz_lung * this.getcoscia_f_percento() / 100;
        }

        getgamba_m()
        {
            return this.al_pz_lung * this.getgamba_m_percento() / 100;
        }

        getgamba_f()
        {
            return this.al_pz_lung * this.getgamba_f_percento() / 100;
        }
        
        getpiede_m()
        {
            return this.al_pz_lung * this.getpiede_m_percento() / 100;
        }
        
        getpiede_f()
        {
            return this.al_pz_lung * this.getpiede_f_percento() / 100;
        }

        //calcolo tabella in basso a sinistra

        getcoscia_m1()
        {
            return this.getcoscia_m() - 200;
        }

        getgamba_m3()
        {
            return this.getgamba_m() - 200;
        }

        getpiede1()
        {
            return this.getpiede_m();
        }

        getcoscia_f1()
        {
            return this.getcoscia_f() - 200;
        }

        getgamba_f3()
        {
            return this.getgamba_f() - 200;
        }

        getpiede1()
        {
            return this.getpiede_f();
        }

        //volume tot mm

        gettot_dx()
        {
            return this.gettrcono_dx__20() + this.gettrcono_dx__10() + this.gettrcono_dx_ginocchio() + this.gettrcono_dx_10() + this.gettrcono_dx_2() + this.gettrcono_dx_caviglia() + this.gettrcono_dx_piede();
        }
        
        gettot_sx()
        {
            return this.gettrcono_sx__20() + this.gettrcono_sx__10() + this.gettrcono_sx_ginocchio() + this.gettrcono_sx_10() + this.gettrcono_sx_20() + this.gettrcono_sx_caviglia() + this.gettrcono_sx_piede();
        }
        
        gettot_diff()
        {
            return this.gettrcono_diff__20() + this.gettrcono_diff__10() + this.gettrcono_diff_ginocchio() + this.gettrcono_diff_10() + this.gettrcono_diff_20() + this.gettrcono_diff_caviglia() + this.gettrcono_diff_piede();
        }

        //volume tot cc

        gettot2_dx()
        {
            return this.gettot_dx() / 1000;
        }
        
        gettot2_sx()
        {
            return this.gettot_sx() / 1000;
        }
        
        gettot2_diff()
        {
            return this.gettot_diff() / 1000;
        }

        //litri tot 

        getdx_tot()
        {
            return this.gettot2_dx() / 1000;
        }
        
        getsx_tot()
        {
            return this.gettot2_sx() / 1000;
        }

        getdiff1_tot()
        {
            return this.gettot2_diff() / 1000;
        }


        getdiff1_tot()
        {
        if ( this.getdx_tot() < this.getsx_tot() )
            
               
               {
                    return "SX"; 
               }
            

        else
        {
            return "DX";
        }
        }

        getpercento_tot()
        {
        if ( this.getdiff2() == "DX")
            
                
                {
                    return (( this.getrdx_tot() / this.getsx_tot() ) - 1) * 100
                }
            
        else 
        {
            return (( this.getsx_tot() / this.getdx_tot() ) - 1) * 100;
        }   
        }

        getdx_coscia()
        {
            return (this.gettrcono_dx__20() + this.gettrcono_dx__10() + this.gettrcono_dx_ginocchio()) / 1000000;
        }

        getsx_coscia()
        {
            return (this.gettrcono_sx__20() + this.gettrcono_sx__10() + this.gettrcono_sx_ginocchio()) / 1000000;
        }

        getdiff1_coscia()
        {
            return (this.gettrcono_diff__20() + this.gettrcono_diff__10() + this.gettrcono_diff_ginocchio()) / 1000000;
        }

        
        getdiff2_coscia()
        {
        if ( this.getdx_coscia() < this.getsx_coscia() )
            
               
               {
                return "SX"
               } 
            

        else
        {
            return "DX";
        }   
        }


        getpercento_coscia()
        {
        if ( this.getdiff2_coscia() == "DX")
            
                
                {
                    return (( this.getdx_coscia() / this.getsx_coscia() ) - 1) * 100
                }

            
        else 
        { 
            return (( this.getsx_coscia() / this.getdx_coscia() ) - 1) * 100;
        }
        }

        getdx_gamba()
        {
            return (this.gettrcono_dx__10() + this.gettrcono_dx__20() + this.gettrcono_dx_caviglia()) / 1000000;
        }

        getsx_gamba()
        {
            return (this.gettrcono_sx__10() + this.gettrcono_sx__20() + this.gettrcono_sx_caviglia()) / 1000000;
        }

        getdiff1_gamba()
        {
            return (this.gettrcono_diff__10() + this.gettrcono_diff__20() + this.gettrcono_diff_caviglia()) / 1000000;
        }


        getdiff2_gamba()
        {
        if ( this.getdx_gamba() < this.getsx_gamba() )
            
                
                {
                    return "SX" 
                }
            

        else
        {
            return "DX";
        }
        }

        getpercento_gamba()
        {
        if ( this.getdiff2_gamba() == "DX")
            {
                
                {
                    return (( this.getdx_gamba() / this.getsx_gamba() ) - 1) * 100
                }
            }
        else
        {
            return (( this.getsx_gamba() / this.getdx_gamba() ) - 1) * 100;
        }
        }
        
        
        getdx_piede()
        {
            return this.gettrcono_dx_piede() / 1000000;
        }

        getsx_piede()
        {
            return this.gettrcono_sx_piede() / 1000000;
        }

        getdiff1_piede()
        {
            return this.gettrcono_diff_piede() / 1000000;
        }


        getdiff2_piede()
        {
        if ( this.getdx_piede() < this.getsx_piede() )
            
                
                {
                    return "SX" 
                }
            
        else 
        {
            return "DX";
        }
        }


        getpercento_piede()
        {
        if ( this.getdiff2_piede() == "DX")
            
                
                {
                    return (( this.getdx_piede() / this.getsx_piede() ) - 1) * 100
                }
            
        else 
        {
            return (( this.getsx_piede() / this.getdx_piede() ) - 1) * 100;
        }
        }

        //calcolo tabella in basso a destra

        getbraccio_1()
        {
         if ( this.sesso == 'F' )
            {
                return this.getcoscia_f_dl() - 200;
            }
             else
        {
            return this.getcoscia1_m_dl() - 200;
        }
        }

        getavambraccio_3()
        {
         if ( this.sesso == 'F' )      
            {
                return this.getavambraccio_f2_dl() - 200;
            }
         
         
         else 
        {
            return avambraccio_m2_dl() - 200;
        }
        }


        getmano_1()
        {
        if ( this.sesso == 'F' )
            {
                return this.getpiede_f();
            }
         
         else  
        {
            return this.getpiede_m();
        }
        }
         
}