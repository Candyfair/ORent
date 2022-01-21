CREATES, 0N USER, 11 BOOKING
BOOKING: ref_book_number
COMES FROM, 11 BOOKING, 0N VACANCY

USER: ref_username, firstname, lastname, email, password
OWNS, 0N USER, 11 PROPERTY
PROPERTY: ref_name, description, capacity, bedroom, bed, bathroom, type, street_number, street_name, zip_code, city, country, latitude, longitude, price_per_night
OFFERS, 0N PROPERTY, 11 VACANCY
VACANCY: ref_vacancy_number, start_date, end_date

:
HAS, 0N PROPERTY, 11 PROPERTY_IMAGE
PROPERTY_IMAGE: ref_url, name