const { App, AbstractModule, Utils } = require('adapt-authoring-core');
const fs = require('fs-extra');
const path = require('path');
const moveFile = require('move-file');

/**
* Module to expose local file storage API
* @extends {FileStore}
*/
class LocalFileStoreModule extends AbstractModule {


  constructor(app, pkg) {
    super(app, pkg);
  }

  /**
  * Gets the contents of a file as a Buffer
  * @param {string} filePath The path to the file
  */
  getFile(filePath) {
    throw new Error('Method needs implementing');
  }

  /**
  * Puts the given contents to a file
  * @param {string} filePath The path to the file
  * @param {string} options
  * @param {Buffer} buffer The contents to write to the file
  */
  putFile(filePath, options, buffer) {
    throw new Error('Method needs implementing');
  }

  /**
  * Deletes a file
  * @param {string} filePath The path to the file
  */
  deleteFile(filePath) {
    throw new Error('Method needs implementing');
  }

  /**
  * Copies a file from one location to another
  * @param {object} asset - A valid asset record
  * @param {string} sourcePath
  * @param {string} destinationPath
  */
  copyFile(asset, sourcePath, destinationPath) {
    throw new Error('Method needs implementing');
  }

  /**
  * Moves a file from the given path to the new path
  * @param {string} oldPath The original location of the file
  * @param {string} newPath The intended location of the file
  */
  moveFile(oldPath, newPath) {
    throw new Error('Method needs implementing');
  }

  /**
  * Gets information on the file located at filePath, such as timecreated, timemodified etc.
  * @param {string} filePath The path to the desired file
  */
  getFileStats(filePath) {
    throw new Error('Method needs implementing');
  }

  /**
  * Gets information on the folder defiled by filePath, such as timecreated, timemodified etc.
  * @param {string} path The path to the desired folder
  */
  getFolderStats(path) {
    throw new Error('Method needs implementing');
  }

  /**
  * Processes and moves an uploaded file, returns file name, path, size and mime type
  * @param {object} file - information about the file that was uploaded
  * @param {object} newPath - new path for the file
  * @param {object} [options] - optional settings
  **/
  processFileUpload(file, fileOptions) {
      const newPath = this.resolvePath(file.path);
      const moveFile = require('move-file');

      (async () => {
          await moveFile(file.path, newPath);
      })();

      return;
  }

  /**
  * Returns the path to local storage folder depending on configuration
  * TODO - Gather requirements for configuration options
  * @param {string} relativePath
  * @return {string} full path
  */
  resolvePath(relativePath) {
    const useAppRoot = this.getConfig('useAppRoot');
    const dataFolder = this.getConfig('dataFolder');
    if (!useAppRoot) {
      return path.join(dataFolder, relativePath);
    }
    const rootDir = App.instance.config.get('adapt-authoring-core.root_dir'); // This seems like a long way round to get global config vars

    return path.join(rootDir, dataFolder, relativePath);
  }
}

module.exports = LocalFileStoreModule;
