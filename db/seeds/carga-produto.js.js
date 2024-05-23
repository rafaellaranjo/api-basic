/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('produtos').del()
  await knex('produtos').insert([
    {"id": 1, "descricao": "camiseta", "marca": "nike", "preco": "49.99"},
    {"id": 2, "descricao": "Calça jeans", "marca": "Levi's", "preco": "89.99"},
    {"id": 3, "descricao": "Tênis", "marca": "Adidas", "preco": "99.99"},
    {"id": 4, "descricao": "Bermuda", "marca": "Vans", "preco": "39.99"},
    {"id": 5, "descricao": "Camisa", "marca": "Ralph Lauren", "preco": "109.99"},
  ]);
};
