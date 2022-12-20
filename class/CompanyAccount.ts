import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (num: number): void => {
    console.log('Será depositado na sua conta')
    this.deposit(num);
  }
}
