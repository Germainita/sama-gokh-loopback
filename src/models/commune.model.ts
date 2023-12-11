import {Entity, model, property} from '@loopback/repository';

@model()
export class Commune extends Entity {
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
  nom: string;

  @property({
    type: 'number',
    required: true,
  })
  nombre_citoyen: number;

  @property({
    type: 'string',
    required: true,
  })
  image: string;

  @property({
    type: 'number',
    required: true,
  })
  idVille: number;

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
    type: 'string',
  })
  updatedAt?: string;

  @property({
    type: 'Date',
  })
  updatedBy?: Date;

  constructor(data?: Partial<Commune>) {
    super(data);
  }
}

export interface CommuneRelations {
  // describe navigational properties here
}

export type CommuneWithRelations = Commune & CommuneRelations;
