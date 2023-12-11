import {Entity, model, property} from '@loopback/repository';

@model()
export class Commentaire extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  contenu: string;

  @property({
    type: 'string',
    required: true,
  })
  createdAt: string;

  @property({
    type: 'string',
    required: true,
  })
  createdBy: string;

  @property({
    type: 'string',
  })
  updatedAt?: string;

  @property({
    type: 'string',
  })
  updatedBy?: string;
  
  constructor(data?: Partial<Commentaire>) {
    super(data);
  }
}

export interface CommentaireRelations {
  // describe navigational properties here
}

export type CommentaireWithRelations = Commentaire & CommentaireRelations;
