// equivalent for "use <db>" command in mongo shell
db = db.getSiblingDB('gitetantejeanne');
 
db.activities.insertMany([ 
    {
        "_id" : ObjectId("5a052d4a868bdc3ee0b8513f"),
        "imgext" : "jpeg",
        "address" : "http://www.cave-saint-desirat.com/",
        "time" : 16.0,
        "transportation" : 0.0,
        "description" : "Ecrire, communiquer, en définitive mieux nous faire connaître…C’est la volonté de notre cave dont vous découvrez aujourd’hui le nouveau site internet. Qualité, c’est le maître mot de notre cave, celui de nos vignerons qui depuis près de 50 ans ont œuvré à son développement. Sur les chalets exposés au soleil, soutenus par des murets de pierres sèches, Syrah, Roussanne, Marsanne et Viognier font merveille. A l’écoute de la nature, les vignerons de notre cave sont amoureux de la terre, fiers de perpétuer le savoir faire de leurs maîtres, soucieux de produire des vins de qualité.",
        "type" : true,
        "name" : "Cave de Saint-Désirat"
    },
    {
        "_id" : ObjectId("5a052d4a868bdc3ee0b85140"),
        "imgext" : "jpeg",
        "address" : "http://www.cavedetain.com/",
        "time" : 35.0,
        "transportation" : 0.0,
        "description" : "Entre Valence et Lyon, la Cave de Tain est située au pied de la colline de l’Hermitage. Au cœur du vignoble historique des Côtes du Rhône septentrionaux, elle élabore et commercialise 5 crus et des Vins de Pays sur plus de 1000 hectares de vignes (appellations Hermitage, Crozes Hermitage, Saint Joseph, Cornas et Saint Péray}, ce qui en fait le principal producteur de crus du Nord de la Vallée du Rhône",
        "type" : true,
        "name" : "Cave de Tain"
    },
    {
        "_id" : ObjectId("5a052d4a868bdc3ee0b85141"),
        "imgext" : "png",
        "address" : "http://bateau-emile.fr/",
        "time" : 10.0,
        "transportation" : 0.0,
        "description" : "Le restaurant, créé en 1988 à Serrières, dont le nom est un clin d’oeil au film du même nom, s’intègre parfaitement dans ce petit village au bord du Rhône. Prenez le temps de faire une pause et venez profiter d’une cuisine où les produits de la région sont à l’honneur et mis en valeur avec soin. Situé sur l’aire géographique protégée des Collines Rhodaniennes et sur le chemin des Côtes du Rhône septentrionales, nous sommes idéalement situés pour vous proposer une sélection des meilleures appelations vinicoles de notre région. En Septembre 2014, le Bateau d’Emile a reçu le titre de Maître Restaurateur.",
        "type" : true,
        "name" : "Restaurant : Bateau d’Emile"
    },
    {
        "_id" : ObjectId("5a052d4a868bdc3ee0b85142"),
        "imgext" : "jpeg",
        "address" : "http://www.restaurant-daddycool.fr/",
        "time" : 4.0,
        "transportation" : 1.0,
        "description" : "Vous pourrez redécouvrir une cuisine traditionnelle accompagnée de quelques spécialités, telles que les Escargots Victoriens, sans oublier de délicieuses pizzas qui raviront tous les goûts. Chaque plat est un coup de coeur du chef qui émoustillera tous les fins gourmets et insatiables gourmands.",
        "type" : true,
        "name" : "Restaurant : Daddy Cool"
    },
    {
        "_id" : ObjectId("5a052d4a868bdc3ee0b85143"),
        "imgext" : "jpeg",
        "address" : "http://www.auberge-thorrenc.com/",
        "time" : 15.0,
        "transportation" : 0.0,
        "description" : "La cuisine d’Éric Dechavanne, qui compte parmi ses fans des amateurs de tous les coins de France voire d’outre-Manche, joue, comme toute vraie bonne table, d’apparentes contradictions. Tradition et invention, indémodables et produits de saison, régionalisme et universalité... Ajoutons : qualité et prix, dont le rapport est exceptionnel. L’accueil d’Isabelle, la maîtresse de maison, est à la fois",
        "type" : true,
        "name" : "Restaurant : Auberge de Thorrenc"
    },
    {
        "_id" : ObjectId("5a052d4a868bdc3ee0b85144"),
        "imgext" : "jpeg",
        "address" : "http://lacreprit.free.fr/",
        "time" : 10.0,
        "transportation" : 0.0,
        "description" : "Nouveau à Boulieu-lès-Annonay, ouverture de la Crep'rit. Crêperie: midi & soir. Salon de thé les après-midi. Au centre du village.",
        "type" : true,
        "name" : "La crep'rit"
    },
    {
        "_id" : ObjectId("5a052d4a868bdc3ee0b85145"),
        "imgext" : "jpeg",
        "address" : "http://www.monhotel.eu/",
        "time" : 12.0,
        "transportation" : 0.0,
        "description" : "Pizzeria, grill, brasserie, glacier BIO !",
        "type" : true,
        "name" : "Pizzeria BIO"
    },
    {
        "_id" : ObjectId("5a052d4a868bdc3ee0b85146"),
        "imgext" : "jpeg",
        "address" : "http://www.regismarcon.fr/",
        "time" : 50.0,
        "transportation" : 0.0,
        "description" : "Tout commence en 1948 quand Marie Louise et Joannès Marcon viennent s'installer à St Bonnet le Froid. Joannès, marchand de vin, disparaîtra trés tôt emporté par la maladie. Marie-Louise, cuisinière, va s'occuper de l'Auberge des Cimes pendant de longues années tout en éduquant ses sept enfants.",
        "type" : true,
        "name" : "Régis et Jacques Marcon"
    },
    {
        "_id" : ObjectId("5a052d4a868bdc3ee0b85147"),
        "imgext" : "jpeg",
        "address" : "http://www.mastrou.com/",
        "time" : 40.0,
        "transportation" : 0.0,
        "description" : "C’est l’emploi de la traction à vapeur et l’utilisation de véhicules anciens qui distingue le Mastrou, ou Chemin de fer du Vivarais, de bien d’autres chemins de fer touristiques et font de Tournon-Lamastre une « ligne musée ». Les 6 locomotives à vapeur de type Mallet ont été conçues en 1902 et 1932. Ce sont de véritables pièces de collection. Leurs conditions d’exploitation conférent à ce chemin de fer un intérêt historique et touristique notable.",
        "type" : false,
        "name" : "Le mastrou"
    },
    {
        "_id" : ObjectId("5a052d4a868bdc3ee0b85148"),
        "imgext" : "jpeg",
        "address" : "http://www.safari-peaugres.com/",
        "time" : 5.0,
        "transportation" : 0.0,
        "description" : "4 continents sur 80 hectares : un voyage au plus profond de la vie animale. Bienvenue dans le plus grand parc animalier de Rhône Alpes ! À pied, en bus, en voiture, votre parc vous offre tous les modes d'évasion. Vous voyagez de Madagascar aux pôles, vous rencontrez les espèces les plus insolites et caressez nos amis les plus familiers, comme les animaux de la ferme. Afrique, Amérique du Nord et contrées asiatiques se rejoignent au Safari de Peaugres.",
        "important" : "Nous avons des réductions pour le safari à 18€ au lieu de 21€",
        "type" : false,
        "name" : "Safari de Peaugres"
    },
    {
        "_id" : ObjectId("5a052d4a868bdc3ee0b85149"),
        "imgext" : "jpeg",
        "address" : "http://www.bonbons-julien.fr/",
        "time" : 20.0,
        "transportation" : 0.0,
        "description" : "Savoir-faire ancestral, la confection des berlingots et sucettes se fait toujours de façon traditionnelle dans notre confiserie. Travaillé par notre confiseur, le sucre encore en ébullition est parfumé et coloré à base de produits naturels (rose betterave, marron caramel, vert épinard ou chlorophylle, …}. Le sucre cuit est ensuite versé sur la table afin d’être refroidi puis travaillé. La pâte à bonbons est en partie étirée au crochet ce qui permet de la décorer de fines rayures. Il ne reste plus qu’à torsader notre gros bonbon pour que celui-ci soit découpé en petits berlingots ou modelé en sucettes plus originales les unes que les autres.",
        "type" : true,
        "name" : "Les bonbons de julien"
    },
    {
        "_id" : ObjectId("5a052d4a868bdc3ee0b8514a"),
        "imgext" : "jpeg",
        "address" : "http://www.domainestclair.fr/fr/index.php",
        "time" : 10.0,
        "transportation" : 0.0,
        "description" : "Au Coeur de l'Ardèche Verte à proximité de Lyon. L'Hôtel Résidence du Domaine de Saint-Clair est situé à 1h00 de Lyon entre Valence et Saint-Etienne, à 15 minutes de la sortie Chanas de l’autoroute A7. Sur un magnifique golf de 18 trous notre Domaine vous réserve un accueil chaleureux dans un cadre calme et serein, avec vue panoramique sur les Monts d’Ardèche.",
        "type" : false,
        "name" : "Domaine Saint-Clair"
    },
    {
        "_id" : ObjectId("5a052d4a868bdc3ee0b8514b"),
        "imgext" : "jpeg",
        "address" : "http://www.musee-papeteries-canson-montgolfier.fr/",
        "time" : 10.0,
        "transportation" : 0.0,
        "description" : "Dans la maison natale des frères Montgolfier, au cœur de la Manufacture royale, le musée des Papeteries Canson et Montgolfier fait revivre la papeterie du 17ème siècle à nos jours. C’est la magie de la feuille que l’on voit fabriquer dans l’antique cuve, le bruit des machines qui s’animent… Ce musée est le seul au monde à présenter une machine à papier en taille réelle en mouvement. Le musée, c’est aussi l’histoire du papier, les merveilleux calculs des Montgolfier, les inventions des Canson, l’organisation paternaliste et … des guides attentifs pour répondre aux attentes des visiteurs.",
        "type" : false,
        "name" : "Papeterie canson"
    },
    {
        "_id" : ObjectId("5a052d4a868bdc3ee0b8514c"),
        "imgext" : "jpeg",
        "address" : "http://www.espaceeauxvives.com/",
        "time" : 17.0,
        "transportation" : 0.0,
        "description" : "Notre rivière artificielle, située au pied du barrage de St Pierre de Boeuf, accueille aussi bien les groupes que les individuels, en encadrement comme en location. Du bâtiment d'accueil à la rivière, du tapis roulant au snack, l'ensemble est une invitation à la balade et à la pratique de l'eau vive.",
        "type" : false,
        "name" : "Espace eaux vives St Pierre de Boeuf"
    },
    {
        "_id" : ObjectId("5a052d4a868bdc3ee0b8514d"),
        "imgext" : "jpeg",
        "address" : "http://www.jeangauthier.com/",
        "time" : 14.0,
        "transportation" : 0.0,
        "description" : "Sur 1400 m2 d'exposition, de magnifiques appareils en cuivre provenant des quatre coins de France, ainsi qu'une collection de matériels, ustensiles et autres outils constituent en 30 tableaux la mémoire d'une partie de notre patrimoine rural. En circulant dans le musée vous découvrirez, la DISTILLERIE JEAN GAUTHIER: l'atelier de distillation, la chaîne d'embouteillage, l'un de nos chais de vieillissement et tout le processus de fabrication grâce à un diaporama d'images numériques. A la fin de la visite, une dégustation gratuite de nos produits vous sera proposée.",
        "type" : true,
        "name" : "Distillerie Jean Gauthier"
    },
    {
        "_id" : ObjectId("5a052d4a868bdc3ee0b8514e"),
        "imgext" : "jpeg",
        "address" : "http://www.velorailardeche.com/",
        "time" : 60.0,
        "transportation" : 0.0,
        "description" : "Le vélorail des Gorges du Doux emprunte 2 parcours de douze kilomètres la ligne historique du Chemin de Fer du Vivarais construite en 1891. Taillée à flanc de montagne avec de nombreux ouvrages d’art (pont, viaducs, tunnel}, la ligne est l’unique moyen de découvrir les paysages magnifiques des Gorges du Doux, affluent du Rhône au nord de l’Ardèche.",
        "type" : false,
        "name" : "Vélorail Ardèche"
    },
    {
        "_id" : ObjectId("5a052d4a868bdc3ee0b8514f"),
        "imgext" : "png",
        "address" : "http://fr.valrhona.com/chocolateries.aspx/",
        "time" : 35.0,
        "transportation" : 0.0,
        "description" : "Valrhona est une entreprise et une marque commerciale de l'industrie agroalimentaire française spécialisée dans la production de chocolat. Elle est installée à Tain-l'Hermitage (Drôme}. La société fait partie du groupe Soparind Bongrain. Son École du Grand Chocolat accueille des stagiaires étrangers à Tain l'Hermitage, Paris ou Tokyo. En 2010, l’École du Grand Chocolat Valrhona édite chez Flammarion l' Encyclopédie du chocolat le livre a été primé au Gourmand Awards.",
        "type" : true,
        "name" : "Valhrona chocolaterie"
    },
    {
        "_id" : ObjectId("5a052d4a868bdc3ee0b85150"),
        "imgext" : "jpeg",
        "address" : "http://www.montgolfieres-cie.com/",
        "time" : 10.0,
        "transportation" : 0.0,
        "description" : "Privilégiez l'authenticité, volez dans la convivialité des petits paniers (2 à 6 passagers par nacelles maximum}. Choisir Montgolfières & Cie, c'est vivre l'aventure d'un volen compagnie d'une équipe professionnelle et passionnée, à Annonay en Ardèche, Capitale de la Montgolfière.",
        "type" : false,
        "name" : "Montgolfières"
    },
    {
        "_id" : ObjectId("5a052d4a868bdc3ee0b85151"),
        "imgext" : "jpeg",
        "address" : "http://www.espaceduparchemin.fr/",
        "time" : 12.0,
        "transportation" : 0.0,
        "description" : "Créée en 1926 par Marcel Dumas, inscrite à l'inventaire des Métiers d'Art Rare en 2011, la Parcheminerie Dumas, l'une des trois dernières de France, est aujourd'hui encore une entreprise familiale, gérée par Frédéric Dumas, le petit-fils de Marcel. Spécialisée dans le luminaire et l'orthopédie à sa création, unique fournisseur de parchemin pour les tambours de la Garde Républicaine dans les années 60, elle a, au cours des dernières années, développé la production de parchemin pour les métiers d'art comme la calligraphie, l'enluminure, la reliure ou la gainerie.",
        "type" : false,
        "name" : "Parcheminerie Dumas"
    },
    {
        "_id" : ObjectId("5a052d4a868bdc3ee0b85152"),
        "imgext" : "jpeg",
        "address" : "http://www.les-acrobois.fr/",
        "time" : 30.0,
        "transportation" : 0.0,
        "description" : "Situé au cœur du Parc Naturel Régional du Pilat dans la Loire, à 10 mn de St Etienne, 1h de Lyon et Valence, notre parc accrobranche ravira tous les aventuriers n’ayant pas trop le vertige, désireux de faire le plein de sensations. Munis d’un harnais, d’une poulie de longes et mousquetons, enfants et adultes, trouveront des activités adaptées à tous niveaux avec des tyroliennes, des ponts de singe, des filets de Robinson, des cordes de Tarzan et une multitude de jeux divers et variés.",
        "type" : false,
        "name" : "Les acrobois"
    },
    {
        "_id" : ObjectId("5a052d4a868bdc3ee0b85153"),
        "imgext" : "jpeg",
        "address" : "http://www.cc-bassin-annonay.fr/",
        "time" : 27.0,
        "transportation" : 0.0,
        "description" : "C’est à Vanosc, petit village ardéchois, à une dizaine de kilomètres d’Annonay en direction du Puy en Velay, que se trouve le Musée du car. Ce lieu dédié au patrimoine industriel est né grâce à la ténacité d’hommes te femmes au sein d’une association culturelle : La Vanaude. Au fil des années, elle a su réunir et restaurer une grande partie des pièces et documents présents sur les deux sites de l’Espace Joseph Besset. Aidée par la Mairie de Vanosc et maintenant par la Communauté de Communes du Bassin d’Annonay, l’Association a ouvert le Musée au public en 2001.",
        "type" : false,
        "name" : "Le Musée du car"
    },
    {
        "_id" : ObjectId("5a052d4a868bdc3ee0b85154"),
        "imgext" : "png",
        "address" : "http://www.ferme-tiallou.com/",
        "time" : 8.0,
        "transportation" : 0.0,
        "description" : "Des villages de cabanes à construire, labyrinthe et cabanes végétalisés, potager pédagogique, mare pédagogique. Sentiers de découverte, divers parcours ludiques. Lors de votre visite, vous pourrez déguster confitures jus et sirops maison Profitez toute l'année des chambres chez le paysan et partagez sa table. Un séjour confortable et un accueil sympathique et convivial vous seront réservés.",
        "type" : false,
        "name" : "La ferme de tiallou"
    },
    {
        "_id" : ObjectId("5a052d4a868bdc3ee0b85155"),
        "imgext" : "jpeg",
        "address" : "http://www.vert-marine.com/",
        "time" : 25.0,
        "transportation" : 0.0,
        "description" : "Équipement aquatique et sportif de référence pour la Communauté de Communes du Pays Roussillonnais. Le centre aquatique et de remise en forme AQUALÔNE est un complexe dédié au sport, aux loisirs et au bien-être. Il s’adresse à tous les adeptes des activités aquatiques, activités sportives, baignade « plaisir », mais aussi à tous ceux qui recherchent des moments de loisirs et de détente en famille ou entre amis…",
        "type" : false,
        "name" : "Aqualone"
    },
    {
        "_id" : ObjectId("5a052d4a868bdc3ee0b85156"),
        "imgext" : "jpeg",
        "address" : "http://www.laveyron.fr/",
        "time" : 20.0,
        "transportation" : 0.0,
        "description" : "Baladez vous sur les bords du RHONE la Via Rhona est un chemin ombragé le long du Rhone exclusivement réservé aux vélos et piétons nombreux coins pique nique plusieurs possibilités de parcours  \r\nSi vous apportez vos vélo cette voie vous est réservée il existe plusieurs parcours le dénivelé est faible praticable donc pour tous les niveaux même débutants \r\nLes parcours sont a disposition dans le gite plan et itinéraire",
        "important" : "parcours VIA RHONA itinéraire a dispo dans le gite",
        "type" : false,
        "name" : "ViaRhôna et rosalies des collines"
    },
    {
        "_id" : ObjectId("5a052d4a868bdc3ee0b85157"),
        "imgext" : "jpeg",
        "address" : "http://www.tim-aventure.fr/",
        "time" : 5.0,
        "transportation" : 0.0,
        "description" : "LES JEUX\r\n\r\n( PRÉSENCE D'UN ADULTE OBLIGATOIRE }\r\n\r\nLe parc est divisé en plusieurs zones de jeux adaptées à l'âge des enfants :\r\n\r\n-Pour les babys aventuriers :\r\n\r\nFigures géométriques\r\nPonpon\r\nToboggan\r\nPiscine à balles...\r\n( Présence d'un adulte obligatoire }\r\n\r\n-Pour les grands aventuriers :\r\n\r\nTrampolines,\r\n\r\nToboggan rapide ,\r\n\r\ntoboggan spirale,\r\n\r\nPiscine à boules,\r\n\r\nTour d'escalade ,\r\n\r\nChambre noir,\r\n\r\nSalle DISCO,\r\n\r\nCanon à balles,terrain de foot...\r\n\r\n( Présence d'un adulte obligatoire }",
        "type" : false,
        "name" : "Parc de jeu interieur climatise pour les petits"
    },
    {
        "_id" : ObjectId("5a052d4a868bdc3ee0b85158"),
        "imgext" : "jpeg",
        "address" : "http://condrieu-les-roches.fr/section-15-base-de-loisirs",
        "time" : 25.0,
        "transportation" : 0.0,
        "description" : "Les amateurs de loisirs nautiques et sportifs avides tant d'activités conviviales que de pratiques extrêmes,  disposent de deux sites originaux à proximité du Port de Plaisance :\r\n- le téléski nautique accessible à pied, à 100m, offrant une multitude de produits ski nautique et wakeboard tous niveaux\r\nSachez qu'il existe des offres combinées \"eaux vives - téléski nautique\". Les sites distant de 10kms sont reliés par la véloroute en rive droite :  en vélo ou en rollers ce sont 10 kms très roulants pour une journée \"très sport\" et \"très nautique\".",
        "type" : false,
        "name" : "Base de loisirs baignade ski nautique pique nique"
    },
    {
        "_id" : ObjectId("5a052d4a868bdc3ee0b85159"),
        "imgext" : "jpeg",
        "address" : "http://www.pilatitou.fr/",
        "time" : 15.0,
        "transportation" : 0.0,
        "description" : "Pilatitou est un parc de loisirs familial pour les enfants de 18 mois à 12 ans, situé dans le magnifique cadre du parc du Pilat, à proximité de St Étienne et de Lyon. Structures gonflables, voitures et tracteurs à pédales, trampoline, espace poupées, mini-ferme, mini-chantier, parcours motricité baby...... et les animaux de la ferme.",
        "type" : false,
        "name" : "Parc enfants plein air"
    },
    {
        "_id" : ObjectId("5a052d4a868bdc3ee0b8515a"),
        "imgext" : "jpeg",
        "address" : "http://mairie-malleval.fr",
        "time" : 20.0,
        "transportation" : 0.0,
        "description" : "Malleval est une petite cité médiévale accrochée à un éperon rocheux dominant les gorges du Batalon dans le massif du Pilat.\r\nLa commune possède un micro-climat méditerranéen et possède de fait des cactus Opuntia humifusa à l'état sauvage1.\r\nLe château de Malavalle est mentionné dès 1157 et le village est à la fin du xiiie siècle une châtellenie, possession de la maison de Forez. Renaud de Forez, fils cadet de Jean de Forez, se destine d'abord à devenir prêtre mais en 1324, il épouse Marguerite de Savoie. Devenu riche par son mariage, il agrandit son domaine par l'achat des paroisses de Chavanay et de Pélussin.",
        "type" : false,
        "name" : "Visite randonnee Village Medieval"
    },
    {
        "_id" : ObjectId("5a052d4a868bdc3ee0b8515b"),
        "imgext" : "jpeg",
        "address" : "http://www.facteurcheval.com/",
        "time" : 20.0,
        "transportation" : 0.0,
        "description" : "Le Palais idéal, ou Palais du Facteur Cheval, est un monument construit par le facteur Ferdinand Cheval de 1879 à 1912, situé à Hauterives en France. Il est depuis le 23 septembre 1969 classé au titre des monuments historiques",
        "type" : false,
        "name" : "Palais du facteur Cheval"
    },
    {
        "_id" : ObjectId("5a052d4a868bdc3ee0b8515c"),
        "imgext" : "jpeg",
        "address" : "http://www.lac-de-devesset.fr/",
        "time" : 50.0,
        "transportation" : 0.0,
        "description" : "Au Nord de l'Ardèche, à la limite de la Haute-Loire, le lac de Devesset et sa vaste base de loisirs vous offriront tout le charme de cette région, quelle que soit la saison.\r\nSituée sur le plateau du Haut-Vivarais, la base de loisirs du Lac de Devesset vous offre le calme et la détente au bord d'un lac de 51 ha entouré de conifères au coeur d'une région touristique.",
        "type" : false,
        "name" : "Base de loisirs Lac de Devesset"
    },
    {
        "_id" : ObjectId("5a052d4a868bdc3ee0b8515d"),
        "imgext" : "jpeg",
        "address" : "http://www.pelussin.fr/",
        "time" : 25.0,
        "transportation" : 0.0,
        "description" : "La commune est située en bordure du plateau oriental du massif du Pilat. Elle surplombe la vallée du Rhône et fait partie du parc naturel régional du Pilat. L'altitude moyenne de Pélussin est d'environ 450 mètres, mais le village s'étage en pente très rapide depuis la profonde vallée du Rhône (140 m} jusqu'au crêt de l'Œillon (1 365 m}.\r\n\r\nPISCINE EXTERIEURE OUVERTE TOUT L ETE GRAND BASSIN ET GRANDE PATAUGEOIRE DANS UN CADRE VERDOYANT AU PIED DU PILAT",
        "important" : "TARIF HORAIRE DE LA PISCINE A DISPO AU GITE",
        "type" : false,
        "name" : "Pelussin village de caractere et sa piscine"
    },
    {
        "_id" : ObjectId("5a052d4a868bdc3ee0b8515e"),
        "imgext" : "jpeg",
        "address" : "http://www.pilanes.fr/",
        "time" : 20.0,
        "transportation" : 0.0,
        "description" : "Pil'ânes propose des circuits adaptés à vos désirs . De la balade d'une heure à la randonnée d'une semaine et plus, découvrez ainsi une nouvelle façon de randonner dans le parc naturel régional du Pilat avec des ânes de bât. Ces derniers imposent un rythme de marche tranquille qui fait de la rando sur sentier de terre une balade agréable, permettant aux adultes comme aux plus jeunes de découvrir la région\r\nBernard vous accueillera sur le site de Pil'ânes durant toute l'année, sur réservation uniquement,",
        "type" : false,
        "name" : "Ballades en Anes"
    },
    {
        "_id" : ObjectId("5a052d4a868bdc3ee0b8515f"),
        "imgext" : "jpeg",
        "address" : "http://www.ardeche-guide.com/le-mont-gerbier-de-jonc",
        "time" : 120.0,
        "transportation" : 0.0,
        "description" : "Ici, les hautes terres volcaniques d’Ardèche, vieilles de 7 millions d’années donnent naissance au plus long fleuve de France, la Loire.\r\nDominant cratères, dômes, lacs de montagne, landes sauvages, narces et tourbières, le Mont Gerbier de Jonc,(1551m d’altitude}, suc le plus célèbre d’Ardèche, possède une exceptionnelle biodiversité.",
        "type" : false,
        "name" : "Gerbier de jonc et Mezenc"
    },
    {
        "_id" : ObjectId("5a052d4a868bdc3ee0b85160"),
        "imgext" : "png",
        "address" : "http://le-lac-dissarles.stationverte.com/",
        "time" : 120.0,
        "transportation" : 0.0,
        "description" : "Au lac, vous pourrez vous baigner dans une eau d'une pureté exceptionnelle et d’une température très agréable en toute sécurité (baignade surveillée en été} ou vous reposer sur le sable de la plage qui épouse le lac. Vous pourrez aussi faire du pédalo, du canoë ou du stand-up paddle. Un sentier pédestre dans les sous bois ombragés permet de faire le tour du lac tout en cueillant des airelles, fraises des bois, framboises et champignons.",
        "type" : false,
        "name" : "Lac d Issarles"
    },
    {
        "_id" : ObjectId("5a052d4a868bdc3ee0b85161"),
        "imgext" : "jpeg",
        "address" : "http://www.tourisme-ardeche-boutieres.com/",
        "time" : 120.0,
        "transportation" : 0.0,
        "description" : "Volcan de type maar, le lac artificiel est niché pour partie dans un vaste cratère d’explosion dont on devine les bords.Accès depuis la base de loisirs. Randonnée au suc de Lestrat (1h aller et retour, 1km, 120 m de dénivelé, chemin forestier}.",
        "type" : false,
        "name" : "Lac de St Martial"
    },
    {
        "_id" : ObjectId("5a052d4a868bdc3ee0b85162"),
        "imgext" : "jpeg",
        "address" : "http://www.saint-julien-molin-molette.fr/Lac-du-Ternay",
        "time" : 10.0,
        "transportation" : 0.0,
        "description" : "Construit en 1867 pour alimenter Annonay en eau, le barrage du Ternay, offre aujourd’hui un agréable lieu de rendez-vous dominical où promeneurs, coureurs à pieds et autres pique-niqueurs se retrouvent. \r\nPour ceux qui ont oublié le casse-croûte, deux restaurants sont installés sur le site",
        "type" : false,
        "name" : "Le lac du ternay"
    },
    {
        "_id" : ObjectId("5a052d4a868bdc3ee0b85163"),
        "imgext" : "jpeg",
        "address" : "http://www.lyon-france.com",
        "time" : 45.0,
        "transportation" : 0.0,
        "description" : "Une situation géographique exceptionnelle, un réseau de communication très dense, un dynamisme économique et humain remarquable, des charmes culturels et gastronomiques qui font saliver les curieux, et surtout une qualité de vie largement reconnue et appréciée…\r\nLyon a tous les atouts en main pour défendre la place qu'elle s'est faite parmi les villes les plus attractives d’Europe.",
        "type" : true,
        "name" : "Ville de Lyon"
    }
]);