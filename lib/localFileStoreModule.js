const { AbstractModule } = require('adapt-authoring-core');
const fs = require('fs-extra');
const path = require('path');
/**
* Module to expose assets API
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
  * All paths used in local filestorage are relative to the dataRoot
  * @param {string} relativePath
  * @return {string} full path
  */
  resolvePath(relativePath) {
    // check if path is absolute
    if (0 === relativePath.indexOf(this.rootDir)) {
      return relativePath;
    }

    return path.join(this.rootDir, relativePath);
  }

  /**
  * Creates read stream for a file
  * @param {string} filePath The path to the file
  * @param {string} [options] Options
  */
  createReadStream(filePath, options) {

    return fs.createReadStream(this.resolvePath(filePath), options);

  }

  /**
  * Creates write stream for a file
  * @param {string} filePath The path to the file
  * @param {string} [options]
  */
  createWriteStream(filePath, options) {
    throw new Error('Method needs implementing');
  }

}

module.exports = LocalFileStoreModule;
