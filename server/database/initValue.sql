BEGIN;
INSERT INTO medicine
    (name, img, description, prescription, company)
VALUES
    ('Yasmin' , 'https://www.doctorfox.co.uk/imgs-products/zoom/yasmin-contraceptive-pill.jpg', 'Drospirenone, sold under the brand names Yasmin and Angeliq among others, is a progestin medication which is used in birth control pills to prevent pregnancy and in menopausal hormone therapy, among other uses. It is available only in combination with an estrogen and is not available alone.', true, 'Jerusalem Pharmaceutical Co'),
    ('Concor', 'https://khalidpharmacy.com/wp-content/uploads/2018/02/1_1520742162.jpg', 'Concor 5 MG Tablet is an antihypertensive which is used alone or in combination with other agents to lower the elevated blood pressure. It is administered with caution in the patients with lung diseases.', true, 'Birzeit Pharmaceutical Co');


INSERT INTO pharmacy
    (pharmacyName, email, password, phone, location, workHours, offDays)
VALUES
    ('Al-Eman Pharmacy', 'aleman@gmail.com', '123', '0598403872', 'Ras El-Jora', '8AM - 11PM', 'Saturday'),
    ('Al-Jazera', 'aljazera@gmail.com', '$2a$10$D/IX/AtYw5YHT4YWI2B2aOg5ZGMBodHNDx2x6vIbHWomyH4fsJ9SG', '0594327865', 'Al-Manara square', '8AM - 11PM', 'Sunday'),
    ('AlQuds Pharmacy', 'alquds@gmail.com', '1234', '059874562', 'Ras El-Jora', '8AM - 11PM', 'Monday')
    ;



INSERT INTO pharmacy_to_medicine
    (medicineID, pharmacyID, soldOut, price)
VALUES
    (1, 1, false, 25),
    (2, 2, true, 19),
    (1, 3, true, 20);

COMMIT;
