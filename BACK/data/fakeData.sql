BEGIN;

INSERT INTO "property" (name, slug, description, capacity, bedrooms_count, beds_count, bathrooms_count, type, street_number, street_name, zip_code, city, country, latitude, longitude, week_price, user_id) VALUES
    ('La belle maison de campagne', 'la-belle-maison-de-campagne', 'Une jolie maison comme on les aime', 4, 2, 2, 1, 'House', 20, 'Avenue des champs elysees', 75008, 'Paris', 'France', 48.869745, 2.307946, 500, 1),
    ('La belle maison de ville', 'la-belle-maison-de-ville','Une jolie maison comme on les aime pas', 6, 3, 3, 2, 'House', 11, 'Rue la Fayette', 44000, 'Nantes', 'France', 47.216942, -1.562441, 600, 1),
    ('Le bel appartement de balieue', 'le-bel-appartement-de-banlieue','Un joli appartement comme on les aime', 4, 4, 4, 2, 'Appartment', 203, 'Route de Toulouse', 33400, 'Talence', 'France', 44.806701, -0.577161, 350, 1),
    ('Le beau chalet de montagne', 'le-beau-chalet-de-montagne','Un joli chalet de montagne comme on les aime', 4, 4, 4, 2, 'Other', 152, 'Route des Mouilles', 74400, 'Chamonix-Mont-Blanc', 'France', 45.926683, 6.877263, 1000, 2),
    ('La belle maison de vallée', 'la-belle-maison-de-vallee', 'Une jolie maison comme on les aime dans la vallée', 2, 1, 1, 1, 'House', 1, 'Route du Jura', 39240, 'Aromas', 'France', 46.292687, 5.480743, 1500, 2),
    ('Le magnifique chateau français', 'le-magnifique-chateau-francais','Un chateau typique !', 10, 5, 10, 5, 'Other', 1, 'Rue du Vieux College', 14500, 'Vire-Normandie', 'France', 48.841738, -0.886863, 700, 2)
;

INSERT INTO "property_image" (url, name, property_id) VALUES
    ('https://www.barnes-proprietes-chateaux.com/conseils/wp-content/uploads/2018/09/exemple-maison-campagne.jpg', 'la belle maison de campagne', 1),
    ('https://www.maison.com/images/medias/000/031/000031962/660.jpg', 'la belle maison de campagne', 1),
    ('https://media.lesechos.com/api/v1/images/view/5e9d500c3e45463f02144375/1280x720/0603108566603-web-tete.jpg', 'la belle maison de campagne', 1),
    ('https://www.18h39.fr/wp-content/uploads/2019/02/maison-achat-infogHOME-600x420.jpg', 'La belle maison de ville', 1),
    ('https://www.planete-deco.fr/wp-content/uploads/2021/05/CM1.jpg', 'La belle maison de ville', 2),
    ('https://www.maisonapart.com/images/auto/640-480-c/20180418_183548_01-42505-main2875-542505scv2com.jpg', 'La belle maison de ville', 2),
    ('https://media.istockphoto.com/photos/american-suburban-home-picture-id540847558', 'Le bel appartement de balieue', 3),
    ('https://img.myloview.fr/papiers-peints/maison-de-banlieue-en-pierre-avec-grand-sapin-france-400-9552615.jpg', 'Le bel appartement de balieue', 3),
    ('https://a0.muscache.com/pictures/a102ced9-a3f5-4c36-ba06-cdc1744b8b16.jpg', 'Le bel appartement de balieue', 3),
    ('https://www.cast-things.com/images/photos/annonces/2015/11/20151108211617-18390_1_1.JPG', 'Le bel appartement de balieue', 3),
    ('https://previews.123rf.com/images/lmphot/lmphot1010/lmphot101000097/10293060-gro%C3%9Fe-vorstadt-hause-mit-veranda-und-gew%C3%B6lbten-eintrag.jpg', 'Le bel appartement de balieue', 3),
    ('https://images.ctfassets.net/gxwgulxyxxy1/8H1DUaZYWI2eG20WS42c4/a29d35483b5ad97666b2e4e87ae1b919/front__2_.jpg', 'Le beau chalet de montagne', 4),
    ('https://docs.ski-planet.com/actualites/large/top-10-des-plus-beaux-chalets-pour-les-vacances-d-hiver-1570.jpg', 'Le beau chalet de montagne', 4),
    ('https://marieclaire.be/fr/wp-content/uploads/2018/01/marieclaire_chalet_ian-keefe_unsplahs.jpg', 'Le beau chalet de montagne', 4),
    ('https://cdn.france-montagnes.com/sites/default/files/pages/01-villaroger.jpg', 'Le beau chalet de montagne', 4),
    ('https://www.sothebysrealty-france.com/datas/biens/thumbs/9475/9475_00-2021-08-13-0450.jpg', 'Le beau chalet de montagne', 4),
    ('https://media-cdn.tripadvisor.com/media/photo-s/0f/60/e2/c1/belle-vallee.jpg', 'La belle maison de vallée', 5),
    ('https://www.patrice-besse.com/photo-annonce/20895/zoom/ac11643a2f8166ed7c4d676d989cf50e.jpg', 'La belle maison de vallée', 5),
    ('https://media.paruvendu.fr/media_ext/_https_/photo.safti.fr/4b/c5/L2JpZW5zLzYvNzUvNjc1NzU3LzhmMmFkZDcyY2RlZDM1Mzc4NjM0OTBmZTJjMzBhNTY1MDcyMWJmYmQvcmcuanBnPzE_sizecrop_1000x1000?2022012714', 'La belle maison de vallée', 5),
    ('https://storage.googleapis.com/epc-photos/annonce_photo_01eda7f3-c632-4321-af97-e6ad4294dcd1.jpg', 'La belle maison de vallée', 5),
    ('https://edito.seloger.com/sites/default/files/styles/735x412/public/edito_migrate/article/image/chateau-dusse-indre-loire-seloger.jpg?itok=l9pDsUIM', 'Le magnifique chateau français', 6),
    ('https://www.blonville.org/upload/7ijaqmshkn-28505.jpg', 'Le magnifique chateau français', 6),
    ('http://notrebellefrance.com/wp-content/uploads/2017/02/Le-ch%C3%A2teau-de-Versailles.jpg', 'Le magnifique chateau français', 6)
;
    
COMMIT;