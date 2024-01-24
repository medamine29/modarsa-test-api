import { Model, ModelDefined } from 'sequelize';

class Repository<T extends Model> {
  model: ModelDefined<T, any>;

  constructor(model: ModelDefined<T, any>) {
    this.model = model;
  }

  async create(data: any): Promise<Model<T, any>> {
    return this.model.create(data);
  }

  async findAll(): Promise<Model<T, any>[]> {
    return this.model.findAll();
  }

}

export default Repository;
