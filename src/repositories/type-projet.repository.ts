import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {TypeProjet, TypeProjetRelations} from '../models';

export class TypeProjetRepository extends DefaultCrudRepository<
  TypeProjet,
  typeof TypeProjet.prototype.id,
  TypeProjetRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(TypeProjet, dataSource);
  }
}
