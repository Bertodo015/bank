import { log } from "console";
import { BankAccount } from "./models/BankAccount";
import { Client } from "./models/Client";

//utiliza o construtor da classe Client para construir/instâncias um novo objeto
const client1 = new Client();
client1.cpf = "000.000.000-00";
client1.name = "Fulano de Tal";

const account1 = new BankAccount();
account1.client = client1;
account1.number = "12345-6";
account1.branch = "123-4";
account1.deposit(50);
account1.withdraw(20);
console.log(account1.statement());
