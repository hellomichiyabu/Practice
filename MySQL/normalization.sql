CREATE TABLE bookstore.chapters (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    number INT,
    title VARCHAR(100),
    book_id INT,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO bookstore.chapters (number, title, book_id) VALUES (1, "MySQLとは", 2);
INSERT INTO bookstore.chapters (number, title, book_id) VALUES (2, "テーブルとは", 2);
INSERT INTO bookstore.chapters (number, title, book_id) VALUES (3, "CRUDとは", 2);


SELECT * FROM books INNER JOIN chapters ON books.id = chapters.book_id;
