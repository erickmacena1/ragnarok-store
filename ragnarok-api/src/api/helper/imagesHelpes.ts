/**
 * Usado em ambiente de desenvolvimento. Adicione no diretório .env
 * a variável DEV_PORT
 */
export default {

  /**
   *
   * @param filename nome do arquivo salvo no diretório uploads
   * @returns URL do ambiente de desenvolvimento. Ex: http://localhost:3000/images/nome-do-arquivo
   */
  getLocalUrl(filename: string): string {
      const env = process.env;

      return `http://localhost:${env.DEV_PORT}/image/${filename}`;
  }
}
