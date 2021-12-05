const res = require('express/lib/response');
const Joi = require('joi');
const { trim, keys } = require('lodash');

const arrayString = ['banana','bacon','cheese'];
const arrayObjects = [{example: 'example1'},{example: 'example2'}];

const userInput = { personalInfo : {
                        streetAddress: '123987987',
                        city: 'kljlkajd',
                        state: 'fl'
                    },
                    preferences : arrayObjects};

const personalInfoSchema = Joi.object().keys({
    streetAddress : Joi.string().trim().required(),
    city : Joi.string().trim().required(),
    state : Joi.string().trim().length(2).required()
});

const preferencesSchema = Joi.array().items(Joi.object().keys({
    example: Joi.string().required()
}));

const schema = Joi.object().keys({
    personalInfo: personalInfoSchema,
    preferences: preferencesSchema
});

const validation = schema.validate(userInput);

if(validation.error)
    console.log(validation.error)
else
    console.log(userInput);
