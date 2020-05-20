import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';

import TransactionsRepository from '../repositories/TransactionsRepository';

interface Request {
  id: string;
}

class DeleteTransactionService {
  public async execute({ id }: Request): Promise<void> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);

    const transactionExists = transactionsRepository.find({
      where: { id },
    });

    if (!transactionExists) {
      throw new AppError('The transaction does not exists.');
    }

    await transactionsRepository.delete(id);
  }
}

export default DeleteTransactionService;
