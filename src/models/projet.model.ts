import {Entity, model, property} from '@loopback/repository';

@model()
export class Projet extends Entity {
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
  description: string;

  @property({
    type: 'string',
    required: true,
  })
  image: string;

  @property({
    type: 'string',
    required: true,
  })
  cout: string;

  @property({
    type: 'string',
    required: true,
  })
  delai: string;

  @property({
    type: 'boolean',
    required: true,
  })
  etat: boolean;

  @property({
    type: 'string',
    required: true,
  })
  cloture_vote: string;

  @property({
    type: 'number',
    required: true,
  })
  idEtatProjet: number;

  @property({
    type: 'number',
    required: true,
  })
  idTypeProjet: number;

  @property({
    type: 'number',
    required: true,
  })
  idUser: number;

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


  constructor(data?: Partial<Projet>) {
    super(data);
  }
}

export interface ProjetRelations {
  // describe navigational properties here
}

export type ProjetWithRelations = Projet & ProjetRelations;
