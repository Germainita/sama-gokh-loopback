import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Commentaire, CommentaireRelations} from '../models';

export class CommentaireRepository extends DefaultCrudRepository<
  Commentaire,
  typeof Commentaire.prototype.id,
  CommentaireRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Commentaire, dataSource);
  }
}
