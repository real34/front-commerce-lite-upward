const storeInformation = {
  name: "My awesome store",
  phone: "+33 102 030 405"
};

export default {
  Query: {
    store: () => storeInformation
  },

  StoreInformation: {
    owner: (_, __, context) =>
      context.loadRandomUser().then(user => ({
        gender: user.gender.toUpperCase(),
        displayName: `${user.name.title} ${user.name.first} ${user.name.last}`,
        email: user.email,
        picture: user.picture
      }))
  },

  StoreOwner: {
    picture: ({ picture }, { size }) =>
      picture.hasOwnProperty(size) ? picture[size] : null
  }
};
