class Mprato {
  title: string;
  image: string;
  description: string;
  id: number;
  constructor(id: number, title: string, image: string, description: string) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.description = description;
  }
}

export default Mprato;
