import {Entity, model, property} from '@loopback/repository';

@model()
export class Vote extends Entity {
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
  status: string;

  @property({
    type: 'number',
    required: true,
  })
  idProjet: number;

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


  constructor(data?: Partial<Vote>) {
    super(data);
  }
}

export interface VoteRelations {
  // describe navigational properties here
}

export type VoteWithRelations = Vote & VoteRelations;
