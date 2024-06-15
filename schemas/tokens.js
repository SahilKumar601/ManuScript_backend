export default {
    name: 'tokens',
    title: 'Tokens',
    type: 'document',
    fields: [
      {
        name: 'user',
        title: 'User',
        type: 'reference',
        to: [{ type: 'user' }]
      },
      {
        name: 'accessToken',
        title: 'Access Token',
        type: 'string',
        hidden: true, 
      },
      {
        name: 'refreshToken',
        title: 'Refresh Token',
        type: 'string',
        hidden: true, 
      },
      {
        name: 'createdAt',
        title: 'Created At',
        type: 'datetime',
        initialValue: () => new Date().toISOString(),
        readOnly: true
      }
    ]
  };
  