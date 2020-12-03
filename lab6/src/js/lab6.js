let contactButton = document.getElementById("contact-button");
let contactCloseButton = document.getElementById("contact-close-button");
let contactSection = document.getElementById("contact-section");

contactButton.onclick = () => {
    if (contactSection.style.display === "block") {
        contactSection.style.display = "none"
    } else {
        contactSection.style.display = "block"
    }
};

contactCloseButton.onclick = () => {
    contactSection.style.display = "none"
};

let prefix = "../../resources/img/books/";
let posfix = ".jpg";

let descriptions = [
    "Читатель-интерпретатор остается с голой веревкой, то есть наедине с той самой пустотой, которая является местом действия и одновременно главным героем произведения.",
    "В глубине души Иван Ильич знал, что он умирает, но он не только не привык к этому, но просто не понимал, никак не мог понять этого.",
    "Повесть по сути так и осталась черновиком романа, Лавкрафт не захотел её заканчивать и не давал никому из друзей её перепечатать. Лишь Роберт Барлоу позже выпросил у него этот текст и перепечатал половину, однако Лавкрафт ничего с этим фрагментом не делал, так никому при жизни не продав для публикации.",
    "Леди отличается от цветочницы не тем, как она себя держит, а тем, как с ней себя держат.",
    "Мир лежит в глубоком снегу. Ворон на ветке бьет крылами, Я, Степной волк, все бегу и бегу, Но не вижу нигде ни зайца, ни лани!",
    "Вроде все и правильно сделал, а все равно — в ад. На земле жизнь так организована, чтобы все люди непременно в ад попадали. Особенно в России."
]

let bookAmount = 6;

let books = []
for (let i = 1; i <= bookAmount; ++i) {
    books.push({ imgPath: prefix + i + posfix, description: descriptions[i - 1] })
}

let currentBook = 2;

function updateAttributes(bookImg, bookDesc) {
    bookImg.setAttribute("src", books[currentBook]["imgPath"]);
    bookDesc.textContent = books[currentBook]["description"];
    ++currentBook;
}

function nextBookBlock() {
    let firstBookImg = document.getElementById("first-book-img");
    let firstBookDesc = document.getElementById("first-book-desc");
    updateAttributes(firstBookImg, firstBookDesc);

    let secondBookImg = document.getElementById("second-book-img");
    let secondBookDesc = document.getElementById("second-book-desc");
    updateAttributes(secondBookImg, secondBookDesc);
    currentBook %= bookAmount;
}

let booksButton = document.getElementById("book-button");
booksButton.onclick = () => { nextBookBlock(); };


