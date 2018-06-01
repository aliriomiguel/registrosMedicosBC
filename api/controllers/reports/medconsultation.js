module.exports = {


  friendlyName: 'Medical Consultation record',


  description: 'Records the constancy of consultation into the Blockchain',

  inputs: {
    
    
    
  },

  exits: {

    success: {
      viewTemplatePath: 'pages/dashboard/welcome',
      description: 'Display the confirmation page for the submited data into the blockchain'
    },

    invalid: {
    },
  },


  fn: async function (inputs, exits) {

    return exits.success();

  }


};