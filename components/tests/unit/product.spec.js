import { products } from '../../src/resources/products.js'
const nock = require('nock');

describe('Testing Product REsources', () => {

  const server = nock('http://localhost:3000/api')
    .defaultReplyHeaders({ 'access-control-allow-origin': '*' });

  it('Get All Products', async () => {
    server.get("/products?filter[include]=pictures")
      .replyWithFile(200, __dirname + '/replies/getAllProducts.json' );
    
    let response = await products.find();

    expect(response).toBeDefined();
    expect(response[0].name).toEqual('Guia de Cadena');
  })

  it('Get Product By ID: 1', async () => {
    server.get("/products/1?filter[include]=pictures")
      .replyWithFile(200, __dirname + '/replies/findById.1.json' );

    let response = await products.findById(1);

    expect(response).toBeDefined();
    expect(response.name).toEqual('Guia de Cadena');
    expect(response.category).toEqual('accesorio');
  })
  
})

