import {Entity, model, property} from '@loopback/repository';

@model()
export class TypeProjet extends Entity {
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

  constructor(data?: Partial<TypeProjet>) {
    super(data);
  }
}

export interface TypeProjetRelations {
  // describe navigational properties here
}

export type TypeProjetWithRelations = TypeProjet & TypeProjetRelations;
