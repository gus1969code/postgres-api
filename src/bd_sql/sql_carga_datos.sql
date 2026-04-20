INSERT INTO public.sistemas (nombre, descripcion)
	VALUES 	('AA', 'Sistema de agua'),
	          	('BB', 'Sistema de cloacal'),
		('CC', 'Sistema de hielo'),
		('DD', 'Sistema de pan'),
		('EE', 'Sistema de soda'),
		('FF', 'Sistema de trfasico'),
		('GG', 'Sistema de continua'),
		('HH', 'Sistema de reloj');

INSERT INTO public.equipos(
	nombre, codigo, descripcion, url_image, sistema)
	
	
	VALUES  ('Bomnba V1',	'12345','Bomba de recalque',	'http://localhost:4000/img/bomba.jpg',	2),
			('Valvula 2',	'12345','Valvula de recalque',	'http//:imagen' ,	3),
			('W 2', 		'12345','LLave de cierre ',		'http//:imagen' ,	4),
			('Ter- 6', 		'12345','Termistor selectivo',	'http//:imagen' ,	4),
			('Bomba WWW', 	'12345','Bomba de vacio aceite','http//:imagen',	5),
			('Cil-33',		'12345','Cilindro de masa',		'http//:imagen' ,	6),
			('DD-eee-78', 	'12345','Testigo floculante',	'http//:imagen' ,	6),
			('Bomba QQ', 	'12345','Bomba de achique',		'http//:imagen' ,	7),
			('S&P 500', 	'12345','Indice S&P',			'http//:imagen' , 	7);
      