/**
 * App controller class
 */
export default class AppController {
  /**
   * Handles requests for `/` route
   * @param {*} request   - request object
   * @param {*} response  - response object
   */
  static getHomepage(request, response) {
    response.statusCode = 200;
    response.send('Hello Holberton School!');
  }
}
