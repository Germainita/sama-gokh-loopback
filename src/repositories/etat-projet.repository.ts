import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {EtatProjet, EtatProjetRelations} from '../models';

export class EtatProjetRepository extends DefaultCrudRepository<
  EtatProjet,
  typeof EtatProjet.prototype.id,
  EtatProjetRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(EtatProjet, dataSource);
  }
}
