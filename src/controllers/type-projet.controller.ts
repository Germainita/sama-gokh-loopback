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
import {TypeProjet} from '../models';
import {TypeProjetRepository} from '../repositories';

export class TypeProjetController {
  constructor(
    @repository(TypeProjetRepository)
    public typeProjetRepository : TypeProjetRepository,
  ) {}

  @post('/type-projets')
  @response(200, {
    description: 'TypeProjet model instance',
    content: {'application/json': {schema: getModelSchemaRef(TypeProjet)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TypeProjet, {
            title: 'NewTypeProjet',
            exclude: ['id'],
          }),
        },
      },
    })
    typeProjet: Omit<TypeProjet, 'id'>,
  ): Promise<TypeProjet> {
    return this.typeProjetRepository.create(typeProjet);
  }

  @get('/type-projets/count')
  @response(200, {
    description: 'TypeProjet model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(TypeProjet) where?: Where<TypeProjet>,
  ): Promise<Count> {
    return this.typeProjetRepository.count(where);
  }

  @get('/type-projets')
  @response(200, {
    description: 'Array of TypeProjet model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(TypeProjet, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(TypeProjet) filter?: Filter<TypeProjet>,
  ): Promise<TypeProjet[]> {
    return this.typeProjetRepository.find(filter);
  }

  @patch('/type-projets')
  @response(200, {
    description: 'TypeProjet PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TypeProjet, {partial: true}),
        },
      },
    })
    typeProjet: TypeProjet,
    @param.where(TypeProjet) where?: Where<TypeProjet>,
  ): Promise<Count> {
    return this.typeProjetRepository.updateAll(typeProjet, where);
  }

  @get('/type-projets/{id}')
  @response(200, {
    description: 'TypeProjet model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(TypeProjet, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(TypeProjet, {exclude: 'where'}) filter?: FilterExcludingWhere<TypeProjet>
  ): Promise<TypeProjet> {
    return this.typeProjetRepository.findById(id, filter);
  }

  @patch('/type-projets/{id}')
  @response(204, {
    description: 'TypeProjet PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TypeProjet, {partial: true}),
        },
      },
    })
    typeProjet: TypeProjet,
  ): Promise<void> {
    await this.typeProjetRepository.updateById(id, typeProjet);
  }

  @put('/type-projets/{id}')
  @response(204, {
    description: 'TypeProjet PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() typeProjet: TypeProjet,
  ): Promise<void> {
    await this.typeProjetRepository.replaceById(id, typeProjet);
  }

  @del('/type-projets/{id}')
  @response(204, {
    description: 'TypeProjet DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.typeProjetRepository.deleteById(id);
  }
}
