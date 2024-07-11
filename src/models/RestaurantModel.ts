class RestaurantModel {
  title: string;
  ratings: string;
  image: string;
  infos: string[];
  description: string;
  id: number;
  constructor(
    id: number,
    title: string,
    ratings: string,
    image: string,
    infos: string[],
    description: string
  ) {
    this.id = id;
    this.title = title;
    this.ratings = ratings;
    this.image = image;
    this.infos = infos;
    this.description = description;
  }
}

export default RestaurantModel;
