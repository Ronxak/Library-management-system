import Book from "../models/book.model";

export default class BookService {
  async createBook(data: any) {
    return Book.create(data);
  }

  async getBooks(query: any) {
    const {
      search,
      genre,
      page = 1,
      limit = 10,
      sort = "createdAt",
      order = "desc",
    } = query;

    const filter: any = {};

    if (search) {
      filter.title = { $regex: search, $options: "i" };
    }

    if (genre) {
      filter.genre = genre;
    }

    const skip = (Number(page) - 1) * Number(limit);

    const books = await Book.find(filter)
      .sort({ [sort]: order === "asc" ? 1 : -1 })
      .skip(skip)
      .limit(Number(limit));

    const total = await Book.countDocuments(filter);

    return {
      total,
      page: Number(page),
      limit: Number(limit),
      books,
    };
  }

  async getBookById(id: string) {
    const book = await Book.findById(id);
    if (!book) throw new Error("Book not found");
    return book;
  }

  async updateBook(id: string, data: any) {
    const book = await Book.findByIdAndUpdate(id, data, { new: true });
    if (!book) throw new Error("Book not found");
    return book;
  }

  async deleteBook(id: string) {
    const book = await Book.findByIdAndDelete(id);
    if (!book) throw new Error("Book not found");
    return book;
  }
}
