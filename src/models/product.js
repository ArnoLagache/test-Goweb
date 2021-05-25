const VAT_PERCENT = 0.2;

class Product {
    constructor(id, title, category, price, image, description, currency=" €") {
        this.id = id;
        this.title = title;
        this.category = category;
        this.price = price;
        this.currency = currency;
        this.price_euro = this.price + this.currency;
        this.image = image;
        this.description = description;
        this.vat_price = (this.price * (1 + VAT_PERCENT)).toFixed(2);
        this.vat_price_euro = this.vat_price + this.currency;
    }
}

export default Product;