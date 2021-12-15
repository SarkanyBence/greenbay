INSERT INTO
    users
SET
    id = 1,
    userName = "Dummy",
    email = "example@gmail.com",
    password = "$2b$10$9X.8tHtYoUBJeAO5wJdro.7CL4XHiKmC0VuYxkkSXgcsGedqExxeC",
    registrateAt = UNIX_TIMESTAMP(),
    status = "active";

INSERT INTO
    items (
        id,
        name,
        description,
        photoUrl,
        optUrl1,
        optUrl2,
        price,
        status,
        createdAt,
        sellerName,
        sellerId
    )
VALUES
(
        1,
        "Umidigi A9",
        "UMIDIGI A9 Pro 4GB/6GB/8GB RAM 6.3Zoll Smartphone handy ohne vertrag Dual SIM",
        "https://i.ebayimg.com/images/g/Ck8AAOSw2fZfwJOh/s-l225.webp",
        "https://i.ebayimg.com/images/g/N4UAAOSw-k1fwJOi/s-l1600.jpg",
        "https://i.ebayimg.com/images/g/J7sAAOSwy8VfwJOk/s-l1600.jpg",
        53886,
        "sellable",
        UNIX_TIMESTAMP(),
        "Dummy",
        1
    ),
    (
        2,
        "Umidigi Urum",
        "UMIDIGI Urun GPS Fitness Tracker wasserdichte Smart Watch Schrittzähler Stoppuhr",
        "https://i.ebayimg.com/images/g/Ck8AAOSw2fZfwJOh/s-l225.webp",
        "https://i.ebayimg.com/images/g/Ws0AAOSwh8Nfuyfg/s-l1600.jpg",
        "https://i.ebayimg.com/images/g/pXUAAOSw8DNfuyfk/s-l1600.jpg",
        18616,
        "sellable",
        UNIX_TIMESTAMP(),
        "Dummy",
        1
    ),
    (
        3,
        "Blackview BV6600",
        "Blackview BV6600 8580mAh Robuste Smartphone 4GB+64GB IP68 Wasserdicht Dual SIM",
        "https://i.ebayimg.com/images/g/-poAAOSwvadgv0Hd/s-l225.webp",
        "https://i.ebayimg.com/images/g/xH4AAOSwhyNgfXTV/s-l1600.jpg",
        "https://i.ebayimg.com/images/g/cp8AAOSw59JgdXU0/s-l1600.jpg",
        62064,
        "sellable",
        UNIX_TIMESTAMP(),
        "Dummy",
        1
    ),
        (
        4,
        'Sharp 24"',
        'Sharp 24" Inch HD Ready LED Smart TV with Built-In DVD Player and Built-in Wi-FI',
        "https://i.ebayimg.com/images/g/kb4AAOSwiJ9hSGgi/s-l300.jpg",
        "https://i.ebayimg.com/images/g/TQMAAOSwPi9ehuz0/s-l1600.jpg",
        "https://i.ebayimg.com/images/g/X64AAOSwm8tehuz1/s-l1600.jpg",
        74484,
        "sellable",
        UNIX_TIMESTAMP(),
        "Dummy",
        1
    );