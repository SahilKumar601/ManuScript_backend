export default {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
      {
        name: 'email',
        title: 'Email',
        type: 'string',
        validation: Rule => Rule.required().email()
      },
      {
        name: 'password',
        title: 'Password',
        type: 'string',
        /* hidden: true, */
        validation: Rule => Rule.required()
      },
      {
        name: 'role',
        title: 'Role',
        type: 'string',
        options: {
          list: [
            { title: 'Student', value: 'student' },
            { title: 'Administrator', value: 'administrator' }
          ]
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'tokens',
        title: 'Tokens',
        type: 'reference',
        to: [{ type: 'tokens' }]
      }
    ]
  };
  