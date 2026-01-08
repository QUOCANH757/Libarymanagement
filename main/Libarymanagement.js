class LibraryManager {
    // Hàm khởi tạo (constructor) - tương tự như trong Java nhưng linh hoạt hơn
    constructor() {
        this.books = []; // Khởi tạo một mảng rỗng để chứa sách
    }

    // Phương thức liệt kê sách
    listBooks() {
        console.log("Danh sach sach hien co...");
        // Code giả lập in danh sách
        this.books.forEach(book => console.log(book));
    }

    // Phương thức thêm sách
    addBook(bookName) {
        this.books.push(bookName);
        // Sử dụng template string (dấu huyền `) để nối chuỗi dễ hơn
        console.log(`Da them sach: ${bookName}`);
    }
}

// --- Phần code để chạy thử (Main) ---

// Khởi tạo đối tượng
const manager = new LibraryManager();

// Gọi các hàm để test
manager.listBooks();
manager.addBook("Lap trinh JavaScript co ban");