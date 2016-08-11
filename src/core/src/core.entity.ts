'use strict';

export abstract class Entity {
   constructor(private id: number) {
   }

   getId(): number {
      return this.id;
   }

   print(): void {
      console.info(`Eu sou uma entidade e ${this.id} é o meu id.`);
   }
}