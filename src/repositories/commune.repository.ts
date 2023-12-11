import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Commune, CommuneRelations} from '../models';

export class CommuneRepository extends DefaultCrudRepository<
  Commune,
  typeof Commune.prototype.id,
  CommuneRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Commune, dataSource);
  }
}
