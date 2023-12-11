import {Entity, model, property} from '@loopback/repository';

@model()
export class EtatProjet extends Entity {
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
  statut: string;

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


  constructor(data?: Partial<EtatProjet>) {
    super(data);
  }
}

export interface EtatProjetRelations {
  // describe navigational properties here
}

export type EtatProjetWithRelations = EtatProjet & EtatProjetRelations;
