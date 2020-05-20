import { EntityRepository, Repository, getRepository } from 'typeorm';

import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

@EntityRepository(Transaction)
class TransactionsRepository extends Repository<Transaction> {
  public async getBalance(): Promise<Balance> {
    const transactionRepository = getRepository(Transaction);

    const transactions = await transactionRepository.find();

    const incomeTransactions = transactions.filter(
      item => item.type === 'income',
    );

    const outcomeTransactions = transactions.filter(
      item => item.type === 'outcome',
    );

    const income = incomeTransactions.reduce(
      (total, transaction) => +total + +transaction.value,
      0,
    );

    const outcome = outcomeTransactions.reduce(
      (total, transaction) => +total + +transaction.value,
      0,
    );

    return {
      income,
      outcome,
      total: income - outcome,
    };
  }
}

export default TransactionsRepository;
