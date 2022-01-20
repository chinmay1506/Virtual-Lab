import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Review from '../models/reviewModel.js';
import { generateToken } from '../utils.js';

const userRouter = express.Router();

userRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    // await User.remove({});
    const createdReviews = await User.insertMany(data.reviews);
    res.send({ createdReviews });
  })
);

userRouter.post(
    '/ContactUs',
    expressAsyncHandler(async (req, res) => {
      const review = await Review.findOne({ name: req.body.name });
      if (review) {
          res.send({
            name: review.name,
            query: review.query,
          });
          return;
      }
      res.status(401).send({ message: 'Invalid email or password' });
    })
  );

//   userRouter.post(
//     '/register',
//     expressAsyncHandler(async (req, res) => {
//       const user = new User({
//         name: req.body.name,
//         email: req.body.email,
//         password: bcrypt.hashSync(req.body.password, 8),
//       });
//       const createdUser = await user.save();
//       res.send({
//         _id: createdUser._id,
//         name: createdUser.name,
//         email: createdUser.email,
//         isAdmin: createdUser.isAdmin,
//         token: generateToken(createdUser),
//       });
//     })
//   );

export default userRouter;