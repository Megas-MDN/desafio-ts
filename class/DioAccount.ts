export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  // setName = (name: string): void => {
  //   this.name = name
  //   console.log('Nome alterado com sucesso!')
  // }

  setBalance = (num: number):void => {
    this.balance = num;
  }

  getName = (): string => {
    return this.name
  }

  deposit = (num: number): void => {
    if(this.validateStatus()){
      this.balance += num;
      console.log('Voce depositou')
    }
  }

  withdraw = (num: number): void => {
    if(this.validateStatus() && this.balance >= num){
      this.balance -= num;
      console.log('Voce sacou')
    }
  }

  getBalance = (): number => {
    console.log(this.balance);
    return this.balance;
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
