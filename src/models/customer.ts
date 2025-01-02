export class Customer  {
    

    constructor (
        
        public id: number | null,
        public email: string,
        public password: string,
        public nome: string,
        public sobrenome: string,
        public idade: number   
    ) 
    {

    }
}