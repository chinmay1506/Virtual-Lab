import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
          name: 'admin',
          email: 'admin@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: true,
        },
        {
          name: 'Chinmay',
          email: 'chinmay1506@gmail.com',
          password: bcrypt.hashSync('deta20', 8),
          isAdmin: false,
        },
      ],
      
      reviews: [
          {
              name: 'Rajesh',
              query: 'no problem'
          }
      ]
  };
  export default data;