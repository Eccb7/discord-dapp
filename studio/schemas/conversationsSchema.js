export default {
    name: 'conversations',
    type: 'document',
    title: 'Conversations',
    fields: [
      {
        name: 'roomName',
        type: 'string',
        title: 'Room Name',
      },
      {
        name: 'roomId',
        type: 'string',
        title: 'Room Id',
      },
      {
        name: 'image',
        type: 'string',
        title: 'Image',
      },
      {
        name: 'isDm',
        type: 'string',
        title: 'Is Dm',
      },
      {
        name: 'userReference',
        type: 'reference', // Corrected type to 'reference'
        to: [{ type: 'users' }],
      },
    ],
  };
  