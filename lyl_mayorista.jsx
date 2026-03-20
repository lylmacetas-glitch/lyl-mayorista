import { useState, useMemo } from "react";

const productos = [
  // BARRO — BLUM
  { articulo: "FRUTILLERA 60", medidas: "", material: "Barro", pintada: false, precio: 119260, litros: null, peso_kg: null }
  { articulo: "MAC. COMUN Nº 16 PINTADA", medidas: "", material: "Barro", pintada: true, precio: 5050, litros: null, peso_kg: null }
  { articulo: "MAC. COMUN Nº 18 PINTADA", medidas: "", material: "Barro", pintada: true, precio: 6910, litros: null, peso_kg: null }
  { articulo: "PORTEÑA Nº20", medidas: "", material: "Barro", pintada: false, precio: 3240, litros: null, peso_kg: null }
  { articulo: "PORTEÑA Nº45", medidas: "", material: "Barro", pintada: false, precio: 33760, litros: null, peso_kg: null }
  { articulo: "CILINDRO N26 GRAFITO", medidas: "", material: "Barro", pintada: true, precio: 15020, litros: null, peso_kg: null }
  { articulo: "CILINDRO N22 GRAFITO", medidas: "", material: "Barro", pintada: true, precio: 10240, litros: null, peso_kg: null }
  { articulo: "CILINDRO N18 GRAFITO", medidas: "", material: "Barro", pintada: true, precio: 6620, litros: null, peso_kg: null }
  { articulo: "CILINDRO N14 GRAFITO", medidas: "", material: "Barro", pintada: true, precio: 3660, litros: null, peso_kg: null }
  { articulo: "CILINDRO N12 GRAFITO", medidas: "", material: "Barro", pintada: true, precio: 1550, litros: null, peso_kg: null }
  { articulo: "BOMBA N23 GRAFITO", medidas: "", material: "Barro", pintada: true, precio: 11360, litros: null, peso_kg: null }
  { articulo: "MAC PREMIUM N22 GRAFITO", medidas: "", material: "Barro", pintada: true, precio: 5450, litros: null, peso_kg: null }
  { articulo: "CILINDRO N18 ESMALTADO", medidas: "", material: "Barro", pintada: true, precio: 10250, litros: null, peso_kg: null }
  { articulo: "MAC. COMUN N14 PINTADA", medidas: "", material: "Barro", pintada: true, precio: 4260, litros: null, peso_kg: null }
  { articulo: "CILINDRO ESMALTADO N12", medidas: "", material: "Barro", pintada: true, precio: 3580, litros: null, peso_kg: null }
  { articulo: "CILINDRO ESMALTADO N14", medidas: "", material: "Barro", pintada: true, precio: 6930, litros: null, peso_kg: null }
  { articulo: "MAC PREMIUM ESMALTADA N22", medidas: "", material: "Barro", pintada: true, precio: 10990, litros: null, peso_kg: null }
  { articulo: "ICONO N12", medidas: "", material: "Barro", pintada: false, precio: 1210, litros: null, peso_kg: null }
  { articulo: "ICONO N14", medidas: "", material: "Barro", pintada: false, precio: 1260, litros: null, peso_kg: null }
  { articulo: "ICONO N16", medidas: "", material: "Barro", pintada: false, precio: 1900, litros: null, peso_kg: null }
  { articulo: "ICONO N18", medidas: "", material: "Barro", pintada: false, precio: 2300, litros: null, peso_kg: null }
  { articulo: "ICONO N20", medidas: "", material: "Barro", pintada: false, precio: 2820, litros: null, peso_kg: null }
  { articulo: "CILINDRO ESMALTADO N22", medidas: "", material: "Barro", pintada: true, precio: 20410, litros: null, peso_kg: null }
  { articulo: "AMERICANA Nº23", medidas: "", material: "Barro", pintada: false, precio: 5710, litros: null, peso_kg: null }
  { articulo: "AMERICANA Nº29", medidas: "", material: "Barro", pintada: false, precio: 10600, litros: null, peso_kg: null }
  { articulo: "AMERICANA Nº36", medidas: "", material: "Barro", pintada: false, precio: 17140, litros: null, peso_kg: null }
  { articulo: "BALCONERA Nº45", medidas: "", material: "Barro", pintada: false, precio: 11590, litros: null, peso_kg: null }
  { articulo: "BOLS COLGANTE N24", medidas: "", material: "Barro", pintada: false, precio: 4780, litros: null, peso_kg: null }
  { articulo: "BOLS Nº13", medidas: "", material: "Barro", pintada: false, precio: 2000, litros: null, peso_kg: null }
  { articulo: "BOLS Nº17", medidas: "", material: "Barro", pintada: false, precio: 3110, litros: null, peso_kg: null }
  { articulo: "BOLS Nº21", medidas: "", material: "Barro", pintada: false, precio: 4920, litros: null, peso_kg: null }
  { articulo: "BOLS Nº25", medidas: "", material: "Barro", pintada: false, precio: 6710, litros: null, peso_kg: null }
  { articulo: "BOMBA Nº08", medidas: "", material: "Barro", pintada: false, precio: 2330, litros: null, peso_kg: null }
  { articulo: "BOMBA Nº14", medidas: "", material: "Barro", pintada: false, precio: 4630, litros: null, peso_kg: null }
  { articulo: "BOMBA Nº16", medidas: "", material: "Barro", pintada: false, precio: 5760, litros: null, peso_kg: null }
  { articulo: "BOMBA Nº19", medidas: "", material: "Barro", pintada: false, precio: 7360, litros: null, peso_kg: null }
  { articulo: "BOMBA Nº23", medidas: "", material: "Barro", pintada: false, precio: 11330, litros: null, peso_kg: null }
  { articulo: "BOMBA Nº35", medidas: "", material: "Barro", pintada: false, precio: 27670, litros: null, peso_kg: null }
  { articulo: "BOMBA Nº40", medidas: "", material: "Barro", pintada: false, precio: 41080, litros: null, peso_kg: null }
  { articulo: "BOMBA Nº50", medidas: "", material: "Barro", pintada: false, precio: 62250, litros: null, peso_kg: null }
  { articulo: "CILINDRO C/BORDE Nº15", medidas: "", material: "Barro", pintada: false, precio: 2630, litros: null, peso_kg: null }
  { articulo: "CILINDRO C/BORDE Nº19", medidas: "", material: "Barro", pintada: false, precio: 3910, litros: null, peso_kg: null }
  { articulo: "CILINDRO C/BORDE Nº24", medidas: "", material: "Barro", pintada: false, precio: 6300, litros: null, peso_kg: null }
  { articulo: "CILINDRO C/BORDE Nº30", medidas: "", material: "Barro", pintada: false, precio: 13290, litros: null, peso_kg: null }
  { articulo: "CILINDRO C/BORDE Nº38", medidas: "", material: "Barro", pintada: false, precio: 23740, litros: null, peso_kg: null }
  { articulo: "CILINDRO C/BORDE Nº48", medidas: "", material: "Barro", pintada: false, precio: 54040, litros: null, peso_kg: null }
  { articulo: "CILINDRO Nº12", medidas: "", material: "Barro", pintada: false, precio: 1540, litros: null, peso_kg: null }
  { articulo: "CILINDRO Nº14", medidas: "", material: "Barro", pintada: false, precio: 3650, litros: null, peso_kg: null }
  { articulo: "CILINDRO Nº18", medidas: "", material: "Barro", pintada: false, precio: 6600, litros: null, peso_kg: null }
  { articulo: "CILINDRO Nº22", medidas: "", material: "Barro", pintada: false, precio: 10210, litros: null, peso_kg: null }
  { articulo: "CILINDRO Nº26", medidas: "", material: "Barro", pintada: false, precio: 14980, litros: null, peso_kg: null }
  { articulo: "CILINDRO Nº30", medidas: "", material: "Barro", pintada: false, precio: 22040, litros: null, peso_kg: null }
  { articulo: "COLGADERA Nº25", medidas: "", material: "Barro", pintada: false, precio: 7080, litros: null, peso_kg: null }
  { articulo: "COLGADERA Nº30", medidas: "", material: "Barro", pintada: false, precio: 12350, litros: null, peso_kg: null }
  { articulo: "CONO 31", medidas: "", material: "Barro", pintada: false, precio: 7010, litros: null, peso_kg: null }
  { articulo: "CONO 40", medidas: "", material: "Barro", pintada: false, precio: 13900, litros: null, peso_kg: null }
  { articulo: "CONO 48", medidas: "", material: "Barro", pintada: false, precio: 21280, litros: null, peso_kg: null }
  { articulo: "CONO 55 CM", medidas: "", material: "Barro", pintada: false, precio: 35950, litros: null, peso_kg: null }
  { articulo: "FESTONEADA Nº08", medidas: "", material: "Barro", pintada: false, precio: 2290, litros: null, peso_kg: null }
  { articulo: "FESTONEADA Nº10", medidas: "", material: "Barro", pintada: false, precio: 3010, litros: null, peso_kg: null }
  { articulo: "FESTONEADA Nº16", medidas: "", material: "Barro", pintada: false, precio: 5600, litros: null, peso_kg: null }
  { articulo: "FESTONEADA Nº19", medidas: "", material: "Barro", pintada: false, precio: 7720, litros: null, peso_kg: null }
  { articulo: "FESTONEADA Nº24", medidas: "", material: "Barro", pintada: false, precio: 8870, litros: null, peso_kg: null }
  { articulo: "FESTONEADA Nº30", medidas: "", material: "Barro", pintada: false, precio: 21430, litros: null, peso_kg: null }
  { articulo: "FESTONEADA Nº45", medidas: "", material: "Barro", pintada: false, precio: 62880, litros: null, peso_kg: null }
  { articulo: "FESTONEADA Nº58", medidas: "", material: "Barro", pintada: false, precio: 94340, litros: null, peso_kg: null }
  { articulo: "FRUTILLERA 40", medidas: "", material: "Barro", pintada: false, precio: 59630, litros: null, peso_kg: null }
  { articulo: "ITALIANA Nº14", medidas: "", material: "Barro", pintada: false, precio: 1790, litros: null, peso_kg: null }
  { articulo: "ITALIANA Nº16", medidas: "", material: "Barro", pintada: false, precio: 2120, litros: null, peso_kg: null }
  { articulo: "ITALIANA Nº18", medidas: "", material: "Barro", pintada: false, precio: 2890, litros: null, peso_kg: null }
  { articulo: "ITALIANA Nº20", medidas: "", material: "Barro", pintada: false, precio: 3820, litros: null, peso_kg: null }
  { articulo: "ITALIANA Nº22", medidas: "", material: "Barro", pintada: false, precio: 5370, litros: null, peso_kg: null }
  { articulo: "ITALIANA Nº24", medidas: "", material: "Barro", pintada: false, precio: 6960, litros: null, peso_kg: null }
  { articulo: "ITALIANA Nº26", medidas: "", material: "Barro", pintada: false, precio: 9210, litros: null, peso_kg: null }
  { articulo: "ITALIANA Nº30", medidas: "", material: "Barro", pintada: false, precio: 11610, litros: null, peso_kg: null }
  { articulo: "ITALIANA Nº35", medidas: "", material: "Barro", pintada: false, precio: 16880, litros: null, peso_kg: null }
  { articulo: "ITALIANA Nº40", medidas: "", material: "Barro", pintada: false, precio: 21920, litros: null, peso_kg: null }
  { articulo: "ITALIANA Nº48", medidas: "", material: "Barro", pintada: false, precio: 36500, litros: null, peso_kg: null }
  { articulo: "ITALIANA Nº52", medidas: "", material: "Barro", pintada: false, precio: 53030, litros: null, peso_kg: null }
  { articulo: "JARD. C.ROMA Nº31", medidas: "", material: "Barro", pintada: false, precio: 9970, litros: null, peso_kg: null }
  { articulo: "JARD. C.ROMA Nº52", medidas: "", material: "Barro", pintada: false, precio: 25690, litros: null, peso_kg: null }
  { articulo: "JARDINERA Nº30", medidas: "", material: "Barro", pintada: false, precio: 9090, litros: null, peso_kg: null }
  { articulo: "JARDINERA Nº40", medidas: "", material: "Barro", pintada: false, precio: 16620, litros: null, peso_kg: null }
  { articulo: "JARDINERA Nº50", medidas: "", material: "Barro", pintada: false, precio: 23980, litros: null, peso_kg: null }
  { articulo: "LEBRILLO Nº22", medidas: "", material: "Barro", pintada: false, precio: 4720, litros: null, peso_kg: null }
  { articulo: "LEBRILLO Nº26", medidas: "", material: "Barro", pintada: false, precio: 6640, litros: null, peso_kg: null }
  { articulo: "LEBRILLO Nº30", medidas: "", material: "Barro", pintada: false, precio: 9120, litros: null, peso_kg: null }
  { articulo: "LEBRILLO Nº34", medidas: "", material: "Barro", pintada: false, precio: 11390, litros: null, peso_kg: null }
  { articulo: "LEBRILLO Nº38", medidas: "", material: "Barro", pintada: false, precio: 14010, litros: null, peso_kg: null }
  { articulo: "LEBRILLO Nº45", medidas: "", material: "Barro", pintada: false, precio: 22860, litros: null, peso_kg: null }
  { articulo: "LEBRILLO Nº52", medidas: "", material: "Barro", pintada: false, precio: 34030, litros: null, peso_kg: null }
  { articulo: "MAC. COMUN Nº 04", medidas: "", material: "Barro", pintada: false, precio: 740, litros: null, peso_kg: null }
  { articulo: "MAC. COMUN Nº 05", medidas: "", material: "Barro", pintada: false, precio: 750, litros: null, peso_kg: null }
  { articulo: "MAC. COMUN Nº 07", medidas: "", material: "Barro", pintada: false, precio: 950, litros: null, peso_kg: null }
  { articulo: "MAC. COMUN Nº 08", medidas: "", material: "Barro", pintada: false, precio: 1090, litros: null, peso_kg: null }
  { articulo: "MAC. COMUN Nº 10", medidas: "", material: "Barro", pintada: false, precio: 1120, litros: null, peso_kg: null }
  { articulo: "MAC. COMUN Nº 12", medidas: "", material: "Barro", pintada: false, precio: 1260, litros: null, peso_kg: null }
  { articulo: "MAC. COMUN Nº 14", medidas: "", material: "Barro", pintada: false, precio: 1500, litros: null, peso_kg: null }
  { articulo: "MAC. COMUN Nº 16", medidas: "", material: "Barro", pintada: false, precio: 1970, litros: null, peso_kg: null }
  { articulo: "MAC. COMUN Nº 18", medidas: "", material: "Barro", pintada: false, precio: 2740, litros: null, peso_kg: null }
  { articulo: "MAC. COMUN Nº 20", medidas: "", material: "Barro", pintada: false, precio: 3380, litros: null, peso_kg: null }
  { articulo: "MAC. COMUN Nº 22", medidas: "", material: "Barro", pintada: false, precio: 5430, litros: null, peso_kg: null }
  { articulo: "MAC. COMUN Nº 24", medidas: "", material: "Barro", pintada: false, precio: 6310, litros: null, peso_kg: null }
  { articulo: "MAC. COMUN Nº 26", medidas: "", material: "Barro", pintada: false, precio: 7820, litros: null, peso_kg: null }
  { articulo: "MAC. COMUN Nº 28", medidas: "", material: "Barro", pintada: false, precio: 8950, litros: null, peso_kg: null }
  { articulo: "MAC. COMUN Nº 30", medidas: "", material: "Barro", pintada: false, precio: 10590, litros: null, peso_kg: null }
  { articulo: "MAC. COMUN Nº 35", medidas: "", material: "Barro", pintada: false, precio: 13900, litros: null, peso_kg: null }
  { articulo: "MAC. COMUN Nº 40", medidas: "", material: "Barro", pintada: false, precio: 21830, litros: null, peso_kg: null }
  { articulo: "MAC. COMUN Nº 48", medidas: "", material: "Barro", pintada: false, precio: 33310, litros: null, peso_kg: null }
  { articulo: "MAC. COMUN Nº 52", medidas: "", material: "Barro", pintada: false, precio: 52050, litros: null, peso_kg: null }
  { articulo: "AGUSTINIANA Nº20", medidas: "", material: "Barro", pintada: false, precio: 6990, litros: null, peso_kg: null }
  { articulo: "AGUSTINIANA Nº27", medidas: "", material: "Barro", pintada: false, precio: 15720, litros: null, peso_kg: null }
  { articulo: "AGUSTINIANA Nº34", medidas: "", material: "Barro", pintada: false, precio: 30590, litros: null, peso_kg: null }
  { articulo: "AGUSTINIANA Nº40", medidas: "", material: "Barro", pintada: false, precio: 48650, litros: null, peso_kg: null }
  { articulo: "AGUSTINIANA Nº60", medidas: "", material: "Barro", pintada: false, precio: 93190, litros: null, peso_kg: null }
  { articulo: "NIDO DE PALOMA Nº24", medidas: "", material: "Barro", pintada: false, precio: 6240, litros: null, peso_kg: null }
  { articulo: "PAILA Nº35", medidas: "", material: "Barro", pintada: false, precio: 10680, litros: null, peso_kg: null }
  { articulo: "PAILA Nº48", medidas: "", material: "Barro", pintada: false, precio: 22960, litros: null, peso_kg: null }
  { articulo: "PAILA Nº62", medidas: "", material: "Barro", pintada: false, precio: 41000, litros: null, peso_kg: null }
  { articulo: "PIE DE MACETA Nº45", medidas: "", material: "Barro", pintada: false, precio: 1220, litros: null, peso_kg: null }
  { articulo: "PIE DE MACETA Nº90", medidas: "", material: "Barro", pintada: false, precio: 1600, litros: null, peso_kg: null }
  { articulo: "PLATO Nº 08", medidas: "", material: "Barro", pintada: false, precio: 1010, litros: null, peso_kg: null }
  { articulo: "PLATO Nº 10", medidas: "", material: "Barro", pintada: false, precio: 1090, litros: null, peso_kg: null }
  { articulo: "PLATO Nº 12", medidas: "", material: "Barro", pintada: false, precio: 1150, litros: null, peso_kg: null }
  { articulo: "PLATO Nº 14", medidas: "", material: "Barro", pintada: false, precio: 1410, litros: null, peso_kg: null }
  { articulo: "PLATO Nº 16", medidas: "", material: "Barro", pintada: false, precio: 1830, litros: null, peso_kg: null }
  { articulo: "PLATO Nº 18", medidas: "", material: "Barro", pintada: false, precio: 2250, litros: null, peso_kg: null }
  { articulo: "PLATO Nº 20", medidas: "", material: "Barro", pintada: false, precio: 2770, litros: null, peso_kg: null }
  { articulo: "PLATO Nº 22", medidas: "", material: "Barro", pintada: false, precio: 4290, litros: null, peso_kg: null }
  { articulo: "PLATO Nº 24", medidas: "", material: "Barro", pintada: false, precio: 5650, litros: null, peso_kg: null }
  { articulo: "PLATO Nº 26", medidas: "", material: "Barro", pintada: false, precio: 7000, litros: null, peso_kg: null }
  { articulo: "PLATO Nº 28", medidas: "", material: "Barro", pintada: false, precio: 8460, litros: null, peso_kg: null }
  { articulo: "PLATO Nº 30", medidas: "", material: "Barro", pintada: false, precio: 10230, litros: null, peso_kg: null }
  { articulo: "PLATO Nº 35", medidas: "", material: "Barro", pintada: false, precio: 11980, litros: null, peso_kg: null }
  { articulo: "PLATO Nº 40", medidas: "", material: "Barro", pintada: false, precio: 14500, litros: null, peso_kg: null }
  { articulo: "PLATO Nº 45", medidas: "", material: "Barro", pintada: false, precio: 20210, litros: null, peso_kg: null }
  { articulo: "PLATO Nº 52", medidas: "", material: "Barro", pintada: false, precio: 25060, litros: null, peso_kg: null }
  { articulo: "TERRINA Nº10", medidas: "", material: "Barro", pintada: false, precio: 1740, litros: null, peso_kg: null }
  { articulo: "TERRINA Nº12", medidas: "", material: "Barro", pintada: false, precio: 1950, litros: null, peso_kg: null }
  { articulo: "TERRINA Nº14", medidas: "", material: "Barro", pintada: false, precio: 2110, litros: null, peso_kg: null }
  { articulo: "TERRINA Nº22", medidas: "", material: "Barro", pintada: false, precio: 5210, litros: null, peso_kg: null }
  { articulo: "TERRINA Nº24", medidas: "", material: "Barro", pintada: false, precio: 6850, litros: null, peso_kg: null }
  { articulo: "TERRINA Nº27", medidas: "", material: "Barro", pintada: false, precio: 10090, litros: null, peso_kg: null }
  { articulo: "MAC. COMUN N*6", medidas: "", material: "Barro", pintada: false, precio: 850, litros: null, peso_kg: null }
  { articulo: "MAC. PREMIUM N22", medidas: "", material: "Barro", pintada: false, precio: 5430, litros: null, peso_kg: null }
  { articulo: "BOMBA Nº30", medidas: "", material: "Barro", pintada: false, precio: 20450, litros: null, peso_kg: null }
  { articulo: "MAC. COMUN Nº 10 PINTADA", medidas: "", material: "Barro", pintada: true, precio: 2810, litros: null, peso_kg: null }
  { articulo: "MAC. COMUN Nº 12 PINTADA", medidas: "", material: "Barro", pintada: true, precio: 3270, litros: null, peso_kg: null }
  { articulo: "MAC. COMUN Nº 22 PINTADA", medidas: "", material: "Barro", pintada: true, precio: 11090, litros: null, peso_kg: null }
  { articulo: "MAC. COMUN Nº 08 PINTADA", medidas: "", material: "Barro", pintada: true, precio: 2360, litros: null, peso_kg: null }
  { articulo: "ICONO Nº 8", medidas: "", material: "Barro", pintada: false, precio: 1090, litros: null, peso_kg: null }
  { articulo: "ICONO Nº 10", medidas: "", material: "Barro", pintada: false, precio: 1120, litros: null, peso_kg: null }
  { articulo: "ICONO Nº 8  PINTADA", medidas: "", material: "Barro", pintada: true, precio: 2250, litros: null, peso_kg: null }
  { articulo: "ICONO Nº 10  PINTADA", medidas: "", material: "Barro", pintada: true, precio: 2680, litros: null, peso_kg: null }

  // BARRO ARTESANAL — CACHARROS
  { articulo: "Nº3 (*) 20CM", medidas: "", material: "Barro Artesanal", pintada: false, precio: 9750, litros: null, peso_kg: null }
  { articulo: "MATERON GIGANTE 10CM", medidas: "", material: "Barro Artesanal", pintada: false, precio: 2850, litros: null, peso_kg: null }
  { articulo: "Nº1  (*) 16CM BOCA", medidas: "", material: "Barro Artesanal", pintada: false, precio: 4720, litros: null, peso_kg: null }
  { articulo: "TIRAS *1 DOC. DEDAL 2CM", medidas: "", material: "Barro Artesanal", pintada: false, precio: 9000, litros: null, peso_kg: null }
  { articulo: "PREMIUM N22", medidas: "", material: "Barro Artesanal", pintada: false, precio: 7950, litros: null, peso_kg: null }
  { articulo: "PREMIUM N18", medidas: "", material: "Barro Artesanal", pintada: false, precio: 5930, litros: null, peso_kg: null }
  { articulo: "1/2 PARED", medidas: "", material: "Barro Artesanal", pintada: false, precio: 9000, litros: null, peso_kg: null }
  { articulo: "BANDEJA OVAL GRANDE 30CM", medidas: "", material: "Barro Artesanal", pintada: false, precio: 14820, litros: null, peso_kg: null }
  { articulo: "TIRAS *1 DOC. SARTA 5CM", medidas: "", material: "Barro Artesanal", pintada: false, precio: 12000, litros: null, peso_kg: null }
  { articulo: "OLLA CHICA CUADRADA Y REDONDA OFERTA", medidas: "", material: "Barro Artesanal", pintada: false, precio: 14820, litros: null, peso_kg: null }
  { articulo: "OLLA MEDIANA REDONDA OFERTA", medidas: "", material: "Barro Artesanal", pintada: false, precio: 19760, litros: null, peso_kg: null }
  { articulo: "OLLA EXTRA GRANDE OFERTA", medidas: "", material: "Barro Artesanal", pintada: false, precio: 27000, litros: null, peso_kg: null }
  { articulo: "SARTEN C/TAPA OFERTA", medidas: "", material: "Barro Artesanal", pintada: false, precio: 19760, litros: null, peso_kg: null }
  { articulo: "PAVA OFERTA", medidas: "", material: "Barro Artesanal", pintada: false, precio: 13500, litros: null, peso_kg: null }
  { articulo: "CASUELA REDONDA 16CM X 7CM ALTO", medidas: "", material: "Barro Artesanal", pintada: false, precio: 6300, litros: null, peso_kg: null }
  { articulo: "CASUELA REDONDO 14CM X 5CM ALTO", medidas: "", material: "Barro Artesanal", pintada: false, precio: 6300, litros: null, peso_kg: null }
  { articulo: "VOLCADO 2  26CM BOCA", medidas: "", material: "Barro Artesanal", pintada: false, precio: 19120, litros: null, peso_kg: null }
  { articulo: "VOLCADO GIGANTE SUPER 40CM BOCA", medidas: "", material: "Barro Artesanal", pintada: false, precio: 49500, litros: null, peso_kg: null }
  { articulo: "MATERA EXTRA GRANDE NUEVA 13CM BOCA", medidas: "", material: "Barro Artesanal", pintada: false, precio: 3940, litros: null, peso_kg: null }
  { articulo: "CHANCHITOS CH.", medidas: "", material: "Barro Artesanal", pintada: false, precio: 6590, litros: null, peso_kg: null }
  { articulo: "CHANCHITOS GRANDE", medidas: "", material: "Barro Artesanal", pintada: false, precio: 9220, litros: null, peso_kg: null }
  { articulo: "TIRAS *1 DOC. OJAL 3CM", medidas: "", material: "Barro Artesanal", pintada: false, precio: 13500, litros: null, peso_kg: null }
  { articulo: "MATERA SARTA 8CM BOCA 6CM ALTO", medidas: "", material: "Barro Artesanal", pintada: false, precio: 1580, litros: null, peso_kg: null }
  { articulo: "N4 30CM BOCA C/MANIJA", medidas: "", material: "Barro Artesanal", pintada: false, precio: 24300, litros: null, peso_kg: null }
  { articulo: "JARRAS GRANDE 24CM", medidas: "", material: "Barro Artesanal", pintada: false, precio: 7250, litros: null, peso_kg: null }
  { articulo: "BANDEJA OVAL CHICA 18CM X 6CM ALTO", medidas: "", material: "Barro Artesanal", pintada: false, precio: 7880, litros: null, peso_kg: null }
  { articulo: "MATERA MEDIANA 6CM", medidas: "", material: "Barro Artesanal", pintada: false, precio: 940, litros: null, peso_kg: null }
  { articulo: "JARRA CHICA", medidas: "", material: "Barro Artesanal", pintada: false, precio: 4940, litros: null, peso_kg: null }
  { articulo: "GIGANTE SUPER", medidas: "", material: "Barro Artesanal", pintada: false, precio: 19120, litros: null, peso_kg: null }
  { articulo: "VOLCADO 1 30CM BOCA", medidas: "", material: "Barro Artesanal", pintada: false, precio: 19120, litros: null, peso_kg: null }
  // FIBROCEMENTO PINTADO
  // Misionera
  { articulo: "Misionera", medidas: "20altx18bocx16bas", material: "Fibrocemento", pintada: true, precio: 7950, litros: null, peso_kg: null }
  { articulo: "Misionera", medidas: "28altx18bocx15bas", material: "Fibrocemento", pintada: true, precio: 17500, litros: null, peso_kg: null }
  { articulo: "Misionera", medidas: "38altx28bocx20bas", material: "Fibrocemento", pintada: true, precio: 27840, litros: null, peso_kg: null }
  { articulo: "Misionera", medidas: "50altx37bocx32bas", material: "Fibrocemento", pintada: true, precio: 34200, litros: null, peso_kg: null }
  { articulo: "Misionera", medidas: "63altx40bocx32bas", material: "Fibrocemento", pintada: true, precio: 51700, litros: null, peso_kg: null }
  { articulo: "Misionera", medidas: "67altx37bocx32bas", material: "Fibrocemento", pintada: true, precio: 50070, litros: null, peso_kg: null }
  { articulo: "Misionera", medidas: "90altx40bocx35bas", material: "Fibrocemento", pintada: true, precio: 84520, litros: null, peso_kg: null }
  { articulo: "Misionera", medidas: "80altx50bocx40bas", material: "Fibrocemento", pintada: true, precio: 89500, litros: null, peso_kg: null }
  // Misionera con Borde
  { articulo: "Misionera con Borde", medidas: "35CM", material: "Fibrocemento", pintada: true, precio: 28040, litros: null, peso_kg: null }
  { articulo: "Misionera con Borde", medidas: "45CM", material: "Fibrocemento", pintada: true, precio: 36750, litros: null, peso_kg: null }
  { articulo: "Misionera con Borde", medidas: "55CM", material: "Fibrocemento", pintada: true, precio: 66700, litros: null, peso_kg: null }
  // Salteña
  { articulo: "Salteña", medidas: "77altx65bocx32bas", material: "Fibrocemento", pintada: true, precio: 102390, litros: null, peso_kg: null }
  { articulo: "Salteña", medidas: "50altx65bocx32bas", material: "Fibrocemento", pintada: true, precio: 85440, litros: null, peso_kg: null }
  { articulo: "Salteña", medidas: "65altx50 bocx25 bas", material: "Fibrocemento", pintada: true, precio: 55800, litros: null, peso_kg: null }
  { articulo: "Salteña", medidas: "45altx40bocx20bas", material: "Fibrocemento", pintada: true, precio: 27340, litros: null, peso_kg: null }
  // Copa
  { articulo: "Copa", medidas: "70altx50bocx28bas", material: "Fibrocemento", pintada: true, precio: 86520, litros: null, peso_kg: null }
  { articulo: "Copa", medidas: "55altx45bocx28bas", material: "Fibrocemento", pintada: true, precio: 39780, litros: null, peso_kg: null }
  { articulo: "Copa", medidas: "40altx33bocx16bas", material: "Fibrocemento", pintada: true, precio: 19890, litros: null, peso_kg: null }
  // Bols
  { articulo: "Bols", medidas: "28altx55bocx27bas", material: "Fibrocemento", pintada: true, precio: 25460, litros: null, peso_kg: null }
  { articulo: "Bols", medidas: "30altx80bocx33bas", material: "Fibrocemento", pintada: true, precio: 40770, litros: null, peso_kg: null }
  // Cónica / Tradicional
  { articulo: "Cónica / Tradicional", medidas: "30altx30bocx18bas", material: "Fibrocemento", pintada: true, precio: 14910, litros: null, peso_kg: null }
  { articulo: "Cónica / Tradicional", medidas: "40altx40bocx25bas", material: "Fibrocemento", pintada: true, precio: 27340, litros: null, peso_kg: null }
  { articulo: "Cónica / Tradicional", medidas: "50altx50bocx29bas", material: "Fibrocemento", pintada: true, precio: 32320, litros: null, peso_kg: null }
  { articulo: "Cónica / Tradicional", medidas: "60altx60bocx36bas", material: "Fibrocemento", pintada: true, precio: 44740, litros: null, peso_kg: null }
  { articulo: "Cónica / Tradicional", medidas: "70altx70bocx44bas", material: "Fibrocemento", pintada: true, precio: 67500, litros: null, peso_kg: null }
  // Andina
  { articulo: "Andina", medidas: "35altx40bocx26bas", material: "Fibrocemento", pintada: true, precio: 28590, litros: null, peso_kg: null }
  { articulo: "Andina", medidas: "43altx50bocx33bas", material: "Fibrocemento", pintada: true, precio: 38120, litros: null, peso_kg: null }
  { articulo: "Andina", medidas: "55altx65bocx43bas", material: "Fibrocemento", pintada: true, precio: 68070, litros: null, peso_kg: null }
  { articulo: "Andina", medidas: "69altx80bocx53bas", material: "Fibrocemento", pintada: true, precio: 139950, litros: null, peso_kg: null }
  // Cilindro
  { articulo: "Cilindro", medidas: "30altx30bocx30bas", material: "Fibrocemento", pintada: true, precio: 12740, litros: null, peso_kg: null }
  { articulo: "Cilindro", medidas: "50altx30bocx30bas", material: "Fibrocemento", pintada: true, precio: 19120, litros: null, peso_kg: null }
  { articulo: "Cilindro", medidas: "45altx45bocx45bas", material: "Fibrocemento", pintada: true, precio: 26250, litros: null, peso_kg: null }
  { articulo: "Cilindro", medidas: "45altx40bocx45bas", material: "Fibrocemento", pintada: true, precio: 59670, litros: null, peso_kg: null }
  { articulo: "Cilindro", medidas: "52altx52bocx52bas", material: "Fibrocemento", pintada: true, precio: 31820, litros: null, peso_kg: null }
  { articulo: "Cilindro", medidas: "60altx60bocx60bas", material: "Fibrocemento", pintada: true, precio: 59670, litros: null, peso_kg: null }
  // Cono
  { articulo: "Cono", medidas: "100altx45bocx30bas", material: "Fibrocemento", pintada: true, precio: 55700, litros: null, peso_kg: null }
  { articulo: "Cono", medidas: "80altx40bocx30bas", material: "Fibrocemento", pintada: true, precio: 35800, litros: null, peso_kg: null }
  { articulo: "Cono", medidas: "60altx38bocx30bas", material: "Fibrocemento", pintada: true, precio: 27840, litros: null, peso_kg: null }
  // Cono Moderno
  { articulo: "Cono Moderno", medidas: "40altx31bocx22bas", material: "Fibrocemento", pintada: true, precio: 19890, litros: null, peso_kg: null }
  { articulo: "Cono Moderno", medidas: "55altx36bocx24bas", material: "Fibrocemento", pintada: true, precio: 25860, litros: null, peso_kg: null }
  { articulo: "Cono Moderno", medidas: "70altx46bocx24bas", material: "Fibrocemento", pintada: true, precio: 34800, litros: null, peso_kg: null }
  { articulo: "Cono Moderno", medidas: "80altx46bocx28bas", material: "Fibrocemento", pintada: true, precio: 45660, litros: null, peso_kg: null }
  // Cubo
  { articulo: "Cubo", medidas: "15altx15bocx15bas", material: "Fibrocemento", pintada: true, precio: 5970, litros: null, peso_kg: null }
  { articulo: "Cubo", medidas: "20altx20bocx20bas", material: "Fibrocemento", pintada: true, precio: 7460, litros: null, peso_kg: null }
  { articulo: "Cubo", medidas: "25altx25bocx25bas", material: "Fibrocemento", pintada: true, precio: 10940, litros: null, peso_kg: null }
  { articulo: "Cubo", medidas: "30altx30bocx30bas", material: "Fibrocemento", pintada: true, precio: 14910, litros: null, peso_kg: null }
  { articulo: "Cubo", medidas: "35altx35bocx35bas", material: "Fibrocemento", pintada: true, precio: 18900, litros: null, peso_kg: null }
  { articulo: "Cubo", medidas: "40altx40bocx40bas", material: "Fibrocemento", pintada: true, precio: 22380, litros: null, peso_kg: null }
  { articulo: "Cubo", medidas: "45altx45bocx45bas", material: "Fibrocemento", pintada: true, precio: 29840, litros: null, peso_kg: null }
  { articulo: "Cubo", medidas: "50altx50bocx50bas", material: "Fibrocemento", pintada: true, precio: 39780, litros: null, peso_kg: null }
  { articulo: "Cubo", medidas: "60altx60bocx60bas", material: "Fibrocemento", pintada: true, precio: 69620, litros: null, peso_kg: null }
  // Esfera
  { articulo: "Esfera", medidas: "20cm", material: "Fibrocemento", pintada: true, precio: 9940, litros: null, peso_kg: null }
  { articulo: "Esfera", medidas: "28cm", material: "Fibrocemento", pintada: true, precio: 13920, litros: null, peso_kg: null }
  { articulo: "Esfera", medidas: "40cm", material: "Fibrocemento", pintada: true, precio: 19890, litros: null, peso_kg: null }
  { articulo: "Esfera", medidas: "50cm", material: "Fibrocemento", pintada: true, precio: 39780, litros: null, peso_kg: null }
  // Jardinera
  { articulo: "Jardinera", medidas: "135lrgx50anchx45alt", material: "Fibrocemento", pintada: true, precio: 124300, litros: null, peso_kg: null }
  { articulo: "Jardinera", medidas: "125lrgx50anchx45alt", material: "Fibrocemento", pintada: true, precio: 109380, litros: null, peso_kg: null }
  { articulo: "Jardinera", medidas: "115lrgx50anchx45alt", material: "Fibrocemento", pintada: true, precio: 99450, litros: null, peso_kg: null }
  { articulo: "Jardinera", medidas: "100lrgx40anchx40alt", material: "Fibrocemento", pintada: true, precio: 59670, litros: null, peso_kg: null }
  { articulo: "Jardinera", medidas: "100lrgx35anchx40alt", material: "Fibrocemento", pintada: true, precio: 54690, litros: null, peso_kg: null }
  { articulo: "Jardinera", medidas: "100lrgx30anchx35alt", material: "Fibrocemento", pintada: true, precio: 44740, litros: null, peso_kg: null }
  { articulo: "Jardinera", medidas: "80lrgx35anchx40alt", material: "Fibrocemento", pintada: true, precio: 39780, litros: null, peso_kg: null }
  { articulo: "Jardinera", medidas: "80lrgx30anchx35alt", material: "Fibrocemento", pintada: true, precio: 34800, litros: null, peso_kg: null }
  { articulo: "Jardinera", medidas: "100lrgx20anchx40alt", material: "Fibrocemento", pintada: true, precio: 39780, litros: null, peso_kg: null }
  { articulo: "Jardinera", medidas: "100lrgx20anchx30alt", material: "Fibrocemento", pintada: true, precio: 32320, litros: null, peso_kg: null }
  { articulo: "Jardinera", medidas: "100lrgx30anchx30alt", material: "Fibrocemento", pintada: true, precio: 39780, litros: null, peso_kg: null }
  { articulo: "Jardinera", medidas: "100lrgx22anchx20alt", material: "Fibrocemento", pintada: true, precio: 29840, litros: null, peso_kg: null }
  { articulo: "Jardinera", medidas: "100lrgx13anchx15alt", material: "Fibrocemento", pintada: true, precio: 22380, litros: null, peso_kg: null }
  { articulo: "Jardinera", medidas: "80lrgx20anchx40alt", material: "Fibrocemento", pintada: true, precio: 34800, litros: null, peso_kg: null }
  { articulo: "Jardinera", medidas: "80lrgx20anchx30alt", material: "Fibrocemento", pintada: true, precio: 26360, litros: null, peso_kg: null }
  { articulo: "Jardinera", medidas: "80lrgx30anchx30alt", material: "Fibrocemento", pintada: true, precio: 34800, litros: null, peso_kg: null }
  { articulo: "Jardinera", medidas: "80lrgx22anchx20alt", material: "Fibrocemento", pintada: true, precio: 22880, litros: null, peso_kg: null }
  { articulo: "Jardinera", medidas: "80lrgx13anchx15alt", material: "Fibrocemento", pintada: true, precio: 15920, litros: null, peso_kg: null }
  { articulo: "Jardinera", medidas: "60lrgx20anchx40alt", material: "Fibrocemento", pintada: true, precio: 22880, litros: null, peso_kg: null }
  { articulo: "Jardinera", medidas: "60lrgx20anchx30alt", material: "Fibrocemento", pintada: true, precio: 21380, litros: null, peso_kg: null }
  { articulo: "Jardinera", medidas: "60lrgx30anchx30alt", material: "Fibrocemento", pintada: true, precio: 24360, litros: null, peso_kg: null }
  { articulo: "Jardinera", medidas: "60lrgx30anchx35alt", material: "Fibrocemento", pintada: true, precio: 26360, litros: null, peso_kg: null }
  { articulo: "Jardinera", medidas: "60lrgx22anchx20alt", material: "Fibrocemento", pintada: true, precio: 18900, litros: null, peso_kg: null }
  { articulo: "Jardinera", medidas: "60lrgx13anchx15alt", material: "Fibrocemento", pintada: true, precio: 12930, litros: null, peso_kg: null }
  { articulo: "Jardinera", medidas: "40lrgx13anchx15alt", material: "Fibrocemento", pintada: true, precio: 10940, litros: null, peso_kg: null }
  { articulo: "Jardinera", medidas: "60lrgx20anchx10alt", material: "Fibrocemento", pintada: true, precio: 11130, litros: null, peso_kg: null }
  { articulo: "Jardinera", medidas: "40lrgx20anchx10alt", material: "Fibrocemento", pintada: true, precio: 9450, litros: null, peso_kg: null }
  { articulo: "Jardinera", medidas: "40lrgx20anchx20alt", material: "Fibrocemento", pintada: true, precio: 11430, litros: null, peso_kg: null }
  { articulo: "Jardinera", medidas: "50lrgx20anchx20alt", material: "Fibrocemento", pintada: true, precio: 13420, litros: null, peso_kg: null }
  // Paila
  { articulo: "Paila", medidas: "33cm", material: "Fibrocemento", pintada: true, precio: 9540, litros: null, peso_kg: null }
  { articulo: "Paila", medidas: "48cm", material: "Fibrocemento", pintada: true, precio: 14310, litros: null, peso_kg: null }
  { articulo: "Paila", medidas: "60cm", material: "Fibrocemento", pintada: true, precio: 18300, litros: null, peso_kg: null }
  // Piramidal
  { articulo: "Piramidal", medidas: "120altx45bocx30bas", material: "Fibrocemento", pintada: true, precio: 99450, litros: null, peso_kg: null }
  { articulo: "Piramidal", medidas: "100altx40bocx30bas", material: "Fibrocemento", pintada: true, precio: 79560, litros: null, peso_kg: null }
  { articulo: "Piramidal", medidas: "80altx50bocx30bas", material: "Fibrocemento", pintada: true, precio: 59670, litros: null, peso_kg: null }
  { articulo: "Piramidal", medidas: "80altx40bocx30bas", material: "Fibrocemento", pintada: true, precio: 39780, litros: null, peso_kg: null }
  { articulo: "Piramidal", medidas: "80altx35bocx25bas", material: "Fibrocemento", pintada: true, precio: 34800, litros: null, peso_kg: null }
  { articulo: "Piramidal", medidas: "80altx30bocx20bas", material: "Fibrocemento", pintada: true, precio: 29840, litros: null, peso_kg: null }
  { articulo: "Piramidal", medidas: "70altx35bocx25bas", material: "Fibrocemento", pintada: true, precio: 29840, litros: null, peso_kg: null }
  { articulo: "Piramidal", medidas: "70altx30bocx20bas", material: "Fibrocemento", pintada: true, precio: 22240, litros: null, peso_kg: null }
  { articulo: "Piramidal", medidas: "60altx35bocx25bas", material: "Fibrocemento", pintada: true, precio: 22140, litros: null, peso_kg: null }
  { articulo: "Piramidal", medidas: "60altx30bocx22bas", material: "Fibrocemento", pintada: true, precio: 21380, litros: null, peso_kg: null }
  { articulo: "Piramidal", medidas: "50altx40bocx30bas", material: "Fibrocemento", pintada: true, precio: 20880, litros: null, peso_kg: null }
  { articulo: "Piramidal", medidas: "45altx45bocx30bas", material: "Fibrocemento", pintada: true, precio: 20880, litros: null, peso_kg: null }
  { articulo: "Piramidal", medidas: "45altx35bocx22bas", material: "Fibrocemento", pintada: true, precio: 18390, litros: null, peso_kg: null }
  { articulo: "Piramidal", medidas: "50altx25bocx18bas", material: "Fibrocemento", pintada: true, precio: 16410, litros: null, peso_kg: null }
  { articulo: "Piramidal", medidas: "50altx20bocx15bas", material: "Fibrocemento", pintada: true, precio: 12440, litros: null, peso_kg: null }
  { articulo: "Piramidal", medidas: "40altx25bocx18bas", material: "Fibrocemento", pintada: true, precio: 14910, litros: null, peso_kg: null }
  { articulo: "Piramidal", medidas: "40altx30bocx20bas", material: "Fibrocemento", pintada: true, precio: 16410, litros: null, peso_kg: null }
  { articulo: "Piramidal", medidas: "35altx35bocx16bas", material: "Fibrocemento", pintada: true, precio: 14910, litros: null, peso_kg: null }
  { articulo: "Piramidal", medidas: "30altx30bocx15bas", material: "Fibrocemento", pintada: true, precio: 9450, litros: null, peso_kg: null }
  { articulo: "Piramidal", medidas: "30altx25bocx15bas", material: "Fibrocemento", pintada: true, precio: 8960, litros: null, peso_kg: null }
  { articulo: "Piramidal", medidas: "25altx25bocx15bas", material: "Fibrocemento", pintada: true, precio: 7950, litros: null, peso_kg: null }
  { articulo: "Piramidal", medidas: "20altx20bocx15bas", material: "Fibrocemento", pintada: true, precio: 6960, litros: null, peso_kg: null }
  { articulo: "Piramidal", medidas: "15altx15bocx10bas", material: "Fibrocemento", pintada: true, precio: 4360, litros: null, peso_kg: null }
  { articulo: "Piramidal", medidas: "20altx15bocx10bas", material: "Fibrocemento", pintada: true, precio: 4770, litros: null, peso_kg: null }
  { articulo: "Piramidal", medidas: "30altx15bocx10bas", material: "Fibrocemento", pintada: true, precio: 5560, litros: null, peso_kg: null }
  { articulo: "Piramidal", medidas: "40altx15bocx10bas", material: "Fibrocemento", pintada: true, precio: 6750, litros: null, peso_kg: null }
  // Plato
  { articulo: "Plato", medidas: "20cm", material: "Fibrocemento", pintada: true, precio: 3480, litros: null, peso_kg: null }
  { articulo: "Plato", medidas: "30cm", material: "Fibrocemento", pintada: true, precio: 5970, litros: null, peso_kg: null }
  { articulo: "Plato", medidas: "40cm", material: "Fibrocemento", pintada: true, precio: 9450, litros: null, peso_kg: null }
  { articulo: "Plato", medidas: "45cm", material: "Fibrocemento", pintada: true, precio: 12930, litros: null, peso_kg: null }
  { articulo: "Plato", medidas: "50cm", material: "Fibrocemento", pintada: true, precio: 15920, litros: null, peso_kg: null }
  { articulo: "Plato", medidas: "20", material: "Fibrocemento", pintada: true, precio: 3630, litros: null, peso_kg: null }
  { articulo: "Plato", medidas: "25", material: "Fibrocemento", pintada: true, precio: 5430, litros: null, peso_kg: null }
  { articulo: "Plato", medidas: "30", material: "Fibrocemento", pintada: true, precio: 7240, litros: null, peso_kg: null }
  { articulo: "Plato", medidas: "35", material: "Fibrocemento", pintada: true, precio: 9060, litros: null, peso_kg: null }
  { articulo: "Plato", medidas: "40", material: "Fibrocemento", pintada: true, precio: 10880, litros: null, peso_kg: null }
  // Premium
  { articulo: "Premium", medidas: "20cmx22", material: "Fibrocemento", pintada: true, precio: 7600, litros: null, peso_kg: null }
  { articulo: "Premium", medidas: "24cmx27", material: "Fibrocemento", pintada: true, precio: 11420, litros: null, peso_kg: null }
  { articulo: "Premium", medidas: "30cmx35", material: "Fibrocemento", pintada: true, precio: 17500, litros: null, peso_kg: null }
  // Prisma
  { articulo: "Prisma", medidas: "80altx40bocx40bas", material: "Fibrocemento", pintada: true, precio: 55480, litros: null, peso_kg: null }
  { articulo: "Prisma", medidas: "60altx40bocx40bas", material: "Fibrocemento", pintada: true, precio: 30220, litros: null, peso_kg: null }
  { articulo: "Prisma", medidas: "50altx40bocx40bas", material: "Fibrocemento", pintada: true, precio: 27840, litros: null, peso_kg: null }
  { articulo: "Prisma", medidas: "80altx30bocx30bas", material: "Fibrocemento", pintada: true, precio: 28640, litros: null, peso_kg: null }
  { articulo: "Prisma", medidas: "60altx30bocx30bas", material: "Fibrocemento", pintada: true, precio: 25460, litros: null, peso_kg: null }
  { articulo: "Prisma", medidas: "50altx30bocx30bas", material: "Fibrocemento", pintada: true, precio: 22280, litros: null, peso_kg: null }
  { articulo: "Prisma", medidas: "40altx30bocx30bas", material: "Fibrocemento", pintada: true, precio: 14320, litros: null, peso_kg: null }
  { articulo: "Prisma", medidas: "80altx20bocx20bas", material: "Fibrocemento", pintada: true, precio: 19100, litros: null, peso_kg: null }
  { articulo: "Prisma", medidas: "60altx20bocx20bas", material: "Fibrocemento", pintada: true, precio: 13530, litros: null, peso_kg: null }
  { articulo: "Prisma", medidas: "50altx20bocx20bas", material: "Fibrocemento", pintada: true, precio: 12740, litros: null, peso_kg: null }
  { articulo: "Prisma", medidas: "40altx20bocx20bas", material: "Fibrocemento", pintada: true, precio: 9320, litros: null, peso_kg: null }
  { articulo: "Prisma", medidas: "30altx20bocx20bas", material: "Fibrocemento", pintada: true, precio: 7760, litros: null, peso_kg: null }
  { articulo: "Prisma", medidas: "60altx15bocx15bas", material: "Fibrocemento", pintada: true, precio: 12480, litros: null, peso_kg: null }
  { articulo: "Prisma", medidas: "40altx15bocx15bas", material: "Fibrocemento", pintada: true, precio: 8120, litros: null, peso_kg: null }
  { articulo: "Prisma", medidas: "30altx15bocx15bas", material: "Fibrocemento", pintada: true, precio: 4890, litros: null, peso_kg: null }
  { articulo: "Prisma", medidas: "20altx15bocx15bas", material: "Fibrocemento", pintada: true, precio: 4380, litros: null, peso_kg: null }
  { articulo: "Prisma", medidas: "80altx15bocx15bas", material: "Fibrocemento", pintada: true, precio: 14320, litros: null, peso_kg: null }
  // Sanjuanina
  { articulo: "Sanjuanina", medidas: "63altx39bocx33bas", material: "Fibrocemento", pintada: true, precio: 47730, litros: null, peso_kg: null }
  { articulo: "Sanjuanina", medidas: "53altx36bocx30bas", material: "Fibrocemento", pintada: true, precio: 39780, litros: null, peso_kg: null }
  // Tinaja
  { articulo: "Tinaja", medidas: "50cm", material: "Fibrocemento", pintada: true, precio: 31820, litros: null, peso_kg: null }
  { articulo: "Tinaja", medidas: "60cm", material: "Fibrocemento", pintada: true, precio: 35800, litros: null, peso_kg: null }
  { articulo: "Tinaja", medidas: "80cm", material: "Fibrocemento", pintada: true, precio: 111980, litros: null, peso_kg: null }
  // Vaso Antiguo
  { articulo: "Vaso Antiguo", medidas: "45altx40bocx35bas", material: "Fibrocemento", pintada: true, precio: 19890, litros: null, peso_kg: null }
  { articulo: "Vaso Antiguo", medidas: "55altx50bocx35bas", material: "Fibrocemento", pintada: true, precio: 34800, litros: null, peso_kg: null }
  // Ánfora
  { articulo: "Ánfora", medidas: "75cm de alto", material: "Fibrocemento", pintada: true, precio: 69750, litros: null, peso_kg: null }
  { articulo: "Ánfora", medidas: "90cm de alto", material: "Fibrocemento", pintada: true, precio: 99000, litros: null, peso_kg: null }
  // Grecia
  { articulo: "Grecia", medidas: "24 h x 32 Ø x 15 ba", material: "Fibrocemento", pintada: true, precio: 27000, litros: null, peso_kg: null }
  { articulo: "Grecia", medidas: "36 h x 44 Ø x 20 ba", material: "Fibrocemento", pintada: true, precio: 31500, litros: null, peso_kg: null }
  { articulo: "Grecia", medidas: "42 h x 55 Ø x 25 ba", material: "Fibrocemento", pintada: true, precio: 34200, litros: null, peso_kg: null }
  { articulo: "Jardinera Punta Triángulo", medidas: "115x50x45", material: "Fibrocemento", pintada: true, precio: 109390, litros: null, peso_kg: null },
  { articulo: "Maceta Esférica", medidas: "20Ø", material: "Fibrocemento", pintada: true, precio: 10940, litros: null, peso_kg: null },
  { articulo: "Maceta Esférica", medidas: "30Ø", material: "Fibrocemento", pintada: true, precio: 15320, litros: null, peso_kg: null },
  { articulo: "Maceta Esférica", medidas: "40Ø", material: "Fibrocemento", pintada: true, precio: 21880, litros: null, peso_kg: null },
  { articulo: "Maceta Esférica", medidas: "50Ø", material: "Fibrocemento", pintada: true, precio: 43760, litros: null, peso_kg: null },
  { articulo: "Misionera Recta", medidas: "40h x 35Ø x 40b", material: "Fibrocemento", pintada: true, precio: 32180, litros: null, peso_kg: null },
  { articulo: "Misionera Recta", medidas: "55h x 35Ø x 40b", material: "Fibrocemento", pintada: true, precio: 36300, litros: null, peso_kg: null },
  { articulo: "Misionera Recta", medidas: "70h x 35Ø x 40b", material: "Fibrocemento", pintada: true, precio: 48680, litros: null, peso_kg: null },
  // FIBROCEMENTO SIN PINTAR
  // Misionera
  { articulo: "Misionera", medidas: "20altx18bocx16bas", material: "Fibrocemento", pintada: false, precio: 5300, litros: null, peso_kg: null }
  { articulo: "Misionera", medidas: "28altx18bocx15bas", material: "Fibrocemento", pintada: false, precio: 11670, litros: null, peso_kg: null }
  { articulo: "Misionera", medidas: "38altx28bocx20bas", material: "Fibrocemento", pintada: false, precio: 18560, litros: null, peso_kg: null }
  { articulo: "Misionera", medidas: "50altx37bocx32bas", material: "Fibrocemento", pintada: false, precio: 22800, litros: null, peso_kg: null }
  { articulo: "Misionera", medidas: "63altx40bocx32bas", material: "Fibrocemento", pintada: false, precio: 34470, litros: null, peso_kg: null }
  { articulo: "Misionera", medidas: "67altx37bocx32bas", material: "Fibrocemento", pintada: false, precio: 33380, litros: null, peso_kg: null }
  { articulo: "Misionera", medidas: "90altx40bocx35bas", material: "Fibrocemento", pintada: false, precio: 56350, litros: null, peso_kg: null }
  { articulo: "Misionera", medidas: "80altx50bocx40bas", material: "Fibrocemento", pintada: false, precio: 59670, litros: null, peso_kg: null }
  // Misionera con Borde
  { articulo: "Misionera con Borde", medidas: "35CM", material: "Fibrocemento", pintada: false, precio: 18690, litros: null, peso_kg: null }
  { articulo: "Misionera con Borde", medidas: "45CM", material: "Fibrocemento", pintada: false, precio: 24500, litros: null, peso_kg: null }
  { articulo: "Misionera con Borde", medidas: "55CM", material: "Fibrocemento", pintada: false, precio: 44470, litros: null, peso_kg: null }
  // Salteña
  { articulo: "Salteña", medidas: "77altx65bocx32bas", material: "Fibrocemento", pintada: false, precio: 68260, litros: null, peso_kg: null }
  { articulo: "Salteña", medidas: "50altx65bocx32bas", material: "Fibrocemento", pintada: false, precio: 56960, litros: null, peso_kg: null }
  { articulo: "Salteña", medidas: "65altx50 bocx25 bas", material: "Fibrocemento", pintada: false, precio: 37200, litros: null, peso_kg: null }
  { articulo: "Salteña", medidas: "45altx40bocx20bas", material: "Fibrocemento", pintada: false, precio: 18230, litros: null, peso_kg: null }
  // Copa
  { articulo: "Copa", medidas: "70altx50bocx28bas", material: "Fibrocemento", pintada: false, precio: 57680, litros: null, peso_kg: null }
  { articulo: "Copa", medidas: "55altx45bocx28bas", material: "Fibrocemento", pintada: false, precio: 26520, litros: null, peso_kg: null }
  { articulo: "Copa", medidas: "40altx33bocx16bas", material: "Fibrocemento", pintada: false, precio: 13260, litros: null, peso_kg: null }
  // Bols
  { articulo: "Bols", medidas: "28altx55bocx27bas", material: "Fibrocemento", pintada: false, precio: 16970, litros: null, peso_kg: null }
  { articulo: "Bols", medidas: "30altx80bocx33bas", material: "Fibrocemento", pintada: false, precio: 27180, litros: null, peso_kg: null }
  // Cónica / Tradicional
  { articulo: "Cónica / Tradicional", medidas: "30altx30bocx18bas", material: "Fibrocemento", pintada: false, precio: 9940, litros: null, peso_kg: null }
  { articulo: "Cónica / Tradicional", medidas: "40altx40bocx25bas", material: "Fibrocemento", pintada: false, precio: 18230, litros: null, peso_kg: null }
  { articulo: "Cónica / Tradicional", medidas: "50altx50bocx29bas", material: "Fibrocemento", pintada: false, precio: 21550, litros: null, peso_kg: null }
  { articulo: "Cónica / Tradicional", medidas: "60altx60bocx36bas", material: "Fibrocemento", pintada: false, precio: 29830, litros: null, peso_kg: null }
  { articulo: "Cónica / Tradicional", medidas: "70altx70bocx44bas", material: "Fibrocemento", pintada: false, precio: 45000, litros: null, peso_kg: null }
  // Andina
  { articulo: "Andina", medidas: "35altx40bocx26bas", material: "Fibrocemento", pintada: false, precio: 19060, litros: null, peso_kg: null }
  { articulo: "Andina", medidas: "43altx50bocx33bas", material: "Fibrocemento", pintada: false, precio: 25410, litros: null, peso_kg: null }
  { articulo: "Andina", medidas: "55altx65bocx43bas", material: "Fibrocemento", pintada: false, precio: 45380, litros: null, peso_kg: null }
  { articulo: "Andina", medidas: "69altx80bocx53bas", material: "Fibrocemento", pintada: false, precio: 93300, litros: null, peso_kg: null }
  // Cilindro
  { articulo: "Cilindro", medidas: "30altx30bocx30bas", material: "Fibrocemento", pintada: false, precio: 8490, litros: null, peso_kg: null }
  { articulo: "Cilindro", medidas: "50altx30bocx30bas", material: "Fibrocemento", pintada: false, precio: 12750, litros: null, peso_kg: null }
  { articulo: "Cilindro", medidas: "45altx45bocx45bas", material: "Fibrocemento", pintada: false, precio: 17500, litros: null, peso_kg: null }
  { articulo: "Cilindro", medidas: "45altx40bocx45bas", material: "Fibrocemento", pintada: false, precio: 39780, litros: null, peso_kg: null }
  { articulo: "Cilindro", medidas: "52altx52bocx52bas", material: "Fibrocemento", pintada: false, precio: 21210, litros: null, peso_kg: null }
  { articulo: "Cilindro", medidas: "60altx60bocx60bas", material: "Fibrocemento", pintada: false, precio: 39780, litros: null, peso_kg: null }
  // Cono
  { articulo: "Cono", medidas: "100altx45bocx30bas", material: "Fibrocemento", pintada: false, precio: 37130, litros: null, peso_kg: null }
  { articulo: "Cono", medidas: "80altx40bocx30bas", material: "Fibrocemento", pintada: false, precio: 23870, litros: null, peso_kg: null }
  { articulo: "Cono", medidas: "60altx38bocx30bas", material: "Fibrocemento", pintada: false, precio: 18560, litros: null, peso_kg: null }
  // Cono Moderno
  { articulo: "Cono Moderno", medidas: "40altx31bocx22bas", material: "Fibrocemento", pintada: false, precio: 13260, litros: null, peso_kg: null }
  { articulo: "Cono Moderno", medidas: "55altx36bocx24bas", material: "Fibrocemento", pintada: false, precio: 17240, litros: null, peso_kg: null }
  { articulo: "Cono Moderno", medidas: "70altx46bocx24bas", material: "Fibrocemento", pintada: false, precio: 23200, litros: null, peso_kg: null }
  { articulo: "Cono Moderno", medidas: "80altx46bocx28bas", material: "Fibrocemento", pintada: false, precio: 30440, litros: null, peso_kg: null }
  // Cubo
  { articulo: "Cubo", medidas: "15altx15bocx15bas", material: "Fibrocemento", pintada: false, precio: 3980, litros: null, peso_kg: null }
  { articulo: "Cubo", medidas: "20altx20bocx20bas", material: "Fibrocemento", pintada: false, precio: 4970, litros: null, peso_kg: null }
  { articulo: "Cubo", medidas: "25altx25bocx25bas", material: "Fibrocemento", pintada: false, precio: 7290, litros: null, peso_kg: null }
  { articulo: "Cubo", medidas: "30altx30bocx30bas", material: "Fibrocemento", pintada: false, precio: 9940, litros: null, peso_kg: null }
  { articulo: "Cubo", medidas: "35altx35bocx35bas", material: "Fibrocemento", pintada: false, precio: 12600, litros: null, peso_kg: null }
  { articulo: "Cubo", medidas: "40altx40bocx40bas", material: "Fibrocemento", pintada: false, precio: 14920, litros: null, peso_kg: null }
  { articulo: "Cubo", medidas: "45altx45bocx45bas", material: "Fibrocemento", pintada: false, precio: 19890, litros: null, peso_kg: null }
  { articulo: "Cubo", medidas: "50altx50bocx50bas", material: "Fibrocemento", pintada: false, precio: 26520, litros: null, peso_kg: null }
  { articulo: "Cubo", medidas: "60altx60bocx60bas", material: "Fibrocemento", pintada: false, precio: 46410, litros: null, peso_kg: null }
  // Esfera
  { articulo: "Esfera", medidas: "20cm", material: "Fibrocemento", pintada: false, precio: 6630, litros: null, peso_kg: null }
  { articulo: "Esfera", medidas: "28cm", material: "Fibrocemento", pintada: false, precio: 9280, litros: null, peso_kg: null }
  { articulo: "Esfera", medidas: "40cm", material: "Fibrocemento", pintada: false, precio: 13260, litros: null, peso_kg: null }
  { articulo: "Esfera", medidas: "50cm", material: "Fibrocemento", pintada: false, precio: 26520, litros: null, peso_kg: null }
  // Jardinera
  { articulo: "Jardinera", medidas: "135lrgx50anchx45alt", material: "Fibrocemento", pintada: false, precio: 82870, litros: null, peso_kg: null }
  { articulo: "Jardinera", medidas: "125lrgx50anchx45alt", material: "Fibrocemento", pintada: false, precio: 72920, litros: null, peso_kg: null }
  { articulo: "Jardinera", medidas: "115lrgx50anchx45alt", material: "Fibrocemento", pintada: false, precio: 66300, litros: null, peso_kg: null }
  { articulo: "Jardinera", medidas: "100lrgx40anchx40alt", material: "Fibrocemento", pintada: false, precio: 39780, litros: null, peso_kg: null }
  { articulo: "Jardinera", medidas: "100lrgx35anchx40alt", material: "Fibrocemento", pintada: false, precio: 36460, litros: null, peso_kg: null }
  { articulo: "Jardinera", medidas: "100lrgx30anchx35alt", material: "Fibrocemento", pintada: false, precio: 29830, litros: null, peso_kg: null }
  { articulo: "Jardinera", medidas: "80lrgx35anchx40alt", material: "Fibrocemento", pintada: false, precio: 26520, litros: null, peso_kg: null }
  { articulo: "Jardinera", medidas: "80lrgx30anchx35alt", material: "Fibrocemento", pintada: false, precio: 23200, litros: null, peso_kg: null }
  { articulo: "Jardinera", medidas: "100lrgx20anchx40alt", material: "Fibrocemento", pintada: false, precio: 26520, litros: null, peso_kg: null }
  { articulo: "Jardinera", medidas: "100lrgx20anchx30alt", material: "Fibrocemento", pintada: false, precio: 21550, litros: null, peso_kg: null }
  { articulo: "Jardinera", medidas: "100lrgx30anchx30alt", material: "Fibrocemento", pintada: false, precio: 26520, litros: null, peso_kg: null }
  { articulo: "Jardinera", medidas: "100lrgx22anchx20alt", material: "Fibrocemento", pintada: false, precio: 19890, litros: null, peso_kg: null }
  { articulo: "Jardinera", medidas: "100lrgx13anchx15alt", material: "Fibrocemento", pintada: false, precio: 14920, litros: null, peso_kg: null }
  { articulo: "Jardinera", medidas: "80lrgx20anchx40alt", material: "Fibrocemento", pintada: false, precio: 23200, litros: null, peso_kg: null }
  { articulo: "Jardinera", medidas: "80lrgx20anchx30alt", material: "Fibrocemento", pintada: false, precio: 17570, litros: null, peso_kg: null }
  { articulo: "Jardinera", medidas: "80lrgx30anchx30alt", material: "Fibrocemento", pintada: false, precio: 23200, litros: null, peso_kg: null }
  { articulo: "Jardinera", medidas: "80lrgx22anchx20alt", material: "Fibrocemento", pintada: false, precio: 15250, litros: null, peso_kg: null }
  { articulo: "Jardinera", medidas: "80lrgx13anchx15alt", material: "Fibrocemento", pintada: false, precio: 10610, litros: null, peso_kg: null }
  { articulo: "Jardinera", medidas: "60lrgx20anchx40alt", material: "Fibrocemento", pintada: false, precio: 15250, litros: null, peso_kg: null }
  { articulo: "Jardinera", medidas: "60lrgx20anchx30alt", material: "Fibrocemento", pintada: false, precio: 14250, litros: null, peso_kg: null }
  { articulo: "Jardinera", medidas: "60lrgx30anchx30alt", material: "Fibrocemento", pintada: false, precio: 16240, litros: null, peso_kg: null }
  { articulo: "Jardinera", medidas: "60lrgx30anchx35alt", material: "Fibrocemento", pintada: false, precio: 17570, litros: null, peso_kg: null }
  { articulo: "Jardinera", medidas: "60lrgx22anchx20alt", material: "Fibrocemento", pintada: false, precio: 12600, litros: null, peso_kg: null }
  { articulo: "Jardinera", medidas: "60lrgx13anchx15alt", material: "Fibrocemento", pintada: false, precio: 8620, litros: null, peso_kg: null }
  { articulo: "Jardinera", medidas: "40lrgx13anchx15alt", material: "Fibrocemento", pintada: false, precio: 7290, litros: null, peso_kg: null }
  { articulo: "Jardinera", medidas: "60lrgx20anchx10alt", material: "Fibrocemento", pintada: false, precio: 7420, litros: null, peso_kg: null }
  { articulo: "Jardinera", medidas: "40lrgx20anchx10alt", material: "Fibrocemento", pintada: false, precio: 6300, litros: null, peso_kg: null }
  { articulo: "Jardinera", medidas: "40lrgx20anchx20alt", material: "Fibrocemento", pintada: false, precio: 7620, litros: null, peso_kg: null }
  { articulo: "Jardinera", medidas: "50lrgx20anchx20alt", material: "Fibrocemento", pintada: false, precio: 8950, litros: null, peso_kg: null }
  // Paila
  { articulo: "Paila", medidas: "33cm", material: "Fibrocemento", pintada: false, precio: 6360, litros: null, peso_kg: null }
  { articulo: "Paila", medidas: "48cm", material: "Fibrocemento", pintada: false, precio: 9540, litros: null, peso_kg: null }
  { articulo: "Paila", medidas: "60cm", material: "Fibrocemento", pintada: false, precio: 12200, litros: null, peso_kg: null }
  // Piramidal
  { articulo: "Piramidal", medidas: "120altx45bocx30bas", material: "Fibrocemento", pintada: false, precio: 66300, litros: null, peso_kg: null }
  { articulo: "Piramidal", medidas: "100altx40bocx30bas", material: "Fibrocemento", pintada: false, precio: 53040, litros: null, peso_kg: null }
  { articulo: "Piramidal", medidas: "80altx50bocx30bas", material: "Fibrocemento", pintada: false, precio: 39780, litros: null, peso_kg: null }
  { articulo: "Piramidal", medidas: "80altx40bocx30bas", material: "Fibrocemento", pintada: false, precio: 26520, litros: null, peso_kg: null }
  { articulo: "Piramidal", medidas: "80altx35bocx25bas", material: "Fibrocemento", pintada: false, precio: 23200, litros: null, peso_kg: null }
  { articulo: "Piramidal", medidas: "80altx30bocx20bas", material: "Fibrocemento", pintada: false, precio: 19890, litros: null, peso_kg: null }
  { articulo: "Piramidal", medidas: "70altx35bocx25bas", material: "Fibrocemento", pintada: false, precio: 19890, litros: null, peso_kg: null }
  { articulo: "Piramidal", medidas: "70altx30bocx20bas", material: "Fibrocemento", pintada: false, precio: 14830, litros: null, peso_kg: null }
  { articulo: "Piramidal", medidas: "60altx35bocx25bas", material: "Fibrocemento", pintada: false, precio: 14760, litros: null, peso_kg: null }
  { articulo: "Piramidal", medidas: "60altx30bocx22bas", material: "Fibrocemento", pintada: false, precio: 14250, litros: null, peso_kg: null }
  { articulo: "Piramidal", medidas: "50altx40bocx30bas", material: "Fibrocemento", pintada: false, precio: 13920, litros: null, peso_kg: null }
  { articulo: "Piramidal", medidas: "45altx45bocx30bas", material: "Fibrocemento", pintada: false, precio: 13920, litros: null, peso_kg: null }
  { articulo: "Piramidal", medidas: "45altx35bocx22bas", material: "Fibrocemento", pintada: false, precio: 12260, litros: null, peso_kg: null }
  { articulo: "Piramidal", medidas: "50altx25bocx18bas", material: "Fibrocemento", pintada: false, precio: 10940, litros: null, peso_kg: null }
  { articulo: "Piramidal", medidas: "50altx20bocx15bas", material: "Fibrocemento", pintada: false, precio: 8290, litros: null, peso_kg: null }
  { articulo: "Piramidal", medidas: "40altx25bocx18bas", material: "Fibrocemento", pintada: false, precio: 9940, litros: null, peso_kg: null }
  { articulo: "Piramidal", medidas: "40altx30bocx20bas", material: "Fibrocemento", pintada: false, precio: 10940, litros: null, peso_kg: null }
  { articulo: "Piramidal", medidas: "35altx35bocx16bas", material: "Fibrocemento", pintada: false, precio: 9940, litros: null, peso_kg: null }
  { articulo: "Piramidal", medidas: "30altx30bocx15bas", material: "Fibrocemento", pintada: false, precio: 6300, litros: null, peso_kg: null }
  { articulo: "Piramidal", medidas: "30altx25bocx15bas", material: "Fibrocemento", pintada: false, precio: 5970, litros: null, peso_kg: null }
  { articulo: "Piramidal", medidas: "25altx25bocx15bas", material: "Fibrocemento", pintada: false, precio: 5300, litros: null, peso_kg: null }
  { articulo: "Piramidal", medidas: "20altx20bocx15bas", material: "Fibrocemento", pintada: false, precio: 4640, litros: null, peso_kg: null }
  { articulo: "Piramidal", medidas: "15altx15bocx10bas", material: "Fibrocemento", pintada: false, precio: 2910, litros: null, peso_kg: null }
  { articulo: "Piramidal", medidas: "20altx15bocx10bas", material: "Fibrocemento", pintada: false, precio: 3180, litros: null, peso_kg: null }
  { articulo: "Piramidal", medidas: "30altx15bocx10bas", material: "Fibrocemento", pintada: false, precio: 3710, litros: null, peso_kg: null }
  { articulo: "Piramidal", medidas: "40altx15bocx10bas", material: "Fibrocemento", pintada: false, precio: 4500, litros: null, peso_kg: null }
  // Plato
  { articulo: "Plato", medidas: "20cm", material: "Fibrocemento", pintada: false, precio: 2320, litros: null, peso_kg: null }
  { articulo: "Plato", medidas: "30cm", material: "Fibrocemento", pintada: false, precio: 3980, litros: null, peso_kg: null }
  { articulo: "Plato", medidas: "40cm", material: "Fibrocemento", pintada: false, precio: 6300, litros: null, peso_kg: null }
  { articulo: "Plato", medidas: "45cm", material: "Fibrocemento", pintada: false, precio: 8620, litros: null, peso_kg: null }
  { articulo: "Plato", medidas: "50cm", material: "Fibrocemento", pintada: false, precio: 10610, litros: null, peso_kg: null }
  { articulo: "Plato", medidas: "20", material: "Fibrocemento", pintada: false, precio: 2420, litros: null, peso_kg: null }
  { articulo: "Plato", medidas: "25", material: "Fibrocemento", pintada: false, precio: 3620, litros: null, peso_kg: null }
  { articulo: "Plato", medidas: "30", material: "Fibrocemento", pintada: false, precio: 4830, litros: null, peso_kg: null }
  { articulo: "Plato", medidas: "35", material: "Fibrocemento", pintada: false, precio: 6040, litros: null, peso_kg: null }
  { articulo: "Plato", medidas: "40", material: "Fibrocemento", pintada: false, precio: 7250, litros: null, peso_kg: null }
  // Premium
  { articulo: "Premium", medidas: "20cmx22", material: "Fibrocemento", pintada: false, precio: 5070, litros: null, peso_kg: null }
  { articulo: "Premium", medidas: "24cmx27", material: "Fibrocemento", pintada: false, precio: 7610, litros: null, peso_kg: null }
  { articulo: "Premium", medidas: "30cmx35", material: "Fibrocemento", pintada: false, precio: 11670, litros: null, peso_kg: null }
  // Prisma
  { articulo: "Prisma", medidas: "80altx40bocx40bas", material: "Fibrocemento", pintada: false, precio: 36990, litros: null, peso_kg: null }
  { articulo: "Prisma", medidas: "60altx40bocx40bas", material: "Fibrocemento", pintada: false, precio: 20150, litros: null, peso_kg: null }
  { articulo: "Prisma", medidas: "50altx40bocx40bas", material: "Fibrocemento", pintada: false, precio: 18560, litros: null, peso_kg: null }
  { articulo: "Prisma", medidas: "80altx30bocx30bas", material: "Fibrocemento", pintada: false, precio: 19090, litros: null, peso_kg: null }
  { articulo: "Prisma", medidas: "60altx30bocx30bas", material: "Fibrocemento", pintada: false, precio: 16970, litros: null, peso_kg: null }
  { articulo: "Prisma", medidas: "50altx30bocx30bas", material: "Fibrocemento", pintada: false, precio: 14850, litros: null, peso_kg: null }
  { articulo: "Prisma", medidas: "40altx30bocx30bas", material: "Fibrocemento", pintada: false, precio: 9550, litros: null, peso_kg: null }
  { articulo: "Prisma", medidas: "80altx20bocx20bas", material: "Fibrocemento", pintada: false, precio: 12730, litros: null, peso_kg: null }
  { articulo: "Prisma", medidas: "60altx20bocx20bas", material: "Fibrocemento", pintada: false, precio: 9020, litros: null, peso_kg: null }
  { articulo: "Prisma", medidas: "50altx20bocx20bas", material: "Fibrocemento", pintada: false, precio: 8490, litros: null, peso_kg: null }
  { articulo: "Prisma", medidas: "40altx20bocx20bas", material: "Fibrocemento", pintada: false, precio: 6210, litros: null, peso_kg: null }
  { articulo: "Prisma", medidas: "30altx20bocx20bas", material: "Fibrocemento", pintada: false, precio: 5170, litros: null, peso_kg: null }
  { articulo: "Prisma", medidas: "60altx15bocx15bas", material: "Fibrocemento", pintada: false, precio: 8320, litros: null, peso_kg: null }
  { articulo: "Prisma", medidas: "40altx15bocx15bas", material: "Fibrocemento", pintada: false, precio: 5410, litros: null, peso_kg: null }
  { articulo: "Prisma", medidas: "30altx15bocx15bas", material: "Fibrocemento", pintada: false, precio: 3260, litros: null, peso_kg: null }
  { articulo: "Prisma", medidas: "20altx15bocx15bas", material: "Fibrocemento", pintada: false, precio: 2920, litros: null, peso_kg: null }
  { articulo: "Prisma", medidas: "80altx15bocx15bas", material: "Fibrocemento", pintada: false, precio: 9550, litros: null, peso_kg: null }
  // Sanjuanina
  { articulo: "Sanjuanina", medidas: "63altx39bocx33bas", material: "Fibrocemento", pintada: false, precio: 31820, litros: null, peso_kg: null }
  { articulo: "Sanjuanina", medidas: "53altx36bocx30bas", material: "Fibrocemento", pintada: false, precio: 26520, litros: null, peso_kg: null }
  // Tinaja
  { articulo: "Tinaja", medidas: "50cm", material: "Fibrocemento", pintada: false, precio: 21210, litros: null, peso_kg: null }
  { articulo: "Tinaja", medidas: "60cm", material: "Fibrocemento", pintada: false, precio: 23870, litros: null, peso_kg: null }
  { articulo: "Tinaja", medidas: "80cm", material: "Fibrocemento", pintada: false, precio: 74650, litros: null, peso_kg: null }
  // Vaso Antiguo
  { articulo: "Vaso Antiguo", medidas: "45altx40bocx35bas", material: "Fibrocemento", pintada: false, precio: 13260, litros: null, peso_kg: null }
  { articulo: "Vaso Antiguo", medidas: "55altx50bocx35bas", material: "Fibrocemento", pintada: false, precio: 23200, litros: null, peso_kg: null }
  // Ánfora
  { articulo: "Ánfora", medidas: "75cm de alto", material: "Fibrocemento", pintada: false, precio: 46500, litros: null, peso_kg: null }
  { articulo: "Ánfora", medidas: "90cm de alto", material: "Fibrocemento", pintada: false, precio: 66000, litros: null, peso_kg: null }
  // Grecia
  { articulo: "Grecia", medidas: "24 h x 32 Ø x 15 ba", material: "Fibrocemento", pintada: false, precio: 18000, litros: null, peso_kg: null }
  { articulo: "Grecia", medidas: "36 h x 44 Ø x 20 ba", material: "Fibrocemento", pintada: false, precio: 21000, litros: null, peso_kg: null }
  { articulo: "Grecia", medidas: "42 h x 55 Ø x 25 ba", material: "Fibrocemento", pintada: false, precio: 22800, litros: null, peso_kg: null }
  { articulo: "Jardinera Punta Triángulo", medidas: "115x50x45", material: "Fibrocemento", pintada: false, precio: 102760, litros: null, peso_kg: null },
  { articulo: "Maceta Esférica", medidas: "20Ø", material: "Fibrocemento", pintada: false, precio: 10280, litros: null, peso_kg: null },
  { articulo: "Maceta Esférica", medidas: "30Ø", material: "Fibrocemento", pintada: false, precio: 14390, litros: null, peso_kg: null },
  { articulo: "Maceta Esférica", medidas: "40Ø", material: "Fibrocemento", pintada: false, precio: 20560, litros: null, peso_kg: null },
  { articulo: "Maceta Esférica", medidas: "50Ø", material: "Fibrocemento", pintada: false, precio: 41110, litros: null, peso_kg: null },
  { articulo: "Misionera Recta", medidas: "40h x 35Ø x 40b", material: "Fibrocemento", pintada: false, precio: 30230, litros: null, peso_kg: null },
  { articulo: "Misionera Recta", medidas: "55h x 35Ø x 40b", material: "Fibrocemento", pintada: false, precio: 34100, litros: null, peso_kg: null },
  { articulo: "Misionera Recta", medidas: "70h x 35Ø x 40b", material: "Fibrocemento", pintada: false, precio: 45730, litros: null, peso_kg: null },
  // ROTOMOLDEADO
  { articulo: "Misionera", medidas: "20h x 15Ø x 20b", material: "Rotomoldeado", pintada: true, precio: 6110, litros: null, peso_kg: null },
  { articulo: "Misionera", medidas: "30h x 23Ø x 28b", material: "Rotomoldeado", pintada: true, precio: 14030, litros: null, peso_kg: null },
  { articulo: "Misionera Lisa", medidas: "38h x 28Ø x 20b", material: "Rotomoldeado", pintada: true, precio: 35090, litros: null, peso_kg: null },
  { articulo: "Misionera Lisa", medidas: "50h x 37Ø x 32b", material: "Rotomoldeado", pintada: true, precio: 58860, litros: null, peso_kg: null },
  { articulo: "Misionera Lisa", medidas: "60h x 40Ø x 32b", material: "Rotomoldeado", pintada: true, precio: 90600, litros: null, peso_kg: null },
  { articulo: "Cuenco", medidas: "32h x 30Ø x 32b", material: "Rotomoldeado", pintada: true, precio: 45300, litros: null, peso_kg: null },
  { articulo: "Cuenco", medidas: "48h x 46Ø x 46b", material: "Rotomoldeado", pintada: true, precio: 90600, litros: null, peso_kg: null },
  { articulo: "Gota", medidas: "40h x 35Ø x 40b", material: "Rotomoldeado", pintada: true, precio: 36210, litros: null, peso_kg: null },
  { articulo: "Gota", medidas: "55h x 35Ø x 40b", material: "Rotomoldeado", pintada: true, precio: 49850, litros: null, peso_kg: null },
  { articulo: "Gota", medidas: "70h x 35Ø x 40b", material: "Rotomoldeado", pintada: true, precio: 61170, litros: null, peso_kg: null },
  { articulo: "Copa", medidas: "40h x 33Ø x 16b", material: "Rotomoldeado", pintada: true, precio: 28140, litros: null, peso_kg: null },
  { articulo: "Copa", medidas: "55h x 47Ø x 28b", material: "Rotomoldeado", pintada: true, precio: 58580, litros: null, peso_kg: null },
  { articulo: "Copa", medidas: "70h x 60Ø x 28b", material: "Rotomoldeado", pintada: true, precio: 93720, litros: null, peso_kg: null },
  { articulo: "Misionera Texturada", medidas: "20h x 15Ø x 18b", material: "Rotomoldeado", pintada: true, precio: 6630, litros: null, peso_kg: null },
  { articulo: "Misionera Texturada", medidas: "30h x 22Ø x 18b", material: "Rotomoldeado", pintada: true, precio: 20550, litros: null, peso_kg: null },
  { articulo: "Misionera Texturada", medidas: "29h x 22Ø x 18b", material: "Rotomoldeado", pintada: true, precio: 34850, litros: null, peso_kg: null },
  { articulo: "Plato Texturado", medidas: "20Ø", material: "Rotomoldeado", pintada: true, precio: 6360, litros: null, peso_kg: null },
  { articulo: "Plato Texturado", medidas: "30Ø", material: "Rotomoldeado", pintada: true, precio: 10890, litros: null, peso_kg: null },
  { articulo: "Plato Texturado", medidas: "40Ø", material: "Rotomoldeado", pintada: true, precio: 15430, litros: null, peso_kg: null },
  { articulo: "Cono Paris Texturado", medidas: "30h x 32Ø x 25b", material: "Rotomoldeado", pintada: true, precio: 35040, litros: null, peso_kg: null },
  { articulo: "Cono Paris Texturado", medidas: "44h x 34Ø x 24b", material: "Rotomoldeado", pintada: true, precio: 43200, litros: null, peso_kg: null },
  { articulo: "Cubo", medidas: "20x20x20", material: "Rotomoldeado", pintada: true, precio: 11900, litros: null, peso_kg: null },
  { articulo: "Cubo", medidas: "25x25x25", material: "Rotomoldeado", pintada: true, precio: 16460, litros: null, peso_kg: null },
  { articulo: "Cubo", medidas: "30x30x30", material: "Rotomoldeado", pintada: true, precio: 21210, litros: null, peso_kg: null },
  { articulo: "Cubo", medidas: "35x35x35", material: "Rotomoldeado", pintada: true, precio: 31190, litros: null, peso_kg: null },
  { articulo: "Cubo", medidas: "40x40x40", material: "Rotomoldeado", pintada: true, precio: 45870, litros: null, peso_kg: null },
  { articulo: "Cubo", medidas: "50x50x50", material: "Rotomoldeado", pintada: true, precio: 78790, litros: null, peso_kg: null },
  { articulo: "Piramidal", medidas: "40h x 25bo x 22b", material: "Rotomoldeado", pintada: true, precio: 20460, litros: null, peso_kg: null },
  { articulo: "Piramidal", medidas: "50h x 25bo x 22b", material: "Rotomoldeado", pintada: true, precio: 25080, litros: null, peso_kg: null },
  { articulo: "Piramidal", medidas: "60h x 30bo x 25b", material: "Rotomoldeado", pintada: true, precio: 36300, litros: null, peso_kg: null },
  { articulo: "Piramidal", medidas: "70h x 35bo x 30b", material: "Rotomoldeado", pintada: true, precio: 48180, litros: null, peso_kg: null },
  { articulo: "Cono", medidas: "50cm de alto", material: "Rotomoldeado", pintada: true, precio: 26900, litros: null, peso_kg: null },
  { articulo: "Cono", medidas: "80cm de alto", material: "Rotomoldeado", pintada: true, precio: 50330, litros: null, peso_kg: null },
  { articulo: "Cilindro", medidas: "30x30", material: "Rotomoldeado", pintada: true, precio: 15630, litros: null, peso_kg: null },
  { articulo: "Cilindro", medidas: "40x40", material: "Rotomoldeado", pintada: true, precio: 42240, litros: null, peso_kg: null },
  { articulo: "Cilindro", medidas: "40x30", material: "Rotomoldeado", pintada: true, precio: 22330, litros: null, peso_kg: null },
  { articulo: "Cilindro", medidas: "50x30", material: "Rotomoldeado", pintada: true, precio: 24730, litros: null, peso_kg: null },
  { articulo: "Cilindro", medidas: "50x50", material: "Rotomoldeado", pintada: true, precio: 63030, litros: null, peso_kg: null },
  { articulo: "Jardinera", medidas: "60x20x20", material: "Rotomoldeado", pintada: true, precio: 27480, litros: null, peso_kg: null },
  { articulo: "Jardinera", medidas: "60x20x30", material: "Rotomoldeado", pintada: true, precio: 28730, litros: null, peso_kg: null },
  { articulo: "Jardinera", medidas: "60x27x30", material: "Rotomoldeado", pintada: true, precio: 43560, litros: null, peso_kg: null },
  { articulo: "Jardinera", medidas: "80x20x20", material: "Rotomoldeado", pintada: true, precio: 36200, litros: null, peso_kg: null },
  { articulo: "Jardinera", medidas: "80x20x30", material: "Rotomoldeado", pintada: true, precio: 41470, litros: null, peso_kg: null },
  { articulo: "Jardinera", medidas: "80x27x30", material: "Rotomoldeado", pintada: true, precio: 57590, litros: null, peso_kg: null },
  { articulo: "Jardinera", medidas: "100x20x20", material: "Rotomoldeado", pintada: true, precio: 43560, litros: null, peso_kg: null },
  { articulo: "Jardinera", medidas: "100x27x30", material: "Rotomoldeado", pintada: true, precio: 71440, litros: null, peso_kg: null },
  // FIBRA DE VIDRIO
  { articulo: "Misionera Fibra de Vidrio", medidas: "29h x 27Ø x 20b", material: "Fibra de Vidrio", pintada: true, precio: 125380, litros: null, peso_kg: null },
  { articulo: "Misionera Fibra de Vidrio", medidas: "39h x 37Ø x 20b", material: "Fibra de Vidrio", pintada: true, precio: 174320, litros: null, peso_kg: null },
  { articulo: "Misionera Fibra de Vidrio", medidas: "50h x 47Ø x 32b", material: "Fibra de Vidrio", pintada: true, precio: 219150, litros: null, peso_kg: null },
  { articulo: "Cuenco Fibra de Vidrio", medidas: "30h x 40Ø x 30b", material: "Fibra de Vidrio", pintada: true, precio: 120320, litros: null, peso_kg: null },
  { articulo: "Cuenco Fibra de Vidrio", medidas: "40h x 50Ø x 40b", material: "Fibra de Vidrio", pintada: true, precio: 158950, litros: null, peso_kg: null },
  { articulo: "Cuenco Fibra de Vidrio", medidas: "45h x 45Ø x 40b", material: "Fibra de Vidrio", pintada: true, precio: 158950, litros: null, peso_kg: null },
  { articulo: "Cuenco Fibra de Vidrio", medidas: "50h x 60Ø x 45b", material: "Fibra de Vidrio", pintada: true, precio: 234240, litros: null, peso_kg: null },
  // CERÁMICA
  { articulo: "Coco Nº1", medidas: "10h x 11d x 8b", material: "Cerámica", pintada: false, precio: 23210, litros: null, peso_kg: null },
  { articulo: "Coco Nº2", medidas: "14h x 14d x 11b", material: "Cerámica", pintada: false, precio: 35640, litros: null, peso_kg: null },
  { articulo: "Coco Nº3", medidas: "18h x 17d x 14b", material: "Cerámica", pintada: false, precio: 63690, litros: null, peso_kg: null },
  { articulo: "Coco Nº4", medidas: "24h x 22d x 18b", material: "Cerámica", pintada: false, precio: 117650, litros: null, peso_kg: null },
  { articulo: "Coco Nº5", medidas: "32h x 28d x 28b", material: "Cerámica", pintada: false, precio: 185790, litros: null, peso_kg: null },
  { articulo: "Cono Curvo", medidas: "60h x 40d", material: "Cerámica", pintada: false, precio: 396000, litros: null, peso_kg: null },
  { articulo: "Maceta Nº1", medidas: "9h x 11d x 6b", material: "Cerámica", pintada: false, precio: 13140, litros: null, peso_kg: null },
  { articulo: "Maceta Nº2", medidas: "14h x 16d x 10b", material: "Cerámica", pintada: false, precio: 23180, litros: null, peso_kg: null },
  { articulo: "Maceta Nº3", medidas: "18h x 20d x 12b", material: "Cerámica", pintada: false, precio: 33090, litros: null, peso_kg: null },
  { articulo: "Maceta Nº4", medidas: "31h x 29d x 18b", material: "Cerámica", pintada: false, precio: 74710, litros: null, peso_kg: null },
  { articulo: "Maceta Nº5", medidas: "Nº5", material: "Cerámica", pintada: false, precio: 147020, litros: null, peso_kg: null },
  { articulo: "Plato Cerámica Nº1", medidas: "8 diam.", material: "Cerámica", pintada: false, precio: 6240, litros: null, peso_kg: null },
  { articulo: "Plato Cerámica Nº2", medidas: "12 diam.", material: "Cerámica", pintada: false, precio: 11590, litros: null, peso_kg: null },
  { articulo: "Plato Cerámica Nº3", medidas: "18 diam.", material: "Cerámica", pintada: false, precio: 17330, litros: null, peso_kg: null },
  { articulo: "Plato Cerámica Nº4", medidas: "24 diam.", material: "Cerámica", pintada: false, precio: 27560, litros: null, peso_kg: null },
  { articulo: "Plato Cerámica Nº5", medidas: "30 diam.", material: "Cerámica", pintada: false, precio: 47520, litros: null, peso_kg: null },
  { articulo: "Plato Cerámica Nº6", medidas: "40 diam.", material: "Cerámica", pintada: false, precio: 70950, litros: null, peso_kg: null },
  { articulo: "Griega Colgante", medidas: "27h x 21d x 4b", material: "Cerámica", pintada: false, precio: 49500, litros: null, peso_kg: null },
  { articulo: "Farol Nº1", medidas: "12cm de altura", material: "Cerámica", pintada: false, precio: 16690, litros: null, peso_kg: null },
  { articulo: "Farol Nº2", medidas: "16cm de altura", material: "Cerámica", pintada: false, precio: 26500, litros: null, peso_kg: null },
  { articulo: "Farol Nº3", medidas: "22cm de altura", material: "Cerámica", pintada: false, precio: 41340, litros: null, peso_kg: null },
  { articulo: "Kokedama Chica", medidas: "10h x 15d x 5b", material: "Cerámica", pintada: false, precio: 18520, litros: null, peso_kg: null },
  { articulo: "Kokedama Grande", medidas: "15h x 23d x 11b", material: "Cerámica", pintada: false, precio: 31110, litros: null, peso_kg: null },
  { articulo: "Yucatan Baja", medidas: "6h x 40lar x 24anc", material: "Cerámica", pintada: false, precio: 33660, litros: null, peso_kg: null },
  { articulo: "Yucatan Alta", medidas: "12h x 43lar x 26anc", material: "Cerámica", pintada: false, precio: 48680, litros: null, peso_kg: null },
  { articulo: "Fascetadas", medidas: "10h x 8d x 6b", material: "Cerámica", pintada: false, precio: 13140, litros: null, peso_kg: null },
  // PLÁSTICO
  { articulo: "Plato Nº10", medidas: "Nº10", material: "Plástico", pintada: false, precio: 750, litros: null, peso_kg: null },
  { articulo: "Plato Nº12", medidas: "Nº12", material: "Plástico", pintada: false, precio: 750, litros: null, peso_kg: null },
  { articulo: "Plato Nº14", medidas: "Nº14", material: "Plástico", pintada: false, precio: 750, litros: null, peso_kg: null },
  { articulo: "Plato Nº16", medidas: "Nº16", material: "Plástico", pintada: false, precio: 810, litros: null, peso_kg: null },
  { articulo: "Plato Nº18", medidas: "Nº18", material: "Plástico", pintada: false, precio: 830, litros: null, peso_kg: null },
  { articulo: "Plato Nº20", medidas: "Nº20", material: "Plástico", pintada: false, precio: 1050, litros: null, peso_kg: null },
  { articulo: "Plato Nº22", medidas: "Nº22", material: "Plástico", pintada: false, precio: 1060, litros: null, peso_kg: null },
  { articulo: "Plato Nº24", medidas: "Nº24", material: "Plástico", pintada: false, precio: 1380, litros: null, peso_kg: null },
  { articulo: "Plato Nº26", medidas: "Nº26", material: "Plástico", pintada: false, precio: 1450, litros: null, peso_kg: null },
  { articulo: "Plato Nº28", medidas: "Nº28", material: "Plástico", pintada: false, precio: 1650, litros: null, peso_kg: null },
  { articulo: "Plato Nº32", medidas: "Nº32", material: "Plástico", pintada: false, precio: 2030, litros: null, peso_kg: null },
  { articulo: "Plato Nº36", medidas: "Nº36", material: "Plástico", pintada: false, precio: 2410, litros: null, peso_kg: null },
  { articulo: "Plato Nº40", medidas: "Nº40", material: "Plástico", pintada: false, precio: 3180, litros: null, peso_kg: null },
  { articulo: "Plato Nº45", medidas: "Nº45", material: "Plástico", pintada: false, precio: 4040, litros: null, peso_kg: null },
  { articulo: "Plato Nº50", medidas: "Nº50", material: "Plástico", pintada: false, precio: 13700, litros: null, peso_kg: null },
  { articulo: "Plato Cuadrado Nº15", medidas: "Nº15", material: "Plástico", pintada: false, precio: 1520, litros: null, peso_kg: null },
  { articulo: "Plato Cuadrado Nº20", medidas: "Nº20", material: "Plástico", pintada: false, precio: 2120, litros: null, peso_kg: null },
  { articulo: "Plato Cuadrado Nº25", medidas: "Nº25", material: "Plástico", pintada: false, precio: 2390, litros: null, peso_kg: null },
  { articulo: "Plato Cuadrado Nº30", medidas: "Nº30", material: "Plástico", pintada: false, precio: 2880, litros: null, peso_kg: null },
  { articulo: "Plato Cuadrado Nº35", medidas: "Nº35", material: "Plástico", pintada: false, precio: 4320, litros: null, peso_kg: null },
  { articulo: "Plato Cuadrado Nº40", medidas: "Nº40", material: "Plástico", pintada: false, precio: 8320, litros: null, peso_kg: null },
  // SANTO BENITO — Rotomoldeado (lista 11/4/26)
  { articulo: "Copa SB", medidas: "20cm c/plato", material: "Rotomoldeado", pintada: true, precio: 6450, litros: null, peso_kg: null },
  { articulo: "Copa SB", medidas: "30cm c/plato", material: "Rotomoldeado", pintada: true, precio: 14700, litros: null, peso_kg: null },
  { articulo: "Copa SB", medidas: "40cm", material: "Rotomoldeado", pintada: true, precio: 38100, litros: null, peso_kg: null },
  { articulo: "Copa SB", medidas: "50cm", material: "Rotomoldeado", pintada: true, precio: 63980, litros: null, peso_kg: null },
  { articulo: "Copa SB", medidas: "60cm", material: "Rotomoldeado", pintada: true, precio: 98400, litros: null, peso_kg: null },
  { articulo: "Van Gogh SB", medidas: "", material: "Rotomoldeado", pintada: true, precio: 18820, litros: null, peso_kg: null },
  { articulo: "Jardinera Reforzada SB", medidas: "100x30x30cm", material: "Rotomoldeado", pintada: true, precio: 98400, litros: null, peso_kg: null },
  { articulo: "Misionera SB", medidas: "40cm c/plato", material: "Rotomoldeado", pintada: true, precio: 39380, litros: null, peso_kg: null },
  { articulo: "Misionera SB", medidas: "55cm c/plato", material: "Rotomoldeado", pintada: true, precio: 54150, litros: null, peso_kg: null },
  { articulo: "Misionera SB", medidas: "70cm c/plato", material: "Rotomoldeado", pintada: true, precio: 66450, litros: null, peso_kg: null },
  { articulo: "Cuenco SB", medidas: "32cm c/plato", material: "Rotomoldeado", pintada: true, precio: 49200, litros: null, peso_kg: null },
  { articulo: "Cuenco SB", medidas: "48cm c/plato", material: "Rotomoldeado", pintada: true, precio: 98400, litros: null, peso_kg: null },
  { articulo: "Salteña SB", medidas: "40cm c/plato", material: "Rotomoldeado", pintada: true, precio: 29550, litros: null, peso_kg: null },
  { articulo: "Salteña SB", medidas: "55cm c/plato", material: "Rotomoldeado", pintada: true, precio: 61500, litros: null, peso_kg: null },
  { articulo: "Salteña SB", medidas: "70cm c/plato", material: "Rotomoldeado", pintada: true, precio: 98400, litros: null, peso_kg: null },
  // ALEJANDRA — Rotomoldeado (mayorista)
  { articulo: "Cubo", medidas: "20x20", material: "Rotomoldeado", pintada: true, precio: 11000, litros: null, peso_kg: null },
  { articulo: "Cubo", medidas: "25x25", material: "Rotomoldeado", pintada: true, precio: 15000, litros: null, peso_kg: null },
  { articulo: "Cubo", medidas: "30x30", material: "Rotomoldeado", pintada: true, precio: 19500, litros: null, peso_kg: null },
  { articulo: "Cubo", medidas: "35x35", material: "Rotomoldeado", pintada: true, precio: 28500, litros: null, peso_kg: null },
  { articulo: "Cubo", medidas: "40x40", material: "Rotomoldeado", pintada: true, precio: 41500, litros: null, peso_kg: null },
  { articulo: "Cubo", medidas: "50x50", material: "Rotomoldeado", pintada: true, precio: 71500, litros: null, peso_kg: null },
  { articulo: "Jardinera", medidas: "20x60", material: "Rotomoldeado", pintada: true, precio: 25000, litros: null, peso_kg: null },
  { articulo: "Jardinera", medidas: "20x80", material: "Rotomoldeado", pintada: true, precio: 33000, litros: null, peso_kg: null },
  { articulo: "Jardinera", medidas: "20x100", material: "Rotomoldeado", pintada: true, precio: 39500, litros: null, peso_kg: null },
  { articulo: "Jardinera", medidas: "27x30x60", material: "Rotomoldeado", pintada: true, precio: 39500, litros: null, peso_kg: null },
  { articulo: "Jardinera", medidas: "27x30x80", material: "Rotomoldeado", pintada: true, precio: 52500, litros: null, peso_kg: null },
  { articulo: "Jardinera", medidas: "27x30x100", material: "Rotomoldeado", pintada: true, precio: 65000, litros: null, peso_kg: null },
  { articulo: "Cilindro", medidas: "40cm", material: "Rotomoldeado", pintada: true, precio: 38500, litros: null, peso_kg: null },
  { articulo: "Cilindro", medidas: "50cm", material: "Rotomoldeado", pintada: true, precio: 57500, litros: null, peso_kg: null },
  { articulo: "Misionera Texturada", medidas: "20cm", material: "Rotomoldeado", pintada: true, precio: 6000, litros: null, peso_kg: null },
  { articulo: "Misionera Texturada", medidas: "30cm", material: "Rotomoldeado", pintada: true, precio: 19000, litros: null, peso_kg: null },
  { articulo: "Misionera Texturada", medidas: "40cm", material: "Rotomoldeado", pintada: true, precio: 31500, litros: null, peso_kg: null },
  { articulo: "Misionera Texturada", medidas: "50cm", material: "Rotomoldeado", pintada: true, precio: 64500, litros: null, peso_kg: null },
  { articulo: "Plato Misionera", medidas: "Chico", material: "Rotomoldeado", pintada: true, precio: 6000, litros: null, peso_kg: null },
  { articulo: "Plato Misionera", medidas: "Mediano", material: "Rotomoldeado", pintada: true, precio: 10000, litros: null, peso_kg: null },
  { articulo: "Plato Misionera", medidas: "Grande", material: "Rotomoldeado", pintada: true, precio: 14000, litros: null, peso_kg: null },
  { articulo: "Paris", medidas: "30cm", material: "Rotomoldeado", pintada: true, precio: 32000, litros: null, peso_kg: null },
  { articulo: "Paris", medidas: "44cm", material: "Rotomoldeado", pintada: true, precio: 39500, litros: null, peso_kg: null },
  { articulo: "Cónica", medidas: "50cm", material: "Rotomoldeado", pintada: true, precio: 24500, litros: null, peso_kg: null },
  { articulo: "Cónica", medidas: "80cm", material: "Rotomoldeado", pintada: true, precio: 46000, litros: null, peso_kg: null },
  { articulo: "Piramidal", medidas: "20x20", material: "Rotomoldeado", pintada: true, precio: 10000, litros: null, peso_kg: null },
  { articulo: "Piramidal", medidas: "30x30", material: "Rotomoldeado", pintada: true, precio: 18500, litros: null, peso_kg: null },
  { articulo: "Piramidal", medidas: "35x35", material: "Rotomoldeado", pintada: true, precio: 24500, litros: null, peso_kg: null },
  { articulo: "Piramidal", medidas: "40x40", material: "Rotomoldeado", pintada: true, precio: 28500, litros: null, peso_kg: null },
  { articulo: "Piramidal", medidas: "25x40", material: "Rotomoldeado", pintada: true, precio: 18500, litros: null, peso_kg: null },
  { articulo: "Piramidal", medidas: "25x50", material: "Rotomoldeado", pintada: true, precio: 23000, litros: null, peso_kg: null },
  { articulo: "Piramidal", medidas: "30x60", material: "Rotomoldeado", pintada: true, precio: 33000, litros: null, peso_kg: null },
  { articulo: "Piramidal", medidas: "35x70", material: "Rotomoldeado", pintada: true, precio: 44000, litros: null, peso_kg: null },
];

