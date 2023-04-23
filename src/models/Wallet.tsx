import { WalletDetail } from './WalletDetail';

export interface Wallet {
  id: number,
  name: string,
  iconUri: string,
  btnLabel: string,
  walletDetail: WalletDetail
}
