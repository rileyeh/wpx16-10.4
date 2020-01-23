create table books (
    book_id serial primary key,
    title varchar, 
    author varchar, 
    pages integer
);

insert into books (title,author,pages )
values ('To Kill a Mockingbird', 'Harper Lee', 296);


select * from books;


update books
set 
    title = 'Little Women'
where 
    book_id = 3; 