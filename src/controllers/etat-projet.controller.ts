import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {EtatProjet} from '../models';
import {EtatProjetRepository} from '../repositories';

export class EtatProjetController {
  constructor(
    @repository(EtatProjetRepository)
    public etatProjetRepository : EtatProjetRepository,
  ) {}

  @post('/etat-projets')
  @response(200, {
    description: 'EtatProjet model instance',
    content: {'application/json': {schema: getModelSchemaRef(EtatProjet)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EtatProjet, {
            title: 'NewEtatProjet',
            exclude: ['id'],
          }),
        },
      },
    })
    etatProjet: Omit<EtatProjet, 'id'>,
  ): Promise<EtatProjet> {
    return this.etatProjetRepository.create(etatProjet);
  }

  @get('/etat-projets/count')
  @response(200, {
    description: 'EtatProjet model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(EtatProjet) where?: Where<EtatProjet>,
  ): Promise<Count> {
    return this.etatProjetRepository.count(where);
  }

  @get('/etat-projets')
  @response(200, {
    description: 'Array of EtatProjet model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(EtatProjet, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(EtatProjet) filter?: Filter<EtatProjet>,
  ): Promise<EtatProjet[]> {
    return this.etatProjetRepository.find(filter);
  }

  @patch('/etat-projets')
  @response(200, {
    description: 'EtatProjet PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EtatProjet, {partial: true}),
        },
      },
    })
    etatProjet: EtatProjet,
    @param.where(EtatProjet) where?: Where<EtatProjet>,
  ): Promise<Count> {
    return this.etatProjetRepository.updateAll(etatProjet, where);
  }

  @get('/etat-projets/{id}')
  @response(200, {
    description: 'EtatProjet model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(EtatProjet, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(EtatProjet, {exclude: 'where'}) filter?: FilterExcludingWhere<EtatProjet>
  ): Promise<EtatProjet> {
    return this.etatProjetRepository.findById(id, filter);
  }

  @patch('/etat-projets/{id}')
  @response(204, {
    description: 'EtatProjet PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EtatProjet, {partial: true}),
        },
      },
    })
    etatProjet: EtatProjet,
  ): Promise<void> {
    await this.etatProjetRepository.updateById(id, etatProjet);
  }

  @put('/etat-projets/{id}')
  @response(204, {
    description: 'EtatProjet PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() etatProjet: EtatProjet,
  ): Promise<void> {
    await this.etatProjetRepository.replaceById(id, etatProjet);
  }

  @del('/etat-projets/{id}')
  @response(204, {
    description: 'EtatProjet DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.etatProjetRepository.deleteById(id);
  }
}
