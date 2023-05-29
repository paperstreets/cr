/*
13. Довідник міст:
• Назва міста.
• ПІБ мера.
• Площа.
• Середня кількість населення.
Інформаціє, яка додається динамічно:
• Список районів міста
*/
export class Catalog {
    name: string = "";
    pib: string = "";
    area: number = 10000;
    population : number = 1000;
    region: string[] = [];
    constructor(name: string, pib: string, area: number, population: number, r: string[]) {
       this.name = name;
       this.pib= pib;
       this.area = area;
       this.population=population;
       this.region = r;
    }
 }