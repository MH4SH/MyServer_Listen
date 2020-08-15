import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('user').unique().notNullable();
        table.string('password').notNullable();
        table.string('email').notNullable();
        table.string('name').notNullable();
        table.enum('type', ['1', '2', '3']).defaultTo('3').comment('1: Admin, 2: Moderador, 3: Pendent User');
    })
}


export async function down(knex: Knex): Promise<any> {
    return knex.schema.dropTable('users');
}