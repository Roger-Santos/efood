class DishModel {
  title: string;
  image: string;
  description: string;
  portion: string;
  price: number;
  id: number;
  constructor(
    id: number,
    title: string,
    image: string,
    description: string,
    portion: string,
    price: number
  ) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.description = description;
    this.portion = portion;
    this.price = price;
  }
}

export default DishModel;
