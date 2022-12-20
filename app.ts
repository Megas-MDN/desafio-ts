import { CompanyAccount } from './class/CompanyAccount';
import { PeopleAccount } from './class/PeopleAccount';
import {MyCompanyAccount} from './class/MyCompanyAccount';

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(10)
peopleAccount.getBalance()
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(100)
companyAccount.getBalance();
companyAccount.getLoan(200);
console.log(companyAccount);

const myCompany: MyCompanyAccount = new MyCompanyAccount('Megas', 100);
myCompany.deposit(100);
myCompany.withdraw(5);
myCompany.getBalance()
console.log(myCompany)
