const { AuthenticationError } = require("apollo-server-express");
const { Profile, Product, Order, Category } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
    },

    profile: async (parent, args, context) => {
      if (context.profile) {
        const profile = await Profile.findById(context.profile._id).populate({
          path: 'orders.products',
          populate: 'category'
        });

        profile.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return profile;
      }

      throw new AuthenticationError('Not logged in');
    },

    categories: async () => Category.find(),

    products: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name,
        };
      }

      return Product.find(params).populate("category");
    },

    product: async (parent, { id }) =>
      Product.findById(id).populate("category"),

    order: async (parent, { id }, context) => {
      if (context.profile) {
        const profile = await Profile.findById(context.profile.id).populate({
          path: "orders.products",
          populate: "category",
        });

        return profile.orders.id(id);
      }

      throw new AuthenticationError("Not logged in");
    },
  },

  Mutation: {
    addProfile: async (parent, { firstName, lastName, email, password }) => {
      const profile = await Profile.create({ firstName, lastName, email, password });
      const token = signToken(profile);

      return { token, profile };
    },
    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw new AuthenticationError("No profile with this email found!");
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(profile);
      return { token, profile };
    },

    addTonie: async (parent, { products }, context) => {
      console.log(context);
      if (context.profile) {
        const order = new Order({ products });

        await Profile.findByIdAndUpdate(context.profile.id, {
          $push: { orders: order },
        });

        return order;
      }

      throw new AuthenticationError("Not logged in");
    },

    addOrder: async (parent, { products }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order({ products });

        await User.findByIdAndUpdate(context.user.id, {
          $push: { orders: order },
        });

        return order;
      }

      throw new AuthenticationError('Not logged in');
    },
    // updateProfile: async (parent, args, context) => {
    //   if (context.profile) {
    //     return Profile.findByIdAndUpdate(context.profile.id, args, {
    //       new: true,
    //     });
    //   }

    //   throw new AuthenticationError("Not logged in");
    // },
  },
};

module.exports = resolvers;