const MATERIALES = ["Todos", "Barro", "Fibrocemento", "Rotomoldeado", "Fibra de Vidrio", "Cerámica", "Plástico", "Combo"];

const formatPrecio = (n) => "$\u00a0" + n.toLocaleString("es-AR", { minimumFractionDigits: 0 });
const WA_NUMBER = "5491157554899";
const STORAGE_KEY = "lyl_presup_mayor_v2";

const getNextNumero = () => {
  try {
    const n = parseInt(localStorage.getItem("lyl_num_mayor") || "0", 10) + 1;
    localStorage.setItem("lyl_num_mayor", String(n));
    return "P-" + String(n).padStart(3, "0");
  } catch { return "P-" + String(Date.now()).slice(-3); }
};

const loadBorrador = () => {
  try { const r = localStorage.getItem(STORAGE_KEY); return r ? JSON.parse(r) : null; }
  catch { return null; }
};
const saveBorrador = (s) => { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(s)); } catch {} };
const clearBorrador = () => { try { localStorage.removeItem(STORAGE_KEY); } catch {} };

export default function App() {
  const b0 = loadBorrador();

  const [busqueda, setBusqueda] = useState("");
  const [material, setMaterial] = useState("Todos");
  const [pintada, setPintada] = useState("Todos");
  const [textoVisible, setTextoVisible] = useState(null);
  const [vista, setVista] = useState("buscar");

  const [presupuesto, setPresupuesto] = useState(b0?.presupuesto || []);
  const [cliente, setCliente] = useState(b0?.cliente || "");
  const [proyecto, setProyecto] = useState(b0?.proyecto || "");
  const [envio, setEnvio] = useState(b0?.envio || "");
  const [descuento, setDescuento] = useState(b0?.descuento || "");
  const [numPresup, setNumPresup] = useState(b0?.numPresup || "");
  const [mostrarAnticipo, setMostrarAnticipo] = useState(b0?.mostrarAnticipo ?? true);

  const [modalAbierto, setModalAbierto] = useState(false);
  const [editandoKey, setEditandoKey] = useState(null);
  const [formManual, setFormManual] = useState({ articulo: "", medidas: "", precio: "", nota: "" });
  const [notaAbierta, setNotaAbierta] = useState(null);
  const [notaTemp, setNotaTemp] = useState("");
  const [confirmarVaciar, setConfirmarVaciar] = useState(false);

  const save = (patch) => saveBorrador({ presupuesto, cliente, proyecto, envio, descuento, numPresup, mostrarAnticipo, ...patch });

  const filtrados = useMemo(() => {
    const b = busqueda.toLowerCase().trim();
    return productos.filter((p) => {
      const mB = !b || p.articulo.toLowerCase().includes(b) || p.medidas.toLowerCase().includes(b);
      const mM = material === "Todos" || p.material === material;
      const mP = pintada === "Todos" || (pintada === "Pintada" && p.pintada) || (pintada === "Sin pintar" && !p.pintada);
      return mB && mM && mP;
    });
  }, [busqueda, material, pintada]);

  const grupos = useMemo(() => {
    const map = {};
    filtrados.forEach((p) => {
      const k = `${p.articulo}||${p.material}||${p.pintada}`;
      if (!map[k]) map[k] = { ...p, variantes: [] };
      map[k].variantes.push({ medidas: p.medidas, precio: p.precio, litros: p.litros, peso_kg: p.peso_kg });
    });
    return Object.values(map);
  }, [filtrados]);

  const subtotal = presupuesto.reduce((s, i) => s + i.precio * i.cantidad, 0);
  const subtotalConDesc = presupuesto.reduce((s, i) => s + (!i.sinDescuento ? i.precio * i.cantidad : 0), 0);
  const envioNum = parseFloat(String(envio).replace(/[^\d.]/g, "")) || 0;
  const descPct = Math.min(100, Math.max(0, parseFloat(descuento) || 0));
  const montoDesc = Math.round(subtotalConDesc * descPct / 100);
  const totalFinal = subtotal - montoDesc + envioNum;
  const anticipo80 = Math.round(totalFinal * 0.8);
  const saldo20 = totalFinal - anticipo80;

  const setP = (fn) => setPresupuesto((prev) => { const next = typeof fn === "function" ? fn(prev) : fn; save({ presupuesto: next }); return next; });
  const setC = (v) => { setCliente(v); save({ cliente: v }); };
  const setPr = (v) => { setProyecto(v); save({ proyecto: v }); };
  const setEn = (v) => { setEnvio(v); save({ envio: v }); };
  const setDe = (v) => { setDescuento(v); save({ descuento: v }); };
  const setMA = (v) => { setMostrarAnticipo(v); save({ mostrarAnticipo: v }); };

  const agregar = (prod) => {
    const key = `${prod.articulo}||${prod.medidas}||${prod.material}`;
    setP((prev) => {
      const ex = prev.find((i) => i.key === key);
      if (ex) return prev.map((i) => i.key === key ? { ...i, cantidad: i.cantidad + 1 } : i);
      return [...prev, { ...prod, key, cantidad: 1, nota: "" }];
    });
    setVista("presupuesto");
  };

  const cambiarCantidad = (key, delta) => setP((prev) => prev.map((i) => i.key === key ? { ...i, cantidad: Math.max(1, i.cantidad + delta) } : i));
  const quitar = (key) => setP((prev) => prev.filter((i) => i.key !== key));
  const toggleSinDescuento = (key) => setP((prev) => prev.map((i) => i.key === key ? { ...i, sinDescuento: !i.sinDescuento } : i));
  const guardarNota = (key) => { setP((prev) => prev.map((i) => i.key === key ? { ...i, nota: notaTemp } : i)); setNotaAbierta(null); };

  const MATERIALES_MANUAL = ["Fibrocemento", "Rotomoldeado", "Fibra de Vidrio", "Barro", "Cerámica", "Plástico", "Botánica", "Sustrato", "Otros"];

  const abrirModalNuevo = () => { setFormManual({ articulo: "", medidas: "", precio: "", nota: "", material: "Otros" }); setEditandoKey(null); setModalAbierto(true); };
  const abrirModalEditar = (item) => { setFormManual({ articulo: item.articulo, medidas: item.medidas || "", precio: String(item.precio), nota: item.nota || "", material: item.material || "Otros" }); setEditandoKey(item.key); setModalAbierto(true); };

  const guardarManual = () => {
    const pr = parseFloat(String(formManual.precio).replace(/[^\d.]/g, "")) || 0;
    if (!formManual.articulo.trim() || !pr) return;
    const key = editandoKey || `manual||${Date.now()}`;
    const item = { articulo: formManual.articulo.trim(), medidas: formManual.medidas.trim(), material: formManual.material || "Otros", pintada: false, precio: pr, key, cantidad: 1, nota: formManual.nota.trim() };
    if (editandoKey) setP((prev) => prev.map((i) => i.key === editandoKey ? { ...i, ...item, cantidad: i.cantidad } : i));
    else setP((prev) => [...prev, item]);
    setModalAbierto(false);
  };

  const vaciar = () => { setPresupuesto([]); setCliente(""); setProyecto(""); setEnvio(""); setDescuento(""); setNumPresup(""); setTextoVisible(null); setConfirmarVaciar(false); clearBorrador(); };

  const asignarNum = () => { if (numPresup) return; const n = getNextNumero(); setNumPresup(n); save({ numPresup: n }); };

  // ── Exportar borrador como .json ──
  const exportarBorrador = () => {
    const estado = { presupuesto, cliente, proyecto, envio, descuento, numPresup, mostrarAnticipo };
    const nombre = [numPresup, cliente].filter(Boolean).join("_").replace(/\s+/g, "_") || "borrador";
    const blob = new Blob([JSON.stringify(estado, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = `LyL_Mayor_${nombre}.json`; a.click();
    URL.revokeObjectURL(url);
  };

  // ── Importar borrador desde .json ──
  const importarBorrador = (e) => {
    const file = e.target.files?.[0
  // FIBROCEMENTO — San Jorge (nuevos modelos)
  { articulo: "ANDINA N35", medidas: "", material: "Fibrocemento", pintada: false, precio: 10690, litros: null, peso_kg: null }
  { articulo: "MISIONERA N50 *35 *30 NUEVA", medidas: "", material: "Fibrocemento", pintada: false, precio: 22950, litros: null, peso_kg: null }
  { articulo: "PLATO TAZA X 1MTS", medidas: "", material: "Fibrocemento", pintada: false, precio: 30780, litros: null, peso_kg: null }
  { articulo: "CONO PANAL 60CM", medidas: "", material: "Fibrocemento", pintada: false, precio: 24980, litros: null, peso_kg: null }
  { articulo: "PANAL N60", medidas: "", material: "Fibrocemento", pintada: false, precio: 19750, litros: null, peso_kg: null }
  { articulo: "MISIONERA 35CM ALTURA 50CM BASE 40CM BOCA", medidas: "", material: "Fibrocemento", pintada: false, precio: 22280, litros: null, peso_kg: null }
  { articulo: "VASO COMUN N60 NUEVO", medidas: "", material: "Fibrocemento", pintada: false, precio: 43420, litros: null, peso_kg: null }
  { articulo: "PANAL N50", medidas: "", material: "Fibrocemento", pintada: false, precio: 15680, litros: null, peso_kg: null }
  { articulo: "PREMIUM N45", medidas: "", material: "Fibrocemento", pintada: false, precio: 16740, litros: null, peso_kg: null }
  { articulo: "FIB. CILINDRO 50*35", medidas: "", material: "Fibrocemento", pintada: false, precio: 16050, litros: null, peso_kg: null }
  { articulo: "PLATO N30", medidas: "", material: "Fibrocemento", pintada: false, precio: 7830, litros: null, peso_kg: null }
  { articulo: "CUBO RAYA 35*35", medidas: "", material: "Fibrocemento", pintada: false, precio: 18900, litros: null, peso_kg: null }
  { articulo: "ESFERICA N*20*20*15", medidas: "", material: "Fibrocemento", pintada: false, precio: 9610, litros: null, peso_kg: null }
  { articulo: "ESFERICA N30*30*20", medidas: "", material: "Fibrocemento", pintada: false, precio: 12630, litros: null, peso_kg: null }
  { articulo: "ESFERICA 40*40*30", medidas: "", material: "Fibrocemento", pintada: false, precio: 17840, litros: null, peso_kg: null }
  { articulo: "FLOREADITA CHICA", medidas: "", material: "Fibrocemento", pintada: false, precio: 9790, litros: null, peso_kg: null }
  { articulo: "FLOREADITA GRANDE", medidas: "", material: "Fibrocemento", pintada: false, precio: 14850, litros: null, peso_kg: null }
  { articulo: "FLOR D/ ALIZ N*60", medidas: "", material: "Fibrocemento", pintada: false, precio: 22100, litros: null, peso_kg: null }
  { articulo: "JARRON 30CM", medidas: "", material: "Fibrocemento", pintada: false, precio: 12630, litros: null, peso_kg: null }
  { articulo: "JARRON 40CM", medidas: "", material: "Fibrocemento", pintada: false, precio: 12420, litros: null, peso_kg: null }
  { articulo: "JARRON 50CM", medidas: "", material: "Fibrocemento", pintada: false, precio: 14580, litros: null, peso_kg: null }
  { articulo: "JARRON 65CM", medidas: "", material: "Fibrocemento", pintada: false, precio: 18360, litros: null, peso_kg: null }
  { articulo: "MISIONERA 27*24*20", medidas: "", material: "Fibrocemento", pintada: false, precio: 9320, litros: null, peso_kg: null }
  { articulo: "MISIONERA 32*22*28 NUEVA", medidas: "", material: "Fibrocemento", pintada: false, precio: 11090, litros: null, peso_kg: null }
  { articulo: "MISIONERA 40*28*20", medidas: "", material: "Fibrocemento", pintada: false, precio: 15640, litros: null, peso_kg: null }
  { articulo: "MISIONERA 50*37*38", medidas: "", material: "Fibrocemento", pintada: false, precio: 22950, litros: null, peso_kg: null }
  { articulo: "MISIONERA 65*48*46", medidas: "", material: "Fibrocemento", pintada: false, precio: 30240, litros: null, peso_kg: null }
  { articulo: "SALTEÑA 40*30", medidas: "", material: "Fibrocemento", pintada: false, precio: 23480, litros: null, peso_kg: null }
  { articulo: "SALTEÑA 45*35*22 NUEVA", medidas: "", material: "Fibrocemento", pintada: false, precio: 17550, litros: null, peso_kg: null }
  { articulo: "SALTEÑA 55*40*30", medidas: "", material: "Fibrocemento", pintada: false, precio: 35160, litros: null, peso_kg: null }
  { articulo: "SALTEÑA 65*50*35", medidas: "", material: "Fibrocemento", pintada: false, precio: 31030, litros: null, peso_kg: null }
  { articulo: "VASO ANTIGUO CHICO 35*30*25", medidas: "", material: "Fibrocemento", pintada: false, precio: 13450, litros: null, peso_kg: null }
  { articulo: "VASO ANTIGUO MEDIANO 43*35*30", medidas: "", material: "Fibrocemento", pintada: false, precio: 19350, litros: null, peso_kg: null }
  { articulo: "VASO ANTIGUO GRANDE 53*50*35", medidas: "", material: "Fibrocemento", pintada: false, precio: 25880, litros: null, peso_kg: null }
  { articulo: "VASO ROMANO CHICO 35*30*25", medidas: "", material: "Fibrocemento", pintada: false, precio: 12900, litros: null, peso_kg: null }
  { articulo: "VASO ROMANO MEDIANO 43*35*30", medidas: "", material: "Fibrocemento", pintada: false, precio: 18120, litros: null, peso_kg: null }
  { articulo: "VASO ROMANO GRANDE 53*50*35", medidas: "", material: "Fibrocemento", pintada: false, precio: 24430, litros: null, peso_kg: null }
  { articulo: "CILINDRO 30*23", medidas: "", material: "Fibrocemento", pintada: false, precio: 8370, litros: null, peso_kg: null }
  { articulo: "CILINDRO 40*23", medidas: "", material: "Fibrocemento", pintada: false, precio: 8710, litros: null, peso_kg: null }
  { articulo: "CILINDRO 40*40", medidas: "", material: "Fibrocemento", pintada: false, precio: 19440, litros: null, peso_kg: null }
  { articulo: "CILINDRO 80*40", medidas: "", material: "Fibrocemento", pintada: false, precio: 26780, litros: null, peso_kg: null }
  { articulo: "CONO 40*35", medidas: "", material: "Fibrocemento", pintada: false, precio: 15750, litros: null, peso_kg: null }
  { articulo: "CONO MODERNO 40*30", medidas: "", material: "Fibrocemento", pintada: false, precio: 13280, litros: null, peso_kg: null }
  { articulo: "CANASTA 20*20*20", medidas: "", material: "Fibrocemento", pintada: false, precio: 7700, litros: null, peso_kg: null }
  { articulo: "CANASTA 30*25*20", medidas: "", material: "Fibrocemento", pintada: false, precio: 11590, litros: null, peso_kg: null }
  { articulo: "CANASTA 35*30*25", medidas: "", material: "Fibrocemento", pintada: false, precio: 14620, litros: null, peso_kg: null }
  { articulo: "MISIONERA 90*45*38", medidas: "", material: "Fibrocemento", pintada: false, precio: 42750, litros: null, peso_kg: null }
  { articulo: "MISIONERA 20*18*20", medidas: "", material: "Fibrocemento", pintada: false, precio: 7420, litros: null, peso_kg: null }
  { articulo: "PLATO REDONDO *46", medidas: "", material: "Fibrocemento", pintada: false, precio: 8780, litros: null, peso_kg: null }
  { articulo: "PLATO REDONDO *38", medidas: "", material: "Fibrocemento", pintada: false, precio: 8120, litros: null, peso_kg: null }
  { articulo: "PIE P/CAMINO", medidas: "", material: "Fibrocemento", pintada: false, precio: 10530, litros: null, peso_kg: null }
  { articulo: "CONO MODERNO 55CM", medidas: "", material: "Fibrocemento", pintada: false, precio: 17820, litros: null, peso_kg: null }
  { articulo: "CONO MODERNO 70CM", medidas: "", material: "Fibrocemento", pintada: false, precio: 22160, litros: null, peso_kg: null }
  { articulo: "PREMIUM N20", medidas: "", material: "Fibrocemento", pintada: false, precio: 7310, litros: null, peso_kg: null }
  { articulo: "PREMIUM N24", medidas: "", material: "Fibrocemento", pintada: false, precio: 9450, litros: null, peso_kg: null }
  { articulo: "PREMIUM N34", medidas: "", material: "Fibrocemento", pintada: false, precio: 13280, litros: null, peso_kg: null }
  { articulo: "CONO 60*40", medidas: "", material: "Fibrocemento", pintada: false, precio: 21380, litros: null, peso_kg: null }
  { articulo: "CONO 80*45", medidas: "", material: "Fibrocemento", pintada: false, precio: 29250, litros: null, peso_kg: null }
  { articulo: "CUBO RAYA 20*20", medidas: "", material: "Fibrocemento", pintada: false, precio: 9000, litros: null, peso_kg: null }
  { articulo: "CUBO RAYA 25*25", medidas: "", material: "Fibrocemento", pintada: false, precio: 13500, litros: null, peso_kg: null }
  { articulo: "HOJA *20", medidas: "", material: "Fibrocemento", pintada: false, precio: 5410, litros: null, peso_kg: null }
  { articulo: "HOJA *30", medidas: "", material: "Fibrocemento", pintada: false, precio: 7340, litros: null, peso_kg: null }
  { articulo: "PIRAMIDAL C/DIBUJO *35", medidas: "", material: "Fibrocemento", pintada: false, precio: 15410, litros: null, peso_kg: null }
  { articulo: "CILINDRO 50*23", medidas: "", material: "Fibrocemento", pintada: false, precio: 11250, litros: null, peso_kg: null }
  { articulo: "CILINDRO 60*23", medidas: "", material: "Fibrocemento", pintada: false, precio: 12380, litros: null, peso_kg: null }
  { articulo: "JARDINERA 80*30*35", medidas: "", material: "Fibrocemento", pintada: false, precio: 17600, litros: null, peso_kg: null }
  { articulo: "PIRAMIDAL 80*35", medidas: "", material: "Fibrocemento", pintada: false, precio: 23850, litros: null, peso_kg: null }
  { articulo: "JARDINERA 60*20*30", medidas: "", material: "Fibrocemento", pintada: false, precio: 15950, litros: null, peso_kg: null }
  { articulo: "BARRIL GRANDE", medidas: "", material: "Fibrocemento", pintada: false, precio: 38230, litros: null, peso_kg: null }
  { articulo: "CUBO LISO 40*40", medidas: "", material: "Fibrocemento", pintada: false, precio: 25190, litros: null, peso_kg: null }
  { articulo: "CUBO LISO 30*30", medidas: "", material: "Fibrocemento", pintada: false, precio: 16900, litros: null, peso_kg: null }
  { articulo: "PIRAMIDAL 40*28", medidas: "", material: "Fibrocemento", pintada: false, precio: 14780, litros: null, peso_kg: null }
  { articulo: "VERONA CHICA  Y C/NUES", medidas: "", material: "Fibrocemento", pintada: false, precio: 26590, litros: null, peso_kg: null }
  { articulo: "VERONA GRAND", medidas: "", material: "Fibrocemento", pintada: false, precio: 32280, litros: null, peso_kg: null }
  { articulo: "JARRA C/MANIJA", medidas: "", material: "Fibrocemento", pintada: false, precio: 32100, litros: null, peso_kg: null }
  { articulo: "CONOS 40*30*22", medidas: "", material: "Fibrocemento", pintada: false, precio: 19800, litros: null, peso_kg: null }
  { articulo: "CILINDRO N*50", medidas: "", material: "Fibrocemento", pintada: false, precio: 27600, litros: null, peso_kg: null }
  { articulo: "JARRON *60CM", medidas: "", material: "Fibrocemento", pintada: false, precio: 26130, litros: null, peso_kg: null }
  { articulo: "JARRON *80 CM", medidas: "", material: "Fibrocemento", pintada: false, precio: 68130, litros: null, peso_kg: null }
  { articulo: "JARRON *1MTS", medidas: "", material: "Fibrocemento", pintada: false, precio: 101080, litros: null, peso_kg: null }
  { articulo: "COMUN GRAND N*50CM", medidas: "", material: "Fibrocemento", pintada: false, precio: 23370, litros: null, peso_kg: null }
  { articulo: "CONOS  80CM", medidas: "", material: "Fibrocemento", pintada: false, precio: 29730, litros: null, peso_kg: null }
  { articulo: "CONOS 60*35*30", medidas: "", material: "Fibrocemento", pintada: false, precio: 23940, litros: null, peso_kg: null }
  { articulo: "BOMBA CHICA", medidas: "", material: "Fibrocemento", pintada: false, precio: 16650, litros: null, peso_kg: null }
  { articulo: "COLONIAL GRAN", medidas: "", material: "Fibrocemento", pintada: false, precio: 28460, litros: null, peso_kg: null }
  { articulo: "COMUN CH N*30CM", medidas: "", material: "Fibrocemento", pintada: false, precio: 15240, litros: null, peso_kg: null }
  { articulo: "COMUN MD N*40", medidas: "", material: "Fibrocemento", pintada: false, precio: 17870, litros: null, peso_kg: null }
  { articulo: "CILINDRO N*40", medidas: "", material: "Fibrocemento", pintada: false, precio: 19690, litros: null, peso_kg: null }
  { articulo: "CILINDRO N*30", medidas: "", material: "Fibrocemento", pintada: false, precio: 13940, litros: null, peso_kg: null }
  { articulo: "JARDINERA 1*15*15", medidas: "", material: "Fibrocemento", pintada: false, precio: 11470, litros: null, peso_kg: null }
  { articulo: "COLONIAL MD", medidas: "", material: "Fibrocemento", pintada: false, precio: 23820, litros: null, peso_kg: null }
  { articulo: "COLONIAL CH", medidas: "", material: "Fibrocemento", pintada: false, precio: 20590, litros: null, peso_kg: null }
  { articulo: "BOMBA GRAND", medidas: "", material: "Fibrocemento", pintada: false, precio: 20590, litros: null, peso_kg: null }
  { articulo: "ACOSTADA GRAND", medidas: "", material: "Fibrocemento", pintada: false, precio: 23280, litros: null, peso_kg: null }
  { articulo: "ACOSTADA CHICA", medidas: "", material: "Fibrocemento", pintada: false, precio: 24710, litros: null, peso_kg: null }
  { articulo: "JARRON MINI", medidas: "", material: "Fibrocemento", pintada: false, precio: 18230, litros: null, peso_kg: null }
  { articulo: "JARRON PANSON", medidas: "", material: "Fibrocemento", pintada: false, precio: 68130, litros: null, peso_kg: null }
  { articulo: "OLLAS C/ASAS", medidas: "", material: "Fibrocemento", pintada: false, precio: 24630, litros: null, peso_kg: null }
  { articulo: "PIRAMIDAL 45*30*45", medidas: "", material: "Fibrocemento", pintada: false, precio: 18630, litros: null, peso_kg: null }
  { articulo: "PIRAMIDAL 50*40*30", medidas: "", material: "Fibrocemento", pintada: false, precio: 18630, litros: null, peso_kg: null }
  { articulo: "RECTANGULAR 50*30", medidas: "", material: "Fibrocemento", pintada: false, precio: 16160, litros: null, peso_kg: null }
  { articulo: "JARDINERA 50*20*20", medidas: "", material: "Fibrocemento", pintada: false, precio: 11470, litros: null, peso_kg: null }
  { articulo: "JARDINERA 1*30*35", medidas: "", material: "Fibrocemento", pintada: false, precio: 27080, litros: null, peso_kg: null }
  { articulo: "VASO UVA", medidas: "", material: "Fibrocemento", pintada: false, precio: 16290, litros: null, peso_kg: null }
  { articulo: "BARRIL CHICO", medidas: "", material: "Fibrocemento", pintada: false, precio: 14840, litros: null, peso_kg: null }
  { articulo: "JUJEÑA N1 N40 ALTURA", medidas: "", material: "Fibrocemento", pintada: false, precio: 18510, litros: null, peso_kg: null }
  { articulo: "JUJEÑA N2 N55ALTURA", medidas: "", material: "Fibrocemento", pintada: false, precio: 26560, litros: null, peso_kg: null }
  { articulo: "JUJEÑA N3 N65 ALTURA", medidas: "", material: "Fibrocemento", pintada: false, precio: 46780, litros: null, peso_kg: null }
  { articulo: "CALI N40 LU", medidas: "", material: "Fibrocemento", pintada: false, precio: 43510, litros: null, peso_kg: null }
  { articulo: "CALI LU N77", medidas: "", material: "Fibrocemento", pintada: false, precio: 61800, litros: null, peso_kg: null }
  { articulo: "CALI LU N56", medidas: "", material: "Fibrocemento", pintada: false, precio: 44710, litros: null, peso_kg: null }
  // PLÁSTICO — MATRI y T.A
  { articulo: "PLATO P/JARD.8020 CM.", medidas: "", material: "Plástico", pintada: false, precio: 8810, litros: null, peso_kg: null }
  { articulo: "PLATO P/JARD.IMPERIO Nº60", medidas: "", material: "Plástico", pintada: false, precio: 3850, litros: null, peso_kg: null }
  { articulo: "PLATO P/JARD.IMPERIO Nº80", medidas: "", material: "Plástico", pintada: false, precio: 10800, litros: null, peso_kg: null }
  { articulo: "PLATO P/JARDINERA MARISA 40 CM", medidas: "", material: "Plástico", pintada: false, precio: 1110, litros: null, peso_kg: null }
  { articulo: "PLATO Nº18", medidas: "", material: "Plástico", pintada: false, precio: 850, litros: null, peso_kg: null }
  { articulo: "PLATO Nº20", medidas: "", material: "Plástico", pintada: false, precio: 1080, litros: null, peso_kg: null }
  { articulo: "PLATO Nº22", medidas: "", material: "Plástico", pintada: false, precio: 1080, litros: null, peso_kg: null }
  { articulo: "PLATO Nº24", medidas: "", material: "Plástico", pintada: false, precio: 1360, litros: null, peso_kg: null }
  { articulo: "PLATO Nº26", medidas: "", material: "Plástico", pintada: false, precio: 1490, litros: null, peso_kg: null }
  { articulo: "PLATO Nº28", medidas: "", material: "Plástico", pintada: false, precio: 1700, litros: null, peso_kg: null }
  { articulo: "PLATO Nº32", medidas: "", material: "Plástico", pintada: false, precio: 2090, litros: null, peso_kg: null }
  { articulo: "PLATO Nº36", medidas: "", material: "Plástico", pintada: false, precio: 2370, litros: null, peso_kg: null }
  { articulo: "PLATO Nº40", medidas: "", material: "Plástico", pintada: false, precio: 3270, litros: null, peso_kg: null }
  { articulo: "PLATO Nº45", medidas: "", material: "Plástico", pintada: false, precio: 3940, litros: null, peso_kg: null }
  { articulo: "PLATO Nº50", medidas: "", material: "Plástico", pintada: false, precio: 6730, litros: null, peso_kg: null }
  { articulo: "PLATO P/JARD DENISE  65 CM.", medidas: "", material: "Plástico", pintada: false, precio: 5640, litros: null, peso_kg: null }
  { articulo: "PLATO P/JARDINERA Nº45", medidas: "", material: "Plástico", pintada: false, precio: 2220, litros: null, peso_kg: null }
  { articulo: "PLATO P/JARDINERA Nº60", medidas: "", material: "Plástico", pintada: false, precio: 3320, litros: null, peso_kg: null }
  { articulo: "PLATO P/JARDINERA Nº80", medidas: "", material: "Plástico", pintada: false, precio: 5700, litros: null, peso_kg: null }
  { articulo: "PLATO P/JARD.6020 CM.", medidas: "", material: "Plástico", pintada: false, precio: 5150, litros: null, peso_kg: null }
  { articulo: "PLATO P/JARD.IMPERIO Nº50", medidas: "", material: "Plástico", pintada: false, precio: 3300, litros: null, peso_kg: null }
  { articulo: "PLATO CUADRADO Nº15", medidas: "", material: "Plástico", pintada: false, precio: 1800, litros: null, peso_kg: null }
  { articulo: "PLATO CUADRADO Nº20", medidas: "", material: "Plástico", pintada: false, precio: 2500, litros: null, peso_kg: null }
  { articulo: "PLATO CUADRADO Nº25", medidas: "", material: "Plástico", pintada: false, precio: 2560, litros: null, peso_kg: null }
  { articulo: "PLATO CUADRADO Nº30", medidas: "", material: "Plástico", pintada: false, precio: 3080, litros: null, peso_kg: null }
  { articulo: "PLATO CUADRADO Nº35", medidas: "", material: "Plástico", pintada: false, precio: 4670, litros: null, peso_kg: null }
  { articulo: "PLATO CUADRADO Nº40", medidas: "", material: "Plástico", pintada: false, precio: 8920, litros: null, peso_kg: null }
  { articulo: "REGADERA X 10 LTS", medidas: "", material: "Plástico", pintada: false, precio: 18580, litros: null, peso_kg: null }
  { articulo: "REGADERA X 2 LTS", medidas: "", material: "Plástico", pintada: false, precio: 5870, litros: null, peso_kg: null }
  { articulo: "REGADERA X 5 LTS", medidas: "", material: "Plástico", pintada: false, precio: 10300, litros: null, peso_kg: null }
  { articulo: "CONICA 18 CM", medidas: "", material: "Plástico", pintada: false, precio: 2440, litros: null, peso_kg: null }
  { articulo: "CONICA 24 CM", medidas: "", material: "Plástico", pintada: false, precio: 4440, litros: null, peso_kg: null }
  { articulo: "PLATO P/JARDINERA Nº40", medidas: "", material: "Plástico", pintada: false, precio: 1680, litros: null, peso_kg: null }
  { articulo: "PLATO Nº10", medidas: "", material: "Plástico", pintada: false, precio: 770, litros: null, peso_kg: null }
  { articulo: "PLATO Nº12", medidas: "", material: "Plástico", pintada: false, precio: 770, litros: null, peso_kg: null }
  { articulo: "PLATO Nº14", medidas: "", material: "Plástico", pintada: false, precio: 770, litros: null, peso_kg: null }
  { articulo: "PLATO Nº16", medidas: "", material: "Plástico", pintada: false, precio: 830, litros: null, peso_kg: null }
  { articulo: "MAC JARDINERA 35 CM. PROMO 8+2 DE REGALO", medidas: "", material: "Plástico", pintada: false, precio: 2650, litros: null, peso_kg: null }
  { articulo: "MAC JARDINERA 40 CM. PROMO 8+2 DE REGALO", medidas: "", material: "Plástico", pintada: false, precio: 2830, litros: null, peso_kg: null }
  { articulo: "MAC JARDINERA 45 CM. PROMO 8+2 DE REGALO", medidas: "", material: "Plástico", pintada: false, precio: 3920, litros: null, peso_kg: null }
  { articulo: "MAC JARDINERA 55 CM. PROMO 8+2 DE REGALO", medidas: "", material: "Plástico", pintada: false, precio: 5980, litros: null, peso_kg: null }
  { articulo: "MAC JARDINERA 35 CM.  SOFIA", medidas: "", material: "Plástico", pintada: false, precio: 2980, litros: null, peso_kg: null }
  { articulo: "MAC JARDINERA 60 CM. PROMO 8+2 DE REGALO", medidas: "", material: "Plástico", pintada: false, precio: 7950, litros: null, peso_kg: null }
  { articulo: "MAC JARDINERA 65 CM \"D\"", medidas: "", material: "Plástico", pintada: false, precio: 10350, litros: null, peso_kg: null }
  { articulo: "MAC JARDINERA 80 CM.", medidas: "", material: "Plástico", pintada: false, precio: 14470, litros: null, peso_kg: null }
  { articulo: "MAC JARDINERA 90 CM.", medidas: "", material: "Plástico", pintada: false, precio: 19010, litros: null, peso_kg: null }
  { articulo: "MAC JARDINERA IMPERIO 50 CM.", medidas: "", material: "Plástico", pintada: false, precio: 11910, litros: null, peso_kg: null }
  { articulo: "MAC JARDINERA IMPERIO 60 CM.", medidas: "", material: "Plástico", pintada: false, precio: 13320, litros: null, peso_kg: null }
  { articulo: "MAC JARDINERA IMPERIO 80 CM.", medidas: "", material: "Plástico", pintada: false, precio: 26640, litros: null, peso_kg: null }
  { articulo: "PLATO P/JARDINERA Nº35", medidas: "", material: "Plástico", pintada: false, precio: 1660, litros: null, peso_kg: null }
  { articulo: "PLATO P/JARDINERA Nº55", medidas: "", material: "Plástico", pintada: false, precio: 2500, litros: null, peso_kg: null }
  { articulo: "MACETA DIAMANTE N15", medidas: "", material: "Plástico", pintada: false, precio: 1240, litros: null, peso_kg: null }
  { articulo: "MACETA DIAMANTE N19", medidas: "", material: "Plástico", pintada: false, precio: 1870, litros: null, peso_kg: null }
  { articulo: "MACETA FACETADA N20", medidas: "", material: "Plástico", pintada: false, precio: 2860, litros: null, peso_kg: null }
  { articulo: "MACETA FACETDA N16", medidas: "", material: "Plástico", pintada: false, precio: 1840, litros: null, peso_kg: null }
  { articulo: "MACETA MILAN N16", medidas: "", material: "Plástico", pintada: false, precio: 1870, litros: null, peso_kg: null }
  { articulo: "MACETA MILAN N20", medidas: "", material: "Plástico", pintada: false, precio: 3070, litros: null, peso_kg: null }
  { articulo: "MACETA FACETADA N24", medidas: "", material: "Plástico", pintada: false, precio: 4970, litros: null, peso_kg: null }
  { articulo: "MACETA MILAN NOVEDAD N25", medidas: "", material: "Plástico", pintada: false, precio: 6090, litros: null, peso_kg: null }
  { articulo: "MACETA DIAMANTE N25", medidas: "", material: "Plástico", pintada: false, precio: 4270, litros: null, peso_kg: null }
  { articulo: "MACETA FACETADA N29", medidas: "", material: "Plástico", pintada: false, precio: 7680, litros: null, peso_kg: null }
  { articulo: "PLATO REDONDO N16", medidas: "", material: "Plástico", pintada: false, precio: 310, litros: null, peso_kg: null }
  { articulo: "PLATO REDONDO N18", medidas: "", material: "Plástico", pintada: false, precio: 380, litros: null, peso_kg: null }
  { articulo: "PLATO REDONDO N20", medidas: "", material: "Plástico", pintada: false, precio: 550, litros: null, peso_kg: null }
  { articulo: "PLATO REDONDO N22", medidas: "", material: "Plástico", pintada: false, precio: 640, litros: null, peso_kg: null }
  { articulo: "PLATO REDONDO N24", medidas: "", material: "Plástico", pintada: false, precio: 810, litros: null, peso_kg: null }
  { articulo: "PLATO REDONDO N26", medidas: "", material: "Plástico", pintada: false, precio: 920, litros: null, peso_kg: null }
  { articulo: "PLATO REDONDO N28", medidas: "", material: "Plástico", pintada: false, precio: 1100, litros: null, peso_kg: null }
  { articulo: "PLATO REDONDO N32", medidas: "", material: "Plástico", pintada: false, precio: 1530, litros: null, peso_kg: null }
  { articulo: "PLATO REDONDO N36", medidas: "", material: "Plástico", pintada: false, precio: 2220, litros: null, peso_kg: null }
  { articulo: "PLATO REDONDO N40", medidas: "", material: "Plástico", pintada: false, precio: 3200, litros: null, peso_kg: null }
  { articulo: "PLATO REDONDO N45", medidas: "", material: "Plástico", pintada: false, precio: 3920, litros: null, peso_kg: null }
  { articulo: "MACETA PARIS C/RAYA N18", medidas: "", material: "Plástico", pintada: false, precio: 1720, litros: null, peso_kg: null }
  { articulo: "MACETA PARIS C/RAYA N22", medidas: "", material: "Plástico", pintada: false, precio: 3690, litros: null, peso_kg: null }
  { articulo: "MACETA PARIS C/RAYA N27", medidas: "", material: "Plástico", pintada: false, precio: 6010, litros: null, peso_kg: null }
  { articulo: "PLATO REDONDO N12", medidas: "", material: "Plástico", pintada: false, precio: 240, litros: null, peso_kg: null }
  { articulo: "PLATO REDONDO N14", medidas: "", material: "Plástico", pintada: false, precio: 250, litros: null, peso_kg: null }
  { articulo: "JARDINERA Nº1 N35 ROCIO", medidas: "", material: "Plástico", pintada: false, precio: 1860, litros: null, peso_kg: null }
  { articulo: "JARDINERA Nº2 N45 ROCIO", medidas: "", material: "Plástico", pintada: false, precio: 2600, litros: null, peso_kg: null }
  { articulo: "JARDINERA Nº3 N55 ROCIO", medidas: "", material: "Plástico", pintada: false, precio: 4340, litros: null, peso_kg: null }
  { articulo: "JARDINERA Nº4   N65 ROCIO", medidas: "", material: "Plástico", pintada: false, precio: 7330, litros: null, peso_kg: null }
  { articulo: "PLATO P/ JARDINERA N35 COLOR T.A", medidas: "", material: "Plástico", pintada: false, precio: 1160, litros: null, peso_kg: null }
  { articulo: "PLATO P/JARDINERA N45 COLOR T.A", medidas: "", material: "Plástico", pintada: false, precio: 1670, litros: null, peso_kg: null }
  { articulo: "PLATO P/JARDINERA N55 COLOR T.A", medidas: "", material: "Plástico", pintada: false, precio: 2250, litros: null, peso_kg: null }
  { articulo: "PLATO P/JARDINERA N60 COLOR T.A", medidas: "", material: "Plástico", pintada: false, precio: 3280, litros: null, peso_kg: null }
  { articulo: "PLATO P/JARDINERA N80 COLOR T.A", medidas: "", material: "Plástico", pintada: false, precio: 5430, litros: null, peso_kg: null }
  { articulo: "PREMIUM BALCONERA PROMO 2+1 DE REGALO", medidas: "", material: "Plástico", pintada: false, precio: 9600, litros: null, peso_kg: null }
  { articulo: "BONSAI OVAL Nº20", medidas: "", material: "Plástico", pintada: false, precio: 2130, litros: null, peso_kg: null }
  { articulo: "BONSAI OVAL Nº30", medidas: "", material: "Plástico", pintada: false, precio: 3980, litros: null, peso_kg: null }
  { articulo: "BONSAI RECTAN Nº15", medidas: "", material: "Plástico", pintada: false, precio: 1750, litros: null, peso_kg: null }
  { articulo: "BONSAI RECTANGULAR Nº25", medidas: "", material: "Plástico", pintada: false, precio: 3690, litros: null, peso_kg: null }
  { articulo: "BONSAI REDONDO NRO.10", medidas: "", material: "Plástico", pintada: false, precio: 640, litros: null, peso_kg: null }
  { articulo: "BONSAI REDONDO NRO.17", medidas: "", material: "Plástico", pintada: false, precio: 1690, litros: null, peso_kg: null }
  { articulo: "BONSAI REDONDO NRO.21", medidas: "", material: "Plástico", pintada: false, precio: 2600, litros: null, peso_kg: null }
  { articulo: "BONSAI REDONDO NRO.25", medidas: "", material: "Plástico", pintada: false, precio: 3330, litros: null, peso_kg: null }
  { articulo: "MAC.ROCIO  Nº11", medidas: "", material: "Plástico", pintada: false, precio: 260, litros: null, peso_kg: null }
  { articulo: "MAC.ROCIO Nº12", medidas: "", material: "Plástico", pintada: false, precio: 340, litros: null, peso_kg: null }
  { articulo: "MAC.ROCIO  Nº13", medidas: "", material: "Plástico", pintada: false, precio: 420, litros: null, peso_kg: null }
  { articulo: "MAC.ROCIO Nº14", medidas: "", material: "Plástico", pintada: false, precio: 430, litros: null, peso_kg: null }
  { articulo: "MAC.ROCIO Nº15", medidas: "", material: "Plástico", pintada: false, precio: 500, litros: null, peso_kg: null }
  { articulo: "MAC.ROCIO  Nº19", medidas: "", material: "Plástico", pintada: false, precio: 970, litros: null, peso_kg: null }
  { articulo: "MAC.ROCIO Nº24", medidas: "", material: "Plástico", pintada: false, precio: 1540, litros: null, peso_kg: null }
  { articulo: "MAC.ROCIO Nº30", medidas: "", material: "Plástico", pintada: false, precio: 3490, litros: null, peso_kg: null }
  { articulo: "MAC.ROCIO Nº35", medidas: "", material: "Plástico", pintada: false, precio: 5090, litros: null, peso_kg: null }
  { articulo: "REGADERA X 2 LTS NOVEDAD", medidas: "", material: "Plástico", pintada: false, precio: 3590, litros: null, peso_kg: null }
  { articulo: "MAC.ROCIO Nº21", medidas: "", material: "Plástico", pintada: false, precio: 1160, litros: null, peso_kg: null }
  { articulo: "REDONDA PREMIUN 08", medidas: "", material: "Plástico", pintada: false, precio: 560, litros: null, peso_kg: null }
  { articulo: "REDONDA PREMIUN 12", medidas: "", material: "Plástico", pintada: false, precio: 1070, litros: null, peso_kg: null }
  { articulo: "REDONDA PREMIUN 16", medidas: "", material: "Plástico", pintada: false, precio: 1730, litros: null, peso_kg: null }
  { articulo: "REDONDA PREMIUN 18", medidas: "", material: "Plástico", pintada: false, precio: 2210, litros: null, peso_kg: null }
  { articulo: "REDONDA PREMIUN 22", medidas: "", material: "Plástico", pintada: false, precio: 4000, litros: null, peso_kg: null }
  { articulo: "REDONDA PREMIUN 27", medidas: "", material: "Plástico", pintada: false, precio: 7570, litros: null, peso_kg: null }
  { articulo: "REGADERA X 5 LTS  NOVEDAD", medidas: "", material: "Plástico", pintada: false, precio: 7610, litros: null, peso_kg: null }
  { articulo: "MAC.ROCIO N6", medidas: "", material: "Plástico", pintada: false, precio: 100, litros: null, peso_kg: null }
  { articulo: "MAC.ROCIO N8", medidas: "", material: "Plástico", pintada: false, precio: 150, litros: null, peso_kg: null }
  { articulo: "PREMIUM CLASICA 12", medidas: "", material: "Plástico", pintada: false, precio: 650, litros: null, peso_kg: null }
  { articulo: "PREMIUM CLASICA 16", medidas: "", material: "Plástico", pintada: false, precio: 1200, litros: null, peso_kg: null }
  { articulo: "PREMIUM CLASICA 20", medidas: "", material: "Plástico", pintada: false, precio: 2260, litros: null, peso_kg: null }
  { articulo: "PREMIUM CLASICA 24", medidas: "", material: "Plástico", pintada: false, precio: 3880, litros: null, peso_kg: null }
  { articulo: "PREMIUM CONICA 8", medidas: "", material: "Plástico", pintada: false, precio: 430, litros: null, peso_kg: null }
  { articulo: "PREMIUM CONICA 12", medidas: "", material: "Plástico", pintada: false, precio: 800, litros: null, peso_kg: null }
  { articulo: "PREMIUM CONICA 16", medidas: "", material: "Plástico", pintada: false, precio: 1520, litros: null, peso_kg: null }
  { articulo: "PREMIUM CONICA 20", medidas: "", material: "Plástico", pintada: false, precio: 2420, litros: null, peso_kg: null }
  { articulo: "REDONDA PREMIUM 35", medidas: "", material: "Plástico", pintada: false, precio: 14060, litros: null, peso_kg: null }
  // ROTOMOLDEADO — RAYUM Andina
  { articulo: "ANDINA N27 RUSTICA", medidas: "", material: "Rotomoldeado", pintada: true, precio: 20800, litros: null, peso_kg: null }
  { articulo: "ANDINA N80 LISO", medidas: "", material: "Rotomoldeado", pintada: true, precio: 212950, litros: null, peso_kg: null }
  { articulo: "ANDINA N40 RUSTICA", medidas: "", material: "Rotomoldeado", pintada: true, precio: 45360, litros: null, peso_kg: null }
  { articulo: "ANDINA N50 RUSTICA", medidas: "", material: "Rotomoldeado", pintada: true, precio: 77430, litros: null, peso_kg: null }
  { articulo: "ANDINA N65 RUSTICA", medidas: "", material: "Rotomoldeado", pintada: true, precio: 153470, litros: null, peso_kg: null }
  { articulo: "ANDINA N80 RUSTICA", medidas: "", material: "Rotomoldeado", pintada: true, precio: 244900, litros: null, peso_kg: null }
  { articulo: "ANDINA N40 LISO", medidas: "", material: "Rotomoldeado", pintada: true, precio: 39450, litros: null, peso_kg: null }
  { articulo: "ANDINA N50 LISO", medidas: "", material: "Rotomoldeado", pintada: true, precio: 67330, litros: null, peso_kg: null }
  { articulo: "ANDINA N65 LISO", medidas: "", material: "Rotomoldeado", pintada: true, precio: 133450, litros: null, peso_kg: null }
];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const d = JSON.parse(ev.target.result);
        if (!d.presupuesto) { alert("El archivo no es un borrador válido de LyL Macetas."); return; }
        setPresupuesto(d.presupuesto || []);
        setCliente(d.cliente || "");
        setProyecto(d.proyecto || "");
        setEnvio(d.envio || "");
        setDescuento(d.descuento || "");
        setNumPresup(d.numPresup || "");
        setMostrarAnticipo(d.mostrarAnticipo ?? true);
        saveBorrador(d);
        setVista("presupuesto");
      } catch { alert("Error al leer el archivo."); }
    };
    reader.readAsText(file);
    e.target.value = "";
  };

  const datosExport = () => ({ numero: numPresup || "—", cliente, proyecto, items: presupuesto, subtotal, descPct, montoDesc, envioNum, totalFinal, anticipo80, saldo20, mostrarAnticipo, fecha: new Date().toLocaleDateString("es-AR") });

  const generarTexto = () => {
    const d = datosExport();
    const cab = [d.numero !== "—" && `Nº ${d.numero}`, d.cliente && `Cliente: ${d.cliente}`, d.proyecto && `Proyecto: ${d.proyecto}`].filter(Boolean).join("  |  ");
    const lineas = d.items.map((i) => `  • ${i.articulo}${i.medidas ? " " + i.medidas : ""} — ${i.cantidad} u. × ${formatPrecio(i.precio)} = ${formatPrecio(i.precio * i.cantidad)}${i.nota ? "\n    _" + i.nota + "_" : ""}`);
    let t = `🌿 *Presupuesto LyL Macetas*\n${cab}\n\n${lineas.join("\n")}`;
    t += `\n\n*Subtotal: ${formatPrecio(d.subtotal)}*`;
    if (d.descPct > 0) t += `\n🏷 Descuento ${d.descPct}%: -${formatPrecio(d.montoDesc)}`;
    if (d.envioNum > 0) t += `\n🚚 Envío: ${formatPrecio(d.envioNum)}`;
    t += `\n\n*TOTAL: ${formatPrecio(d.totalFinal)}*`;
    if (d.mostrarAnticipo) t += `\n\n_Anticipo 80%: ${formatPrecio(d.anticipo80)}_\n_Saldo: ${formatPrecio(d.saldo20)}_`;
    t += `\n\n_Pagos en efectivo o transferencia. No incluye IVA (Factura C)._`;
    return t;
  };

  const generarJson = () => {
    const d = datosExport();
    return JSON.stringify({ numero: d.numero, cliente: d.cliente, proyecto: d.proyecto, fecha: d.fecha, items: d.items.map((i) => ({ articulo: i.articulo, medidas: i.medidas || "", material: i.material, cantidad: i.cantidad, precio: i.precio, total: i.precio * i.cantidad, nota: i.nota || "" })), subtotal: d.subtotal, descuento_pct: d.descPct, descuento_monto: d.montoDesc, envio: d.envioNum, total: d.totalFinal, anticipo_80: d.mostrarAnticipo ? d.anticipo80 : null, saldo: d.mostrarAnticipo ? d.saldo20 : null }, null, 2);
  };

  const generarTextoGrupo = (g) => `🌿 *${g.articulo}* — ${g.material}${g.material === "Barro" ? "" : g.pintada ? " (pintada)" : " (sin pintar)"}\n${g.variantes.map((v) => `  • ${v.medidas} → ${formatPrecio(v.precio)}`).join("\n")}`;

  const matColors = { Barro: "#b5651d", "Barro Artesanal": "#8B4513", Fibrocemento: "#607d8b", Rotomoldeado: "#2e7d32", "Fibra de Vidrio": "#1565c0", Cerámica: "#ad1457", Plástico: "#6a1f8a", Botánica: "#388e3c", Sustrato: "#795548", Combo: "#c8860a", Otros: "#7c5c20", Manual: "#7c5c20" };

  const GRN = "#2563a8"; const GRN_OSC = "#1a2a4a"; const GRN_MED = "#1e3f6e"; const GRN_LT = "#7eb8e8"; const GRN_XL = "#dbeafe"; const GRN_MNT = "#5ba3d9";

  const S = {
    input: { background: "#111", border: "1px solid #333", borderRadius: 7, color: "#f0ede8", padding: "9px 12px", fontSize: 13, outline: "none", width: "100%", boxSizing: "border-box" },
    btn: (a) => ({ padding: "5px 11px", borderRadius: 20, border: a ? `2px solid ${GRN}` : "1px solid #333", background: a ? GRN_OSC : "#1c1c1c", color: a ? GRN_LT : "#666", cursor: "pointer", fontSize: 11, fontWeight: a ? "bold" : "normal" }),
    card: { background: "#1e1e1e", border: "1px solid #2a2a2a", borderRadius: 10, marginBottom: 8, overflow: "hidden" },
    pill: (c) => ({ display: "inline-block", padding: "1px 7px", borderRadius: 10, background: c + "22", color: c, fontSize: 10, border: `1px solid ${c}44` }),
  };

  const hasBorrador = presupuesto.length > 0 || cliente || proyecto;

  return (
    <div style={{ minHeight: "100vh", background: "#181818", fontFamily: "'Georgia', serif", color: "#f0ede8" }}>

      {/* HEADER */}
      <div style={{ background: `linear-gradient(90deg, ${GRN_OSC}, ${GRN_MED})`, padding: "18px 16px 12px", borderBottom: `2px solid ${GRN}`, textAlign: "center" }}>
        <div style={{ fontSize: 10, letterSpacing: 4, color: GRN_LT, textTransform: "uppercase" }}>LyL Macetas</div>
        <div style={{ fontSize: 20, fontWeight: "bold", color: GRN_XL, marginTop: 2 }}>Precios Mayorista</div>
        <div style={{ fontSize: 10, color: GRN_MNT, marginTop: 1 }}>Lista mayorista · 19-mar-2026</div>
      </div>

      {/* TABS */}
      <div style={{ display: "flex", borderBottom: "1px solid #222", background: "#141414", position: "relative" }}>
        {[["🔍 Buscar", "buscar"], [`🧾 Presupuesto${presupuesto.length ? ` (${presupuesto.length})` : ""}`, "presupuesto"]].map(([label, k]) => (
          <button key={k} onClick={() => setVista(k)} style={{ flex: 1, padding: "11px 6px", border: "none", background: "none", borderBottom: vista === k ? `2px solid ${GRN}` : "2px solid transparent", color: vista === k ? GRN_LT : "#555", cursor: "pointer", fontSize: 13, fontWeight: vista === k ? "bold" : "normal" }}>{label}</button>
        ))}
        {hasBorrador && <div style={{ position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)", fontSize: 9, color: GRN_MNT, background: GRN_OSC, padding: "2px 7px", borderRadius: 8, border: `1px solid ${GRN}` }}>💾 guardado</div>}
      </div>

      {/* ══ BÚSQUEDA ══ */}
      {vista === "buscar" && (
        <div style={{ maxWidth: 680, margin: "0 auto", padding: "14px 12px 40px" }}>
          <input placeholder="Buscar modelo..." value={busqueda} onChange={(e) => setBusqueda(e.target.value)}
            style={{ ...S.input, border: `1px solid ${GRN}`, marginBottom: 10, fontSize: 14, padding: "11px 14px" }} />
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 8 }}>
            {MATERIALES.map((m) => <button key={m} onClick={() => setMaterial(m)} style={S.btn(material === m)}>{m}</button>)}
          </div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 10 }}>
            {["Todos","Pintada","Sin pintar"].map((p) => <button key={p} onClick={() => setPintada(p)} style={S.btn(pintada === p)}>{p}</button>)}
          </div>
          <div style={{ fontSize: 11, color: "#444", marginBottom: 10 }}>{filtrados.length} variantes · {grupos.length} modelos</div>

          {textoVisible && !["presup","json"].includes(textoVisible.idx) && (
            <div style={{ background: "#111", border: `1px solid ${GRN}`, borderRadius: 8, padding: "10px 12px", marginBottom: 12 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                <span style={{ fontSize: 11, color: GRN_MNT }}>Tocá → Seleccionar todo → Copiar</span>
                <button onClick={() => setTextoVisible(null)} style={{ background: "none", border: "none", color: "#555", cursor: "pointer", fontSize: 18 }}>×</button>
              </div>
              <textarea readOnly value={textoVisible.texto} onFocus={(e) => e.target.select()}
                rows={Math.min(textoVisible.texto.split("\n").length + 1, 10)}
                style={{ ...S.input, fontFamily: "monospace", fontSize: 12, lineHeight: 1.5, resize: "vertical" }} />
            </div>
          )}

          {grupos.length === 0 ? <div style={{ textAlign: "center", color: "#555", marginTop: 40 }}>Sin resultados.</div>
            : grupos.map((grupo, idx) => {
              const dc = matColors[grupo.material] || "#888";
              const ps = grupo.material === "Barro" ? "" : grupo.pintada ? "Pintada" : "Sin pintar";
              return (
                <div key={idx} style={S.card}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "9px 12px 7px", borderBottom: "1px solid #252525" }}>
                    <div>
                      <span style={{ fontWeight: "bold", fontSize: 14, color: "#e8e3dc" }}>{grupo.articulo}</span>
                      <div style={{ marginTop: 2, display: "flex", gap: 5, alignItems: "center" }}>
                        <span style={{ display: "inline-block", width: 6, height: 6, borderRadius: "50%", background: dc }} />
                        <span style={{ fontSize: 10, color: "#666" }}>{grupo.material}{ps ? ` · ${ps}` : ""}</span>
                      </div>
                    </div>
                    <button onClick={() => setTextoVisible(textoVisible?.idx === idx ? null : { idx, texto: generarTextoGrupo(grupo) })}
                      style={{ padding: "3px 9px", borderRadius: 6, border: "1px solid #2a2a2a", background: "transparent", color: "#555", cursor: "pointer", fontSize: 10 }}>
                      {textoVisible?.idx === idx ? "✓ ↑" : "texto"}
                    </button>
                  </div>
                  {grupo.variantes.map((v, vi) => (
                    <div key={vi} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "7px 12px", borderBottom: vi < grupo.variantes.length - 1 ? "1px solid #222" : "none" }}>
                      <div>
                        <span style={{ fontSize: 12, color: "#888" }}>{v.medidas}</span>
                        {(v.litros || v.peso_kg) && (
                          <div style={{ display: "flex", gap: 8, marginTop: 2 }}>
                            {v.litros && <span style={{ fontSize: 10, color: "#6a8fa8", background: "#0d1a2a", padding: "1px 6px", borderRadius: 8 }}>🪣 {v.litros}L</span>}
                            {v.peso_kg && <span style={{ fontSize: 10, color: "#6a8fa8", background: "#0d1a2a", padding: "1px 6px", borderRadius: 8 }}>⚖ {v.peso_kg}kg</span>}
                          </div>
                        )}
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <span style={{ fontSize: 13, color: GRN_XL, fontWeight: "bold" }}>{formatPrecio(v.precio)}</span>
                        <button onClick={() => agregar({ articulo: grupo.articulo, medidas: v.medidas, material: grupo.material, pintada: grupo.pintada, precio: v.precio })}
                          style={{ width: 26, height: 26, borderRadius: "50%", border: `1px solid ${GRN}`, background: GRN_OSC, color: GRN_LT, cursor: "pointer", fontSize: 17, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>+</button>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
        </div>
      )}

      {/* ══ PRESUPUESTO ══ */}
      {vista === "presupuesto" && (
        <div style={{ maxWidth: 680, margin: "0 auto", padding: "14px 12px 60px" }}>

          {/* Datos del pedido */}
          <div style={{ ...S.card, padding: "12px 14px", marginBottom: 10 }}>
            <div style={{ fontSize: 10, color: GRN_MNT, marginBottom: 8, fontWeight: "bold", letterSpacing: 1, textTransform: "uppercase" }}>Datos del pedido</div>

            {/* Número de presupuesto */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
              <div style={{ flex: 1, background: "#111", border: `1px solid ${numPresup ? GRN : "#252525"}`, borderRadius: 7, padding: "8px 12px", fontSize: 13, color: numPresup ? GRN_LT : "#3a3a3a", fontWeight: numPresup ? "bold" : "normal", letterSpacing: numPresup ? 2 : 0 }}>
                {numPresup || "Sin número asignado"}
              </div>
              {!numPresup && (
                <button onClick={asignarNum} style={{ padding: "8px 14px", borderRadius: 7, border: `1px solid ${GRN}`, background: GRN_OSC, color: GRN_LT, cursor: "pointer", fontSize: 12, fontWeight: "bold", whiteSpace: "nowrap" }}>
                  Asignar Nº
                </button>
              )}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <input placeholder="Cliente" value={cliente} onChange={(e) => setC(e.target.value)} style={S.input} />
              <input placeholder="Proyecto / dirección" value={proyecto} onChange={(e) => setPr(e.target.value)} style={S.input} />
            </div>
          </div>

          {/* Items */}
          {presupuesto.length === 0 ? (
            <div style={{ textAlign: "center", color: "#555", marginTop: 40, marginBottom: 30 }}>
              <div style={{ fontSize: 36, marginBottom: 10 }}>🌿</div>
              <div>El presupuesto está vacío.</div>
              <div style={{ fontSize: 11, marginTop: 5, color: "#444" }}>Buscá productos y tocá <strong style={{ color: GRN_MNT }}>+</strong>, o agregá uno manual abajo.</div>
            </div>
          ) : presupuesto.map((item) => (
            <div key={item.key} style={S.card}>
              <div style={{ padding: "10px 12px 8px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: "bold", fontSize: 13, color: "#e8e3dc" }}>{item.articulo}</div>
                    {item.medidas && <div style={{ fontSize: 11, color: "#555", marginTop: 1 }}>{item.medidas}</div>}
                    <div style={{ marginTop: 4, display: "flex", gap: 6, alignItems: "center" }}>
                      <span style={S.pill(matColors[item.material] || "#888")}>{item.material}</span>
                      <span style={{ fontSize: 11, color: GRN_MNT }}>{formatPrecio(item.precio)} c/u</span>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 6 }}>
                    <button onClick={() => abrirModalEditar(item)} style={{ background: "none", border: "1px solid #333", borderRadius: 5, color: "#666", cursor: "pointer", fontSize: 12, padding: "2px 8px" }}>✏️</button>
                    <button onClick={() => quitar(item.key)} style={{ background: "none", border: "none", color: "#444", cursor: "pointer", fontSize: 20, lineHeight: 1 }}>×</button>
                  </div>
                </div>

                {/* Nota inline */}
                {notaAbierta === item.key ? (
                  <div style={{ marginTop: 8, display: "flex", gap: 6 }}>
                    <input autoFocus value={notaTemp} onChange={(e) => setNotaTemp(e.target.value)}
                      placeholder="Ej: negro mate, sin agujero..."
                      style={{ ...S.input, fontSize: 12, padding: "6px 10px", flex: 1 }}
                      onKeyDown={(e) => { if (e.key === "Enter") guardarNota(item.key); if (e.key === "Escape") setNotaAbierta(null); }} />
                    <button onClick={() => guardarNota(item.key)} style={{ padding: "6px 12px", borderRadius: 7, border: "none", background: GRN, color: "#fff", cursor: "pointer", fontSize: 12 }}>OK</button>
                    <button onClick={() => setNotaAbierta(null)} style={{ padding: "6px 10px", borderRadius: 7, border: "1px solid #333", background: "transparent", color: "#555", cursor: "pointer", fontSize: 12 }}>✕</button>
                  </div>
                ) : (
                  <div style={{ marginTop: 6, display: "flex", alignItems: "center", gap: 8 }}>
                    {item.nota ? (
                      <div onClick={() => { setNotaAbierta(item.key); setNotaTemp(item.nota); }}
                        style={{ fontSize: 11, color: "#a0856c", fontStyle: "italic", cursor: "pointer", flex: 1, background: "#1a1510", borderRadius: 5, padding: "3px 8px", border: "1px solid #2a2016" }}>
                        📝 {item.nota}
                      </div>
                    ) : (
                      <button onClick={() => { setNotaAbierta(item.key); setNotaTemp(""); }}
                        style={{ fontSize: 10, color: "#3a3a3a", background: "transparent", border: "none", cursor: "pointer", padding: 0 }}>
                        + agregar nota
                      </button>
                    )}
                  </div>
                )}

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 10 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <button onClick={() => cambiarCantidad(item.key, -1)} style={{ width: 28, height: 28, borderRadius: 6, border: "1px solid #333", background: "#252525", color: "#ccc", cursor: "pointer", fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>−</button>
                    <span style={{ fontSize: 15, color: "#e8e3dc", minWidth: 22, textAlign: "center" }}>{item.cantidad}</span>
                    <button onClick={() => cambiarCantidad(item.key, 1)} style={{ width: 28, height: 28, borderRadius: 6, border: `1px solid ${GRN}`, background: GRN_OSC, color: GRN_LT, cursor: "pointer", fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>+</button>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    {descPct > 0 && (
                      <div onClick={() => toggleSinDescuento(item.key)}
                        title={item.sinDescuento ? "Sin descuento (tocá para activar)" : "Con descuento (tocá para excluir)"}
                        style={{ display: "flex", alignItems: "center", gap: 5, cursor: "pointer", opacity: item.sinDescuento ? 0.45 : 1 }}>
                        <span style={{ fontSize: 10, color: item.sinDescuento ? "#555" : "#e07b39", textDecoration: item.sinDescuento ? "line-through" : "none" }}>
                          {item.sinDescuento ? "sin desc." : `−${descPct}%`}
                        </span>
                        <div style={{ width: 28, height: 16, borderRadius: 8, background: item.sinDescuento ? "#2a2a2a" : "#c0392b33", border: `1px solid ${item.sinDescuento ? "#333" : "#c0392b55"}`, position: "relative", transition: "background 0.2s" }}>
                          <div style={{ position: "absolute", top: 2, left: item.sinDescuento ? 2 : 12, width: 10, height: 10, borderRadius: "50%", background: item.sinDescuento ? "#444" : "#e07b39", transition: "left 0.2s" }} />
                        </div>
                      </div>
                    )}
                    <span style={{ fontSize: 14, fontWeight: "bold", color: GRN_XL }}>{formatPrecio(item.precio * item.cantidad)}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <button onClick={abrirModalNuevo} style={{ width: "100%", padding: "10px", borderRadius: 10, border: `1px dashed ${GRN}`, background: "transparent", color: GRN_MNT, cursor: "pointer", fontSize: 13, marginBottom: 14 }}>
            + Agregar producto manual
          </button>

          {/* Ajustes */}
          <div style={{ ...S.card, padding: "12px 14px", marginBottom: 10 }}>
            <div style={{ fontSize: 10, color: GRN_MNT, marginBottom: 8, fontWeight: "bold", letterSpacing: 1, textTransform: "uppercase" }}>Ajustes</div>
            <div style={{ display: "flex", gap: 10 }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 11, color: "#666", marginBottom: 4 }}>🚚 Envío ($)</div>
                <input type="number" placeholder="0" value={envio} onChange={(e) => setEn(e.target.value)} style={{ ...S.input, textAlign: "right" }} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 11, color: "#666", marginBottom: 4 }}>🏷 Descuento (%)</div>
                <input type="number" placeholder="0" min="0" max="100" value={descuento} onChange={(e) => setDe(e.target.value)} style={{ ...S.input, textAlign: "right" }} />
              </div>
            </div>
          </div>

          {/* Resumen */}
          {presupuesto.length > 0 && (
            <div style={{ ...S.card, padding: "12px 14px", background: "#1a2a1e", border: "1px solid #2d5a3a", marginBottom: 14 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "#888" }}><span>Subtotal</span><span>{formatPrecio(subtotal)}</span></div>
                {descPct > 0 && <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "#e07b39" }}><span>Descuento {descPct}%</span><span>- {formatPrecio(montoDesc)}</span></div>}
                {envioNum > 0 && <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "#888" }}><span>Envío</span><span>{formatPrecio(envioNum)}</span></div>}
                <div style={{ height: 1, background: "#2d5a3a", margin: "2px 0" }} />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 17, fontWeight: "bold", color: GRN_XL }}><span>TOTAL</span><span>{formatPrecio(totalFinal)}</span></div>
                {mostrarAnticipo && (<>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: GRN_MNT, marginTop: 2 }}><span>Anticipo 80%</span><span>{formatPrecio(anticipo80)}</span></div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#555" }}><span>Saldo</span><span>{formatPrecio(saldo20)}</span></div>
                </>)}
              </div>
            </div>
          )}

          {/* Opciones de exportación */}
          {presupuesto.length > 0 && (
            <div style={{ ...S.card, padding: "12px 14px", marginBottom: 14 }}>
              <div style={{ fontSize: 10, color: GRN_MNT, marginBottom: 10, fontWeight: "bold", letterSpacing: 1, textTransform: "uppercase" }}>Opciones de envío</div>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                <div>
                  <div style={{ fontSize: 13, color: "#e8e3dc" }}>Mostrar anticipo y saldo</div>
                  <div style={{ fontSize: 11, color: "#555", marginTop: 1 }}>Incluye anticipo 80% y saldo restante</div>
                </div>
                <div onClick={() => setMA(!mostrarAnticipo)} style={{ width: 44, height: 24, borderRadius: 12, background: mostrarAnticipo ? GRN : "#333", cursor: "pointer", position: "relative", transition: "background 0.2s", flexShrink: 0 }}>
                  <div style={{ position: "absolute", top: 3, left: mostrarAnticipo ? 23 : 3, width: 18, height: 18, borderRadius: "50%", background: "#fff", transition: "left 0.2s" }} />
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <button onClick={() => window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(generarTexto())}`, "_blank")}
                  style={{ width: "100%", padding: "13px", borderRadius: 10, border: "none", background: "#25D366", color: "#fff", cursor: "pointer", fontSize: 14, fontWeight: "bold" }}>
                  📲 Enviar por WhatsApp
                </button>
                <button onClick={() => setTextoVisible(textoVisible?.idx === "presup" ? null : { idx: "presup", texto: generarTexto() })}
                  style={{ width: "100%", padding: "10px", borderRadius: 10, border: "1px solid #444", background: "transparent", color: "#888", cursor: "pointer", fontSize: 12 }}>
                  📋 Ver texto para copiar manualmente
                </button>
                {textoVisible?.idx === "presup" && (
                  <div style={{ background: "#111", border: `1px solid ${GRN}`, borderRadius: 8, padding: "10px 12px" }}>
                    <div style={{ fontSize: 11, color: GRN_MNT, marginBottom: 5 }}>Tocá → Seleccionar todo → Copiar</div>
                    <textarea readOnly value={textoVisible.texto} onFocus={(e) => e.target.select()}
                      rows={Math.min(textoVisible.texto.split("\n").length + 1, 16)}
                      style={{ ...S.input, fontFamily: "monospace", fontSize: 12, lineHeight: 1.5, resize: "vertical" }} />
                  </div>
                )}
                <button onClick={() => setTextoVisible(textoVisible?.idx === "json" ? null : { idx: "json", texto: generarJson() })}
                  style={{ width: "100%", padding: "11px", borderRadius: 10, border: `1px solid ${GRN}`, background: "transparent", color: GRN_MNT, cursor: "pointer", fontSize: 13, fontWeight: "bold" }}>
                  📄 Generar PDF / Excel / Remito → Pegar a Claude
                </button>
                {textoVisible?.idx === "json" && (
                  <div style={{ background: "#0d1f14", border: `1px solid ${GRN}`, borderRadius: 8, padding: "12px 14px" }}>
                    <div style={{ fontSize: 12, color: GRN_MNT, marginBottom: 6, fontWeight: "bold" }}>📋 Copiá esto y pegalo en el chat:</div>
                    <div style={{ fontSize: 11, color: "#555", marginBottom: 8, lineHeight: 1.5 }}>
                      Escribí: <span style={{ color: GRN_LT, fontStyle: "italic" }}>"PDF"</span>, <span style={{ color: GRN_LT, fontStyle: "italic" }}>"Excel"</span> o <span style={{ color: GRN_LT, fontStyle: "italic" }}>"Remito"</span> y pegá el JSON abajo.
                    </div>
                    <textarea readOnly value={textoVisible.texto} onFocus={(e) => e.target.select()}
                      rows={6} style={{ ...S.input, fontFamily: "monospace", fontSize: 11, lineHeight: 1.4, resize: "vertical" }} />
                  </div>
                )}
                <button onClick={() => setConfirmarVaciar(true)} style={{ width: "100%", padding: "9px", borderRadius: 10, border: "1px solid #2a2a2a", background: "transparent", color: "#3a3a3a", cursor: "pointer", fontSize: 11 }}>
                  🗑 Vaciar presupuesto
                </button>

                {/* Exportar / Importar borrador */}
                <div style={{ borderTop: "1px solid #222", paddingTop: 10, marginTop: 2, display: "flex", gap: 8 }}>
                  <button onClick={exportarBorrador}
                    style={{ flex: 1, padding: "9px", borderRadius: 8, border: `1px solid ${GRN}`, background: "transparent", color: GRN_MNT, cursor: "pointer", fontSize: 12, fontWeight: "bold" }}>
                    💾 Guardar borrador
                  </button>
                  <label style={{ flex: 1, padding: "9px", borderRadius: 8, border: "1px solid #444", background: "transparent", color: "#888", cursor: "pointer", fontSize: 12, textAlign: "center", display: "block" }}>
                    📂 Cargar borrador
                    <input type="file" accept=".json" onChange={importarBorrador} style={{ display: "none" }} />
                  </label>
                </div>
                <div style={{ fontSize: 10, color: "#333", textAlign: "center", marginTop: 2 }}>
                  Guardá el presupuesto como archivo · Cargalo desde cualquier dispositivo
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ══ MODAL ══ */}
      {modalAbierto && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100, padding: 16 }}>
          <div style={{ background: "#1e1e1e", border: `1px solid ${GRN}`, borderRadius: 14, padding: "20px 18px", width: "100%", maxWidth: 400 }}>
            <div style={{ fontWeight: "bold", fontSize: 15, color: GRN_XL, marginBottom: 14 }}>
              {editandoKey ? "✏️ Editar producto" : "➕ Producto manual"}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div>
                <div style={{ fontSize: 11, color: "#666", marginBottom: 4 }}>Descripción *</div>
                <input placeholder="Ej: Misionera 90 negra fibrocemento" value={formManual.articulo}
                  onChange={(e) => setFormManual((f) => ({ ...f, articulo: e.target.value }))} style={S.input} />
              </div>
              <div>
                <div style={{ fontSize: 11, color: "#666", marginBottom: 6 }}>Material *</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {MATERIALES_MANUAL.map((m) => (
                    <button key={m} onClick={() => setFormManual((f) => ({ ...f, material: m }))}
                      style={{ padding: "5px 11px", borderRadius: 20, border: formManual.material === m ? `2px solid ${GRN}` : "1px solid #333", background: formManual.material === m ? GRN_OSC : "#161616", color: formManual.material === m ? GRN_LT : "#666", cursor: "pointer", fontSize: 11, fontWeight: formManual.material === m ? "bold" : "normal" }}>
                      {m}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <div style={{ fontSize: 11, color: "#666", marginBottom: 4 }}>Medidas (opcional)</div>
                <input placeholder="Ej: 90h x 43Ø x 35b" value={formManual.medidas}
                  onChange={(e) => setFormManual((f) => ({ ...f, medidas: e.target.value }))} style={S.input} />
              </div>
              <div>
                <div style={{ fontSize: 11, color: "#666", marginBottom: 4 }}>Precio unitario *</div>
                <input type="number" placeholder="0" value={formManual.precio}
                  onChange={(e) => setFormManual((f) => ({ ...f, precio: e.target.value }))} style={{ ...S.input, textAlign: "right" }} />
              </div>
              <div>
                <div style={{ fontSize: 11, color: "#666", marginBottom: 4 }}>Nota / detalle (opcional)</div>
                <input placeholder="Ej: color negro mate, con agujero drenaje" value={formManual.nota}
                  onChange={(e) => setFormManual((f) => ({ ...f, nota: e.target.value }))} style={S.input} />
              </div>
            </div>
            <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
              <button onClick={() => setModalAbierto(false)}
                style={{ flex: 1, padding: "10px", borderRadius: 8, border: "1px solid #333", background: "transparent", color: "#666", cursor: "pointer", fontSize: 13 }}>Cancelar</button>
              <button onClick={guardarManual}
                style={{ flex: 2, padding: "10px", borderRadius: 8, border: "none", background: GRN, color: "#fff", cursor: "pointer", fontSize: 13, fontWeight: "bold" }}>
                {editandoKey ? "Guardar cambios" : "Agregar al presupuesto"}
              </button>
            </div>
          </div>
        </div>
      )}
      {/* ══ MODAL CONFIRMAR VACIAR ══ */}
      {confirmarVaciar && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 200, padding: 16 }}>
          <div style={{ background: "#1e1e1e", border: "1px solid #c0392b", borderRadius: 14, padding: "24px 20px", width: "100%", maxWidth: 340, textAlign: "center" }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>🗑</div>
            <div style={{ fontWeight: "bold", fontSize: 16, color: "#f0ede8", marginBottom: 8 }}>¿Vaciar el presupuesto?</div>
            <div style={{ fontSize: 13, color: "#666", marginBottom: 20, lineHeight: 1.5 }}>Se van a borrar todos los productos, cliente y datos. Esta acción no se puede deshacer.</div>
            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={() => setConfirmarVaciar(false)}
                style={{ flex: 1, padding: "11px", borderRadius: 8, border: "1px solid #333", background: "transparent", color: "#888", cursor: "pointer", fontSize: 13 }}>
                Cancelar
              </button>
              <button onClick={vaciar}
                style={{ flex: 1, padding: "11px", borderRadius: 8, border: "none", background: "#c0392b", color: "#fff", cursor: "pointer", fontSize: 13, fontWeight: "bold" }}>
                Sí, vaciar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
