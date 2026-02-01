import { Request, Response } from "express";
import BookService from "../services/book.service";

export default class BookController {
  private bookService = new BookService();

  createBook = async (req: Request, res: Response) => {
    try {
      const book = await this.bookService.createBook(req.body);
      res.status(201).json(book);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  };

  getBooks = async (req: Request, res: Response) => {
    try {
      const books = await this.bookService.getBooks(req.query);
      res.json(books);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  };

  getBook = async (req: Request, res: Response) => {
    try {
      const book = await this.bookService.getBookById(req.params.id as string);
      res.json(book);
    } catch (err: any) {
      res.status(404).json({ error: err.message });
    }
  };

  updateBook = async (req: Request, res: Response) => {
    try {
      const book = await this.bookService.updateBook(
        req.params.id as string,
        req.body
      );
      res.json(book);
    } catch (err: any) {
      res.status(404).json({ error: err.message });
    }
  };

  deleteBook = async (req: Request, res: Response) => {
    try {
      await this.bookService.deleteBook(req.params.id as string);
      res.json({ message: "Book deleted successfully" });
    } catch (err: any) {
      res.status(404).json({ error: err.message });
    }
  };
}
