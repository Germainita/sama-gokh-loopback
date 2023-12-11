import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Projet, ProjetRelations} from '../models';

export class ProjetRepository extends DefaultCrudRepository<
  Projet,
  typeof Projet.prototype.id,
  ProjetRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Projet, dataSource);
  }
}
