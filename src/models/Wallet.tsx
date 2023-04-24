import { WalletDetail } from './WalletDetail';

export interface Wallet {
  id: number,
  name: string,
  iconUri: any,
  btnLabel: string,
  walletDetail: WalletDetail
}
