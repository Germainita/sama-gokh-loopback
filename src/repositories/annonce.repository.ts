import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Annonce, AnnonceRelations} from '../models';

export class AnnonceRepository extends DefaultCrudRepository<
  Annonce,
  typeof Annonce.prototype.id,
  AnnonceRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Annonce, dataSource);
  }
}
