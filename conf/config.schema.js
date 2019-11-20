module.exports = {
  definition: {
    maxFileUploadSize: {
      type: 'String',
      default: '200MB',
      description: 'Maximum file upload size.'
    },
    useAppRoot: {
      type: 'Boolean',
      default: true,
      description: 'Use application folder as root directory.'
    },
    dataFolder: {
      type: 'String',
      default: 'data',
      description: 'Folder for storing files.'
    }
  }
};
