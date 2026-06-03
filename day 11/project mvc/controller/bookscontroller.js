const books = [
  {
    title: 'Atomic'
  }
];

export function getBooks(req, res) {
  res.json(books);
}