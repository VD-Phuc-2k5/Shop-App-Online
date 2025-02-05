ALTER TABLE products
ADD CONSTRAINT unique_name UNIQUE (name), 
ADD CONSTRAINT check_price_non_negative CHECK (price >= 0), 
ADD CONSTRAINT check_oldprice_non_negative CHECK (oldprice >= 0), 
ADD CONSTRAINT check_buyturn_non_negative CHECK (buyturn >= 0), 
ADD CONSTRAINT check_quantity_non_negative CHECK (quantity >= 0);

ALTER TABLE products
MODIFY COLUMN price INT DEFAULT 0,
MODIFY COLUMN oldprice INT DEFAULT 0,
MODIFY COLUMN buyturn INT DEFAULT 0,
MODIFY COLUMN quantity INT DEFAULT 0;
