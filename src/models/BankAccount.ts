import { Client } from "./Client";

export class BankAccount {
    number: string; //número da conta bancária
    branch: string; //número da agência
    private _balance: number;    //saldo
    client: Client; 

    constructor(number: string, branch: string, client: Client) {
        this.number = number;
        this.branch = branch;
        this._balance = 0;
        this.client = new Client("", "");
    }

    // Este método possui assin
    //aceita o parâmetro value e retorna nada
    deposit(value: number): void {
        if (value > 0){
            //this._balance = this._balance + value;
            this._balance += value;
        } else {
            console.log("Value must be positive!");
        }
    }

    //mesma coisa, retorno: nada --> não é necessário colocar <: void>
    withdraw(value: number): void {
        if (value > 0 && value <= this._balance) {
            this._balance -= value;
        } else {
            console.log("Value must be positive and equal or lower than _balance!");
        }
    }

    //retorna uma string
    statement(): string {
        //formatador
        const formatter = Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "brl",
        });

        return formatter.format(this._balance);
    }
}