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
import {Ville} from '../models';
import {VilleRepository} from '../repositories';

export class VilleController {
  constructor(
    @repository(VilleRepository)
    public villeRepository : VilleRepository,
  ) {}

  @post('/villes')
  @response(200, {
    description: 'Ville model instance',
    content: {'application/json': {schema: getModelSchemaRef(Ville)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ville, {
            title: 'NewVille',
            exclude: ['id'],
          }),
        },
      },
    })
    ville: Omit<Ville, 'id'>,
  ): Promise<Ville> {
    return this.villeRepository.create(ville);
  }

  @get('/villes/count')
  @response(200, {
    description: 'Ville model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Ville) where?: Where<Ville>,
  ): Promise<Count> {
    return this.villeRepository.count(where);
  }

  @get('/villes')
  @response(200, {
    description: 'Array of Ville model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Ville, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Ville) filter?: Filter<Ville>,
  ): Promise<Ville[]> {
    return this.villeRepository.find(filter);
  }

  @patch('/villes')
  @response(200, {
    description: 'Ville PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ville, {partial: true}),
        },
      },
    })
    ville: Ville,
    @param.where(Ville) where?: Where<Ville>,
  ): Promise<Count> {
    return this.villeRepository.updateAll(ville, where);
  }

  @get('/villes/{id}')
  @response(200, {
    description: 'Ville model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Ville, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Ville, {exclude: 'where'}) filter?: FilterExcludingWhere<Ville>
  ): Promise<Ville> {
    return this.villeRepository.findById(id, filter);
  }

  @patch('/villes/{id}')
  @response(204, {
    description: 'Ville PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ville, {partial: true}),
        },
      },
    })
    ville: Ville,
  ): Promise<void> {
    await this.villeRepository.updateById(id, ville);
  }

  @put('/villes/{id}')
  @response(204, {
    description: 'Ville PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() ville: Ville,
  ): Promise<void> {
    await this.villeRepository.replaceById(id, ville);
  }

  @del('/villes/{id}')
  @response(204, {
    description: 'Ville DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.villeRepository.deleteById(id);
  }
}
