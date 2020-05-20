import { getCustomRepository, getRepository } from 'typeorm';
import AppError from '../errors/AppError';

import Transaction from '../models/Transaction';
import TransactionsRepository from '../repositories/TransactionsRepository';
import Category from '../models/Category';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
  category: string;
}

class CreateTransactionService {
  public async execute({
    title,
    value,
    type,
    category,
  }: Request): Promise<Transaction> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);
    const categoriesRepository = getRepository(Category);

    if (type === 'outcome') {
      const { total } = await transactionsRepository.getBalance();

      if (value > total) {
        throw new AppError(
          'The outcome value can not be bigger than income value.',
        );
      }
    }

    const databaseCategory = await categoriesRepository.findOne({
      where: { title: category },
    });

    let category_id;

    if (!databaseCategory) {
      const newCategory = await categoriesRepository.create({
        title: category,
      });

      const { id } = await categoriesRepository.save(newCategory);

      category_id = id;
    } else {
      category_id = databaseCategory.id;
    }

    const transaction = await transactionsRepository.create({
      title,
      value,
      type,
      category_id,
    });

    await transactionsRepository.save(transaction);

    return transaction;
  }
}

export default CreateTransactionService;
