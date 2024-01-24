import Product from "@/db/models/product";
import dbConnect from "@/db/connect";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const product = await Product.findById(id);

    if (!product) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(product);
  }
}

//To find a single product by its id, you can use the `Product` model and the
//`.findById()` method: `Product.findById(id)`.
//- Delete `lib/products.js` because it is not used anymore.
//;
