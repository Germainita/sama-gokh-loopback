import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Ville, VilleRelations} from '../models';

export class VilleRepository extends DefaultCrudRepository<
  Ville,
  typeof Ville.prototype.id,
  VilleRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Ville, dataSource);
  }
}
