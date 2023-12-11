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
import {Annonce} from '../models';
import {AnnonceRepository} from '../repositories';

export class AnnonceController {
  constructor(
    @repository(AnnonceRepository)
    public annonceRepository : AnnonceRepository,
  ) {}

  @post('/annonces')
  @response(200, {
    description: 'Annonce model instance',
    content: {'application/json': {schema: getModelSchemaRef(Annonce)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Annonce, {
            title: 'NewAnnonce',
            exclude: ['id'],
          }),
        },
      },
    })
    annonce: Omit<Annonce, 'id'>,
  ): Promise<Annonce> {
    return this.annonceRepository.create(annonce);
  }

  @get('/annonces/count')
  @response(200, {
    description: 'Annonce model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Annonce) where?: Where<Annonce>,
  ): Promise<Count> {
    return this.annonceRepository.count(where);
  }

  @get('/annonces')
  @response(200, {
    description: 'Array of Annonce model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Annonce, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Annonce) filter?: Filter<Annonce>,
  ): Promise<Annonce[]> {
    return this.annonceRepository.find(filter);
  }

  @patch('/annonces')
  @response(200, {
    description: 'Annonce PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Annonce, {partial: true}),
        },
      },
    })
    annonce: Annonce,
    @param.where(Annonce) where?: Where<Annonce>,
  ): Promise<Count> {
    return this.annonceRepository.updateAll(annonce, where);
  }

  @get('/annonces/{id}')
  @response(200, {
    description: 'Annonce model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Annonce, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Annonce, {exclude: 'where'}) filter?: FilterExcludingWhere<Annonce>
  ): Promise<Annonce> {
    return this.annonceRepository.findById(id, filter);
  }

  @patch('/annonces/{id}')
  @response(204, {
    description: 'Annonce PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Annonce, {partial: true}),
        },
      },
    })
    annonce: Annonce,
  ): Promise<void> {
    await this.annonceRepository.updateById(id, annonce);
  }

  @put('/annonces/{id}')
  @response(204, {
    description: 'Annonce PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() annonce: Annonce,
  ): Promise<void> {
    await this.annonceRepository.replaceById(id, annonce);
  }

  @del('/annonces/{id}')
  @response(204, {
    description: 'Annonce DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.annonceRepository.deleteById(id);
  }
}
