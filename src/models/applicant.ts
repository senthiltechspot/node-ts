
import { Model, DataTypes, Sequelize } from 'sequelize';
import sequelize from '../config/sequalize';

interface ApplicantAttributes {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string; // Make phone number optional (if applicable)
  // You can add other properties here
}

export class Applicant extends Model<ApplicantAttributes> implements ApplicantAttributes {
  public id!: number; // Enforce type safety (non-null)
  public firstName!: string;
  public lastName!: string;
  public email!: string;
  public phoneNumber?: string; // Optional property

  static initModel(sequelize: Sequelize) {
    return Applicant.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        firstName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        lastName: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true, // Ensure unique emails
        },
        phoneNumber: {
          type: DataTypes.STRING,
          allowNull: true,
        },
      },
      {
        sequelize,
        modelName: 'Applicant',
        tableName: 'applicants', // Customize table name if desired
      }
    );
  }
}

export default Applicant.initModel(sequelize);