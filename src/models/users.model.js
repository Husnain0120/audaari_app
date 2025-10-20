import { Schema } from 'mongoose';

const UsersSchema = new Schema(
  {
    username: {
      type: String,
      default: 'unknow user',

      min: [2, 'minimum name can have 2 letters'],
      max: [20, 'maximum name lenght is 20'],
    },
    email: {
      type: String,
      unique: true,
      default: '',
    },
    phoneNumber: {
      type: String,
      unique: true,
      required: true,
    },

    NationalIdNumber: {
      type: String,
      default: '',
    },
    userAddress: {
      type: String,
      max: [100, '100 is max lenght '],
    },
    shopeName: {
      type: String,
    },
    isVerfied: {
      type: Boolean,
      default: false,
    },
    premiumUser: {
      type: Boolean,
      default: false,
    },
    optCode: {
      type: Number,
      default: '',
    },
  },
  { timestamps: true }
);
