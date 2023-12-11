import {Entity, model, property} from '@loopback/repository';

@model()
export class Ville extends Entity {
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


  constructor(data?: Partial<Ville>) {
    super(data);
  }
}

export interface VilleRelations {
  // describe navigational properties here
}

export type VilleWithRelations = Ville & VilleRelations;
