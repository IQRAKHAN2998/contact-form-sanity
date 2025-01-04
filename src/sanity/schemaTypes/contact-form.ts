import { Rule } from "sanity";

export default {
    name: 'contactForm',
    title: 'Contact Form',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: (Rule : Rule) => Rule.required().min(2).max(50).error('Name is required and should be between 2-50 characters'),
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
        validation: (Rule : Rule) =>
          Rule.required()
            .email()
            .error('A valid email address is required'),
      },
      {
        name: 'message',
        title: 'Message',
        type: 'text',
        validation: (Rule : Rule) => Rule.required().min(10).max(1000).error('Message should be between 10-1000 characters'),
      },
    ],
  };
   