import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  authentication: {
    password: {
      type: String,
      required: true,
      select: false,
    },
    /* A salt is a piece of random data added to a password before it is hashed and stored. */
    salt: {
      type: String,
      required: true,
      select: false,
    },
    sessionToken: {
      type: String,
      select: false,
    },
  },
});

export const UserModel = mongoose.model('User', UserSchema);
/* 
info::

authentication: {
    password: {
      type: String,
      required: true,
      select: false,
    },
}
- `authentication`: This is an object within your schema.
- `password`: This is a property of the `authentication` object.
- `type: String`: This indicates that the `password` field is expected to be a string.
- `required: true`: This means that the `password` field must be provided when creating or updating a document. If it's not provided, Mongoose will throw a validation error.
- `select: false`: This is a Mongoose-specific option that means the `password` field will not be included by default when fetching data from the database¹²³⁴. This is often used for fields that contain sensitive data, like passwords, which you might not want to send with every database query. However, you can still explicitly request this field in a query if needed¹².

So, in this case, `select: false` is likely used to enhance the security of the application by not including the password in every database fetch operation. However, when you need to check the password (for example, when a user is logging in), you can still access it by specifically asking for it in your query¹².

(1) mongodb - Mongoose: How can I access a select:false property in a .... https://stackoverflow.com/questions/28838640/mongoose-how-can-i-access-a-selectfalse-property-in-a-schema-method.
(2) javascript - Mongoose use of .select() method - Stack Overflow. https://stackoverflow.com/questions/9548186/mongoose-use-of-select-method.
(3) select: false makes field values not accessible using "this ... - GitHub. https://github.com/Automattic/mongoose/issues/1596.
(4) What is the meaning `required` in mongoose Schema?. https://stackoverflow.com/questions/39871236/what-is-the-meaning-required-in-mongoose-schema.

*/
