import { DioAccount } from "./DioAccount"

export class MyCompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }
  deposit = (num: number): void => {
      const newBalance = this.getBalance() + num + 10;
      console.log('Voce depositou + bonus')
      this.setBalance(newBalance)
  }
}