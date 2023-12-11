import {Entity, model, property} from '@loopback/repository';

@model()
export class Annonce extends Entity {
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
  titre: string;

  @property({
    type: 'string',
    required: true,
  })
  image: string;

  @property({
    type: 'boolean',
    required: true,
  })
  etat: boolean;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'number',
    required: true,
  })
  idUser: number;

  @property({
    type: 'Date',
    required: true,
  })
  createdAt: Date;

  @property({
    type: 'string',
    required: true,
  })
  createdBy: string;

  @property({
    type: 'Date',
  })
  updatedAt?: Date;

  @property({
    type: 'string',
  })
  updatedBy?: string;

  constructor(data?: Partial<Annonce>) {
    super(data);
  }
}

export interface AnnonceRelations {
  // describe navigational properties here
}

export type AnnonceWithRelations = Annonce & AnnonceRelations;
