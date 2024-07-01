class Mprato {
  title: string;
  image: string;
  description: string;
  porcao: string;
  preco: number
  id: number;
  constructor(id: number, title: string, image: string, description: string, porcao: string, preco: number) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.description = description;
    this.porcao = porcao;
    this.preco =preco;
  }
}

export default Mprato;
