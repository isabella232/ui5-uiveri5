/**
 * @typedef ScreenshotProviderConfig
 * @type {Object}
 * @extends {Config}
 * @property {boolean} take - enable screenshot taking
 * @property {boolean} update - update ref with act screenshot
 */

/**
 * Resolves specs
 * @constructor
 * @param {ScreenshotProviderConfig} config - configs
 */
function ScreenshotProvider(config){
  this.config  = config;
}

/**
 * Takes a screenshot of the current browser state
 * @typedef takeScreenshot
 * @type {function}
 * @global
 * @return {webdriver.promise<Buffer>} promise that resolves with screenshot image blob
 *
 * If (config.take) => log info and take the screenshot, else log info message and return.
 */

/**
 * Registers global screenshot taking function
 */
ScreenshotProvider.prototype.register = function(){
};

