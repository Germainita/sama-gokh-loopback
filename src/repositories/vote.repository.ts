import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Vote, VoteRelations} from '../models';

export class VoteRepository extends DefaultCrudRepository<
  Vote,
  typeof Vote.prototype.id,
  VoteRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Vote, dataSource);
  }
}
